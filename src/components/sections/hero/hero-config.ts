/**
 * Central configuration for the homepage hero and its cinematic intro.
 *
 * Every timing, depth, geometry and motion value that is likely to be tuned
 * lives here. Components pass these values to CSS as custom properties, so
 * the stylesheets never hardcode them.
 *
 * Units used for the composition: "su" (stage units) = 1% of the stage width.
 *
 * Quick switches (see README.md in this folder for a full customisation guide):
 *   intro.enabled              false → no intro, the hero shows immediately
 *   intro.playOncePerSession   false → the intro plays on every full page load
 *   ambient.enabled            false → no background glow / particles
 *   composition.enabled        false → hide the 3D card composition
 *   composition.pointerParallax false → no mouse-driven parallax
 *   hero.secondaryCta          null  → hide the secondary button
 */

export type MockupKind = 'analytics' | 'pipeline' | 'website' | 'chatbot' | 'storefront' | 'mobile';

/** Placement of a card in the 3D stage (all lengths in stage units). */
export interface Placement {
    /** Card width. */
    w: number;
    /** Horizontal offset of the card centre from the stage centre. */
    x: number;
    /** Distance from the top of the stage. */
    y: number;
    /** Depth (negative = further away). */
    z: number;
    /** Y-axis rotation (deg); positive turns the outer-left edge toward the viewer. */
    ry: number;
}

/** Continuous idle motion of a single card. Each card gets its own. */
export interface FloatMotion {
    /** Vertical travel (su). */
    y: number;
    /** Horizontal travel (su). */
    x: number;
    /** Extra X rotation at the peak (deg). */
    rx: number;
    /** Extra Y rotation at the peak (deg). */
    ry: number;
    /** Full cycle (s). */
    duration: number;
    /** Phase offset (s, negative starts mid-cycle). */
    delay: number;
}

export interface CompositionCard {
    id: string;
    kind: MockupKind;
    /** Decorative label in the window chrome. */
    label: string;
    /** Width / height ratio. */
    aspect: number;
    desktop: Placement;
    /** Phone placement; `null` hides the card below 768px. */
    mobile: Placement | null;
    float: FloatMotion;
    /** Pointer-parallax strength; deeper / closer cards move more than the centre. */
    parallax: number;
    /** Entrance order after the intro. */
    order: number;
}

export interface FloatingChip {
    id: string;
    icon: 'bot' | 'cloud' | 'shield' | 'code';
    label: string;
    desktop: { x: number; y: number; z: number };
    mobile: { x: number; y: number; z: number } | null;
    float: FloatMotion;
    parallax: number;
}

