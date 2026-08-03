'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactHero() {
    return (
        <section className="relative w-full bg-background text-foreground pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-20 mx-auto max-w-[1920px] overflow-hidden">
            {/* Ambient Background Blur Accents */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col gap-6">
                {/* Top Status Indicator */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="flex items-center gap-3.5"
                >
                    <div className="relative flex h-3 w-3 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_#9061F9]"></span>
                    </div>
                    <span className="font-heading text-xs sm:text-sm font-extrabold tracking-widest uppercase text-foreground">
                        GET IN TOUCH
                    </span>
                </motion.div>

                {/* Giant Contact Us Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                    className="font-heading text-[12vw] sm:text-[10vw] lg:text-[130px] xl:text-[160px] font-bold leading-[0.9] tracking-[-0.04em] text-foreground uppercase"
                >
                    CONTACT US
                </motion.h1>

                {/* Bottom Line Divider */}
                <div className="w-full h-[1px] bg-foreground/10 mt-6 sm:mt-10" />
            </div>
        </section>
    );
}
