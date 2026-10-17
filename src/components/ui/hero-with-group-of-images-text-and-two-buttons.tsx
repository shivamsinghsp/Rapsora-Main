'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface HeroProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  images?: {
    topSquare?: string;
    tallRight?: string;
    bottomSquare?: string;
  };
  className?: string;
}

const defaultImages = {
  topSquare:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  tallRight:
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
  bottomSquare:
    'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
};

const EASE = [0.22, 1, 0.36, 1] as const;

function Hero({
  badge = 'CAPABILITY REF.004',
  title = (
    <>
      Visual Artifacts with{' '}
      <span className="italic text-primary font-heading">
        Uncompromising Authority.
      </span>
    </>
  ),
  description = 'We engineer graphic design that commands subconscious intent. From high-impact brand collateral to Swiss-grid editorial publications, every artifact is calculated for prestige and undeniable market dominance.',
  primaryButtonText = 'Start your project',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'View our portfolio',
  secondaryButtonLink = '/work',
  images = defaultImages,
  className,
}: HeroProps = {}) {
  const imgTop = images.topSquare ?? defaultImages.topSquare;
  const imgRight = images.tallRight ?? defaultImages.tallRight;
  const imgBottom = images.bottomSquare ?? defaultImages.bottomSquare;

  return (
    <div className={cn('w-full py-16 sm:py-20 lg:py-32 relative overflow-hidden', className)}>
      {/* Ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-background"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center md:grid-cols-2">
          {/* Left Column: Text & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex gap-6 flex-col max-w-xl"
          >
            <div>
              {typeof badge === 'string' ? (
                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-[0.25em] text-primary border-primary/25 bg-primary/5 font-heading"
                >
                  {badge}
                </Badge>
              ) : (
                badge
              )}
            </div>

            <div className="flex gap-4 flex-col">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.08]">
                {title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground font-body font-normal sm:font-medium">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button asChild size="lg" className="gap-3 rounded-full px-7 font-heading text-sm font-semibold">
                <Link href={primaryButtonLink}>
                  {primaryButtonText} <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-3 rounded-full px-7 font-heading text-sm font-semibold border-border hover:border-primary/40 hover:bg-secondary/50"
              >
                <Link href={secondaryButtonLink}>
                  <PhoneCall className="w-4 h-4 text-primary" /> {secondaryButtonText}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Group of 3 Images Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {/* Top Left Image */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-foreground/[0.08] bg-muted aspect-square shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(144,97,249,0.18)] transition-all duration-500">
              <img
                src={imgTop}
                alt="3D abstract fluid graphic design"
                loading="eager"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Right Tall Image (Spans 2 rows) */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-foreground/[0.08] bg-muted row-span-2 shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(144,97,249,0.22)] transition-all duration-500 min-h-[300px] sm:min-h-[420px]">
              <img
                src={imgRight}
                alt="Editorial fine art graphic design and typography poster"
                loading="eager"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom Left Image */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-foreground/[0.08] bg-muted aspect-square shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(144,97,249,0.18)] transition-all duration-500">
              <img
                src={imgBottom}
                alt="Minimalist Swiss grid editorial art layout"
                loading="eager"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
