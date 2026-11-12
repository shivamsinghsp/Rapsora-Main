'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { SupportProcessStep } from '@/data/support-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface SupportProcessProps {
  id?: string;
  steps: SupportProcessStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function SupportProcess({
  id = 'process',
  steps,
  title = 'Our proven methodology.',
  subtitle = 'A structured, predictable framework that guarantees quality, uptime, and transparent progress at every phase.',
  className,
}: SupportProcessProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-32 bg-secondary/20 border-y border-border/60 relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-4xl sm:text-5xl font-black text-primary block mb-6 tabular-nums">
                  {step.step}
                </span>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

