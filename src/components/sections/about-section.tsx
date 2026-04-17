'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Magnetic } from '@/components/shared/magnetic';
import { GooeyCTA } from '@/components/shared/gooey-cta';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────────────────────
   REVEAL TEXT COMPONENT (Word-by-word animation)
───────────────────────────────────────────────────────────── */
const ANIMATION_DURATION = 0.6;
const STAGGER_DELAY = 0.035;

function RevealText({ text, className }: { text: string; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

    const words = text.split(" ");

    return (
        <span ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden inline-flex mr-[0.25em] pb-1">
                    <motion.span
                        initial={{ y: "110%", rotate: 2 }}
                        animate={isInView ? { y: 0, rotate: 0 } : { y: "110%", rotate: 2 }}
                        transition={{
                            duration: ANIMATION_DURATION,
                            ease: [0.22, 1, 0.36, 1], // Custom cubic bezier
                            delay: i * STAGGER_DELAY,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

/* ─────────────────────────────────────────────────────────────
   ACTUAL LOGOS
───────────────────────────────────────────────────────────── */

const VercelLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="currentColor" />
    </svg>
)

const FigmaLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19v-9.5A9.5 9.5 0 0 0 19 0H9.5A9.5 9.5 0 0 0 0 9.5v9.5A9.5 9.5 0 0 0 9.5 28.5H19zm0 0v19a9.5 9.5 0 0 1-19 0v-9.5H19a9.5 9.5 0 0 1 0-9.5zm9.5-9.5A9.5 9.5 0 1 0 28.5 38A9.5 9.5 0 0 0 38 28.5a9.5 9.5 0 0 0-9.5-9.5z" fill="currentColor" />
    </svg>
)

const StripeLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11.905 16.59c-2.19 0-4.004-.84-5.328-2.316l1.62-1.788c.9.996 2.052 1.584 3.492 1.584 1.548 0 2.376-.648 2.376-1.584 0-2.484-7.536-1.128-7.536-5.832 0-2.22 1.836-4.008 4.752-4.008 2.016 0 3.636.72 4.908 2.04l-1.632 1.704c-.876-.9-1.92-1.392-3.216-1.392-1.38 0-2.148.66-2.148 1.488 0 2.364 7.536 1.104 7.536 5.868 0 2.316-1.896 4.236-4.824 4.236z" fill="currentColor" />
    </svg>
)

const SupabaseLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M21.362 9.354H12V.204a.2.2 0 00-.33-.15L2.235 9.176A1.8 1.8 0 003.447 12H12v9.15a.2.2 0 00.33.15l9.435-9.122a1.8 1.8 0 00-1.21-3.174z" fill="currentColor" />
    </svg>
)

const LinearLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2a10 10 0 100-20 10 10 0 000 20z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.594 7.025a.862.862 0 01.381 1.157L11.597 18.5a.862.862 0 01-1.538-.724l5.378-10.37a.862.862 0 011.157-.38z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.208 5.751a.862.862 0 011.196.223l5.064 7.518a.862.862 0 11-1.428.962L12.977 6.936a.862.862 0 01.231-1.185z" fill="currentColor" />
    </svg>
)

const NextjsLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.026-15.421H9.52v7.755l6.597-8.918H18.1L10.974 16.52V8.579zm4.27 7.755v-4.14l-3.047 4.14h3.047z" fill="currentColor" />
    </svg>
)

/* ─────────────────────────────────────────────────────────────
   INFINITE MARQUEE COMPONENT (SVG-Based)
───────────────────────────────────────────────────────────── */
const LOGOS = [
    { name: 'Vercel', icon: VercelLogo },
    { name: 'Figma', icon: FigmaLogo },
    { name: 'Stripe', icon: StripeLogo },
    { name: 'Supabase', icon: SupabaseLogo },
    { name: 'Linear', icon: LinearLogo },
    { name: 'Next.js', icon: NextjsLogo },
];

function LogoMarquee() {
    return (
        <div className="relative w-full overflow-hidden shrink-0 mt-24 lg:mt-32 pb-10">
            {/* Gradient masks for edge fading */}
            <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex items-center whitespace-nowrap w-max gap-16 lg:gap-32 pr-16 lg:pr-32 animate-marquee">
                {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 text-foreground transition-all"
                    >
                        <logo.icon className="w-8 h-8 lg:w-10 lg:h-10 fill-current opacity-100" strokeWidth={1.5} />
                        <span className="font-heading font-extrabold tracking-tight text-xl lg:text-3xl uppercase opacity-100">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN ABOUT SECTION
───────────────────────────────────────────────────────────── */
export function AboutSection() {
    const ANIMATED_UNDERLINE = "relative inline-block after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[1.5px] after:bg-current after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out";

    return (
        <section className="relative w-full bg-background pt-8 pb-4 lg:pt-16 lg:pb-8 z-10">
            <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* LEFT COLUMN: Anchor & Title */}
                    <div className="lg:col-span-4 flex items-start pt-2 lg:pt-3">
                        <div className="flex items-center gap-4 text-foreground/80 font-bold tracking-tight text-[15px] lg:text-[17px]">
                            {/* Blinking Dot Hook */}
                            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary mb-0.5 opacity-60"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary mb-0.5"></span>
                            </div>
                            Who are we?
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Tighter Copy & CTAs */}
                    <div className="lg:col-span-8">
                        <RevealText
                            text="An elite digital agency engineering high-converting ecosystems. Established in 2024, we don't just build websites—we craft digital authority that systematically drives revenue."
                            className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight text-foreground mb-12"
                        />

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
                            {/* Magnetic Secondary CTA Pill */}
                            <Magnetic strength={0.4}>
                                <GooeyCTA
                                    text="About RapSora"
                                    pillColorClass="bg-primary"
                                    textColorClass="text-primary-foreground"
                                />
                            </Magnetic>

                            {/* Animated Text Link */}
                            <Magnetic strength={0.2}>
                                <Link
                                    href="/team"
                                    className={cn("group flex items-center gap-2 text-[15px] lg:text-[16px] font-bold text-foreground transition-colors p-2 -ml-2", ANIMATED_UNDERLINE)}
                                >
                                    Meet the Team
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Link>
                            </Magnetic>
                        </div>
                    </div>

                </div>

            </div>

            {/* INFINITE MARQUEE */}
            <LogoMarquee />
        </section>
    );
}
