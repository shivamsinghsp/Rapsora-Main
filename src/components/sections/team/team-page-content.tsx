'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Linkedin, Twitter, Github, ArrowDown, Mail, MapPin, Sparkles } from 'lucide-react';
import { Magnetic } from '@/components/shared/magnetic';
import { GooeyCTA } from '@/components/shared/gooey-cta';
import { TEAM_MEMBERS } from '@/components/sections/team-section';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────
   VALUES
───────────────────────────────────────────────────────────── */
const VALUES = [
    {
        number: '01',
        title: 'Obsession Over Output',
        description: "We don't clock hours. We chase breakthroughs. Every pixel, every line of code is a deliberate choice.",
    },
    {
        number: '02',
        title: 'Radical Transparency',
        description: 'No fluff, no buzzwords. We tell you what works, what doesn\'t, and what\'s going to move the needle.',
    },
    {
        number: '03',
        title: 'Growth-First Thinking',
        description: 'Beautiful design is table stakes. We engineer for conversions, retention, and compounding growth.',
    },
    {
        number: '04',
        title: 'Zero-Ego Collaboration',
        description: 'The best idea wins — regardless of title, tenure, or ego. We check ours at the door.',
    },
];

/* ─────────────────────────────────────────────────────────────
   FULL TEAM MEMBER CARD (larger, with bio)
───────────────────────────────────────────────────────────── */
function FullTeamCard({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

    const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
        linkedin: Linkedin,
        twitter: Twitter,
        github: Github,
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 70 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            transition={{ duration: 1, ease: EASE, delay: (index % 3) * 0.12 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-primary/30 transition-all duration-700">

                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Hook badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.3 + (index % 3) * 0.1 }}
                        className="absolute top-5 left-5 lg:top-6 lg:left-6"
                    >
                        <span className="text-[9px] lg:text-[10px] font-black bg-primary text-primary-foreground px-3 py-1.5 rounded-md tracking-[0.2em] uppercase shadow-lg shadow-primary/25">
                            {member.hook}
                        </span>
                    </motion.div>

                    {/* Social icons */}
                    <div className="absolute top-5 right-5 lg:top-6 lg:right-6 flex flex-col gap-2.5 translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        {Object.entries(member.socials).map(([platform, url], i) => {
                            const Icon = socialIcons[platform];
                            if (!Icon) return null;
                            return (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                                    style={{ transitionDelay: `${i * 70}ms` }}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Info at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                        <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white leading-none mb-1.5 tracking-tight">
                            {member.name}
                        </h3>
                        <p className="text-[11px] lg:text-[12px] font-bold text-primary/80 uppercase tracking-[0.15em] mb-3">
                            {member.role}
                        </p>
                        <p className="text-[13px] lg:text-[14px] text-white/50 font-medium leading-relaxed max-w-[90%]">
                            {member.bio}
                        </p>
                    </div>

                    {/* Glow line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   VALUE CARD
───────────────────────────────────────────────────────────── */
function ValueCard({ value, index }: { value: typeof VALUES[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
            className="group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-700"
        >
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <span className="relative text-[32px] lg:text-[40px] font-black text-primary/20 leading-none mb-4 block tracking-tighter">
                {value.number}
            </span>
            <h4 className="relative font-heading text-lg lg:text-xl font-bold text-white mb-3 tracking-tight">
                {value.title}
            </h4>
            <p className="relative text-[13px] lg:text-[14px] text-white/40 leading-relaxed">
                {value.description}
            </p>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN TEAM PAGE CONTENT
───────────────────────────────────────────────────────────── */
export default function TeamPageContent() {
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    return (
        <main className="bg-black overflow-hidden min-h-screen">

            {/* ═══════════════════════════════════════════════════
               HERO
            ═══════════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-32 pb-20">
                {/* Ambient glows */}
                <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] blur-[200px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.03] blur-[180px] rounded-full pointer-events-none" />

                <div className="container mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[10px] sm:text-[12px] font-black tracking-[0.5em] text-primary uppercase mb-8 block"
                    >
                        THE TEAM
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: EASE }}
                        className="text-5xl sm:text-7xl lg:text-[110px] font-black tracking-tighter text-white leading-[0.85] mb-8"
                    >
                        Multiple <br />
                        personalities,
                        <br />
                        <span className="italic text-primary">Zero egos.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-16"
                    >
                        A lean squad of specialists who eat, sleep, and breathe digital growth.
                        We don&apos;t do titles — we do impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
               FULL TEAM GRID
            ═══════════════════════════════════════════════════ */}
            <section className="relative w-full pb-24 lg:pb-32">
                <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">

                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1, ease: EASE }}
                        className="flex items-center gap-3 text-white/60 font-bold tracking-tight text-[14px] lg:text-[15px] mb-12 lg:mb-16"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Meet Everyone
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                        {TEAM_MEMBERS.map((member, index) => (
                            <FullTeamCard key={member.name} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
               OUR VALUES
            ═══════════════════════════════════════════════════ */}
            <section className="relative w-full py-24 lg:py-32 border-t border-white/[0.06]">
                <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-20">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: EASE }}
                                className="flex items-center gap-3 text-white/60 font-bold tracking-tight text-[14px] lg:text-[15px] mb-5 lg:mb-6"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Our DNA
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
                                className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-[-0.03em] text-white"
                            >
                                What drives us
                                <br className="hidden sm:block" />
                                <span className="text-white/40"> — every single day</span>
                            </motion.h2>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {VALUES.map((value, index) => (
                            <ValueCard key={value.number} value={value} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
               JOIN CTA
            ═══════════════════════════════════════════════════ */}
            <section className="relative w-full py-24 lg:py-40 border-t border-white/[0.06] overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

                <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: EASE }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">We&apos;re hiring</span>
                        </div>

                        <h2 className="font-heading text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-black leading-[0.95] tracking-tighter text-white mb-6">
                            Want to join<br />
                            <span className="text-primary italic">the obsession?</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-white/40 max-w-xl mx-auto leading-relaxed mb-12">
                            We&apos;re always looking for exceptional humans who want to build things that actually matter.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Magnetic strength={0.4}>
                                <GooeyCTA
                                    href="/contact"
                                    text="Get in touch"
                                    pillColorClass="bg-primary"
                                    textColorClass="text-primary-foreground"
                                />
                            </Magnetic>

                            <Magnetic strength={0.3}>
                                <Link
                                    href="/about"
                                    className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.03] text-white text-[14px] font-bold tracking-tight hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-500 hover:scale-105 active:scale-95"
                                >
                                    Learn about us
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                                </Link>
                            </Magnetic>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
