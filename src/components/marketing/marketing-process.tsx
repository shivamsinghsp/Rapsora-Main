'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import type { MarketingProcessStep } from '@/data/marketing-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface MarketingProcessProps {
  steps: MarketingProcessStep[];
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
}

export function MarketingProcess({
  steps,
  title = 'Predictable execution.',
  titleHighlight = 'Compounding results.',
  subtitle = 'Every marketing engagement follows our battle-tested milestone framework designed to eliminate guesswork, establish clear deliverables, and accelerate pipeline.',
  className,
}: MarketingProcessProps) {
  return (
    <section className={cn('py-20 lg:py-32 bg-secondary/20 border-y border-border/60 relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {title} <br />
            {titleHighlight && <span className="italic font-medium text-primary">{titleHighlight}</span>}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: idx * 0.1 }}
              className="group p-6 sm:p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-primary">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {step.deliverables && step.deliverables.length > 0 && (
                <div className="pt-4 border-t border-border/60">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-muted-foreground block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-1.5 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

