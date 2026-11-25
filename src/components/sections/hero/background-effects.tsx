import type { CSSProperties } from 'react';
import { HERO_CONFIG } from './hero-config';
import styles from './hero.module.css';

const AMBIENT = HERO_CONFIG.ambient;

/** Deterministic particle field (integer maths → identical on server and client). */
const PARTICLES = Array.from({ length: AMBIENT.particles }, (_, i) => ({
    left: `${(i * 41 + 5) % 100}%`,
    size: 1 + (i % 3),
    duration: `${14 + (i % 6) * 3}s`,
    delay: `${-((i * 13) % 30)}s`,
    drift: `${((i % 5) - 2) * 18}px`,
}));

/**
 * Layer 1 — ambient motion: drifting aurora light, a pulsing floor glow under
 * the cards, a faint grid and slowly rising particles. Transforms only.
 */
export function BackgroundEffects() {
    const aurora = { '--adur': `${AMBIENT.auroraDuration}s` } as CSSProperties;
    return (
        <>
            <div className={styles.ambient} aria-hidden="true">
                <span className={`${styles.aurora} ${styles.auroraA}`} style={aurora} />
                <span className={`${styles.aurora} ${styles.auroraB}`} style={aurora} />
                <span className={`${styles.aurora} ${styles.auroraC}`} style={aurora} />
                <span className={`${styles.aurora} ${styles.auroraFloor}`} />
                <div className={styles.grid} />
                {PARTICLES.map((p, i) => (
                    <span
                        key={i}
                        className={styles.particle}
                        style={
                            {
                                left: p.left,
                                width: p.size,
                                height: p.size,
                                '--pdur': p.duration,
                                '--pdelay': p.delay,
                                '--pdrift': p.drift,
                            } as CSSProperties
                        }
                    />
                ))}
            </div>
            <div className={styles.bottomFade} aria-hidden="true" />
        </>
    );
}
