/**
 * Decorative, animated interface mockups for the hero composition.
 * They illustrate RapSora's service areas (analytics, CRM, web, AI chatbot,
 * e-commerce, mobile); they are not screenshots of real products.
 *
 * Sizes are in `em`: each card's font-size scales with the stage, so the whole
 * composition stays proportional with no JavaScript.
 */
import type { CSSProperties } from 'react';
import { Bot, Lock, MousePointer2, Send, ShoppingBag, Sparkles, Gauge, PenTool, TrendingUp, Bell } from 'lucide-react';
import type { MockupKind } from './hero-config';
import styles from './hero.module.css';
import ui from './mockups.module.css';

function Bar({ w, className = 'bg-foreground/10' }: { w: string; className?: string }) {
    return <span className={`block h-[0.45em] rounded-full ${className}`} style={{ width: w }} />;
}

function Chrome({ label }: { label: string }) {
    return (
        <div className={styles.chrome}>
            <span className={styles.chromeDot} />
            <span className={styles.chromeDot} />
            <span className={styles.chromeDot} />
            <span className={styles.chromeUrl}>
                <Lock className="h-[0.6em] w-[0.6em]" strokeWidth={2.5} />
                <span className="text-[0.6em] font-medium">{label}</span>
            </span>
            <span className="w-[1.8em]" />
        </div>
    );
}

/* -------------------------------- Analytics ------------------------------- */

