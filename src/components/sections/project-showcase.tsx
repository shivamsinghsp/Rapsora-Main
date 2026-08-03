'use client';

import { motion } from "framer-motion";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { PROJECTS } from "@/data/projects";

export function ProjectShowcase() {
    const focusRailItems: FocusRailItem[] = PROJECTS.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.subtitle,
        imageSrc: p.image,
        href: p.link,
        meta: p.tags.join(" • ") || p.category,
        color: p.color,
    }));

    return (
        <div className="w-full bg-transparent px-6 sm:px-10 lg:px-16 py-4">
            {/* Section Title — matching large elevated design */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="flex items-center gap-3.5 mb-6 lg:mb-8 ml-2 sm:ml-4 lg:ml-8"
            >
                <div className="relative flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_#9061F9]"></span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                    Our Work
                </h2>
            </motion.div>

            <section className="relative w-full overflow-hidden group">
                <FocusRail 
                    items={focusRailItems} 
                    autoPlay={false} 
                    loop={true} 
                />
            </section>
        </div>
    );
}
