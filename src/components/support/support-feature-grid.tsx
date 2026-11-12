'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { SupportFeatureItem } from '@/data/support-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface SupportFeatureGridProps {
  id?: string;
  title: string;
  subtitle?: string;
  features: SupportFeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function SupportFeatureGrid({
  id,
  title,
  subtitle,
  features,
  columns = 4,
  className,
}: SupportFeatureGridProps) {
  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section id={id} className={cn('py-20 lg:py-28 bg-background relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-14 lg:mb-18">
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
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: idx * 0.06 }}
              className="group p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-muted-foreground/60 tabular-nums">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  {feature.tag && (
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary text-foreground/80 font-medium">
                      {feature.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

