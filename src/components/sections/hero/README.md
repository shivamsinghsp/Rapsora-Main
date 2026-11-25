# Homepage hero — customisation guide

Almost everything is controlled from **`hero-config.ts`**. You rarely need to
touch the components or CSS.

## Quick switches

| Setting | Effect |
| --- | --- |
| `intro.enabled: false` | No intro; the hero appears immediately. |
| `intro.playOncePerSession: false` | Intro plays on every full page load (handy while designing). |
| `ambient.enabled: false` | Removes the animated background (glows, grid, particles). |
| `composition.enabled: false` | Hides the 3D card composition. |
| `composition.pointerParallax: false` | Disables mouse-driven parallax/tilt. |
| `hero.secondaryCta: null` | Hides the "Explore services" button. |

Visitors with **reduced motion** enabled never see the intro or the motion
loops, whatever these settings say.

## Text

- `hero.badge`, `hero.headline.lead`, `hero.headline.emphasis` (violet italic
  part), `hero.description`, `hero.primaryCta`, `hero.secondaryCta`.
- Intro: `intro.rows` (the 3D letters, one entry per line), `intro.tagline`.

## Intro look and timing

- `intro.rows[].size` / `depth` / `tracking`: letter size, extrusion layers,
  gap between letters.
- `intro.extrusionStep`: how deep each extrusion layer sits.
- `initialDelay`, `letterDuration`, `letterStagger`, `sweepDuration`, `hold`,
  `exitDuration`: the timeline in ms. `maxDuration` is a hard cap.
- `intro.streaks`, `intro.particles`: backdrop intensity.

To replay the intro while testing, open a new tab or run
`sessionStorage.removeItem('rapsora:intro-played')` in the browser console.

## Cards, chips and links

Units are **su** (1 su = 1% of the stage width), so layouts scale fluidly.

- `composition.cards[]`: each card has a `kind` (analytics, pipeline, website,
  chatbot, storefront, mobile), a `desktop` and `mobile` placement
  (`w`, `x`, `y`, `z` depth, `ry` rotation; `mobile: null` hides it on phones),
  its own `float` motion (`y`, `x`, `rx`, `ry`, `duration`, `delay`),
  a `parallax` strength and an entrance `order`.
- `composition.chips[]`: floating capability pills (`[]` removes them).
- `composition.links[]`: glowing SVG arcs between cards (`[]` removes them).
- `motionScale`: lighter idle motion on tablets (`md`) and phones (`base`).
- `tilt`, `perspective`, `height`, `stageWidth`: stage geometry.

## Background

- `ambient.particles` (0 removes them), `ambient.auroraDuration`,
  `ambient.orbitDurations` (one ring per entry, `[]` removes them).

## Files

| File | Role |
| --- | --- |
| `hero-config.ts` | All settings. |
| `cinematic-intro.tsx`, `use-intro-status.ts` | Intro timeline and once-per-session logic. |
| `hero-content.tsx` | Badge, headline, description, CTAs. |
| `technology-composition.tsx` | 3D stage, cards, chips, links, pointer parallax. |
| `interface-mockups.tsx` | The card UIs (edit to change what the cards show). |
| `background-effects.tsx` | Ambient background layer. |
| `intro.module.css`, `hero.module.css`, `mockups.module.css` | Visuals and keyframes. Colours come from the global brand tokens (`--primary`, `--brand-light`, …). |
