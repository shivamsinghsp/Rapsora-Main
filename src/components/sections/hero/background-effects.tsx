import type { CSSProperties } from 'react';
import styles from './hero.module.css';

/**
 * Glass bubbles placed around the headline and composition.
 * size in px; top/left in % of the hero; `mdOnly` hides the bubble on phones.
 */
const BUBBLES: { size: number; top: string; left: string; float: string; mdOnly?: boolean }[] = [
    { size: 54, top: '24%', left: '14%', float: '8s', mdOnly: true },
    { size: 34, top: '20%', left: '19%', float: '10s', mdOnly: true },
    { size: 26, top: '31%', left: '11%', float: '9s', mdOnly: true },
    { size: 58, top: '23%', left: '82%', float: '9s', mdOnly: true },
    { size: 32, top: '19%', left: '78%', float: '11s', mdOnly: true },
    { size: 24, top: '33%', left: '87%', float: '8s', mdOnly: true },
    { size: 40, top: '82%', left: '6%', float: '10s' },
    { size: 26, top: '88%', left: '10%', float: '8s', mdOnly: true },
    { size: 44, top: '84%', left: '90%', float: '9s' },
    { size: 22, top: '78%', left: '94%', float: '11s', mdOnly: true },
];

export function BackgroundEffects() {
    return (
        <>
            <div className={styles.bgGlow} aria-hidden="true" />
            <div className={styles.bgGrid} aria-hidden="true" />
            {BUBBLES.map((b, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className={`${styles.bubble} ${b.mdOnly ? 'hidden md:block' : ''}`}
                    style={
                        {
                            width: b.size,
                            height: b.size,
                            top: b.top,
                            left: b.left,
                            '--i': i,
                            '--float': b.float,
                        } as CSSProperties
                    }
                />
            ))}
            <div className={styles.bgFade} aria-hidden="true" />
        </>
    );
}
