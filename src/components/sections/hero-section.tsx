'use client';

import { useCallback, useState, type CSSProperties } from 'react';
import { CinematicIntro } from './hero/cinematic-intro';
import { HeroContent } from './hero/hero-content';
import { TechnologyComposition } from './hero/technology-composition';
import { BackgroundEffects } from './hero/background-effects';
import { HERO_CONFIG } from './hero/hero-config';
import { useIntroStatus } from './hero/use-intro-status';
import styles from './hero/hero.module.css';

/**
 * Homepage hero.
 *
 * HeroSection
 * ├── CinematicIntro        black-screen brand reveal (once per session)
 * ├── BackgroundEffects     violet glows, grid, glass circles
 * ├── HeroContent           badge, headline, description, CTAs
 * └── TechnologyComposition layered 3D interface previews
 *
 * All tunable values live in ./hero/hero-config.ts.
 */
export function HeroSection() {
    const status = useIntroStatus();
    const [introExiting, setIntroExiting] = useState(false);
    const handleExitStart = useCallback(() => setIntroExiting(true), []);

    const revealed = status === 'skip' || introExiting;

    return (
        <section
            className={styles.section}
            data-revealed={revealed ? 'true' : 'false'}
            style={
                {
                    '--reveal-duration': `${HERO_CONFIG.hero.revealDuration}ms`,
                    '--reveal-stagger': `${HERO_CONFIG.hero.revealStagger}ms`,
                } as CSSProperties
            }
            aria-label="Introduction"
        >
            <CinematicIntro status={status} onExitStart={handleExitStart} />

            {/* Without JavaScript: no intro, hero fully visible. */}
            <noscript>
                <style>{`[data-rs-intro]{display:none!important}[data-rs-reveal]{opacity:1!important}[data-rs-card]{opacity:1!important}`}</style>
            </noscript>

            <BackgroundEffects />
            <HeroContent />

            <div className="relative mt-12 w-full sm:mt-14 lg:mt-14">
                <TechnologyComposition />
            </div>
        </section>
    );
}
