'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────
   TEAM DATA — Founder & Co-Founder
───────────────────────────────────────────────────────────── */
export const TEAM_MEMBERS = [
    {
        name: 'Ashish Singh',
        role: 'Founder',
        hook: 'BUILDING THE FUTURE',
        bio: 'Leading product vision and business growth while transforming ideas into scalable, real-world solutions.',
        image: '/images/Ashish-portrait.jpg',
        socials: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Xxxx Xxxx',
        role: 'Co-Founder',
        hook: 'STRATEGIC INNOVATION',
        bio: 'Driving technical excellence and strategic operations for sustainable digital growth.',
        image: '/images/blank-portrait.png',
        socials: { linkedin: '#', twitter: '#' },
    },
];

/* ─────────────────────────────────────────────────────────────
   MAIN TEAM SECTION
───────────────────────────────────────────────────────────── */
export function TeamSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

    const m = TEAM_MEMBERS;

    return (
        <section
            ref={sectionRef}
            id="team"
            className="relative w-full bg-background pt-16 pb-28 sm:pb-36 lg:pt-24 lg:pb-48 overflow-hidden"
        >
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

                {/* ═══════════════════════════════════════════
                    HEADER
                ═══════════════════════════════════════════ */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-16">
                    <div>
                        {/* Section label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                            className="flex items-center gap-3.5 mb-6 lg:mb-8"
                        >
                            <div className="relative flex h-3 w-3 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_#9061F9]"></span>
                            </div>
                            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                                Our Team
                            </h2>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                            className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground"
                        >
                            The Minds Behind
                            <br className="hidden sm:block" />
                            <span className="text-foreground/40"> Our Bold Vision</span>
                        </motion.h2>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════
                    2-MEMBER CARDS GRID (Founder & Co-Founder)
                ═══════════════════════════════════════════ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
                    {m.map((member, index) => (
                        <motion.div
                            key={member.name + index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, ease: EASE, delay: index * 0.15 }}
                            className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] shadow-xl"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                            
                            {/* Top hook badge */}
                            <div className="absolute top-5 left-5 z-10">
                                <span className="text-[9px] font-black bg-primary text-primary-foreground px-3 py-1 rounded-md tracking-[0.2em] uppercase shadow-lg">
                                    {member.hook}
                                </span>
                            </div>

                            {/* Bottom details */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
                                <h3 className="font-heading text-2xl font-bold leading-none mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2">
                                    {member.role}
                                </p>
                                <p className="text-[12px] text-white/60 font-medium leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
