'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GooeyCTA } from '@/components/shared/gooey-cta';

const EASE = [0.22, 1, 0.36, 1];

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress over 150% of the viewport height
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smoothing the scroll for that premium 'weighted' feel
    const smoothProgress = useSpring(scrollYProgress, { 
        stiffness: 100, 
        damping: 30, 
        restDelta: 0.001 
    });

    // Video/Container Shrink Logic
    // Start shrinking at 0% scroll, finish at 80% scroll
    const scale = useTransform(smoothProgress, [0, 0.8], [1, 0.92]);
    const borderRadius = useTransform(smoothProgress, [0, 0.8], ["0px", "48px"]);
    const margin = useTransform(smoothProgress, [0, 0.8], ["0px", "24px"]);
    
    // Content Fade Logic (text disappears as it shrinks)
    const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
    const contentScale = useTransform(smoothProgress, [0, 0.4], [1, 0.95]);

    return (
        /* The container height dictates how long the "shrink" takes */
        <section ref={containerRef} className="relative h-[150vh] w-screen -ml-6 md:-ml-12 lg:-ml-16 overflow-x-hidden mt-6">
            
            {/* Sticky ensures the hero stays in view while shrinking */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                
                <motion.div
                    style={{ 
                        scale, 
                        borderRadius,
                        marginLeft: margin,
                        marginRight: margin,
                    }}
                    className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center shadow-2xl"
                >
                    {/* Background Video — Full screen, always visible */}
                    <div className="absolute inset-0 z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        >
                            {/* <source src="https://res.cloudinary.com/dswzqgdf3/video/upload/v1775805732/IMG_4273_zriywt.mov" type="video/mp4" /> */}
                        </video>
                        {/* Dark overlay — ensures text readability in both light & dark mode */}
                        {/* <div className="absolute inset-0 bg-black/60" /> */}
                    </div>

                    {/* Main Content Overlay */}
                    <motion.div 
                        style={{ opacity: contentOpacity, scale: contentScale }}
                        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center text-black"
                    >
                        <h1 className="font-heading mt-20 text-[clamp(2rem,7vw,5rem)] font-medium leading-[1.1] tracking-tight text-black mb-6">
                            From Idea to Execution <br className="hidden lg:block" />
                            <span className="text-black/80">We Power Your Entire Business</span>
                        </h1>

                        <p className="max-w-2xl text-[16px] lg:text-[19px] text-black/70 leading-relaxed mb-10">
                            We help businesses shape the brand and digital presence 
                            that drives the next stage of growth.
                        </p>

                        <div className="flex flex-col items-center gap-10">
                            <GooeyCTA 
                                href="/contact" 
                                text="Request a quote" 
                                pillColorClass="bg-black" 
                                textColorClass="text-white"
                            />

                            {/* Center Scroll Icon */}
                            <motion.button
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="flex items-center justify-center w-12 h-12 rounded-full border border-black/20 bg-black/10 backdrop-blur-sm cursor-pointer z-20"
                                aria-label="Scroll down"
                            >
                                <ArrowDown className="w-5 h-5 text-black" />
                            </motion.button>
                        </div>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
}