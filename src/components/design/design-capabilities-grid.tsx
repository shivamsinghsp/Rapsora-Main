'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { DesignCapability } from '@/data/design-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface DesignCapabilitiesGridProps {
  id?: string;
  title: string;
  subtitle?: string;
  capabilities: DesignCapability[];
  columns?: 2 | 3;
  className?: string;
}

export function DesignCapabilitiesGrid({
  id = 'capabilities',
  title = 'Specialized Design Capabilities',
  subtitle = 'Turnkey deliverables covering discovery, prototype validation, production design, and developer-ready systems.',
  capabilities,
  columns = 3,
  className,
}: DesignCapabilitiesGridProps) {
  const gridColsClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section id={id} className={cn('py-24 sm:py-32 bg-secondary/15 border-t border-border/60 relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            Service Capabilities
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

        <div className={cn('grid gap-6 sm:gap-8', gridColsClass)}>
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
              className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                    {cap.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60 tabular-nums">
                    {cap.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {cap.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-3 py-1 rounded-full bg-secondary/60 text-foreground/80 font-medium border border-border/40"
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
  );
}

