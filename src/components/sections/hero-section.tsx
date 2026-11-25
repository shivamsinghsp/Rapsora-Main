'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { CinematicIntro } from './hero/cinematic-intro';
import { HeroContent } from './hero/hero-content';
import { TechnologyComposition } from './hero/technology-composition';
import { BackgroundEffects } from './hero/background-effects';
import { HERO_CONFIG } from './hero/hero-config';
import { useIntroStatus } from './hero/use-intro-status';
import { paletteVars } from './hero/palette';
import styles from './hero/hero.module.css';

/**
 * Homepage hero.
 *
 * HeroSection
 * ├── CinematicIntro        dimensional wordmark reveal (once per session)
 * ├── BackgroundEffects     aurora, floor glow, grid, rising particles
 * ├── HeroContent           badge, headline, description, CTAs
 * └── TechnologyComposition 3D cards, chips, data links, orbit rings
 *
 * Animation concerns are split as follows:
 *   intro timeline / completion → CinematicIntro + use-intro-status
 *   hero entrance               → data-revealed + CSS
 *   continuous ambient & cards  → CSS loops (hero.module.css, mockups.module.css)
 *   pointer interaction         → TechnologyComposition (CSS variables, no re-renders)
 *   off-screen pausing          → IntersectionObserver below (data-inview)
 *   reduced motion / responsive → CSS media queries
 *
 * All tunable values live in ./hero/hero-config.ts.
 */
export function HeroSection() {
    const status = useIntroStatus();
    const [introExiting, setIntroExiting] = useState(false);
    const handleExitStart = useCallback(() => setIntroExiting(true), []);
    const sectionRef = useRef<HTMLElement>(null);

    // Pause all hero loops while it is scrolled out of view. Writes the
    // attribute directly so scrolling never triggers a React render.
    useEffect(() => {
        const section = sectionRef.current;
        if (!section || typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(
            ([entry]) => section.setAttribute('data-inview', entry.isIntersecting ? 'true' : 'false'),
            { threshold: 0 },
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const revealed = status === 'skip' || introExiting;
    const { motionScale } = HERO_CONFIG.composition;

    return (
        <section
            ref={sectionRef}
            className={styles.section}
            data-revealed={revealed ? 'true' : 'false'}
            style={
                {
                    ...paletteVars(),
                    '--reveal-duration': `${HERO_CONFIG.hero.revealDuration}ms`,
                    '--reveal-stagger': `${HERO_CONFIG.hero.revealStagger}ms`,
                    '--motion-md': motionScale.md,
                    '--motion-base': motionScale.base,
                } as CSSProperties
            }
            aria-label="Introduction"
        >
            <CinematicIntro status={status} onExitStart={handleExitStart} />

            {/* Without JavaScript: hero fully visible. */}
            <noscript>
                <style>{`[data-rs-reveal],[data-rs-card]{opacity:1!important}`}</style>
            </noscript>

            <BackgroundEffects />
            <HeroContent />

            {HERO_CONFIG.composition.enabled && (
                <div className="relative mt-12 w-full sm:mt-12 lg:mt-8">
                    <TechnologyComposition />
                </div>
            )}
        </section>
    );
}
