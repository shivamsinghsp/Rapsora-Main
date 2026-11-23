'use client';

import { useSyncExternalStore } from 'react';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Frontend-only visitor counter.
 *
 * - The total is persisted in `localStorage`, so it survives browser restarts.
 * - A flag in `sessionStorage` marks the current browser session as counted,
 *   so refreshes, client-side navigations and re-renders never increment twice.
 * - Storage is only touched on the client (inside `subscribe`), never during
 *   server rendering. The server snapshot is `undefined`, so the server HTML
 *   and the first client render match and no hydration mismatch can occur.
 * - If storage is blocked (private mode, disabled cookies, quota errors) the
 *   component shows a neutral fallback instead of throwing.
 *
 * Note: because storage is per browser, this counts visits made from the
 * current browser only. No backend or third-party service is involved.
 */

const COUNT_KEY = 'rapsora:visitor-count';
const SESSION_KEY = 'rapsora:visitor-session';

/** `undefined` = not resolved yet, `null` = storage unavailable. */
type Snapshot = number | null | undefined;

let snapshot: Snapshot = undefined;

const numberFormatter = new Intl.NumberFormat('en-US');

function readCount(): number | null {
    try {
        const raw = window.localStorage.getItem(COUNT_KEY);
        const parsed = raw === null ? 0 : Number.parseInt(raw, 10);
        return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    } catch {
        return null;
    }
}

/** Increments the stored total once per browser session and returns it. */
function registerVisit(): number | null {
    try {
        const count = readCount();
        if (count === null) return null;

        if (window.sessionStorage.getItem(SESSION_KEY) !== null) {
            return count;
        }

        const next = count + 1;
        window.localStorage.setItem(COUNT_KEY, String(next));
        window.sessionStorage.setItem(SESSION_KEY, '1');
        return next;
    } catch {
        return null;
    }
}

function subscribe(onChange: () => void) {
    // Runs on the client after mount. The module-level snapshot makes this
    // idempotent across remounts and React Strict Mode double-invocation.
    if (snapshot === undefined) {
        snapshot = registerVisit();
        onChange();
    }

    // Keep multiple open tabs in sync when another tab updates the total.
    const handleStorage = (event: StorageEvent) => {
        if (event.key !== COUNT_KEY) return;
        snapshot = readCount();
        onChange();
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
}

const getSnapshot = (): Snapshot => snapshot;
const getServerSnapshot = (): Snapshot => undefined;

interface VisitorCounterProps {
    className?: string;
}

export function VisitorCounter({ className }: VisitorCounterProps) {
    const count = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const isUnavailable = count === null;
    const display = typeof count === 'number' ? numberFormatter.format(count) : '—';

    return (
        <div
            className={cn('inline-flex items-center gap-2 whitespace-nowrap', className)}
            aria-live="polite"
        >
            <Users className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
            <span>Total Visitors:</span>
            <span
                className="min-w-[2ch] font-semibold tabular-nums text-white"
                aria-label={isUnavailable ? 'Unavailable' : undefined}
                title={isUnavailable ? 'Visitor count unavailable in this browser' : undefined}
            >
                {display}
            </span>
        </div>
    );
}
