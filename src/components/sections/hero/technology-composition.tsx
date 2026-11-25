'use client';

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Bot, Cloud, Code2, ShieldCheck } from 'lucide-react';
import { HERO_CONFIG, type FloatMotion, type Placement, type Slot } from './hero-config';
import { InterfaceCard } from './interface-mockups';
import { tintVar } from './palette';
import styles from './hero.module.css';

const COMP = HERO_CONFIG.composition;
const ROT = COMP.rotation;
const ORBITS = HERO_CONFIG.ambient.orbitDurations;
const CHIP_ICONS = { bot: Bot, cloud: Cloud, shield: ShieldCheck, code: Code2 } as const;

const stageVars = {
    '--stage-w-base': `${COMP.stageWidth.base}%`,
    '--stage-w-md': `${COMP.stageWidth.md}%`,
    '--stage-w-lg': `${COMP.stageWidth.lg}%`,
    '--stage-max': `${COMP.maxStageWidth}px`,
    '--stage-h-desktop': COMP.height.desktop,
    '--stage-h-mobile': COMP.height.mobile,
    '--stage-perspective': COMP.perspective,
    '--tilt-x': COMP.tilt.x,
    '--tilt-y': COMP.tilt.y,
    '--pointer-ease': `${COMP.pointerEase}ms`,
    '--card-delay': `${COMP.entranceDelay}ms`,
    '--card-stagger': `${COMP.entranceStagger}ms`,
    '--card-duration': `${COMP.entranceDuration}ms`,
    '--swap-duration': `${ROT.duration}ms`,
    '--fit-reserve': `${COMP.fitViewport.reserve}px`,
    '--fit-ratio': COMP.fitViewport.ratio,
    '--fit-min': `${COMP.fitViewport.min}px`,
} as CSSProperties;

/** Time from the hero reveal until every card has finished entering (ms). */
const ENTRANCE_TOTAL =
    COMP.entranceDelay +
    (COMP.cards.length + COMP.fixedCards.length + COMP.chips.length) * COMP.entranceStagger +
    COMP.entranceDuration;

/** Where a hidden-on-phones slot parks its card: faded out, behind the centre. */
function parkedMobile(slot: Slot): Placement {
    return { w: 50, x: slot.desktop.x > 0 ? 12 : -12, y: 4, z: -32, ry: 0 };
}

function dimFor(z: number) {
    return Math.min(0.28, Math.max(0, -z * 0.011));
}

/** Placement + motion variables shared by every positioned element. */
function placementVars(desktop: Placement, mobile: Placement | null, parallax: number, float: FloatMotion) {
    const m = mobile ?? desktop;
    return {
        '--sw-d': desktop.w,
        '--sx-d': desktop.x,
        '--sy-d': desktop.y,
        '--sz-d': desktop.z,
        '--sry-d': desktop.ry,
        '--sdim-d': dimFor(desktop.z).toFixed(3),
        '--sw-m': m.w,
        '--sx-m': m.x,
        '--sy-m': m.y,
        '--sz-m': m.z,
        '--sry-m': m.ry,
        '--sdim-m': dimFor(m.z).toFixed(3),
        '--svis-m': 1,
        '--sdepth': parallax,
        '--fx': float.x,
        '--fy': float.y,
        '--frx': float.rx,
        '--fry': float.ry,
        '--fdur': `${float.duration / 2}s`,
        '--fdelay': `${float.delay}s`,
    } as Record<string, string | number>;
}

function slotVars(slot: Slot, float: FloatMotion) {
    const vars = placementVars(slot.desktop, slot.mobile ?? parkedMobile(slot), slot.parallax, float);
    if (!slot.mobile) vars['--svis-m'] = 0;
    return vars;
}

/** Cards in the order they take turns at the centre. */
const ROTATION_ORDER = COMP.cards
    .map((card, index) => ({ index, order: card.order }))
    .sort((a, b) => a.order - b.order)
    .map((c) => c.index);

interface RotationState {
    /** Slot index for each rotating card. */
    slotOf: number[];
    /** Card moving into the centre / out of it during the latest swap. */
    incoming: number | null;
    outgoing: number | null;
    /** Position in ROTATION_ORDER of the next card to bring forward. */
    cursor: number;
}

const INITIAL_ROTATION: RotationState = {
    slotOf: COMP.cards.map((card) => card.startSlot),
    incoming: null,
    outgoing: null,
    cursor: 0,
};

