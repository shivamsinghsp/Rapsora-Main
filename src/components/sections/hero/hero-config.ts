/**
 * Central configuration for the homepage hero + cinematic intro.
 *
 * Every timing, depth and layout value that is likely to be tuned lives here.
 * Components read from this object and pass values to CSS as custom
 * properties, so the CSS module never hardcodes them.
 */

export type MockupKind = 'analytics' | 'pipeline' | 'website' | 'chatbot' | 'storefront' | 'mobile';

export interface CompositionCard {
    id: string;
    kind: MockupKind;
    /** Decorative label shown in the window chrome. */
    label: string;
    /** Width, in % of the composition stage width. */
    width: number;
    /** Width / height ratio of the card. */
    aspect: number;
    /** Horizontal offset of the card centre from the stage centre, in % of stage width. */
    x: number;
    /** Distance from the top of the stage, in % of stage width. */
    y: number;
    /** Depth, in % of stage width (negative = further away). */
    z: number;
    /** Y-axis rotation in degrees (positive turns the outer-left edge toward the viewer). */
    rotateY: number;
    /** Entrance order (lower plays first). */
    order: number;
    /** Smallest breakpoint at which the card is rendered. */
    visibleFrom: 'base' | 'md' | 'lg';
}

export const HERO_CONFIG = {
    intro: {
        /** sessionStorage key that marks the intro as played for this session. */
        storageKey: 'rapsora:intro-played',
        rows: ['RAPSORA', 'TECHNOLOGIES'] as const,
        brandName: 'RapSora Technologies',
        tagline: 'Digital solutions, engineered end to end',
        /** Black screen before the first letter appears (ms). */
        initialDelay: 450,
        /** Duration of a single letter's reveal + formation (ms). */
        letterDuration: 1100,
        /** Delay between consecutive letters (ms). */
        letterStagger: 55,
        /** Pause between the last letter landing and the brand name (ms). */
        brandDelay: 150,
        /** Brand name reveal duration (ms). */
        brandDuration: 800,
        /** How long the finished composition holds before exiting (ms). */
        hold: 900,
        /** Exit / transition-to-hero duration (ms). */
        exitDuration: 1000,
        /** Exit duration when the visitor presses "Skip" (ms). */
        skipExitDuration: 550,
        /** Hard cap: the intro always ends by this time, whatever happens (ms). */
        maxDuration: 7000,
        /** Perspective used for the 3D letter cards (px). */
        perspective: 900,
        /** How far letters start from their final spot, as a multiple of the card size. */
        scatter: 2.6,
    },

    hero: {
        badge: 'End-to-end digital solutions company',
        headline: {
            lead: 'We elevate brands to',
            /** Rendered with the contrasting light-italic treatment. */
            emphasis: 'their highest potential.',
        },
        description:
            'From strategy and design to development and growth — we turn ideas into scalable, revenue-generating digital products.',
        primaryCta: { label: 'Request a quote', href: '/contact' },
        secondaryCta: { label: 'Explore services', href: '/services' },
        /** Stagger between hero text elements on reveal (ms). */
        revealStagger: 90,
        /** Duration of each hero text element's reveal (ms). */
        revealDuration: 900,
    },

    composition: {
        /** Perspective of the 3D stage, in % of stage width. */
        perspective: 140,
        /** Stage height, in % of stage width. */
        height: 37,
        /** Stage width relative to the section at each breakpoint (%), wider than 100 crops the outer cards. */
        stageWidth: { base: 165, md: 118, lg: 100 },
        /** Max stage width on very large screens (px). */
        maxStageWidth: 1320,
        /** Max pointer tilt of the whole stage (deg). Disabled for touch and reduced motion. */
        maxTilt: { x: 3, y: 5 },
        /** Delay before the first card starts its entrance after the hero reveals (ms). */
        entranceDelay: 250,
        /** Stagger between cards (ms). */
        entranceStagger: 110,
        /** Card entrance duration (ms). */
        entranceDuration: 1100,
        cards: [
            { id: 'analytics', kind: 'analytics', label: 'analytics', width: 22, aspect: 1.36, x: -40, y: 2.5, z: -20, rotateY: 22, order: 4, visibleFrom: 'md' },
            { id: 'pipeline', kind: 'pipeline', label: 'crm', width: 29, aspect: 1.42, x: -24.5, y: 5, z: -9, rotateY: 13, order: 2, visibleFrom: 'base' },
            { id: 'website', kind: 'website', label: 'yourbrand.com', width: 37, aspect: 1.45, x: 0, y: 7.5, z: 0, rotateY: 0, order: 0, visibleFrom: 'base' },
            { id: 'chatbot', kind: 'chatbot', label: 'ai-assistant', width: 29, aspect: 1.42, x: 24.5, y: 5, z: -9, rotateY: -13, order: 1, visibleFrom: 'base' },
            { id: 'storefront', kind: 'storefront', label: 'store', width: 22, aspect: 1.36, x: 40, y: 2.5, z: -20, rotateY: -22, order: 3, visibleFrom: 'md' },
            { id: 'mobile', kind: 'mobile', label: 'app', width: 9.5, aspect: 0.5, x: 17.5, y: 13, z: 7, rotateY: -8, order: 5, visibleFrom: 'base' },
        ] satisfies CompositionCard[],
    },
} as const;

export type HeroConfig = typeof HERO_CONFIG;

/** Total length of the intro's letter + brand sequence (ms), derived from the config. */
export function getIntroSequenceLength(): number {
    const { initialDelay, letterDuration, letterStagger, brandDelay, brandDuration, rows } = HERO_CONFIG.intro;
    const letters = rows.join('').length;
    return initialDelay + (letters - 1) * letterStagger + letterDuration + brandDelay + brandDuration;
}
