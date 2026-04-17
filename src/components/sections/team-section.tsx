'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────
   TEAM DATA
───────────────────────────────────────────────────────────── */
export const TEAM_MEMBERS = [
    {
        name: 'Shivam Singh',
        role: 'Frontend Developer',
        hook: 'CRAFTING MODERN INTERFACES',
        bio: 'Frontend developer building fast, responsive, and visually engaging web experiences.',
        image: '/images/andy-portrait.jpg',
        socials: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Vipin Yadav',
        role: 'Software Developer',
        hook: 'BUILDING SYSTEMS THAT SCALE',
        bio: 'Code craftsman turning complex problems into elegant, user-centric digital solutions.',
        image: '/images/jason-portrait.jpg',
        socials: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
        name: 'Ashish Singh',
        role: 'Founder',
        hook: 'BUILDING THE FUTURE',
        bio: 'Leading product vision and business growth while transforming ideas into scalable, real-world solutions.',
        image: '/images/natasia-portrait.jpg',
        socials: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Aditya Sharma',
        role: 'AI/ML Engineer',
        hook: 'BUILDING INTELLIGENT SYSTEMS',
        bio: 'AI/ML engineer focused on transforming data into scalable solutions, predictive insights, and real-world impact.',
        image: '/images/hero-portrait.jpg',
        socials: { linkedin: '#' },
    },
    {
        name: 'Shreyansh Gupta',
        role: 'Fullstack Developer',
        hook: 'BUILDING END-TO-END SYSTEMS',
        bio: 'Fullstack developer crafting scalable backend systems and seamless, high-performance user interfaces.',
        image: '/images/joe-portrait.jpg',
        socials: { linkedin: '#', github: '#' },
    },
    {
        name: 'Prachi Shahu',
        role: 'Human Resources',
        hook: 'PEOPLE & CULTURE BUILDER',
        bio: 'HR professional focused on talent acquisition, employee engagement, and building a positive workplace culture.',
        image: '/images/prachi-portrait.jpg',
        socials: { linkedin: '#', twitter: '#' },
    },
    {
        name: 'Shivani Dixit',
        role: 'AI/ML Engineer',
        hook: 'POWERING DECISIONS WITH AI',
        bio: 'AI/ML engineer focused on developing data-driven models and scalable intelligent solutions.',
        image: '/images/shivani-portrait.jpg',
        socials: { linkedin: '#' },
    },
];