function nextRotation(state: RotationState): RotationState {
    const n = ROTATION_ORDER.length;
    const center = state.slotOf.indexOf(ROT.centerSlot);
    let cursor = state.cursor;
    let next = ROTATION_ORDER[cursor % n];
    if (next === center) {
        cursor += 1;
        next = ROTATION_ORDER[cursor % n];
    }
    const slotOf = [...state.slotOf];
    if (center !== -1 && next !== center) {
        slotOf[center] = slotOf[next];
        slotOf[next] = ROT.centerSlot;
    }
    return { slotOf, incoming: next, outgoing: center, cursor: cursor + 1 };
}

/**
 * Layered 3D interface previews in a shared environment.
 *
 * - Idle motion, entrance, sheen and micro-UI are CSS loops.
 * - Rotation: every `rotation.interval` ms the next card swaps into the centre
 *   slot. Only slot assignments live in React state (one update per swap); the
 *   movement itself is a CSS transition of registered custom properties, so
 *   size, position, depth, angle, dimming and content scale glide together.
 *   The incoming card rises in front early while the outgoing card sinks back
 *   first, so the two never pass through each other.
 * - Pointer: writes --px / --py at most once per frame (no re-renders),
 *   desktop with a fine pointer only.
 * - Rotation pauses while hovered, off-screen, in a hidden tab, before the
 *   hero has revealed, and never runs with reduced motion.
 */
