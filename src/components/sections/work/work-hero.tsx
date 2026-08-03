'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

interface WorkHeroProps {
    total: number;
}

export function WorkHero({ total }: WorkHeroProps) {
    return (
        <section className="relative w-full px-6 sm:px-12 lg:px-20 pt-12 lg:pt-24 pb-12 lg:pb-16 mx-auto max-w-[1920px]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="w-full flex flex-col gap-10"
            >
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-[13px] font-bold tracking-widest uppercase w-fit">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Selected Works ({total} Featured Projects)
                </div>

                {/* Main Hero Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-20">
                    <h1 className="text-6xl sm:text-8xl lg:text-[110px] xl:text-[130px] font-heading font-medium tracking-tight text-foreground leading-[0.9] uppercase">
                        OUR WORK
                    </h1>

                    <div className="max-w-xl lg:pb-4">
                        <p className="text-[18px] sm:text-[21px] leading-[1.6] text-foreground/80 font-medium tracking-tight">
                            Crafting high-impact web platforms, bespoke digital architectures, and revenue-driving online experiences for ambitious brands.
                        </p>
                    </div>
                </div>

                {/* Subtle Divider */}
                <div className="w-full h-[1px] bg-foreground/10 mt-6 lg:mt-10" />
            </motion.div>
        </section>
    );
}
