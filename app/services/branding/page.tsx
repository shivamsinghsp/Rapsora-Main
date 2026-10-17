'use client';

import { motion } from 'framer-motion';
import { Shapes, ShieldCheck, Focus, Layers, MessageSquareQuote, Compass } from 'lucide-react';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Hero04, type Hero04Props } from '@/components/ui/hero-04';

const EASE = [0.22, 1, 0.36, 1] as const;

const heroValues: Hero04Props = {
    badge: 'CAPABILITY REF.003',
    title: 'We build brands that',
    titleLine2: (
        <span className="italic text-primary">command loyalty.</span>
    ),
    description:
        'We don\'t just create logos — we engineer the visual and emotional identity systems that make your brand unmistakable and unforgettable.',
    washImage: '/images/pastel-bg-3.jpg',
    primaryImage: '/images/hero-instagram-pastel.jpg',
    secondaryImage: '/images/hero-youtube-pastel.jpg',
    primaryAlt: 'Editorial Instagram brand identity presentation on pastel surface',
    secondaryAlt: 'Matte YouTube creator brand badge on pastel linen',
    animation: 'subtle',
    primaryCTA: {
        ctaEnabled: true,
        text: 'Start your project',
        link: '/contact',
        variant: 'default',
        size: 'lg',
    },
    secondaryCTA: {
        ctaEnabled: true,
        text: 'View our work',
        link: '/work',
        variant: 'link',
    },
};

const BRAND_PILLARS = [
    {
        number: '01',
        tag: 'VISUAL SYSTEM',
        title: 'Visual Authority',
        icon: Shapes,
        desc: 'Brutal and beautiful visual systems designed to dominate the sensory landscape. Every color, curve, and gridline is calculated for immediate brand recognition.',
    },
    {
        number: '02',
        tag: 'POSITIONING',
        title: 'Narrative Shield',
        icon: ShieldCheck,
        desc: 'Strategic storytelling and defensive positioning that bulletproofs your brand against market fluctuations and competitor noise.',
    },
    {
        number: '03',
        tag: 'PSYCHOLOGY',
        title: 'Target Archetype',
        icon: Focus,
        desc: 'Deep psychological profiling of your audience to trigger subconscious emotional resonance and accelerate high-ticket conversion.',
    },
    {
        number: '04',
        tag: 'ECOSYSTEM',
        title: 'Brand Architecture',
        icon: Layers,
        desc: 'Structuring offerings, sub-brands, and touchpoints into a unified, scalable ecosystem that compounds brand equity over time.',
    },
    {
        number: '05',
        tag: 'VERBAL ASSET',
        title: 'Tone of Voice',
        icon: MessageSquareQuote,
        desc: 'Crafting the distinct verbal cadence, manifesto, and messaging frameworks that make your brand voice unmistakable across all channels.',
    },
    {
        number: '06',
        tag: 'OMNICHANNEL',
        title: 'Experience Design',
        icon: Compass,
        desc: 'Holistic journey mapping across digital and physical realms to guarantee every single customer interaction feels cohesive and unforgettable.',
    },
];

export default function BrandingPage() {
    return (
        <main className="relative bg-background overflow-hidden">
            {/* ── HERO SECTION — Hero04 Component ── */}
            <div className="pt-24 lg:pt-32">
                <Hero04 {...heroValues} />
            </div>

            {/* ── APPROACH / FEATURES SECTION ── */}
            <section className="py-24 lg:py-36 bg-gradient-to-b from-background via-secondary/15 to-background border-y border-border/60">
                <div className="container mx-auto px-6">
                    {/* Header Block */}
                    <div className="max-w-3xl mb-16 lg:mb-20">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-primary uppercase font-heading block mb-3"
                        >
                            BRAND PILLARS & METHODOLOGY
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
                        >
                            Engineered for emotional resonance and <span className="italic text-primary">market dominance.</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                            className="mt-4 text-muted-foreground font-body font-medium text-base sm:text-lg leading-relaxed max-w-2xl"
                        >
                            We don't create surface-level decorations. Every pillar of our branding framework is engineered to project authority, command loyalty, and drive measurable enterprise valuation.
                        </motion.p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {BRAND_PILLARS.map((item, i) => (
                            <motion.div 
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                                className="group relative p-8 sm:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/40 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
                            >
                                {/* Top Header: Icon + Card Number */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(144,97,249,0.25)] transition-all duration-300">
                                        <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3" strokeWidth={1.75} />
                                    </div>
                                    <span className="text-xs font-black tabular-nums text-muted-foreground/40 font-heading tracking-widest">
                                        /{item.number}
                                    </span>
                                </div>

                                {/* Eyebrow Tag */}
                                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-primary uppercase font-heading block mb-2">
                                    {item.tag}
                                </span>

                                {/* Title & Desc */}
                                <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground font-body leading-relaxed font-medium text-[15px]">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CALL TO ACTION ── */}
            <CtaSection />
            <ContactFormSection />
        </main>
    );
}
