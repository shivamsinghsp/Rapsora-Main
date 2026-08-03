'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AboutBranding() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="relative w-full h-[60vh] lg:h-[80vh] bg-black flex items-center justify-center overflow-hidden">
            {/* Split Branding Text */}
            <div className="relative flex flex-col items-center w-full">
                <motion.h2 
                    style={{ x: xLeft }}
                    className="text-[15vw] lg:text-[12vw] font-bold leading-none tracking-tighter text-white select-none whitespace-nowrap translate-y-2 lg:translate-y-4"
                >
                    RAPSORA TECHNOLOGIES
                </motion.h2>
                <div className="w-full h-px bg-white/20 my-2 lg:my-4" />
                <motion.h2 
                    style={{ x: xRight }}
                    className="text-[15vw] lg:text-[12vw] font-bold leading-none tracking-tighter text-white select-none opacity-40 whitespace-nowrap -translate-y-2 lg:-translate-y-4"
                >
                    RAPSORA TECHNOLOGIES
                </motion.h2>
            </div>
        </section>
    );
}
