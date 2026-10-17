'use client';

import { motion } from 'framer-motion';
import { Layout, Palette, Zap } from 'lucide-react';
import { Hero10, type Hero10Props } from '@/components/ui/hero-10';

const heroValues: Hero10Props = {
    badge: 'CAPABILITY REF.001',
    title: 'Visceral',
    titleHighlight: 'Dynamics.',
    description:
        'We engineer digital environments designed to trigger immediate engagement. This is where psychology meets pixel-perfect execution.',
    socialProof: 'Trusted by high-growth startups & global enterprise brands',
    washImage: '/images/pastel-bg-3.jpg',
    images: [
        '/images/hero-uiux-mobile.jpg',
        '/images/hero-uiux-dashboard.jpg',
        '/images/hero-uiux-wireframes.jpg',
    ],
    imageAlts: [
        'Minimalist mobile app UX design on pastel linen',
        'Modern SaaS analytics & interaction dashboard on tablet',
        'Design system tokens & UX wireframe cards',
    ],
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
        variant: 'outline',
    },
};

export default function UIUXPage() {
    return (
        <main className="relative bg-background overflow-hidden">
            {/* ── HERO SECTION — Hero10 Component with Animated Image Fan ── */}
            <div className="pt-24 lg:pt-32">
                <Hero10 {...heroValues} />
            </div>

            {/* ── PILLARS SECTION ── */}
            <div className="container mx-auto px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {[
                        { title: 'Neural Architecture', icon: Layout, desc: 'Information hierarchy designed for the way the human brain actually processes data.' },
                        { title: 'Aesthetic Authority', icon: Palette, desc: 'Visual languages that establish instant credibility and emotional resonance.' },
                        { title: 'High-Velocity Interaction', icon: Zap, desc: 'Micro-interactions engineered to provide dopamine loops and reduce friction.' }
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
