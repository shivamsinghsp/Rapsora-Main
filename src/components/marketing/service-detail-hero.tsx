'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import type { MarketingServiceConfig } from '@/data/marketing-services';

const EASE = [0.22, 1, 0.36, 1] as const;

interface ServiceDetailHeroProps {
  service: MarketingServiceConfig;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-background">
      {/* Ambient Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-primary/12 rounded-full blur-[140px] opacity-70" />
        <div className="absolute bottom-10 left-[5%] w-[450px] h-[450px] bg-primary/8 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href="/marketing" className="hover:text-foreground transition-colors">
            Marketing
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-primary font-bold">{service.name}</span>
        </motion.div>

        {/* Main Grid: Left copy, Right visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 }}
              className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6"
            >
              {service.title}{' '}
              <span className="italic font-medium text-primary block sm:inline">
                {service.titleHighlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="text-base sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all cursor-pointer"
              >
                <Link href={service.primaryCTA.href}>
                  {service.primaryCTA.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold border-border/80 hover:bg-secondary transition-all cursor-pointer"
              >
                <Link href={service.secondaryCTA.href}>
                  <Terminal className="w-4 h-4 mr-2 text-primary" />
                  {service.secondaryCTA.text}
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Mockup Showcase */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card"
            >
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />

              {/* Float Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-border/80 shadow-lg">
                <span className="text-xs font-mono font-bold text-primary block mb-1">
                  CORE SPECIALIZATION
                </span>
                <p className="text-sm font-heading font-bold text-foreground">
                  {service.overview.subheading}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── METRICS BAR ── */}
        <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {service.metrics.map((metric, idx) => (
              <div key={metric.label} className="flex flex-col items-center text-center p-3">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-2 tabular-nums">
                  <AnimatedCounter value={metric.value} delay={idx * 0.1} />
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground mb-1">
                  {metric.label}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px]">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