/* ─────────────────────────────────────────────────────────────
   MAIN TEAM SECTION — Exact reference layout
   
   ┌─────────────────────────────────────────────────┐
   │  (play)  Heading Text Here    (avatars)         │  ← top bar
   │                                                 │
   │  ┌──┐  ┌────┐       ┌────┐  ┌──┐               │
   │  │  │  │    │ ┌────┐ │    │  │  │               │  ← mosaic
   │  │  │  │    │ │    │ │    │  │  │               │
   │  └──┘  │    │ │    │ │    │  ├──┤               │
   │  ┌──┐  └────┘ └────┘ └────┘  │  │               │
   │  └──┘                        └──┘               │
   │              [Explore Team ↗]                    │  ← CTA
   └─────────────────────────────────────────────────┘
───────────────────────────────────────────────────────────── */
export function TeamSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

    const m = TEAM_MEMBERS;

    return (
        <section
            ref={sectionRef}
            id="team"
            className="relative w-full bg-background py-16 lg:py-24 overflow-hidden"
        >
            <div className="w-full max-w-[1400px] mx-auto px10 sm:px15 lg:px20 translate-y-[-10%]">

                {/* ═══════════════════════════════════════════
                    HEADER — Matching Client Stories layout
                ═══════════════════════════════════════════ */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-20">
                    <div>
                        {/* Section label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                            className="flex items-center gap-3 text-foreground/60 font-bold tracking-tight text-[14px] lg:text-[15px] mb-5 lg:mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Our Team
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
                    DESKTOP MOSAIC GRID (lg+)
                    5 columns, CSS Grid with explicit row sizing
                    Matches the reference stagger pattern exactly
                ═══════════════════════════════════════════ */}
                <div
                    className="hidden lg:grid gap-3 xl:gap-4"
                    style={{
                        gridTemplateColumns: '1fr 1.3fr 1.35fr 1.3fr 1fr',
                        gridTemplateRows: '80px 1fr 1fr 1fr 60px 80px',
                        height: 'clamp(560px, 44vw, 760px)',
                    }}
                >
                    {/* ── Col 1 top: Tall card (Andy) — starts row 2, spans 2 rows ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '1', gridRow: '1 / 4' }}
                    >
                        <img src={m[0].image} alt={m[0].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-[8px] font-black tracking-[0.2em] uppercase text-primary mb-0.5">{m[0].hook}</p>
                            <h3 className="text-base font-bold text-white leading-none">{m[0].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[0].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 1 bottom: Small card (Mia) — row 4-5 ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '1', gridRow: '4 / 7' }}
                    >
                        <img src={m[5].image} alt={m[5].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-sm font-bold text-white leading-none">{m[5].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[5].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 2: Very tall card (Jason) — full height ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '2', gridRow: '2 / 7' }}
                    >
                        <img src={m[1].image} alt={m[1].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-[8px] font-black tracking-[0.2em] uppercase text-primary mb-0.5">{m[1].hook}</p>
                            <h3 className="text-lg font-bold text-white leading-none">{m[1].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[1].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 3: Center card (Natasia / your suit photo) — offset, rows 2-5 ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '3', gridRow: '1 / 5' }}
                    >

                        <img src={m[2].image} alt={m[2].name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-[8px] font-black tracking-[0.2em] uppercase text-primary mb-0.5">{m[2].hook}</p>
                            <h3 className="text-xl font-bold text-white leading-none">{m[2].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[2].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 4: Tall card (Ruby) — full height ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.4 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '4', gridRow: '2 / 7' }}
                    >
                        <img src={m[3].image} alt={m[3].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-[8px] font-black tracking-[0.2em] uppercase text-primary mb-0.5">{m[3].hook}</p>
                            <h3 className="text-lg font-bold text-white leading-none">{m[3].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[3].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 5 top: Tall card (Joe) — rows 1-4 ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.45 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '5', gridRow: '1 / 4' }}
                    >
                        <img src={m[4].image} alt={m[4].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-[8px] font-black tracking-[0.2em] uppercase text-primary mb-0.5">{m[4].hook}</p>
                            <h3 className="text-base font-bold text-white leading-none">{m[4].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[4].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 5 bottom: 7th member image — rows 4-6 ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.55 }}
                        className="group rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '5', gridRow: '4 / 7' }}
                    >
                        <img src={m[6].image} alt={m[6].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-sm font-bold text-white leading-none">{m[6].name}</h3>
                            <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold">{m[6].role}</p>
                        </div>
                    </motion.div>

                    {/* ── Col 3 bottom: View all members CTA — row 5-6 (center bottom) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.6 }}
                        className="rounded-[1.2rem] overflow-hidden relative"
                        style={{ gridColumn: '3', gridRow: '5 / 7' }}
                    >
                        <a href="/team" className="group flex flex-col items-center justify-center gap-2 w-full h-full bg-primary/[0.06] border border-primary/15 rounded-[1.2rem] hover:bg-primary/[0.12] transition-all duration-500">
                            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center border border-primary/20 group-hover:bg-primary/25 transition-colors">
                                <svg className="w-4 h-4 text-primary group-hover:rotate-45 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                            </div>
                            <p className="text-[12px] font-bold text-foreground/50 text-center leading-tight">View all<br />members</p>
                        </a>
                    </motion.div>
                </div>

                {/* ═══════════════════════════════════════════
                    MOBILE GRID (< lg)
                ═══════════════════════════════════════════ */}
                <div className="grid lg:hidden grid-cols-2 gap-2.5 sm:gap-3">
                    {m.slice(0, 6).map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
                            className={`group relative overflow-hidden rounded-2xl
                                ${index === 2 ? 'col-span-2 aspect-[2/1]' : index % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'}
                            `}
                        >
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute top-3 left-3">
                                <span className="text-[7px] font-black bg-primary text-white px-2 py-0.5 rounded tracking-[0.15em] uppercase shadow-lg">{member.hook}</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3.5">
                                <h3 className="text-base font-bold text-white leading-none mb-0.5">{member.name}</h3>
                                <p className="text-[9px] font-bold text-white/50 uppercase tracking-wider">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
