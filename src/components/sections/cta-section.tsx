'use client';

import { ArrowUpRight } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   INFINITE MARQUEE TYPOGRAPHY CTA
───────────────────────────────────────────────────────────── */
function MarqueeItem() {
    return (
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-10 pr-4 sm:pr-6 lg:pr-10 shrink-0">
            <h2 className="font-heading text-[16vw] sm:text-[10vw] lg:text-[14vw] font-medium tracking-tight leading-none text-foreground mix-blend-plus-darker  whitespace-nowrap pt-8 pb-4">
                Let&apos;s work together.
            </h2>
            <div className="flex items-center justify-center w-[10vw] h-[10vw] sm:w-[6vw] sm:h-[6vw] lg:w-[8vw] lg:h-[8vw] rounded-full bg-primary shrink-0 mt-2 sm:mt-4 lg:mt-6 transition-transform hover:scale-105 hover:-rotate-12 cursor-pointer shadow-[0_0_40px_rgba(144,97,249,0.4)]">
                <ArrowUpRight className="w-[5vw] h-[5vw] sm:w-[3vw] sm:h-[3vw] lg:w-[4vw] lg:h-[4vw] text-primary-foreground stroke-[1.5]" />
            </div>
        </div>
    );
}

export function CtaSection() {
    return (
        <section className="relative w-full bg-background pt-16 lg:pt-32 pb-16 lg:pb-32 overflow-hidden flex flex-col items-center justify-center z-10 transition-colors duration-500 rounded-t-[2.5rem] lg:rounded-t-[4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] -mt-16 lg:-mt-24 rounded-b-none">
            {/* The Infinite Marquee (Top - Scrolls Left) */}
            <div className="w-full flex overflow-hidden shrink-0 group">
                <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused] transition-all duration-300">
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                </div>
            </div>

            {/* The Infinite Marquee (Bottom - Scrolls Right) */}
            <div className="w-full flex overflow-hidden shrink-0 group -mt-[2vw]">
                <div 
                    className="flex items-center animate-marquee group-hover:[animation-play-state:paused] transition-all duration-300"
                    style={{ animationDirection: 'reverse' }}
                >
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                    <MarqueeItem />
                </div>
            </div>


        </section>
    );
}
