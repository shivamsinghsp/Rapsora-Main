'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { CinematicStreaksCanvas } from '../motion-hero/cinematic-streaks-canvas';
import { THEME_PRESETS } from '../motion-hero/presets';
import { HERO_CONFIG, INTRO_TIMELINE } from './hero-config';
import { completeIntro, markIntroStarted, type IntroStatus } from './use-intro-status';
import styles from './intro.module.css';

const INTRO = HERO_CONFIG.intro;
/** The project's violet preset matches the brand (#9061F9). */
const STREAK_THEME = THEME_PRESETS['violet-cosmos'];

/* ------------------------------------------------------------------ */
/* Deterministic geometry (integer maths only → identical everywhere)  */
/* ------------------------------------------------------------------ */

/** Extrusion layer colours: brand violet fading to near-black with depth. */
function extrusionColor(k: number, depth: number) {
    const l = 0.47 - (0.33 * (k - 1)) / Math.max(1, depth - 1);
    return `oklch(${l.toFixed(3)} 0.16 300)`;
}

/**
 * Coordinated entry vectors: letters fan in from the outside edges, the two
 * rows arrive from opposite vertical directions, outer letters travel and
 * spin the most. Nothing is random.
 */
function flightFor(row: number, j: number, n: number): CSSProperties {
    const u = n > 1 ? (j - (n - 1) / 2) / ((n - 1) / 2) : 0;
    const a = Math.abs(u);
    const up = row === 0 ? -1 : 1;
    return {
        '--dx': `${(u * 3.4).toFixed(3)}em`,
        '--dy': `${(up * (1.3 + a * 0.7)).toFixed(3)}em`,
        '--dz': `${(-(6 + a * 5)).toFixed(3)}em`,
        '--rx': `${up * -(55 + (j % 3) * 12)}deg`,
        '--ry': `${(-u * 110).toFixed(2)}deg`,
        '--rz': `${(-u * 24).toFixed(2)}deg`,
    } as CSSProperties;
}

