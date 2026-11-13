'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { DesignProcessStep } from '@/data/design-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface DesignProcessProps {
  id?: string;
  steps: DesignProcessStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function DesignProcess({
  id = 'process',
  steps,
  title = 'Our Creative Methodology',
  subtitle = 'A disciplined, 5-stage framework moving seamlessly from deep discovery to validated production systems.',
  className,
}: DesignProcessProps) {
  return (
    <section id={id} className={cn('py-24 sm:py-32 bg-background relative border-t border-border/60', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            Creative Cadence
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

                <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-tight">
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

