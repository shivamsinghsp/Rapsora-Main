'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArcGalleryHero } from '@/components/ui/arc-gallery-hero-component';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import type { DesignServiceConfig } from '@/data/design-services';

const EASE = [0.22, 1, 0.36, 1] as const;

interface DesignServiceHeroProps {
  service: DesignServiceConfig;
}

export function DesignServiceHero({ service }: DesignServiceHeroProps) {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* ArcGalleryHero Component with Service Images & Content */}
      <ArcGalleryHero
        images={service.galleryImages}
        title={service.headline}
        titleHighlight={service.headlineHighlight}
        description={service.description}
        primaryCTA={service.primaryCTA}
        secondaryCTA={service.secondaryCTA}
        className="pt-24 sm:pt-28 pb-12 sm:pb-16"
      />

      {/* Live Impact Quantitative Metrics Bar */}
      <section className="relative z-20 py-10 sm:py-14 border-y border-border/60 bg-secondary/15 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {service.metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
                className="flex flex-col items-center justify-center"
              >
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="font-heading text-xs sm:text-sm font-bold text-primary uppercase tracking-wider mt-1.5">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1 max-w-[220px] leading-relaxed hidden sm:block">
                  {metric.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

