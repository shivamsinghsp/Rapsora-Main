'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

import { Cta, type CtaProps } from '@/components/ui/hero-04-utils/cta'
import { ArtCollage } from '@/components/ui/hero-04-utils/art-collage'

export interface Hero04Props {
  badge?: React.ReactNode
  title: React.ReactNode
  washImage?: string
  titleLine2?: React.ReactNode
  description: React.ReactNode
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  variant?: 'standard' | 'compact'
  className?: string
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28 lg:py-32',
    title: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight leading-[1.06]',
    description: 'max-w-xl text-base sm:text-lg lg:text-xl text-muted-foreground font-body font-normal sm:font-medium leading-relaxed',
    header: 'gap-6',
    grid: 'gap-12 lg:gap-16 xl:gap-20',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-[1.1]',
    description: 'max-w-md text-sm sm:text-base text-muted-foreground font-body leading-relaxed',
    header: 'gap-4',
    grid: 'gap-10 lg:gap-12',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero04({
  badge,
  title,
  titleLine2,
  description,
  washImage,
  primaryImage,
  secondaryImage,
  primaryAlt = '',
  secondaryAlt = '',
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
  className,
}: Readonly<Hero04Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]

  const backgroundElement = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {washImage && (
        <img
          src={washImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-25 mix-blend-multiply"
        />
      )}
      {/* Soft pastel ambient background — clean, calm, editorial */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EEFF]/80 via-[#FAF6FE]/50 to-background" />
    </div>
  )

  const badgeElement = badge && (
    <div className="mb-2">
      {typeof badge === 'string' ? (
        <span className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-primary uppercase font-heading block">
          {badge}
        </span>
      ) : (
        badge
      )}
    </div>
  )

  const titleElement = title && (
    <h1
      className={cn(
        'text-foreground font-heading font-bold tracking-tight text-balance',
        vs.title,
      )}
    >
      <Balancer>{title}</Balancer>
      {titleLine2 && (
        <>
          <br />
          <Balancer>{titleLine2}</Balancer>
        </>
      )}
    </h1>
  )

  const descriptionElement = description && (
    <p className={cn('text-muted-foreground font-body leading-relaxed', vs.description)}>
      <Balancer>{description}</Balancer>
    </p>
  )

  const ctasElement = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-3">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'link' }}
        />
      )}
    </div>
  )

  const mediaElement = (
    <ArtCollage
      primaryImage={primaryImage}
      secondaryImage={secondaryImage}
      primaryAlt={primaryAlt}
      secondaryAlt={secondaryAlt}
    />
  )

  return (
    <section className={cn('bg-background relative isolate w-full overflow-hidden', className)}>
      {backgroundElement}

      <motion.div
        className={cn(
          'relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center px-6 lg:grid-cols-2',
          vs.section,
          vs.grid,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal
          active={animate}
          className={cn('flex flex-col items-start', vs.header)}
        >
          {badgeElement}
          {titleElement}
          {descriptionElement}
          {ctasElement}
        </Reveal>

        <Reveal active={animate} variants={mediaItem} className="w-full">
          {mediaElement}
        </Reveal>
      </motion.div>
    </section>
  )
}

export default Hero04
