'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Magnetic } from '@/components/shared/magnetic';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────
   SERVICES DATA
   Expanded with images/accents for the full-screen layout
───────────────────────────────────────────────────────────── */
const SERVICES = [
    {
        name: 'Brand Identity',
        title: 'CRAFTING AUTHORITY.',
        description: 'Logo systems, visual language, and brand guidelines that position you as the category leader.',
        href: '/services/branding',
        bgColor: 'bg-[#0a0a0a]',
        accentColor: 'text-primary',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=2000',
        badges: ['Visual Strategy', 'Identity Design', 'Market Positioning']
    },
    {
        name: 'Websites',
        title: 'ENGINEERED GROWTH.',
        description: 'High-converting, blazing-fast websites engineered for growth and built to scale.',
        href: '/services/web-design',
        bgColor: 'bg-[#0f0f0f]',
        accentColor: 'text-blue-500',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
        badges: ['Next.js', 'High Performance', 'Conversion focus']
    },
    {
        name: 'E-Commerce',
        title: 'REVENUE SYSTEMS.',
        description: 'Revenue-first Shopify & custom storefronts that turn browsers into loyal customers.',
        href: '/services/ecommerce',
        bgColor: 'bg-[#050505]',
        accentColor: 'text-emerald-500',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000',
        badges: ['Shopify Plus', 'Custom Checkout', 'Scalable Arch']
    },
    {
        name: 'UI/UX Design',
        title: 'INTUITIVE ECOSYSTEMS.',
        description: 'User-centric interfaces crafted with data-driven design and micro-interactions.',
        href: '/services/ui-ux',
        bgColor: 'bg-[#0d0d0d]',
        accentColor: 'text-purple-500',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=2000',
        badges: ['User Testing', 'Data-Driven', 'Interactive Labs']
    },
    {
        name: 'SEO & Growth',
        title: 'ORGANIC DOMINANCE.',
        description: 'Organic traffic strategies and conversion optimization that compound over time.',
        href: '/services/seo',
        bgColor: 'bg-[#111111]',
        accentColor: 'text-amber-500',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
        badges: ['Search Authority', 'Growth Hacking', 'ROI Focus']
    },
];

/* ─────────────────────────────────────────────────────────────
   SERVICE SLIDE COMPONENT
───────────────────────────────────────────────────────────── */
interface ServiceSlideProps {
    service: typeof SERVICES[0];
    index: number;
    total: number;
    scrollYProgress: any;
}

