'use client'

import * as React from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { Cta, type CtaProps } from '@/components/ui/hero-10-utils/cta'

export interface Hero10Props {
  badge?: React.ReactNode
  title: string
  titleLine2Prefix?: string
  titleHighlight?: string
  description: string
  socialProof?: string
  washImage?: string
  images: string[]
  imageAlts?: string[]
  animation?: 'none' | 'subtle'
  primaryCTA: CtaProps
  secondaryCTA?: CtaProps
  variant?: 'standard' | 'compact'
  className?: string
}

const variantStyles = {
  standard: {
    section: 'py-20 sm:py-28 lg:py-32',
    title: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[1.06]',
    description: 'max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground font-body font-normal sm:font-medium leading-relaxed',
    header: 'gap-5',
    content: 'gap-10 sm:gap-12',
    fan: 'max-w-4xl',
    fanCard: 'aspect-[3/4] sm:aspect-[4/5]',
  },
  compact: {
    section: 'py-14 sm:py-20',
    title: 'text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-[1.1]',
    description: 'max-w-xl text-sm sm:text-base text-muted-foreground font-body leading-relaxed',
    header: 'gap-4',
    content: 'gap-8 sm:gap-10',
    fan: 'max-w-3xl',
    fanCard: 'aspect-[3/4] sm:aspect-[4/5]',
  },
} as const



const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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

const fanConfigs = [
  {
    width: 'w-[36%] sm:w-[38%]',
    layout: '-mr-8 sm:-mr-12',
    baseZ: 10,
    baseY: 20,
    baseRotate: -7,
    hoverX: -14,
    hoverY: -6,
    hoverRotate: -9,
    hoverScale: 1.05,
    floatDeltaY: -8,
    duration: 5.5,
    delay: 0,
  },
  {
    width: 'w-[42%] sm:w-[44%]',
    layout: '',
    baseZ: 20,
    baseY: -10,
    baseRotate: 0,
    hoverX: 0,
    hoverY: -26,
    hoverRotate: 0,
    hoverScale: 1.06,
    floatDeltaY: -10,
    duration: 4.8,
    delay: 0.3,
  },
  {
    width: 'w-[36%] sm:w-[38%]',
    layout: '-ml-8 sm:-ml-12',
    baseZ: 10,
    baseY: 20,
    baseRotate: 7,
    hoverX: 14,
    hoverY: -6,
    hoverRotate: 9,
    hoverScale: 1.05,
    floatDeltaY: -8,
    duration: 6,
    delay: 0.6,
  },
]

