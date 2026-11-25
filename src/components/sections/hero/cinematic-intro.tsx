'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { HERO_CONFIG, getIntroSequenceLength } from './hero-config';
import { completeIntro, markIntroStarted, type IntroStatus } from './use-intro-status';
import styles from './hero.module.css';

const INTRO = HERO_CONFIG.intro;
const LETTER_COUNT = INTRO.rows.join('').length;
const SEQUENCE_MS = getIntroSequenceLength();
const LETTERS_DONE_MS = INTRO.initialDelay + (LETTER_COUNT - 1) * INTRO.letterStagger + INTRO.letterDuration;
const BRAND_START_MS = LETTERS_DONE_MS + INTRO.brandDelay;

/**
 * Deterministic scatter offsets (pure integer arithmetic) so server and client
 * produce identical inline styles — no Math.random, no hydration mismatch.
 */
function scatterFor(i: number) {
    const s = INTRO.scatter;
    return {
        '--sx': (((((i * 7) % 9) - 4) / 4) * s).toFixed(3),
        '--sy': (((((i * 5) % 7) - 3) / 3) * s * 0.6).toFixed(3),
        '--sz': (-(((i * 3) % 4) + 2) * 1.4).toFixed(3),
        '--sr': ((((i * 53) % 7) - 3) * 32).toString(),
    };
}

interface CircularLetterCardProps {
    letter: string;
    index: number;
}

function CircularLetterCard({ letter, index }: CircularLetterCardProps) {
    return (
        <span className={styles.letter} style={{ '--i': index, ...scatterFor(index) } as CSSProperties}>
            <span className={styles.letterBack} />
            <span className={styles.letterFace}>
                <span className={styles.letterGlyph}>{letter}</span>
                <span className={styles.letterShine} />
            </span>
        </span>
    );
}

interface CinematicIntroProps {
    status: IntroStatus;
    /** Called when the overlay starts leaving, so the hero can reveal underneath. */
    onExitStart: () => void;
}

export function CinematicIntro({ status, onExitStart }: CinematicIntroProps) {
    const [phase, setPhase] = useState<'intro' | 'exit'>('intro');
    const [exitMs, setExitMs] = useState<number>(INTRO.exitDuration);
    const exitingRef = useRef(false);
    const timersRef = useRef<number[]>([]);
    const brandRef = useRef<HTMLSpanElement>(null);
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
        let cancelled = false;

        // Hard cap: the intro always ends, whatever happens to the animations.
        timers.push(window.setTimeout(() => beginExit(false), INTRO.maxDuration));

        // Sync the exit with the actual CSS timeline (it starts at first paint,
        // which can be before hydration), falling back to the computed length.
        const brandAnimation = brandRef.current?.getAnimations?.()[0];
        if (brandAnimation) {
            brandAnimation.finished
                .then(() => {
                    if (!cancelled) timers.push(window.setTimeout(() => beginExit(false), INTRO.hold));
                })
                .catch(() => undefined);
        } else {
            timers.push(window.setTimeout(() => beginExit(false), SEQUENCE_MS + INTRO.hold));
        }

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') beginExit(true);
        };
        window.addEventListener('keydown', onKey);

        return () => {
            cancelled = true;
            window.removeEventListener('keydown', onKey);
            timers.forEach((id) => window.clearTimeout(id));
            timers.length = 0;
            exitingRef.current = false;
        };
    }, [status, beginExit]);

    // `play` is only ever resolved in the browser, so `document` is available.
    // Portalling to <body> lifts the overlay above the fixed header, which a
    // transformed ancestor (the layout's animated <main>) would otherwise trap.
    if (status !== 'play') return null;

    let index = 0;
    const vars = {
        '--intro-perspective': `${INTRO.perspective}px`,
        '--initial-delay': `${INTRO.initialDelay}ms`,
        '--letter-duration': `${INTRO.letterDuration}ms`,
        '--letter-stagger': `${INTRO.letterStagger}ms`,
        '--sweep-start': `${LETTERS_DONE_MS - 150}ms`,
        '--brand-start': `${BRAND_START_MS}ms`,
        '--brand-duration': `${INTRO.brandDuration}ms`,
        '--sequence': `${SEQUENCE_MS}ms`,
        '--exit-duration': `${exitMs}ms`,
    } as CSSProperties;

    return createPortal(
        <div
            className={styles.intro}
            style={vars}
            data-phase={phase}
            data-rs-intro=""
            role="region"
            aria-label={`${INTRO.brandName} introduction`}
        >
            <div className={styles.introGlow} aria-hidden="true" />

            <div className={styles.letterStage} aria-hidden="true">
                {INTRO.rows.map((row, rowIndex) => (
                    <div
                        key={row}
                        className={`${styles.letterRow} ${rowIndex === 0 ? styles.letterRowPrimary : styles.letterRowSecondary}`}
                    >
                        {row.split('').map((letter) => {
                            const i = index++;
                            return <CircularLetterCard key={`${row}-${i}`} letter={letter} index={i} />;
                        })}
                    </div>
                ))}
            </div>

            <div className={styles.brand}>
                <span ref={brandRef} className={styles.brandName}>
                    {INTRO.brandName}
                </span>
                <span className={styles.brandTagline}>{INTRO.tagline}</span>
            </div>

            <button type="button" className={styles.skip} onClick={() => beginExit(true)}>
                Skip intro
                <span aria-hidden="true">→</span>
            </button>

            <div className={styles.progress} aria-hidden="true" />
        </div>,
        document.body,
    );
}
