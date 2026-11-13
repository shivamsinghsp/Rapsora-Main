'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Shapes,
  ShieldCheck,
  Focus,
  Layers,
  MessageSquareQuote,
  Compass,
  MousePointer2,
  Zap,
  Target,
  Smartphone,
  Sparkles,
  Layout,
  Palette,
  Users,
  CheckCircle2,
  Printer,
  Box,
  Eye,
  PenTool,
  Boxes,
  Orbit,
  Film,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import type { DesignPillar } from '@/data/design-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const ICON_MAP: Record<string, LucideIcon> = {
  Shapes,
  ShieldCheck,
  Focus,
  Layers,
  MessageSquareQuote,
  Compass,
  MousePointer2,
  Zap,
  Target,
  Smartphone,
  Sparkles,
  Layout,
  Palette,
  Users,
  CheckCircle2,
  Printer,
  Box,
  Eye,
  PenTool,
  Boxes,
  Orbit,
  Film,
  Cpu,
};

interface DesignPillarsSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  pillars: DesignPillar[];
  className?: string;
}

export function DesignPillarsSection({
  id = 'pillars',
  title = 'Strategic Architecture Pillars',
  subtitle = 'Every curve, token, layout, and interaction is engineered with mathematical intent and psychological purpose.',
  pillars,
  className,
}: DesignPillarsSectionProps) {
  return (
    <section id={id} className={cn('py-24 sm:py-32 bg-background relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            Core Foundations
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.iconName] || Layers;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: idx * 0.08 }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-primary/80 group-hover:text-primary transition-colors tabular-nums">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                    {pillar.tag}
                  </span>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

