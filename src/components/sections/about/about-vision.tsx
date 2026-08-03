'use client';

import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const VISION_PILLARS = [
    {
        icon: ShieldCheck,
        title: 'Trusted Technology Partner',
        description: 'Building long-term relationships through reliability, transparency, and consistent value creation.',
    },
    {
        icon: Cpu,
        title: 'Future-Ready Engineering',
        description: 'Leveraging advanced technologies, AI, and scalable architectures built to outlast market shifts.',
    },
    {
        icon: TrendingUp,
        title: 'Sustainable Growth',
        description: 'Empowering businesses to adapt and thrive in a rapidly evolving global digital landscape.',
    },
];

export function AboutVision() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-background overflow-hidden border-t border-foreground/[0.06]">
            {/* Background Watermark */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-heading text-[18vw] font-black leading-none tracking-tighter text-foreground">
                VISION
            </div>

            <div className="container mx-auto px-6 lg:px-12 xl:px-20 2xl:px-32 relative z-10">
                {/* ── Top Badge & Header ── */}
                <div className="max-w-4xl mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        <Compass className="w-3.5 h-3.5" />
                        <span>OUR VISION</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                        className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
                    >
                        Building future-ready solutions that <span className="text-primary italic">create real value</span>.
                    </motion.h2>
                </div>

                {/* ── Main Vision Statement Block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                    className="relative rounded-[2.5rem] bg-foreground/[0.03] border border-foreground/[0.08] p-8 sm:p-12 lg:p-16 mb-16 lg:mb-24 shadow-2xl overflow-hidden backdrop-blur-sm"
                >
                    {/* Glowing ambient light */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

                    <p className="font-heading text-xl sm:text-2xl lg:text-3xl text-foreground font-semibold leading-relaxed tracking-tight mb-8">
                        To establish <span className="text-primary font-bold">Rapsora Technologies Pvt. Ltd.</span> as a trusted and reliable technology partner by delivering innovative, scalable, and future-ready digital solutions that create measurable value for businesses.
                    </p>

                    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal">
                        We aim to drive digital transformation by leveraging advanced technologies, fostering innovation, and maintaining the highest standards of quality, security, and performance. Our vision is to build long-term relationships with clients by consistently exceeding expectations and contributing to their sustainable growth in a rapidly evolving digital landscape.
                    </p>
                </motion.div>

                {/* ── Vision Pillars ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {VISION_PILLARS.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: EASE, delay: 0.1 * idx }}
                                className="group relative rounded-3xl bg-background border border-foreground/10 p-8 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(144,97,249,0.08)] transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
