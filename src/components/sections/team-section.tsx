'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Linkedin, Twitter, Github } from 'lucide-react';
import { Magnetic } from '@/components/shared/magnetic';
import { GooeyCTA } from '@/components/shared/gooey-cta';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────
   TEAM DATA
───────────────────────────────────────────────────────────── */
export const TEAM_MEMBERS = [
    {
        name: 'Andy',
        role: 'Co-Founder & CEO',
        hook: 'VIRAL ARCHITECT',
        bio: 'Building digital empires that break the internet. 10+ years of strategic growth.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Jason',
        role: 'Co-Founder & CTO',
        hook: 'RETENTION SURGEON',
        bio: 'Code alchemist turning complex systems into silky-smooth user experiences.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
        socials: {
            linkedin: '#',
            twitter: '#',
            github: '#',
        },
    },
    {
        name: 'Natasia',
        role: 'Lead Architect',
        hook: 'NEURAL NARRATIVE',
        bio: 'She architects experiences that make users feel, not just click.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        name: 'Ruby',
        role: 'Growth Lead',
        hook: 'GROWTH CATALYST',
        bio: 'Data-driven strategist who turns traffic into conversions, and conversions into loyalty.',
        image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=800',
        socials: {
            linkedin: '#',
        },
    },
    {
        name: 'Joe',
        role: 'Behavioral Dev',
        hook: 'PATTERN BREAKER',
        bio: 'Frontend wizard who bends pixels to his will. If it moves, he probably built it.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
        socials: {
            linkedin: '#',
            github: '#',
        },
    },
    {
        name: 'Mia',
        role: 'Creative Director',
        hook: 'VISUAL ORACLE',
        bio: 'Turning brand visions into visual spectacles that stop you mid-scroll.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
        socials: {
            linkedin: '#',
            twitter: '#',
        },
    },
];

/* ─────────────────────────────────────────────────────────────
   TEAM MEMBER CARD
───────────────────────────────────────────────────────────── */
function TeamMemberCard({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
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
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: EASE, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Card */}
            <div className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-primary/30 transition-all duration-700">

                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Hook badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 0.3 + index * 0.1 }}
                        className="absolute top-4 left-4 lg:top-5 lg:left-5"
                    >
                        <span className="text-[8px] lg:text-[9px] font-black bg-primary text-primary-foreground px-2.5 py-1 rounded-md tracking-[0.2em] uppercase shadow-lg shadow-primary/25">
                            {member.hook}
                        </span>
                    </motion.div>

                    {/* Social icons — appear on hover */}
                    <div className="absolute top-4 right-4 lg:top-5 lg:right-5 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        {Object.entries(member.socials).map(([platform, url], i) => {
                            const Icon = socialIcons[platform];
                            if (!Icon) return null;
                            return (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Name & Role — pinned to bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-white leading-none mb-1 tracking-tight">
                            {member.name}
                        </h3>
                        <p className="text-[11px] lg:text-[12px] font-bold text-white/50 uppercase tracking-[0.15em]">
                            {member.role}
                        </p>
                    </div>

                    {/* Animated glow line at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN TEAM SECTION (Landing Page)
───────────────────────────────────────────────────────────── */
export function TeamSection() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: '-10% 0px' });

    // Show only first 4 members on the landing page
    const displayMembers = TEAM_MEMBERS.slice(0, 4);

    return (
        <section
            ref={sectionRef}
            id="team"
            className="relative w-full bg-background dark:bg-black pt-8 pb-24 lg:pt-16 lg:pb-32 overflow-hidden"
        >
            {/* Ambient glow effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[150px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">

                {/* ── HEADER ── */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0 }}
                    animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1.4, ease: EASE }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-20"
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                            className="flex items-center gap-3 text-foreground/60 font-bold tracking-tight text-[14px] lg:text-[15px] mb-5 lg:mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Our Team
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                            className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground"
                        >
                            The minds behind
                            <br className="hidden sm:block" />
                            <span className="text-foreground/40"> — the obsession</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.4 }}
                        className="shrink-0"
                    >
                        <Magnetic strength={0.4}>
                            <GooeyCTA
                                href="/team"
                                text="Meet the full team"
                                pillColorClass="bg-primary"
                                textColorClass="text-primary-foreground"
                            />
                        </Magnetic>
                    </motion.div>
                </motion.div>

                {/* ── TEAM GRID ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {displayMembers.map((member, index) => (
                        <TeamMemberCard key={member.name} member={member} index={index} />
                    ))}
                </div>

                {/* ── BOTTOM CTA STRIP ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5% 0px' }}
                    transition={{ duration: 1, ease: EASE }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 lg:mt-20 pt-10 border-t border-foreground/[0.06]"
                >
                    <p className="text-[14px] lg:text-[16px] text-foreground/40 font-medium text-center">
                        A lean team of <span className="text-primary font-bold">{TEAM_MEMBERS.length}+ specialists</span> obsessed with your growth.
                    </p>
                    <Magnetic strength={0.3}>
                        <Link
                            href="/team"
                            className="group flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-foreground/[0.08] bg-foreground/[0.03] backdrop-blur-sm text-foreground text-[13px] sm:text-[14px] font-bold tracking-tight hover:bg-foreground/[0.08] hover:border-primary/30 transition-all duration-500 hover:scale-105 active:scale-95"
                        >
                            View all team members
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
}
