'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { SupportServiceConfig } from '@/data/support-services';
import { cn } from '@/lib/utils';

interface SupportOverviewSplitProps {
  service: SupportServiceConfig;
  rightVisual?: React.ReactNode;
  className?: string;
}

export function SupportOverviewSplit({
  service,
  rightVisual,
  className,
}: SupportOverviewSplitProps) {
  return (
    <section className={cn('py-20 lg:py-28 border-b border-border/60 bg-background', className)}>
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              {service.overview.title}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {service.overview.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-border/60">
              {service.overview.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="text-sm sm:text-base font-medium text-foreground">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Visual or Mockup */}
          <div className="lg:col-span-6">
            {rightVisual}
          </div>
        </div>
      </div>
    </section>
  );
}