function ServiceSlide({ service, index, total, scrollYProgress }: ServiceSlideProps) {
    // Each slide occupies 1/total of the scroll progress
    const start = index / total;
    const end = (index + 1) / total;

    // Use clip-path for a premium wipe/reveal effect
    // As we scroll through this slide's range, its clip-path goes from 100% (hidden) to 0% (visible)
    const clipPath = useTransform(
        scrollYProgress,
        [start, start + 0.1, end],
        ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
    );

    // Subtle parallax for the inner content
    const y = useTransform(scrollYProgress, [start, end], [100, -100]);
    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0.8]);

    return (
        <motion.div
            style={{ clipPath, zIndex: index + 1 }}
            className="absolute inset-0 w-full h-full p-4 sm:p-6 lg:p-10"
        >
            <div className={cn(
                "relative w-full h-full flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] border border-white/5",
                service.bgColor
            )}>
                {/* Left Side: Visuals & Badges */}
                <div className="relative w-full lg:w-3/5 h-[40vh] lg:h-full overflow-hidden border-r border-white/5">
                    <div
                        className="absolute inset-0 scale-110 grayscale-[30%] opacity-40 transition-transform duration-[2s] group-hover:scale-100"
                        style={{
                            backgroundImage: `url(${service.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    <div className="relative h-full w-full p-8 lg:p-16 flex flex-col justify-end gap-6">
                        <motion.div style={{ y }} className="flex flex-wrap gap-3">
                            {service.badges.map((badge, idx) => (
                                <div
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform cursor-default whitespace-nowrap"
                                >
                                    {badge}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="relative w-full lg:w-2/5 h-[60vh] lg:h-full flex flex-col justify-center p-8 lg:p-16 bg-white">
                    <motion.div style={{ opacity, y: useTransform(scrollYProgress, [start, end], [50, -50]) }} className="max-w-md text-slate-900">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase mb-8">
                            <Sparkles className="w-3 h-3" />
                            Service {index + 1}
                        </div>

                        <h3 className="text-sm lg:text-base font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                            {service.name}
                        </h3>

                        <h2 className="text-4xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-slate-900 mb-8">
                            {service.title}
                        </h2>

                        <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-12 font-medium">
                            {service.description}
                        </p>

                        <Link href={service.href} className="group inline-flex items-center gap-4 text-slate-900 font-black tracking-tighter hover:text-primary transition-colors">
                            <span className="text-xl">Discover {service.name}</span>
                            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Counter */}
                    <div className="absolute bottom-12 right-12 flex items-baseline gap-2">
                        <span className="text-4xl lg:text-5xl font-black text-slate-900">0{index + 1}</span>
                        <span className="text-lg font-bold text-slate-300">/ 0{total}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   INTRO SLIDE COMPONENT
───────────────────────────────────────────────────────────── */
function IntroSlide({ scrollYProgress }: { scrollYProgress: any }) {
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

    return (
        <motion.div
            style={{ opacity, scale, y }}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-6"
        >
            <div className="max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="inline-flex items-center gap-3 text-primary font-black tracking-[0.3em] uppercase mb-8"
                >
                    <div className="w-12 h-px bg-primary" />
                    Our Expertise
                    <div className="w-12 h-px bg-primary" />
                </motion.div>

                <h2 className="text-5xl lg:text-8xl font-black tracking-tight text-foreground mb-10 leading-[0.9]">
                    ENGINEERING <br />
                    <span className="text-foreground/20">DIGITAL AUTHORITY.</span>
                </h2>

                <p className="text-lg lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto italic">
                    "We don't just build websites; we craft the high-performing ecosystems that separate titans from survivors."
                </p>
            </div>

            {/* Hint to scroll */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-foreground/20" />
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40">Scroll to Explore</span>
            </motion.div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   NAVIGATION DOT COMPONENT
───────────────────────────────────────────────────────────── */
function NavDot({ i, totalSlides, scrollYProgress, label }: { i: number; totalSlides: number; scrollYProgress: any, label: string }) {
    const opacity = useTransform(
        scrollYProgress,
        [
            (i - 0.5) / totalSlides,
            i / totalSlides,
            (i + 0.5) / totalSlides,
            (i + 1) / totalSlides
        ],
        [0.3, 1, 1, 0.3]
    );

    const scale = useTransform(
        scrollYProgress,
        [
            (i - 0.5) / totalSlides,
            i / totalSlides,
            (i + 0.5) / totalSlides,
            (i + 1) / totalSlides
        ],
        [0.7, 1.3, 1.3, 0.7]
    );

    return (
        <div className="relative h-8 w-8 flex items-center justify-center group">
            <motion.div
                className="w-2.5 h-2.5 bg-primary rounded-full cursor-pointer shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                style={{ opacity, scale }}
            />
            <div className="absolute left-[-80px] opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-black uppercase tracking-widest whitespace-nowrap pointer-events-none text-right pr-4 text-foreground/80">
                {label}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPERTISE SECTION
───────────────────────────────────────────────────────────── */
export function ExpertiseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const totalSlides = SERVICES.length + 1; // Services + Intro

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-background"
            style={{ height: `${totalSlides * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Introduction Slide */}
                <IntroSlide scrollYProgress={scrollYProgress} />

                {SERVICES.map((service, index) => {
                    // Update indices for services to account for the intro slide
                    // Intro is 0 to 1/total, Service 0 is 1/total to 2/total, etc.
                    const serviceIndex = index + 1;
                    return (
                        <ServiceSlide
                            key={service.name}
                            service={service}
                            index={serviceIndex}
                            total={totalSlides}
                            scrollYProgress={scrollYProgress}
                        />
                    );
                })}
            </div>

            {/* Custom Progress Navigation (Dots) */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]) }}
                className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-4"
            >
                {[...Array(totalSlides)].map((_, i) => (
                    <NavDot
                        key={i}
                        i={i}
                        totalSlides={totalSlides}
                        scrollYProgress={scrollYProgress}
                        label={i === 0 ? "Expertise" : SERVICES[i - 1].name}
                    />
                ))}
            </motion.div>
        </section>
    );
}