export const HERO_CONFIG = {
    intro: {
        /** Master switch for the cinematic intro. */
        enabled: true,
        /** true: play once per browser session. false: play on every full page load. */
        playOncePerSession: true,
        /** sessionStorage key that marks the intro as played for this session. */
        storageKey: 'rapsora:intro-played',
        brandName: 'RapSora Technologies',
        tagline: 'Digital solutions, engineered end to end',
        rows: [
            /** size: CSS font-size; depth: extrusion layers; tracking: gap between letters. */
            { text: 'RAPSORA', size: 'clamp(3.4rem, 15vw, 11.5rem)', depth: 18, tracking: '0.01em' },
            { text: 'TECHNOLOGIES', size: 'clamp(1.05rem, 4.3vw, 3.3rem)', depth: 9, tracking: '0.34em' },
        ],
        /** Extrusion distance between depth layers (em of the letter). */
        extrusionStep: 0.017,
        /** Ambient-only stage before the first letter (ms). */
        initialDelay: 650,
        /** Single letter flight + spring settle (ms). */
        letterDuration: 1250,
        /** Delay between consecutive letters (ms). */
        letterStagger: 60,
        /** Pause between the last letter landing and the light sweep (ms). */
        sweepDelay: 100,
        /** Light sweep across the wordmark (ms). */
        sweepDuration: 1100,
        /** Hold after the sweep before the transition (ms). */
        hold: 450,
        /** Transition into the hero (ms). */
        exitDuration: 1150,
        /** Transition when the visitor skips (ms). */
        skipExitDuration: 550,
        /** Hard cap: the intro always ends by this time (ms). */
        maxDuration: 8000,
        /** Camera perspective (px). */
        perspective: 1100,
        /** Ambient particle count. */
        particles: 34,
        /** Light streak canvas settings (reuses CinematicStreaksCanvas). */
        streaks: { count: 9, intensity: 0.85, speed: 1.1 },
    },

    hero: {
        badge: 'End-to-end digital solutions company',
        headline: {
            lead: 'We elevate brands to',
            /** Rendered with the contrasting light-italic, shimmering treatment. */
            emphasis: 'their highest potential.',
        },
        description:
            'From strategy and design to development and growth — we turn ideas into scalable, revenue-generating digital products.',
        primaryCta: { label: 'Request a quote', href: '/contact' },
        /** Set to null to hide the secondary button. */
        secondaryCta: { label: 'Explore services', href: '/services' } as { label: string; href: string } | null,
        revealStagger: 90,
        revealDuration: 900,
    },

    ambient: {
        /** Master switch for the animated background (glows, grid, particles). */
        enabled: true,
        /** Rising particles in the hero background (0 to remove). */
        particles: 22,
        /** Aurora drift cycle (s). */
        auroraDuration: 22,
        /** Orbit ring rotation cycles (s); one ring per entry, [] to remove. */
        orbitDurations: [48, 70],
    },

    composition: {
        /** Master switch for the 3D card composition. */
        enabled: true,
        /** Mouse-driven parallax and tilt (desktop with a fine pointer only). */
        pointerParallax: true,
        /** Perspective (su). */
        perspective: 150,
        /** Stage height (su) on desktop/tablet and on phones. */
        height: { desktop: 40, mobile: 98 },
        /** Stage width relative to the section (%): tablet crops the outer cards. */
        stageWidth: { base: 100, md: 118, lg: 100 },
        maxStageWidth: 1320,
        /** Whole-stage tilt at the pointer extremes (deg). */
        tilt: { x: 2.5, y: 4 },
        /** Pointer smoothing (ms) — a CSS transition, no animation loop. */
        pointerEase: 900,
        /** Idle motion multiplier on tablets / phones (lighter motion on small screens). */
        motionScale: { md: 0.8, base: 0.6 },
        entranceDelay: 250,
        entranceStagger: 110,
        entranceDuration: 1200,
        cards: [
            {
                id: 'analytics', kind: 'analytics', label: 'analytics', aspect: 1.36,
                desktop: { w: 22, x: -40, y: 4, z: -20, ry: 22 },
                mobile: { w: 56, x: 24, y: 3, z: -22, ry: -10 },
                float: { y: 1.1, x: 0.4, rx: 1.5, ry: -2.5, duration: 11, delay: -3 },
                parallax: 1.5, order: 4,
            },
            {
                id: 'pipeline', kind: 'pipeline', label: 'crm', aspect: 1.42,
                desktop: { w: 29, x: -24.5, y: 6.5, z: -9, ry: 13 },
                mobile: null,
                float: { y: 0.9, x: -0.3, rx: -1.2, ry: 2, duration: 9, delay: -6 },
                parallax: 1.1, order: 2,
            },
            {
                id: 'website', kind: 'website', label: 'yourbrand.com', aspect: 1.45,
                desktop: { w: 37, x: 0, y: 9, z: 0, ry: 0 },
                mobile: { w: 88, x: 0, y: 12, z: 0, ry: 0 },
                float: { y: 0.8, x: 0, rx: 1, ry: 0.8, duration: 8, delay: 0 },
                parallax: 0.45, order: 0,
            },
            {
                id: 'chatbot', kind: 'chatbot', label: 'ai-assistant', aspect: 1.42,
                desktop: { w: 29, x: 24.5, y: 6.5, z: -9, ry: -13 },
                mobile: { w: 60, x: -22, y: 0, z: -16, ry: 10 },
                float: { y: 1, x: 0.3, rx: 1.2, ry: -2, duration: 10, delay: -2 },
                parallax: 1.1, order: 1,
            },
            {
                id: 'storefront', kind: 'storefront', label: 'store', aspect: 1.36,
                desktop: { w: 22, x: 40, y: 4, z: -20, ry: -22 },
                mobile: null,
                float: { y: 1.2, x: -0.4, rx: -1.5, ry: 2.5, duration: 12, delay: -7 },
                parallax: 1.5, order: 3,
            },
            {
                id: 'mobile', kind: 'mobile', label: 'app', aspect: 0.5,
                desktop: { w: 9.5, x: 17.5, y: 15, z: 8, ry: -8 },
                mobile: { w: 25, x: 33, y: 42, z: 10, ry: -8 },
                float: { y: 1.6, x: 0.2, rx: 2, ry: -4, duration: 7, delay: -1.5 },
                parallax: 1.9, order: 5,
            },
        ] satisfies CompositionCard[],
        chips: [
            {
                id: 'ai', icon: 'bot', label: 'AI automation',
                desktop: { x: -29, y: 28, z: 12 }, mobile: { x: -26, y: 80, z: 12 },
                float: { y: 1.4, x: 0.5, rx: 0, ry: 0, duration: 7.5, delay: -2 }, parallax: 2.3,
            },
            {
                id: 'cloud', icon: 'cloud', label: 'Cloud & hosting',
                desktop: { x: 34, y: 0.5, z: 6 }, mobile: null,
                float: { y: 1.1, x: -0.4, rx: 0, ry: 0, duration: 9, delay: -5 }, parallax: 2,
            },
            {
                id: 'secure', icon: 'shield', label: 'Secure by default',
                desktop: { x: -15, y: 2, z: 5 }, mobile: { x: 18, y: 3, z: 8 },
                float: { y: 1, x: 0.3, rx: 0, ry: 0, duration: 8, delay: -4 }, parallax: 1.8,
            },
            {
                id: 'code', icon: 'code', label: 'Web development',
                desktop: { x: 39, y: 29, z: 10 }, mobile: null,
                float: { y: 1.3, x: -0.3, rx: 0, ry: 0, duration: 8.5, delay: -6.5 }, parallax: 2.2,
            },
        ] satisfies FloatingChip[],
        /**
         * Use [] for chips or links to remove them; reorder / edit cards freely.
         *
         * Glowing data links drawn above the cards (viewBox: 100 x 40 su).
         * Each has its own pulse duration so the flow never looks mechanical.
         */
        links: [
            { d: 'M10 4 C 13 -3, 22 -3, 25.5 6.5', duration: 4.6, delay: 0 },
            { d: 'M25.5 6.5 C 31 -2.5, 44 -2.5, 50 9', duration: 3.8, delay: -1.2 },
            { d: 'M50 9 C 56 -2.5, 69 -2.5, 74.5 6.5', duration: 4.2, delay: -2.4 },
            { d: 'M74.5 6.5 C 78 -3, 87 -3, 90 4', duration: 5, delay: -0.6 },
        ],
    },
} as const;

export type HeroConfig = typeof HERO_CONFIG;

const I = HERO_CONFIG.intro;
const LETTER_COUNT = I.rows.reduce((n, r) => n + r.text.length, 0);

/** Key moments of the intro timeline (ms), derived from the config. */
export const INTRO_TIMELINE = {
    lettersDone: I.initialDelay + (LETTER_COUNT - 1) * I.letterStagger + I.letterDuration,
    get sweepStart() {
        return this.lettersDone + I.sweepDelay;
    },
    get sweepEnd() {
        return this.sweepStart + I.sweepDuration;
    },
    get exitStart() {
        return this.sweepEnd + I.hold;
    },
};
