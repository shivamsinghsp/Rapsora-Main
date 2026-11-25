'use client';

import { useSyncExternalStore } from 'react';
import { HERO_CONFIG } from './hero-config';

/**
 * Whether the cinematic intro should play.
 *
 * - `pending`: server render and the hydration pass. Nothing browser-specific
 *   is known yet, so server and client markup match (no hydration errors).
 * - `play`:    first homepage visit of this browser session, motion allowed.
 * - `skip`:    already played this session, reduced motion requested, or
 *              storage is unavailable (fail open: show the site, not the intro).
 *
 * On a client-side navigation back to the homepage, `getSnapshot` is used
 * straight away, so the intro never flashes for visitors who have seen it.
 */
export type IntroStatus = 'pending' | 'play' | 'skip';

const { storageKey } = HERO_CONFIG.intro;

let status: Exclude<IntroStatus, 'pending'> | undefined;
const listeners = new Set<() => void>();

function resolveStatus(): Exclude<IntroStatus, 'pending'> {
    try {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'skip';
        return window.sessionStorage.getItem(storageKey) === null ? 'play' : 'skip';
    } catch {
        return 'skip';
    }
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getSnapshot(): IntroStatus {
    if (status === undefined) status = resolveStatus();
    return status;
}

const getServerSnapshot = (): IntroStatus => 'pending';

export function useIntroStatus(): IntroStatus {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Records that the intro has started, so it will not play again this session. */
export function markIntroStarted() {
    try {
        window.sessionStorage.setItem(storageKey, '1');
    } catch {
        /* storage blocked: the intro simply may replay on the next full load */
    }
}

/** Marks the intro as finished; the overlay unmounts on the next render. */
export function completeIntro() {
    markIntroStarted();
    status = 'skip';
    listeners.forEach((listener) => listener());
}
