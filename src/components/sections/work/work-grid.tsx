'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

export function WorkGrid({ works }: { works: any[] }) {
    if (!works || works.length === 0) return null;

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {works.map((work, idx) => {
                    const showSticker = idx === 1;

                    return (
                        <motion.div
                            key={work._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-10% 0px' }}
                            transition={{ duration: 0.8, ease: EASE, delay: idx % 2 === 0 ? 0 : 0.1 }}
                            className="group flex flex-col w-full"
                        >
                            {/* Card Header -> Pills */}
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                {work.tags?.map((tag: string) => (
                                    <span 
                                        key={tag} 
                                        className="px-3.5 py-1.5 rounded-full bg-foreground/[0.04] text-[11px] font-bold uppercase tracking-widest text-foreground/50 transition-colors cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Image Wrapper (Static Card Container) */}
                            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] overflow-hidden rounded-[2.5rem] bg-foreground/5">
                                {work.video ? (
                                    <video 
                                        src={work.video} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="w-full h-full object-cover" 
                                    />
                                ) : (
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                                    />
                                )}

                                {/* Floating Sticker / Badge on specific items */}
                                {showSticker && (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                        className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 z-30 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-primary text-primary-foreground flex items-center justify-center p-4 drop-shadow-2xl"
                                    >
                                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow text-primary-foreground">
                                            <path d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circle" />
                                            <text>
                                                <textPath href="#circle" className="text-[12px] font-bold uppercase tracking-widest fill-current">
                                                    Let's talk SEO • Let's talk websites • Let's talk branding •
                                                </textPath>
                                            </text>
                                        </svg>
                                        {/* Little Eyes in the center */}
                                        <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center gap-1">
                                            <div className="w-2.5 h-3.5 bg-primary-foreground rounded-full animate-pulse" />
                                            <div className="w-2.5 h-3.5 bg-primary-foreground rounded-full animate-pulse delay-75" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="mt-5 flex flex-col items-start">
                                <p className="text-[13px] font-bold tracking-tight text-foreground/80 mb-1">{work.year} • {work.client}</p>
                                <h3 className="text-[24px] lg:text-[28px] font-heading font-medium tracking-tight text-foreground">
                                    {work.title}
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