export function TechnologyComposition() {
    const rootRef = useRef<HTMLDivElement>(null);
    const hoverRef = useRef(false);
    const [rotation, setRotation] = useState<RotationState>(INITIAL_ROTATION);

    /* ---------------- pointer parallax ---------------- */
    useEffect(() => {
        if (!COMP.pointerParallax) return;
        const root = rootRef.current;
        // Track the pointer over the whole hero, not only over the cards.
        const area = root?.closest('section') ?? root;
        if (!root || !area) return;

        const desktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
        let enabled = desktop.matches && !reduce.matches;
        let frame = 0;

        const write = (x: number, y: number) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                root.style.setProperty('--px', x.toFixed(3));
                root.style.setProperty('--py', y.toFixed(3));
            });
        };
        const onMove = (event: PointerEvent) => {
            if (!enabled || event.pointerType !== 'mouse') return;
            const rect = area.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
            write(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)));
        };
        const onLeave = () => write(0, 0);
        const onMediaChange = () => {
            enabled = desktop.matches && !reduce.matches;
            if (!enabled) write(0, 0);
        };

        area.addEventListener('pointermove', onMove as EventListener, { passive: true });
        area.addEventListener('pointerleave', onLeave);
        desktop.addEventListener('change', onMediaChange);
        reduce.addEventListener('change', onMediaChange);
        return () => {
            area.removeEventListener('pointermove', onMove as EventListener);
            area.removeEventListener('pointerleave', onLeave);
            desktop.removeEventListener('change', onMediaChange);
            reduce.removeEventListener('change', onMediaChange);
            cancelAnimationFrame(frame);
        };
    }, []);

    /* ---------------- card rotation ---------------- */
    useEffect(() => {
        if (!ROT.enabled || COMP.cards.length < 2) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const section = rootRef.current?.closest('section');
        const gap = Math.max(ROT.interval, ROT.duration + 400);
        // A light 250ms check decides when to swap. The first swap waits until
        // the entrance has fully finished (cards never enter and trade places
        // at the same time); later swaps are spaced by `interval`. Paused time
        // (hover, off-screen, hidden tab) does not count toward the next swap.
        let revealedAt = 0;
        let waited = 0;
        let last = performance.now();

        const id = window.setInterval(() => {
            const now = performance.now();
            const delta = now - last;
            last = now;
            if (section && section.getAttribute('data-revealed') !== 'true') return;
            if (!revealedAt) {
                revealedAt = now;
                waited = gap - (ENTRANCE_TOTAL + ROT.firstSwapDelay);
                return;
            }
            if (document.hidden) return;
            if (ROT.pauseOnHover && hoverRef.current) return;
            if (section?.getAttribute('data-inview') === 'false') return;
            waited += delta;
            if (waited < gap) return;
            waited = 0;
            setRotation(nextRotation);
        }, 250);

        return () => window.clearInterval(id);
    }, []);

    const cardStyles = useMemo(
        () =>
            COMP.cards.map((card, i) => {
                const slot = COMP.slots[rotation.slotOf[i]];
                return {
                    ...slotVars(slot, card.float),
                    '--tint': tintVar(card.tint),
                    '--design-w': card.designWidth,
                    '--aspect': card.aspect,
                    '--order': card.order,
                } as CSSProperties;
            }),
        [rotation.slotOf],
    );

    return (
        <div
            ref={rootRef}
            className={styles.stageOuter}
            style={stageVars}
            data-fit={COMP.fitViewport.enabled ? 'true' : undefined}
            aria-hidden="true"
        >
            <div
                className={styles.stage}
                onPointerEnter={() => (hoverRef.current = true)}
                onPointerLeave={() => (hoverRef.current = false)}
            >
                <div className={styles.stageTilt}>
                    {/* Orbit rings far behind the cards */}
                    {ORBITS.map((duration, i) => (
                        <span
                            key={duration}
                            className={styles.orbit}
                            style={
                                {
                                    '--osize': `${110 + i * 34}cqw`,
                                    '--odur': `${duration}s`,
                                    '--odir': i % 2 ? 'reverse' : 'normal',
                                } as CSSProperties
                            }
                        />
                    ))}

                    {/* Data links with travelling pulses */}
                    <svg className={styles.links} viewBox={`0 0 100 ${COMP.height.desktop}`} preserveAspectRatio="none">
                        {COMP.links.map((link, i) => (
                            <g key={i}>
                                <path className={styles.linkBase} d={link.d} />
                                <path
                                    className={styles.linkPulse}
                                    d={link.d}
                                    pathLength={100}
                                    style={{ '--ldur': `${link.duration}s`, '--ldelay': `${link.delay}s` } as CSSProperties}
                                />
                            </g>
                        ))}
                    </svg>

                    {/* Rotating browser cards */}
                    {COMP.cards.map((card, i) => (
                        <div
                            key={card.id}
                            className={styles.card}
                            data-move={i === rotation.incoming ? 'in' : i === rotation.outgoing ? 'out' : undefined}
                            data-center={rotation.slotOf[i] === ROT.centerSlot ? 'true' : undefined}
                            style={cardStyles[i]}
                        >
                            <div className={styles.parallax}>
                                <div className={styles.float}>
                                    <div className={styles.enter} data-rs-card="">
                                        <InterfaceCard kind={card.kind} label={card.label} sheenDelay={card.order * 1.7} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Fixed cards (e.g. the phone) */}
                    {COMP.fixedCards.map((card) => (
                        <div
                            key={card.id}
                            className={styles.card}
                            data-mobile={card.mobile ? undefined : 'hide'}
                            style={
                                {
                                    ...placementVars(card.desktop, card.mobile, card.parallax, card.float),
                                    '--tint': tintVar(card.tint),
                                    '--design-w': card.desktop.w,
                                    '--aspect': card.aspect,
                                    '--order': card.order,
                                } as CSSProperties
                            }
                        >
                            <div className={styles.parallax}>
                                <div className={styles.float}>
                                    <div className={styles.enter} data-rs-card="">
                                        <InterfaceCard kind={card.kind} label={card.label} sheenDelay={card.order * 1.7} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Floating capability chips */}
                    {COMP.chips.map((chip, i) => {
                        const Icon = CHIP_ICONS[chip.icon];
                        const desk = { ...chip.desktop, w: 0, ry: 0 };
                        const mob = chip.mobile ? { ...chip.mobile, w: 0, ry: 0 } : null;
                        return (
                            <div
                                key={chip.id}
                                className={styles.chip}
                                data-mobile={chip.mobile ? undefined : 'hide'}
                                style={
                                    {
                                        ...placementVars(desk, mob, chip.parallax, chip.float),
                                        '--tint': tintVar(chip.tint),
                                        '--order': COMP.cards.length + COMP.fixedCards.length + i,
                                    } as CSSProperties
                                }
                            >
                                <div className={styles.parallax}>
                                    <div className={styles.float}>
                                        <div className={styles.enter} data-rs-card="">
                                            <span className={styles.chipBody}>
                                                <span className={styles.chipIcon}>
                                                    <Icon className="h-[1em] w-[1em]" />
                                                </span>
                                                <span className={styles.chipLabel}>{chip.label}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
