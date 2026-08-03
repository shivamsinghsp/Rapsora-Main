'use client';

import { motion } from 'framer-motion';
import { WorkHero } from '@/components/sections/work/work-hero';
import { WorkGrid } from '@/components/sections/work/work-grid';
import { LetWorkMarquee } from '@/components/sections/work/work-marquee';

export function WorkClient({ works }: { works: any[], categories: Record<string, number> }) {
    return (
        <div className="flex flex-col w-full relative">
            {/* Work Hero */}
            <WorkHero total={works.length} />

            {/* Portfolio Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full px-4 sm:px-6 lg:px-12 mx-auto max-w-[1920px] pb-12 lg:pb-24 pt-4 lg:pt-8"
            >
                {works.length === 0 ? (
                    <div className="text-center py-20 text-foreground/40 font-medium">
                        No projects found.
                    </div>
                ) : (
                    <WorkGrid works={works} />
                )}
            </motion.div>

            {/* Let's work together Marquee */}
            <LetWorkMarquee />
        </div>
    );
}