function AnalyticsMockup() {
    const kpis = [
        { label: 'Visitors', value: '48.2k' },
        { label: 'Conversion', value: '3.9%' },
        { label: 'Sessions', value: '12.6k' },
    ];
    const bars = [0.55, 0.8, 0.45, 0.95, 0.7, 0.6, 0.85];
    return (
        <div className="flex min-h-0 flex-1">
            <div className="flex w-[2.6em] flex-col items-center gap-[0.7em] border-r border-border bg-muted py-[0.9em]">
                <span className="h-[1.1em] w-[1.1em] rounded-[0.3em] bg-primary" />
                {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="h-[0.8em] w-[0.8em] rounded-[0.25em] bg-foreground/10" />
                ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[0.6em] p-[0.9em]">
                <div className="flex items-center justify-between">
                    <span className="text-[0.85em] font-bold">Analytics</span>
                    <span className="flex items-center gap-[0.35em] rounded-full bg-secondary px-[0.6em] py-[0.2em]">
                        <span className={ui.live} />
                        <span className="text-[0.5em] font-semibold text-secondary-foreground">Live</span>
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-[0.5em]">
                    {kpis.map((kpi) => (
                        <div key={kpi.label} className="rounded-[0.5em] border border-border p-[0.5em]">
                            <span className="block text-[0.45em] text-muted-foreground">{kpi.label}</span>
                            <span className="block text-[0.8em] font-bold leading-tight">{kpi.value}</span>
                        </div>
                    ))}
                </div>
                <div className="flex min-h-0 flex-1 gap-[0.5em]">
                    <div className="relative min-w-0 flex-[2] rounded-[0.5em] border border-border p-[0.4em]">
                        <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full overflow-visible">
                            <defs>
                                <linearGradient id="rs-hero-area" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
                                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                className={ui.chartArea}
                                d="M0 66 C20 60 30 46 50 50 S80 26 100 34 S140 14 160 20 S190 8 200 10 L200 80 L0 80 Z"
                                fill="url(#rs-hero-area)"
                            />
                            <path
                                className={ui.chartLine}
                                d="M0 66 C20 60 30 46 50 50 S80 26 100 34 S140 14 160 20 S190 8 200 10"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                            />
                            <circle className={ui.chartPoint} cx="160" cy="20" r="4" fill="var(--primary)" stroke="#fff" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="flex min-w-0 flex-1 items-end gap-[0.25em] rounded-[0.5em] border border-border p-[0.45em]">
                        {bars.map((h, i) => (
                            <span
                                key={i}
                                className={`${ui.bar} block flex-1 rounded-t-[0.2em] ${i === 3 ? 'bg-primary' : 'bg-primary/30'}`}
                                style={{ height: `${h * 100}%`, '--bd': `${2 + (i % 3) * 0.6}s`, '--bdelay': `${-i * 0.4}s` } as CSSProperties}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------ CRM pipeline ------------------------------ */

function DealCard({ tag, tone, className = '' }: { tag: string; tone: 'new' | 'demo' | 'won'; className?: string }) {
    const toneClass = tone === 'won' ? 'bg-primary text-white' : 'bg-secondary text-secondary-foreground';
    return (
        <div className={`flex flex-col gap-[0.4em] rounded-[0.45em] border border-border bg-white p-[0.5em] ${className}`}>
            <Bar w="85%" className="bg-foreground/20" />
            <Bar w="50%" />
            <div className="flex items-center justify-between">
                <span className={`rounded-full px-[0.5em] py-[0.1em] text-[0.42em] font-semibold ${toneClass}`}>{tag}</span>
                <span className="h-[0.9em] w-[0.9em] rounded-full bg-foreground/15" />
            </div>
        </div>
    );
}

function PipelineMockup() {
    return (
        <div className="flex min-h-0 flex-1 flex-col gap-[0.8em] p-[1em]">
            <div className="flex items-center justify-between">
                <span className="text-[0.95em] font-bold">Sales pipeline</span>
                <div className="flex -space-x-[0.35em]">
                    {['bg-primary', 'bg-brand-light', 'bg-foreground/70'].map((c) => (
                        <span key={c} className={`h-[1.2em] w-[1.2em] rounded-full border-[0.12em] border-white ${c}`} />
                    ))}
                </div>
            </div>
            <div className="grid min-h-0 flex-1 grid-cols-3 gap-[0.6em]">
                {/* Leads: the top deal glides into the Qualified slot on a loop */}
                <div className="flex flex-col gap-[0.5em] rounded-[0.6em] bg-muted p-[0.5em]">
                    <span className="px-[0.15em] text-[0.55em] font-semibold text-muted-foreground">Leads</span>
                    <DealCard tag="Hot lead" tone="new" className={ui.deal} />
                    <DealCard tag="New" tone="new" />
                    <DealCard tag="New" tone="new" />
                </div>
                <div className="flex flex-col gap-[0.5em] rounded-[0.6em] bg-muted p-[0.5em]">
                    <span className="px-[0.15em] text-[0.55em] font-semibold text-muted-foreground">Qualified</span>
                    <div className={`${ui.slot} h-[3.55em] shrink-0 rounded-[0.45em]`} />
                    <DealCard tag="Demo" tone="demo" />
                </div>
                <div className="flex flex-col gap-[0.5em] rounded-[0.6em] bg-muted p-[0.5em]">
                    <span className="px-[0.15em] text-[0.55em] font-semibold text-muted-foreground">Won</span>
                    <DealCard tag="Closed" tone="won" />
                    <DealCard tag="Closed" tone="won" />
                </div>
            </div>
        </div>
    );
}

/* --------------------------------- Website -------------------------------- */

function WebsiteMockup() {
    const features = [
        { icon: Gauge, title: 'Performance' },
        { icon: PenTool, title: 'Design' },
        { icon: TrendingUp, title: 'Growth' },
    ];
    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center justify-between px-[1.4em] py-[0.9em]">
                <div className="flex items-center gap-[0.4em]">
                    <span className="h-[1em] w-[1em] rounded-full bg-primary" />
                    <Bar w="3.2em" className="bg-foreground/80" />
                </div>
                <div className="flex items-center gap-[0.9em]">
                    <Bar w="2.2em" />
                    <Bar w="2.6em" />
                    <Bar w="2em" />
                    <span className="rounded-full bg-foreground px-[0.9em] py-[0.3em] text-[0.55em] font-semibold text-white">
                        Get started
                    </span>
                </div>
            </div>
            <div className="relative flex flex-col items-center px-[2em] pt-[1.1em] text-center">
                <div
                    className={`${ui.heroGlow} pointer-events-none absolute inset-x-[15%] top-0 h-[7em] rounded-full blur-[2em]`}
                    style={{ background: 'color-mix(in oklch, var(--primary) 26%, transparent)' }}
                />
                <span className="relative inline-flex items-center gap-[0.3em] rounded-full border border-border bg-white px-[0.7em] py-[0.2em]">
                    <Sparkles className="h-[0.6em] w-[0.6em] text-primary" />
                    <span className="text-[0.5em] font-semibold">Now live</span>
                    <span className={ui.live} />
                </span>
                <span className="relative mt-[0.6em] block font-heading text-[1.55em] font-bold leading-[1.1] tracking-tight">
                    Your next big idea,
                    <br />
                    built to scale.
                </span>
                <div className="relative mt-[0.8em] flex w-[60%] flex-col items-center gap-[0.35em]">
                    <Bar w="100%" />
                    <Bar w="75%" />
                </div>
                <div className="relative mt-[0.9em] flex gap-[0.5em]">
                    <span className={`${ui.ctaPress} rounded-full bg-primary px-[1.1em] py-[0.4em] text-[0.55em] font-semibold text-white`}>
                        Start now
                    </span>
                    <span className="rounded-full border border-border px-[1.1em] py-[0.4em] text-[0.55em] font-semibold">Learn more</span>
                    <MousePointer2 className={ui.cursor} fill="currentColor" strokeWidth={1.5} stroke="#fff" />
                </div>
            </div>
            <div className="mt-auto grid grid-cols-3 gap-[0.7em] px-[1.4em] pb-[1.3em] pt-[1em]">
                {features.map(({ icon: Icon, title }, i) => (
                    <div
                        key={title}
                        className={`${ui.featureCard} flex flex-col gap-[0.45em] rounded-[0.7em] border border-border bg-muted p-[0.7em]`}
                        style={{ '--fdelay': `${i * 3}s` } as CSSProperties}
                    >
                        <span className="grid h-[1.6em] w-[1.6em] place-items-center rounded-[0.45em] bg-secondary text-primary">
                            <Icon className="h-[0.9em] w-[0.9em]" />
                        </span>
                        <span className="text-[0.62em] font-bold">{title}</span>
                        <Bar w="90%" />
                        <Bar w="65%" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* --------------------------------- Chatbot -------------------------------- */

function ChatbotMockup() {
    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-[0.6em] border-b border-border px-[1em] py-[0.7em]">
                <span className="grid h-[1.8em] w-[1.8em] place-items-center rounded-full bg-primary text-white">
                    <Bot className="h-[1em] w-[1em]" />
                </span>
                <div className="flex flex-col">
                    <span className="text-[0.75em] font-bold leading-tight">AI Assistant</span>
                    <span className="flex items-center gap-[0.3em]">
                        <span className={ui.live} />
                        <span className="text-[0.5em] text-muted-foreground">Online</span>
                    </span>
                </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-[0.6em] bg-muted/60 p-[1em]">
                <span className={`${ui.msg1} max-w-[75%] self-start rounded-[0.8em] rounded-bl-[0.2em] bg-white px-[0.8em] py-[0.5em] shadow-sm`}>
                    <span className="block text-[0.6em] leading-snug">Hi! How can I help you today?</span>
                </span>
                <span className={`${ui.msg2} max-w-[75%] self-end rounded-[0.8em] rounded-br-[0.2em] bg-primary px-[0.8em] py-[0.5em] text-white`}>
                    <span className="block text-[0.6em] leading-snug">Can I book a demo for Friday?</span>
                </span>
                <div className="relative">
                    <span className={`${ui.typing} absolute left-0 top-0 flex gap-[0.25em] rounded-full bg-white px-[0.7em] py-[0.55em] shadow-sm`}>
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`${ui.typingDot} h-[0.4em] w-[0.4em] rounded-full bg-foreground/40`}
                                style={{ '--d': `${i * 0.15}s` } as CSSProperties}
                            />
                        ))}
                    </span>
                    <span className={`${ui.msg3} inline-block max-w-[80%] rounded-[0.8em] rounded-bl-[0.2em] bg-white px-[0.8em] py-[0.5em] shadow-sm`}>
                        <span className="block text-[0.6em] leading-snug">Done! You&apos;re booked for Friday at 11:00.</span>
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-[0.5em] border-t border-border p-[0.7em]">
                <span className="flex h-[1.9em] flex-1 items-center rounded-full border border-border px-[0.8em]">
                    <span className="text-[0.55em] text-muted-foreground">Type a message…</span>
                </span>
                <span className="grid h-[1.9em] w-[1.9em] place-items-center rounded-full bg-primary text-white">
                    <Send className="h-[0.85em] w-[0.85em]" />
                </span>
            </div>
        </div>
    );
}

/* ------------------------------- Storefront ------------------------------- */

function StorefrontMockup() {
    const tints = [30, 18, 12, 24];
    return (
        <div className="flex min-h-0 flex-1 flex-col gap-[0.7em] p-[0.9em]">
            <div className="flex items-center justify-between">
                <span className="text-[0.85em] font-bold">New arrivals</span>
                <span className="relative">
                    <ShoppingBag className="h-[1em] w-[1em] text-primary" />
                    <span className={`${ui.cartBadge} absolute -right-[0.35em] -top-[0.3em] grid h-[0.8em] w-[0.8em] place-items-center rounded-full bg-primary`}>
                        <span className="text-[0.4em] font-bold text-white">2</span>
                    </span>
                </span>
            </div>
            <div className="grid min-h-0 flex-1 grid-cols-2 gap-[0.6em]">
                {tints.map((t, i) => (
                    <div
                        key={i}
                        className={`${ui.tile} flex min-h-0 flex-col gap-[0.35em] rounded-[0.55em] border border-border bg-white p-[0.4em]`}
                        style={{ '--tdelay': `${i * 2}s` } as CSSProperties}
                    >
                        <span
                            className="block min-h-0 flex-1 rounded-[0.4em]"
                            style={{
                                background: `linear-gradient(135deg, color-mix(in oklch, var(--primary) ${t}%, white), color-mix(in oklch, var(--brand-light) ${t / 2}%, white))`,
                            }}
                        />
                        <div className="flex items-center justify-between">
                            <Bar w="55%" className="bg-foreground/20" />
                            <span className="text-[0.5em] font-bold">${29 + i * 10}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* --------------------------------- Mobile --------------------------------- */

function MobileMockup() {
    return (
        <div className={styles.phone}>
            <span className={styles.phoneNotch} />
            <div className={`${ui.toast} absolute inset-x-[0.5em] top-[1.6em] z-[5] flex items-center gap-[0.4em] rounded-[0.6em] bg-foreground px-[0.5em] py-[0.45em] text-white shadow-lg`}>
                <Bell className="h-[0.7em] w-[0.7em] shrink-0 text-brand-light" />
                <span className="text-[0.42em] font-semibold leading-tight">New order received</span>
            </div>
            <div className="flex h-full flex-col gap-[0.6em] px-[0.7em] pb-[0.7em] pt-[1.8em]">
                <span className="text-[0.5em] text-muted-foreground">Good morning</span>
                <span className="-mt-[0.4em] text-[0.8em] font-bold leading-tight">Dashboard</span>
                <div className="rounded-[0.7em] bg-primary p-[0.6em] text-white">
                    <span className="block text-[0.42em] opacity-80">Weekly goal</span>
                    <span className="block text-[0.85em] font-bold">On track</span>
                    <span className="mt-[0.3em] block h-[0.35em] overflow-hidden rounded-full bg-white/30">
                        <span className={`${ui.fill} block h-full w-full rounded-full bg-white`} />
                    </span>
                </div>
                {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-[0.45em] rounded-[0.5em] border border-border p-[0.4em]">
                        <span className="h-[1.1em] w-[1.1em] shrink-0 rounded-[0.35em] bg-secondary" />
                        <div className="flex flex-1 flex-col gap-[0.25em]">
                            <Bar w="80%" className="bg-foreground/20" />
                            <Bar w="50%" />
                        </div>
                    </div>
                ))}
                <div className="mt-auto flex justify-around border-t border-border pt-[0.5em]">
                    {[0, 1, 2, 3].map((i) => (
                        <span key={i} className={`h-[0.6em] w-[0.6em] rounded-full ${i === 0 ? 'bg-primary' : 'bg-foreground/15'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const BROWSER_MOCKUPS: Record<Exclude<MockupKind, 'mobile'>, () => React.ReactElement> = {
    analytics: AnalyticsMockup,
    pipeline: PipelineMockup,
    website: WebsiteMockup,
    chatbot: ChatbotMockup,
    storefront: StorefrontMockup,
};

/** A single floating interface preview (browser window or phone). */
export function InterfaceCard({ kind, label, sheenDelay }: { kind: MockupKind; label: string; sheenDelay: number }) {
    if (kind === 'mobile') return <MobileMockup />;
    const Content = BROWSER_MOCKUPS[kind];
    return (
        <div className={styles.window}>
            <Chrome label={label} />
            <Content />
            <span className={styles.sheen} style={{ '--sheen-delay': `${sheenDelay}s` } as CSSProperties} aria-hidden="true" />
        </div>
    );
}
