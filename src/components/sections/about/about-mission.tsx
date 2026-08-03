'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle2, Zap, Lock, Users } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const MISSION_HIGHLIGHTS = [
    {
        icon: Zap,
        title: 'High-Quality & Efficient Execution',
        text: 'Tailored IT and digital solutions delivered with speed, precision, and cost-effectiveness.',
    },
    {
        icon: Users,
        title: 'Client-Centric Transparency',
        text: 'Ensuring honest communication, timely delivery, and continuous improvement in every project.',
    },
    {
        icon: Lock,
        title: 'Secure & Scalable Infrastructure',
        text: 'Empowering teams with modern tools and robust standards to protect and elevate business performance.',
    },
];

export function AboutMission() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-background overflow-hidden border-t border-foreground/[0.06]">
            {/* Background Watermark */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-heading text-[18vw] font-black leading-none tracking-tighter text-foreground">
                MISSION
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
                        <Target className="w-3.5 h-3.5" />
                        <span>OUR MISSION</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                        className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
                    >
                        Delivering excellence through <span className="text-primary italic">client-centric innovation</span>.
                    </motion.h2>
                </div>

                {/* ── Main Mission Block + Highlights Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left: Main Mission Statement Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                        className="lg:col-span-7 rounded-[2.5rem] bg-foreground text-background p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
                    >
                        {/* Glow accent */}
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/30 transition-all duration-700" />

                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-6">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span>Core Commitment</span>
                            </div>

                            <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed tracking-tight mb-6">
                                Our mission is to provide high-quality, efficient, and cost-effective IT and digital solutions tailored to meet the unique needs of our clients.
                            </p>

                            <p className="text-base sm:text-lg text-background/70 font-medium leading-relaxed">
                                We are committed to delivering excellence through a client-centric approach, ensuring transparency, timely execution, and continuous improvement in every project we undertake. By empowering our team with the latest tools, technologies, and industry practices, we strive to deliver reliable, secure, and scalable solutions that enhance business performance and drive long-term success.
                            </p>
                        </div>

                        <div className="pt-10 flex items-center gap-3 border-t border-background/10 mt-10">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-background/60">
                                Continuous Improvement • Uncompromising Quality
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Highlights List */}
                    <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                        {MISSION_HIGHLIGHTS.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: EASE, delay: 0.1 * index }}
                                    className="group rounded-3xl bg-background border border-foreground/10 p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex items-start gap-5"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-foreground mb-1.5 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
