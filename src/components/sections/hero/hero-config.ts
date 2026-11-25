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
 *   intro.enabled                false → no intro, the hero shows immediately
 *   intro.playOncePerSession     false → the intro plays on every full page load
 *   hero.badge                   null  → no badge above the headline
 *   hero.secondaryCta            null  → hide the secondary button
 *   ambient.enabled              false → no background glow / particles
 *   composition.enabled          false → hide the 3D card composition
 *   composition.rotation.enabled false → cards stay in their starting slots
 *   composition.pointerParallax  false → no mouse-driven parallax
 *   palette.enabled              false → regular brand colours instead of pastels
 */

export type MockupKind = 'analytics' | 'pipeline' | 'website' | 'chatbot' | 'storefront' | 'mobile';

/** A position in the 3D stage (all lengths in stage units). */
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

/** A slot cards travel between. `mobile: null` = the slot is hidden on phones. */
export interface Slot {
    id: string;
    desktop: Placement;
    mobile: Placement | null;
    /** Pointer-parallax strength for whatever card sits here. */
    parallax: number;
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

export type PastelTint = 'lavender' | 'mint' | 'peach' | 'sky' | 'pink';

export interface RotatingCard {
    id: string;
    kind: Exclude<MockupKind, 'mobile'>;
    /** Decorative label in the window chrome. */
    label: string;
    /** Width / height ratio (kept in every slot). */
    aspect: number;
    /** Width (su) the card's content was designed at; content scales from it. */
    designWidth: number;
    /** Slot the card starts in (index into `slots`). */
    startSlot: number;
    /** Pastel surface tint of the window. */
    tint: PastelTint;
    float: FloatMotion;
    /** Entrance order after the intro. */
    order: number;
}

export interface FixedCard {
    id: string;
    kind: MockupKind;
    label: string;
    aspect: number;
    tint: PastelTint;
    desktop: Placement;
    mobile: Placement | null;
    float: FloatMotion;
    parallax: number;
    order: number;
}

export interface FloatingChip {
    id: string;
    icon: 'bot' | 'cloud' | 'shield' | 'code';
    label: string;
    tint: PastelTint;
    desktop: { x: number; y: number; z: number };
    mobile: { x: number; y: number; z: number } | null;
    float: FloatMotion;
    parallax: number;
}

export const HERO_CONFIG = {
    /**
     * Pastel palette for the hero and intro. It keeps the dark design and
     * replaces the strong brand violet with soft pastel tones *inside the hero
     * only* (the rest of the site keeps the regular brand tokens).
     * Set `enabled: false` to use the regular brand colours in the hero too.
     */
    palette: {
        enabled: true,
        /** Pastel replacements for the brand tokens (--primary, --brand-light, --brand-dark). */
        primary: 'oklch(0.78 0.11 300)',
        primaryLight: 'oklch(0.89 0.06 300)',
        primaryDeep: 'oklch(0.64 0.12 300)',
        /** Text colour used on pastel buttons. */
        ink: '#16121f',
        tints: {
            lavender: '#d3c4ff',
            mint: '#bdeedb',
            peach: '#ffd8c2',
            sky: '#c2e0ff',
            pink: '#ffcde6',
        },
    },

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
        /** How far above its spot each letter starts falling (CSS length). */
        fallHeight: '75vh',
        /** Black screen before the first letter drops (ms). */
        initialDelay: 300,
        /** One letter's fall, impact and settle (ms). */
        letterDuration: 820,
        /** Delay between consecutive letters (ms) — letters fall one by one. */
        letterStagger: 48,
        /** Pause between the last letter landing and the light sweep (ms). */
        sweepDelay: 60,
        /** Light sweep across the finished wordmark (ms). */
        sweepDuration: 650,
        /** Hold on the finished wordmark before the transition (ms). */
        hold: 380,
        /** Transition into the hero (ms). */
        exitDuration: 750,
        /** Transition when the visitor skips (ms). */
        skipExitDuration: 450,
        /** Hard cap: the intro always ends by this time (ms). */
        maxDuration: 6000,
        /** Camera perspective (px). */
        perspective: 1100,
        /** Ambient particle count. */
        particles: 28,
        /** Light streak canvas settings (reuses CinematicStreaksCanvas). */
        streaks: { count: 8, intensity: 0.8, speed: 1.2 },
    },

