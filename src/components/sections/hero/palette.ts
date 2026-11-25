import type { CSSProperties } from 'react';
import { HERO_CONFIG, type PastelTint } from './hero-config';

const P = HERO_CONFIG.palette;

/**
 * CSS variables that re-tint the hero (and the intro overlay, which renders
 * in a portal outside the section) with the pastel palette.
 *
 * Overriding --primary / --brand-light / --brand-dark on the hero's root
 * element re-colours everything inside it that uses the brand tokens —
 * Tailwind `bg-primary`, glows, links, the CTA — while the rest of the site
 * keeps the regular brand colours.
 */
export function paletteVars(): CSSProperties {
    const tints = {
        '--pastel-lavender': P.tints.lavender,
        '--pastel-mint': P.tints.mint,
        '--pastel-peach': P.tints.peach,
        '--pastel-sky': P.tints.sky,
        '--pastel-pink': P.tints.pink,
        '--pastel-ink': P.ink,
    };
    if (!P.enabled) {
        return {
            ...tints,
            '--pastel-lavender': 'var(--brand-light)',
            '--pastel-mint': 'var(--brand-light)',
            '--pastel-peach': 'var(--brand-light)',
            '--pastel-sky': 'var(--brand-light)',
            '--pastel-pink': 'var(--brand-light)',
        } as CSSProperties;
    }
    return {
        ...tints,
        '--primary': P.primary,
        '--brand-light': P.primaryLight,
        '--brand-dark': P.primaryDeep,
    } as CSSProperties;
}

/** CSS value for a named pastel tint (resolves through the scoped variables). */
export function tintVar(tint: PastelTint): string {
    return `var(--pastel-${tint})`;
}
