import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GooeyCTA } from '@/components/shared/gooey-cta';
import { HERO_CONFIG } from './hero-config';
import styles from './hero.module.css';

const HERO = HERO_CONFIG.hero;

/** Stagger index for the CSS reveal animation. */
const order = (i: number) => ({ '--i': i }) as CSSProperties;

export function HeroContent() {
    return (
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-28 text-center sm:px-6 sm:pt-32 lg:pt-28">
            {/* Optional intro badge (hero.badge: null hides it) */}
            {HERO.badge && (
                <span
                    className={`${styles.reveal} mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[12px] font-medium tracking-wide text-white/80 sm:mb-7 sm:text-[13px]`}
                    style={order(0)}
                    data-rs-reveal=""
                >
                    <span className={styles.badgeDot} aria-hidden="true" />
                    {HERO.badge}
                </span>
            )}

            {/* Headline */}
            <h1
                className={`${styles.reveal} font-heading text-[clamp(2.4rem,6.2vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white`}
                style={order(1)}
                data-rs-reveal=""
            >
                {HERO.headline.lead}
                <br className="hidden sm:block" />{' '}
                <span className={styles.headlineEmphasis}>{HERO.headline.emphasis}</span>
            </h1>

            {/* Description */}
            <p
                className={`${styles.reveal} mt-5 max-w-xl font-body lg:mt-4 text-[15px] leading-relaxed text-white/65 sm:text-[17px]`}
                style={order(2)}
                data-rs-reveal=""
            >
                {HERO.description}
            </p>

            {/* Actions */}
            <div
                className={`${styles.reveal} mt-8 flex flex-col items-center gap-4 lg:mt-7 sm:flex-row sm:gap-5`}
                style={order(3)}
                data-rs-reveal=""
            >
                <GooeyCTA href={HERO.primaryCta.href} text={HERO.primaryCta.label} textColorClass="text-[var(--pastel-ink)]" />
                {HERO.secondaryCta && (
                    <Link
                        href={HERO.secondaryCta.href}
                        className="group inline-flex h-[56px] items-center gap-2 rounded-full border border-white/15 px-7 text-[15px] font-medium text-white/85 transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        {HERO.secondaryCta.label}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                )}
            </div>
        </div>
    );
}
