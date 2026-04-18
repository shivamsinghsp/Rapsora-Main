'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#111]">
            {/* Background Image - Styled to match the dark, premium feel of the reference */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="/images/office-sketch.jpg"
                    alt="Workspace sketch"
                    fill
                    priority
                    className="object-cover opacity-80 dark:invert dark:grayscale"
                />
                {/* Frosted / Liquid Glass overlays */}
                <div className="absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#111]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-11/12 mx-auto flex flex-col h-full flex-1 pt-24 lg:pt-32 pb-6 overflow-hidden">

                {/* Top Content Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 md:gap-8 mt-4 md:mt-12 lg:mt-24 mb-auto max-w-[1600px] mx-auto translate-y-0 md:translate-y-[200%]">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-heading text-[clamp(2.25rem,6vw,2rem)] font-bold leading-[1.1] tracking-tight text-white uppercase max-w-2xl"
                    >
                        We elevate brands <br className="hidden lg:block" />
                        to their highest potential.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-md lg:max-w-lg text-[15px] sm:text-[16px] lg:text-[17px] text-white/80 leading-relaxed font-medium md:text-left"
                    >
                        We help businesses shape the brand and digital presence
                        that drives the next stage of growth, attracting the right audience
                        and building long-term value.
                    </motion.p>
                </div>

                {/* Giant RAPSORA Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full mt-24 lg:mt-auto pt-10 px-2 lg:px-8 max-w-[1800px] mx-auto"
                >
                    {/* Desktop Giant Text */}
                    {/* translate-y drives the text exactly flush to the bottom visually */}
                    <div className="hidden md:flex  items-center justify-center w-full font-sans font-black text-background dark:text-white uppercase leading-[0.7] translate-y-[15%]">
                        <div className="relative inline-flex">
                            <span className="text-[20vw]">R</span>
                            <motion.div
                                initial={{ rotate: -5 }}
                                animate={{ rotate: [5, -5, 5] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                style={{ transformOrigin: "0% 50%" }}
                                className="absolute top-[1vw] left-[-2vw] z-50 drop-shadow-[0_10px_20px_rgba(139,92,246,0.5)] pointer-events-none"
                            >
                                <div
                                    className="relative flex items-center bg-primary text-white w-max pl-8 pr-6 py-3 rounded-r-xl"
                                    style={{ clipPath: "polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)" }}
                                >
                                    <div className="absolute left-2 w-2.5 h-2.5 bg-[#111] rounded-full border border-white/50 shadow-inner" />
                                    <span className="font-bold tracking-widest uppercase text-[1vw] 2xl:text-[14px]">
                                        Future is Loading...
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        <span className="text-[20vw] -ml-[1vw]">A</span>
                        <span className="text-[20vw] -ml-[1vw]">P</span>
                        <span className="text-[20vw] -ml-[1vw]">S</span>

                        {/* The "O" Button */}
                        <Link
                            href="/contact"
                            className="group translate-y-[-3.8%]  scale-[1.05] flex flex-col items-center justify-center  w-[12.5vw] h-[14vw] lg:w-[11vw] lg:h-[13vw] 2xl:w-[180px] 2xl:h-[220px] bg-primary rounded-[10vw] hover:scale-[0.80] hover:bg-primary/90 transition-all duration-500 ease-out cursor-pointer shadow-2xl origin-center z-20 border border-white/10 mx-[-0.5vw]"
                        >
                            <span className="text-white font-semibold text-[1.1vw] 2xl:text-[18px] leading-[1.2] text-center mb-[0.5vw] px-[1vw] tracking-normal lowercase first-letter:capitalize">
                                Request a quote
                            </span>
                            <ArrowRight className="w-[1.8vw] h-[1.8vw] 2xl:w-6 2xl:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <span className="text-[20vw] -ml-[1vw]">R</span>
                        <span className="text-[20vw] -ml-[1vw]">A</span>
                    </div>

                    {/* Mobile View */}
                    <div className="flex md:hidden flex-col items-center gap-6 pb-6 pt-0">
                        <div className="font-sans font-black text-background dark:text-white uppercase leading-[0.8] tracking-tighter text-[16vw]">
                            RAPSORA
                        </div>
                        <Link
                            href="/contact"
                            className="group flex items-center justify-center gap-3 w-full max-w-[300px] py-4 bg-primary rounded-full hover:bg-primary/90 transition-colors border border-white/10"
                        >
                            <span className="text-white font-semibold text-lg hover:underline underline-offset-4">Request a quote</span>
                            <ArrowRight className="w-5 h-5 text-white" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}