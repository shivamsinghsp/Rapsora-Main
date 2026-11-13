'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { DesignTool } from '@/data/design-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface DesignToolsProps {
  tools: DesignTool[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function DesignTools({
  tools,
  title = 'Design & Creative Technology Stack',
  subtitle = 'Industry-leading software, vector drafting tools, 3D engines, and prototyping environments we deploy for uncompromising craft.',
  className,
}: DesignToolsProps) {
  return (
    <section className={cn('py-20 sm:py-28 bg-secondary/15 border-t border-border/60 relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            Tooling & Craft
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-3">
                  {tool.category}
                </span>

                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {tool.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
