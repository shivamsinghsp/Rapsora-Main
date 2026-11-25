'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { Bot, Cloud, Code2, ShieldCheck } from 'lucide-react';
import { HERO_CONFIG, type FloatMotion, type Placement } from './hero-config';
import { InterfaceCard } from './interface-mockups';
import styles from './hero.module.css';

const COMP = HERO_CONFIG.composition;
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
} as CSSProperties;

/** Placement + idle-motion variables shared by cards and chips. */
function placementVars(desktop: Placement, mobile: Placement | null, float: FloatMotion, parallax: number) {
    const m = mobile ?? desktop;
    return {
        '--dw': desktop.w,
        '--dx': desktop.x,
        '--dy': desktop.y,
        '--dz': desktop.z,
        '--dry': desktop.ry,
        '--mw': m.w,
        '--mx': m.x,
        '--my': m.y,
        '--mz': m.z,
        '--mry': m.ry,
        '--fx': float.x,
        '--fy': float.y,
        '--frx': float.rx,
        '--fry': float.ry,
        '--fdur': `${float.duration / 2}s`,
        '--fdelay': `${float.delay}s`,
        '--depth': parallax,
    } as CSSProperties;
}

/**
 * Layered 3D interface previews in a shared environment.
 *
 * Continuous motion is CSS only. The single piece of JavaScript is the pointer
 * handler: it writes two CSS variables (--px / --py) at most once per frame,
 * so React never re-renders while the user moves the mouse. It is enabled
 * only for a fine pointer on desktop widths, never on touch or reduced motion. Cards translate
 * by their own depth factor and the CSS transition smooths both the movement
 * and the return to rest when the pointer leaves.
 */
export function TechnologyComposition() {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

    return (
        <div ref={rootRef} className={styles.stageOuter} style={stageVars} aria-hidden="true">
            <div className={styles.stage}>
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

                    {COMP.cards.map((card) => (
                        <div
                            key={card.id}
                            className={styles.card}
                            data-mobile={card.mobile ? 'show' : 'hide'}
                            style={
                                {
                                    ...placementVars(card.desktop, card.mobile, card.float, card.parallax),
                                    '--aspect': card.aspect,
                                    '--order': card.order,
                                    '--dim': Math.min(0.28, Math.max(0, -card.desktop.z * 0.011)).toFixed(3),
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

                    {COMP.chips.map((chip, i) => {
                        const Icon = CHIP_ICONS[chip.icon];
                        const desk = { ...chip.desktop, w: 0, ry: 0 };
                        const mob = chip.mobile ? { ...chip.mobile, w: 0, ry: 0 } : null;
                        return (
                            <div
                                key={chip.id}
                                className={styles.chip}
                                data-mobile={chip.mobile ? 'show' : 'hide'}
                                style={
                                    {
                                        ...placementVars(desk, mob, chip.float, chip.parallax),
                                        '--order': COMP.cards.length + i,
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
