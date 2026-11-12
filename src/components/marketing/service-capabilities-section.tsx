'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Layers,
  TrendingUp,
  BarChart,
  BarChart2,
  Sparkles,
  FileText,
  Zap,
  Share2,
  Compass,
  Palette,
  MessageSquare,
  ShieldCheck,
  GitBranch,
  Users,
  Mail,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import type { MarketingServiceConfig } from '@/data/marketing-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Layers,
  TrendingUp,
  BarChart,
  BarChart2,
  Sparkles,
  FileText,
  Zap,
  Share2,
  Compass,
  Palette,
  MessageSquare,
  ShieldCheck,
  GitBranch,
  Users,
  Mail,
};

interface ServiceCapabilitiesSectionProps {
  service: MarketingServiceConfig;
}

export function ServiceCapabilitiesSection({ service }: ServiceCapabilitiesSectionProps) {
  return (
    <div className="bg-background relative z-10">
      {/* ── 1. STRATEGIC OVERVIEW ── */}
      <section className="py-20 lg:py-28 border-b border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12]">
                {service.overview.heading}
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              {service.overview.paragraphs.map((p, idx) => (
                <p key={idx} className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border/60">
                {service.overview.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CORE ARCHITECTURAL PILLARS ── */}
      <section id="pillars" className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-14 lg:mb-20">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Four pillars of <br />
              <span className="italic font-medium text-primary">compounding authority.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {service.pillars.map((pillar) => {
              const IconComp = ICON_MAP[pillar.iconName] || Sparkles;
              return (
                <div
                  key={pillar.title}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-secondary/30 hover:bg-secondary/60 border border-border/70 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-bold text-primary">
                        {pillar.number} // {pillar.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {pillar.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-background/80 border border-border/60 text-foreground/80 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED CAPABILITIES GRID ── */}
      <section id="capabilities" className="py-20 lg:py-28 bg-secondary/15 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-2xl mb-14 lg:mb-18">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Full-spectrum capabilities.
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">
              We handle every aspect of your {service.name.toLowerCase()} pipeline from audit to continuous optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary text-foreground/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MEASURABLE BUSINESS BENEFITS ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-14 lg:mb-18">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Why ambitious brands partner with RapSora.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="p-7 rounded-2xl bg-secondary/25 border border-border/70 flex flex-col justify-between"
              >
                <div>
                  {b.stat && (
                    <span className="font-mono text-xl font-black text-primary block mb-3">
                      {b.stat}
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

