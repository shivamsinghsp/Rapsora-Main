'use client';

import { motion } from 'framer-motion';
import { MousePointer2, Layers, Cpu } from 'lucide-react';
import { Hero04, type Hero04Props } from '@/components/ui/hero-04';

const heroValues: Hero04Props = {
    badge: 'CAPABILITY REF.004',
    title: 'Obsessive',
    titleLine2: (
        <span className="italic text-primary">Architecture.</span>
    ),
    description:
        'We don\'t just design websites; we engineer behavioral destiny. Every pixel is a calculated trigger designed to lead users to the ultimate objective.',
    washImage: '/images/pastel-bg-3.jpg',
    primaryImage: '/images/hero-web-design-laptop.jpg',
    secondaryImage: '/images/hero-web-design-tablet.jpg',
    primaryAlt: 'Editorial laptop presentation of modern agency website design on pastel linen',
    secondaryAlt: 'Editorial tablet presentation of responsive mobile website on pastel linen',
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

export default function WebDesignPage() {
    return (
        <main className="relative bg-background overflow-hidden">
            {/* ── HERO SECTION — Hero04 Component with Editorial Imagery ── */}
            <div className="pt-24 lg:pt-32">
                <Hero04 {...heroValues} />
            </div>

            {/* ── ORIGINAL PILLARS SECTION (UNTOUCHED) ── */}
            <div className="container mx-auto px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {[
                        { title: 'Behavioral UX', icon: MousePointer2, desc: 'User journeys mapped against deep psychological archetypes to minimize bounce and maximize intent.' },
                        { title: 'Structural Integrity', icon: Layers, desc: 'Clean, brutalist-editorial layouts that project authority and elite brand positioning.' },
                        { title: 'Core Vitals', icon: Cpu, desc: 'High-velocity infrastructure that ensures zero-friction experiences across all global nodes.' }
                    ].map((item, i) => (
                        <motion.div 
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground tracking-tight">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