function ImageFan({
  images,
  imageAlts,
  cardAspect,
  animate,
}: Readonly<{
  images: string[]
  imageAlts?: string[]
  cardAspect: string
  animate: boolean
}>) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // 3D Parallax Tilt on Cursor
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHoveredIdx(null)
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="relative flex w-full items-center justify-center pt-4 sm:pt-8 select-none"
    >
      <motion.div
        style={{
          rotateX: animate ? rotateX : 0,
          rotateY: animate ? rotateY : 0,
        }}
        className="relative flex w-full items-center justify-center"
      >
        {images.slice(0, 3).map((src, i) => {
          const cfg = fanConfigs[i] ?? fanConfigs[1]
          const isHovered = hoveredIdx === i
          const isOtherHovered = hoveredIdx !== null && hoveredIdx !== i

          return (
            <motion.div
              key={src}
              initial={
                animate
                  ? {
                      opacity: 0,
                      y: 40,
                      scale: 0.92,
                    }
                  : false
              }
              whileInView={
                animate
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.15 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
                  : undefined
              }
              viewport={{ once: true, margin: '-60px' }}
              className={cn(
                'relative shrink-0 select-none cursor-pointer',
                cardAspect,
                cfg.width,
                cfg.layout,
              )}
              style={{
                zIndex: isHovered ? 40 : cfg.baseZ,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx((prev) => (prev === i ? null : prev))}
            >
              {/* Continuous Ambient Bobbing Wrapper */}
              <motion.div
                className="size-full"
                animate={
                  animate
                    ? {
                        y: [0, cfg.floatDeltaY, 0],
                      }
                    : undefined
                }
                transition={
                  animate
                    ? {
                        duration: cfg.duration,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: cfg.delay,
                      }
                    : undefined
                }
              >
                {/* Interactive Card with Smooth Spring Physics */}
                <motion.div
                  className={cn(
                    'relative size-full overflow-hidden rounded-2xl sm:rounded-3xl bg-background',
                    'border border-foreground/[0.08] transition-shadow duration-300',
                    isHovered
                      ? 'shadow-[0_25px_60px_rgba(144,97,249,0.25)]'
                      : 'shadow-[0_20px_50px_rgba(0,0,0,0.1)]',
                  )}
                  style={{
                    transformOrigin: 'center center',
                    willChange: 'transform',
                    transform: !animate
                      ? `translateY(${cfg.baseY}px) rotate(${cfg.baseRotate}deg)`
                      : undefined,
                  }}
                  animate={
                    animate
                      ? isHovered
                        ? {
                            x: cfg.hoverX,
                            y: cfg.hoverY,
                            rotate: cfg.hoverRotate,
                            scale: cfg.hoverScale,
                            opacity: 1,
                            transition: { type: 'spring', stiffness: 280, damping: 24 },
                          }
                        : isOtherHovered
                        ? {
                            x: 0,
                            y: cfg.baseY + 4,
                            rotate: cfg.baseRotate,
                            scale: 0.96,
                            opacity: 0.72,
                            transition: { type: 'spring', stiffness: 280, damping: 24 },
                          }
                        : {
                            x: 0,
                            y: cfg.baseY,
                            rotate: cfg.baseRotate,
                            scale: 1,
                            opacity: 1,
                            transition: { type: 'spring', stiffness: 260, damping: 24 },
                          }
                      : undefined
                  }
                >
                  <img
                    src={src}
                    alt={imageAlts?.[i] ?? ''}
                    decoding="async"
                    className="size-full object-cover select-none pointer-events-none"
                  />

                  {/* Elegant primary glow ring on hover */}
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-primary/40 transition-opacity duration-300',
                      isHovered ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export function Hero10({
  badge,
  title,
  titleLine2Prefix,
  titleHighlight,
  description,
  socialProof,
  washImage,
  images,
  imageAlts,
  animation = 'none',
  primaryCTA,
  secondaryCTA,
  variant = 'standard',
  className,
}: Readonly<Hero10Props>) {
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
      {/* Soft pastel ambient background wash — consistent with Rapsora design system */}
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
      {(titleLine2Prefix || titleHighlight) && (
        <>
          <br />
          <Balancer>
            {titleLine2Prefix && <span>{titleLine2Prefix} </span>}
            {titleHighlight && (
              <span className="italic text-primary">{titleHighlight}</span>
            )}
          </Balancer>
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
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
      {primaryCTA?.ctaEnabled && <Cta cta={primaryCTA} />}
      {secondaryCTA?.ctaEnabled && (
        <Cta
          cta={{ ...secondaryCTA, variant: secondaryCTA.variant ?? 'outline' }}
        />
      )}
    </div>
  )

  const socialProofElement = socialProof && (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-4 py-1.5 backdrop-blur-xs">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      <p className="text-muted-foreground text-xs font-heading font-medium tracking-wide">{socialProof}</p>
    </div>
  )

  const mediaElement = images?.length ? (
    <ImageFan
      images={images}
      imageAlts={imageAlts}
      cardAspect={vs.fanCard}
      animate={animate}
    />
  ) : null

  return (
    <section className={cn('bg-background relative isolate w-full overflow-hidden', className)}>
      {backgroundElement}

      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center',
          vs.section,
          vs.content,
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <Reveal
          active={animate}
          className={cn(
            'flex w-full max-w-3xl flex-col items-center',
            vs.header,
          )}
        >
          {badgeElement}
          {titleElement}
          {descriptionElement}
        </Reveal>

        <Reveal active={animate} className="flex flex-col items-center gap-4">
          {ctasElement}
          {socialProofElement}
        </Reveal>

        <div className={cn('mx-auto w-full', vs.fan)}>{mediaElement}</div>
      </motion.div>
    </section>
  )
}

export default Hero10
