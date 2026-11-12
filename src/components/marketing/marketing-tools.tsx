'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Sparkles } from 'lucide-react';
import type { MarketingToolItem } from '@/data/marketing-services';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

interface MarketingToolsProps {
  tools: MarketingToolItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function MarketingTools({
  tools,
  title = 'Enterprise-grade tool stack.',
  subtitle = 'We leverage industry-standard analytics, crawling, publishing, and testing technologies to ensure complete data integrity.',
  className,
}: MarketingToolsProps) {
  return (
    <section className={cn('py-20 lg:py-28 bg-background relative', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-2xl mb-14 lg:mb-18">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-card/60 border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-medium text-foreground/80 px-2.5 py-0.5 rounded-md bg-secondary">
                    {tool.category}
                  </span>
                  <Wrench className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

