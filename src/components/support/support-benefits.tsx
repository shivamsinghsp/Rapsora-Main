'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface BenefitItem {
  title: string;
  desc: string;
  tag?: string;
}

interface SupportBenefitsProps {
  id?: string;
  title: string;
  subtitle?: string;
  benefits: BenefitItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function SupportBenefits({
  id = 'benefits',
  title,
  subtitle,
  benefits,
  columns = 4,
  className,
}: SupportBenefitsProps) {
  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section id={id} className={cn('py-20 lg:py-32 bg-background relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className={cn('grid gap-6', gridColsClass)}>
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-3xl sm:text-4xl font-black text-primary block mb-6 tabular-nums">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              {benefit.tag && (
                <div className="pt-6 mt-6 border-t border-border/50">
                  <span className="text-xs font-mono font-medium text-primary">
                    {benefit.tag}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