    hero: {
        /** Small pill above the headline; null hides it. */
        badge: null as string | null,
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
        /**
         * Cards keep trading places: every `interval` ms the next card glides
         * into the centre slot (full size, front, readable) and the previous
         * centre card moves back into the slot it left.
         */
        rotation: {
            enabled: true,
            /** Time between swaps (ms). */
            interval: 4200,
            /** Duration of one swap (ms). */
            duration: 1400,
            /** Pause while the pointer is over the cards, so a card can be read. */
            pauseOnHover: true,
            /** Index of the front / centre slot in `slots`. */
            centerSlot: 2,
            /** Extra wait after the card entrance finishes before the first swap (ms). */
            firstSwapDelay: 2600,
        },
        /**
         * Off by default (cards stay full size). Desktop only (≥1024px): when
         * enabled, shrink the composition on short screens so the
         * cards always fit in the first screen under the headline instead of
         * being cut off at the bottom.
         *   reserve: vertical space taken by the header + headline block (px)
         *   ratio:   stage width per px of remaining height (≈ 1 / card height share)
         *   min:     never shrink the stage below this width (px)
         */
        fitViewport: { enabled: false, reserve: 490, ratio: 2.75, min: 640 },
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
        entranceDuration: 1000,
        /** Positions the rotating cards move between (left → right). */
        slots: [
            {
                id: 'far-left', parallax: 1.5,
                desktop: { w: 22, x: -40, y: 4, z: -20, ry: 22 },
                mobile: null,
            },
            {
                id: 'mid-left', parallax: 1.1,
                desktop: { w: 29, x: -24.5, y: 6.5, z: -9, ry: 13 },
                mobile: { w: 60, x: -22, y: 0, z: -16, ry: 10 },
            },
            {
                id: 'center', parallax: 0.45,
                desktop: { w: 37, x: 0, y: 9, z: 0, ry: 0 },
                mobile: { w: 88, x: 0, y: 12, z: 0, ry: 0 },
            },
            {
                id: 'mid-right', parallax: 1.1,
                desktop: { w: 29, x: 24.5, y: 6.5, z: -9, ry: -13 },
                mobile: { w: 56, x: 24, y: 3, z: -22, ry: -10 },
            },
            {
                id: 'far-right', parallax: 1.5,
                desktop: { w: 22, x: 40, y: 4, z: -20, ry: -22 },
                mobile: null,
            },
        ] satisfies Slot[],
        /**
         * Browser-window cards that rotate through the slots. All share one
         * design width and aspect ratio, so every card looks identical in
         * proportion in any slot and is simply scaled by the slot's width.
         */
        cards: [
            {
                id: 'analytics', kind: 'analytics', label: 'analytics', aspect: 1.45, designWidth: 37, startSlot: 0, tint: 'sky',
                float: { y: 1.1, x: 0.4, rx: 1.5, ry: -2.5, duration: 11, delay: -3 }, order: 4,
            },
            {
                id: 'pipeline', kind: 'pipeline', label: 'crm', aspect: 1.45, designWidth: 37, startSlot: 1, tint: 'mint',
                float: { y: 0.9, x: -0.3, rx: -1.2, ry: 2, duration: 9, delay: -6 }, order: 2,
            },
            {
                id: 'website', kind: 'website', label: 'yourbrand.com', aspect: 1.45, designWidth: 37, startSlot: 2, tint: 'lavender',
                float: { y: 0.8, x: 0, rx: 1, ry: 0.8, duration: 8, delay: 0 }, order: 0,
            },
            {
                id: 'chatbot', kind: 'chatbot', label: 'ai-assistant', aspect: 1.45, designWidth: 37, startSlot: 3, tint: 'pink',
                float: { y: 1, x: 0.3, rx: 1.2, ry: -2, duration: 10, delay: -2 }, order: 1,
            },
            {
                id: 'storefront', kind: 'storefront', label: 'store', aspect: 1.45, designWidth: 37, startSlot: 4, tint: 'peach',
                float: { y: 1.2, x: -0.4, rx: -1.5, ry: 2.5, duration: 12, delay: -7 }, order: 3,
            },
        ] satisfies RotatingCard[],
        /** Cards that keep a fixed position (in front of the rotation). */
        fixedCards: [
            {
                id: 'mobile', kind: 'mobile', label: 'app', aspect: 0.5, tint: 'lavender',
                desktop: { w: 9.5, x: 17.5, y: 15, z: 8, ry: -8 },
                mobile: { w: 25, x: 33, y: 42, z: 10, ry: -8 },
                float: { y: 1.6, x: 0.2, rx: 2, ry: -4, duration: 7, delay: -1.5 },
                parallax: 1.9, order: 5,
            },
        ] satisfies FixedCard[],
        chips: [
            {
                id: 'ai', icon: 'bot', label: 'AI automation', tint: 'mint',
                desktop: { x: -29, y: 28, z: 12 }, mobile: { x: -26, y: 80, z: 12 },
                float: { y: 1.4, x: 0.5, rx: 0, ry: 0, duration: 7.5, delay: -2 }, parallax: 2.3,
            },
            {
                id: 'cloud', icon: 'cloud', label: 'Cloud & hosting', tint: 'sky',
                desktop: { x: 34, y: 0.5, z: 6 }, mobile: null,
                float: { y: 1.1, x: -0.4, rx: 0, ry: 0, duration: 9, delay: -5 }, parallax: 2,
            },
            {
                id: 'secure', icon: 'shield', label: 'Secure by default', tint: 'lavender',
                desktop: { x: -15, y: 2, z: 5 }, mobile: { x: 18, y: 3, z: 8 },
                float: { y: 1, x: 0.3, rx: 0, ry: 0, duration: 8, delay: -4 }, parallax: 1.8,
            },
            {
                id: 'code', icon: 'code', label: 'Web development', tint: 'peach',
                desktop: { x: 39, y: 29, z: 10 }, mobile: null,
                float: { y: 1.3, x: -0.3, rx: 0, ry: 0, duration: 8.5, delay: -6.5 }, parallax: 2.2,
            },
        ] satisfies FloatingChip[],
        /**
         * Use [] for chips or links to remove them.
         *
         * Glowing data links drawn above the slots (viewBox: 100 x 40 su).
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
