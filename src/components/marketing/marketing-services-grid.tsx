'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { MARKETING_SERVICES, type MarketingServiceConfig } from '@/data/marketing-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface MarketingServicesGridProps {
  className?: string;
  showHeading?: boolean;
}

export function MarketingServicesGrid({
  className,
  showHeading = true,
}: MarketingServicesGridProps) {
  const services = Object.values(MARKETING_SERVICES);

  return (
    <section id="services" className={cn('py-20 lg:py-32 bg-background relative z-10', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                Growth engineered with <br />
                <span className="italic font-medium text-primary">algorithmic rigor.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
              Every marketing service is designed to work in synergy, turning search intent, brand storytelling, social reach, and lifecycle retention into compounding enterprise revenue.
            </p>
          </div>
        )}

        {/* ── 2x2 PREMIUM MARKETING SERVICES GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image Preview Window */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-muted">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-black tracking-widest px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border/80 text-primary">
                    {service.number} // {service.id.toUpperCase()}
                  </span>
                </div>

                {/* Stat Badge */}
                {service.metrics[0] && (
                  <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-md border border-border/80 rounded-2xl px-4 py-2 flex items-center gap-2.5 shadow-md">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <div>
                      <span className="font-heading text-sm font-black text-foreground tabular-nums">
                        {service.metrics[0].value}
                      </span>
                      <span className="text-[11px] text-muted-foreground block font-medium leading-none">
                        {service.metrics[0].label}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content Body */}
              <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.capabilities.slice(0, 3).map((cap) => (
                      <span
                        key={cap.title}
                        className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-secondary/60 border border-border/60 text-foreground/80"
                      >
                        {cap.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                  <Link
                    href={service.route}
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                  >
                    <span>Explore {service.name}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>Dedicated Team</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