const PARTICLES = Array.from({ length: INTRO.particles }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 61 + 7) % 100}%`,
    size: 1 + (i % 3),
    duration: `${(6 + (i % 5) * 1.6).toFixed(1)}s`,
    delay: `${(-((i * 7) % 60) / 10).toFixed(1)}s`,
}));

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

interface ExtrudedLetterProps {
    char: string;
    index: number;
    depth: number;
    flight: CSSProperties;
}

/** One dimensional letterform: stacked extrusion layers + metallic face. */
function ExtrudedLetter({ char, index, depth, flight }: ExtrudedLetterProps) {
    return (
        <span className={styles.letter} style={{ '--i': index, ...flight } as CSSProperties}>
            {Array.from({ length: depth }, (_, d) => {
                const k = depth - d; // render back-to-front
                return (
                    <span
                        key={k}
                        className={styles.extrude}
                        style={{ '--k': k, color: extrusionColor(k, depth) } as CSSProperties}
                    >
                        {char}
                    </span>
                );
            })}
            <span className={styles.glow}>{char}</span>
            <span className={styles.face}>{char}</span>
            <span className={styles.rim}>{char}</span>
        </span>
    );
}

interface CinematicIntroProps {
    status: IntroStatus;
    /** Fired when the overlay starts leaving, so the hero can reveal underneath. */
    onExitStart: () => void;
}

/* ------------------------------------------------------------------ */
/* Intro                                                               */
/* ------------------------------------------------------------------ */

export function CinematicIntro({ status, onExitStart }: CinematicIntroProps) {
    const [phase, setPhase] = useState<'intro' | 'exit'>('intro');
    const [exitMs, setExitMs] = useState<number>(INTRO.exitDuration);
    const exitingRef = useRef(false);
    const timersRef = useRef<number[]>([]);
    const onExitStartRef = useRef(onExitStart);

    useEffect(() => {
        onExitStartRef.current = onExitStart;
    }, [onExitStart]);

    const beginExit = useCallback((skipped: boolean) => {
        if (exitingRef.current) return;
        exitingRef.current = true;
        const duration = skipped ? INTRO.skipExitDuration : INTRO.exitDuration;
        setExitMs(duration);
        setPhase('exit');
        onExitStartRef.current();
        timersRef.current.push(window.setTimeout(completeIntro, duration));
    }, []);

    useEffect(() => {
        if (status !== 'play') return;
        markIntroStarted();
        const timers = timersRef.current;

        // The CSS timeline starts on mount; the exit is scheduled against it.
        timers.push(window.setTimeout(() => beginExit(false), INTRO_TIMELINE.exitStart));
        // Hard cap in case timers are throttled (background tab, slow device).
        timers.push(window.setTimeout(() => beginExit(false), INTRO.maxDuration));

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') beginExit(true);
        };
        window.addEventListener('keydown', onKey);

        return () => {
            window.removeEventListener('keydown', onKey);
            timers.forEach((id) => window.clearTimeout(id));
            timers.length = 0;
            exitingRef.current = false;
        };
    }, [status, beginExit]);

    // `play` is only resolved in the browser, so `document` exists here.
    // The portal lifts the overlay above the fixed header, which the layout's
    // transformed <main> would otherwise trap underneath.
    if (status !== 'play') return null;

    const vars = {
        '--perspective': `${INTRO.perspective}px`,
        '--initial-delay': `${INTRO.initialDelay}ms`,
        '--letter-duration': `${INTRO.letterDuration}ms`,
        '--letter-stagger': `${INTRO.letterStagger}ms`,
        '--extrusion-step': `${INTRO.extrusionStep}em`,
        '--letters-done': `${INTRO_TIMELINE.lettersDone}ms`,
        '--sweep-start': `${INTRO_TIMELINE.sweepStart}ms`,
        '--sweep-duration': `${INTRO.sweepDuration}ms`,
        '--sequence': `${INTRO_TIMELINE.exitStart}ms`,
        '--exit-duration': `${exitMs}ms`,
    } as CSSProperties;

    let index = 0;

    return createPortal(
        <div
            className={styles.intro}
            style={vars}
            data-phase={phase}
            role="region"
            aria-label={`${INTRO.brandName} introduction. Click or press Escape to skip.`}
            onClick={() => beginExit(true)}
        >
            {/* Stage A: ambient light, streaks and particles */}
            <div className={styles.ambient} aria-hidden="true" />
            <div className={styles.streaks} aria-hidden="true">
                <CinematicStreaksCanvas
                    theme={STREAK_THEME}
                    streakCount={INTRO.streaks.count}
                    intensity={INTRO.streaks.intensity}
                    speedMultiplier={INTRO.streaks.speed}
                />
            </div>
            <div className={styles.particles} aria-hidden="true">
                {PARTICLES.map((p, i) => (
                    <span
                        key={i}
                        style={
                            {
                                left: p.left,
                                top: p.top,
                                width: p.size,
                                height: p.size,
                                '--dur': p.duration,
                                animationDelay: p.delay,
                            } as CSSProperties
                        }
                    />
                ))}
            </div>

            {/* Stages B–D: letter flight, assembly, light sweep */}
            <div className={styles.camera}>
                <div className={styles.pose} aria-hidden="true">
                <div className={styles.wordmark}>
                    {INTRO.rows.map((row, r) => (
                        <div
                            key={row.text}
                            className={styles.row}
                            style={{ fontSize: row.size, '--tracking': row.tracking } as CSSProperties}
                        >
                            {row.text.split('').map((char, j) => {
                                const i = index++;
                                return (
                                    <ExtrudedLetter
                                        key={`${row.text}-${j}`}
                                        char={char}
                                        index={i}
                                        depth={row.depth}
                                        flight={flightFor(r, j, row.text.length)}
                                    />
                                );
                            })}
                        </div>
                    ))}
                    <div className={styles.floor} />
                </div>
                </div>
                <p className={styles.tagline}>{INTRO.tagline}</p>
            </div>
            <span className="sr-only">{INTRO.brandName}</span>

            <button
                type="button"
                className={styles.skip}
                onClick={(event) => {
                    event.stopPropagation();
                    beginExit(true);
                }}
            >
                Skip intro <span aria-hidden="true">→</span>
            </button>
            <div className={styles.progress} aria-hidden="true" />
        </div>,
        document.body,
    );
}
