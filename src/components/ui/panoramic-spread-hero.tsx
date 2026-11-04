'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import { ArrowRight, Code2, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DEVELOP_SERVICES,
  getDevelopService,
  type DevelopCardItem,
} from '@/data/develop-services';

export type PanoramicCardItem = DevelopCardItem;
export type PanoramicCardVariant = 'desktop' | 'mobile';

export interface PanoramicSpreadHeroProps {
  serviceId?: string;
  cardVariant?: PanoramicCardVariant;
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  cards?: PanoramicCardItem[];
  className?: string;
}

interface AnimatedCardProps {
  card: PanoramicCardItem;
  index: number;
  totalCards: number;
  tilt: { x: number; y: number };
  hoveredIndex: number | null;
  onHover: (idx: number | null) => void;
  collapseProgress: MotionValue<number>;
  isReducedMotion: boolean;
  cardVariant: PanoramicCardVariant;
}

function PanoramicCard({
  card,
  index,
  totalCards,
  tilt,
  hoveredIndex,
  onHover,
  collapseProgress,
  isReducedMotion,
  cardVariant,
}: AnimatedCardProps) {
  // Total cards = 8:
  // Left Wing: indices 0, 1, 2, 3 (0 is outer-left, 3 is inner-left)
  // Right Wing: indices 4, 5, 6, 7 (4 is inner-right, 7 is outer-right)
  const isLeft = index < 4;
  const wingIndex = isLeft ? index : index - 4; // 0, 1, 2, 3 on each wing
  const isMobileApp = cardVariant === 'mobile';

  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;
  const isOther = isAnyHovered && !isHovered;

  // ── FLANK & WING GEOMETRY ──
  // Wide open panoramic spread at scroll = 0:
  // Leaves the center corridor (-22vw to +22vw) 100% free for the Center Card!
  let baseSpreadX = 0;
  let collapsedSpreadX = 0;
  let baseRotateY = 0;
  let collapsedRotateY = 0;
  let baseCurveY = 0;

  if (isLeft) {
    // Left Wing:
    // Mobile cards are sleeker/narrower, so spacing is tuned for phone aspect ratio
    const step = isMobileApp ? 6.2 : 6.8;
    const baseOuter = isMobileApp ? -42 : -44;
    const innerEdge = isMobileApp ? -24 : -23.5;

    baseSpreadX = baseOuter + wingIndex * step;
    collapsedSpreadX = -25 + wingIndex * 1.0;

    // Angle inwards towards center
    baseRotateY = -15 + wingIndex * 4.2;
    collapsedRotateY = 24 + (3 - wingIndex) * 3;

    // Parabolic curve
    baseCurveY = Math.pow((3 - wingIndex) / 3, 2) * (isMobileApp ? 22 : 18) - 4;
  } else {
    // Right Wing:
    const step = isMobileApp ? 6.2 : 6.8;
    const baseInner = isMobileApp ? 24 : 23.5;

    baseSpreadX = baseInner + wingIndex * step;
    collapsedSpreadX = 22 + wingIndex * 1.0;

    baseRotateY = 2.5 + wingIndex * 4.2;
    collapsedRotateY = -24 - wingIndex * 3;

    baseCurveY = Math.pow(wingIndex / 3, 2) * (isMobileApp ? 22 : 18) - 4;
  }

  // ── 1. TIER 1: SCROLL TRANSFORMS (Outer container) ──
  const scrollX = useTransform(
    collapseProgress,
    [0, 1],
    [`${baseSpreadX}vw`, `${collapsedSpreadX}vw`]
  );

  const scrollY = useTransform(
    collapseProgress,
    [0, 1],
    [baseCurveY, baseCurveY * 0.3]
  );

  const scrollRotateY = useTransform(
    collapseProgress,
    [0, 1],
    [baseRotateY, collapsedRotateY]
  );

  const scrollScale = useTransform(
    collapseProgress,
    [0, 1],
    [1, 0.8]
  );

  const scrollOpacity = useTransform(
    collapseProgress,
    [0, 0.75, 1],
    [1, 0.85, 0.45]
  );

  // Stacking z-index:
  // Center Card is at z-30.
  // Resting cards are at z-10 to z-16 (behind the center card).
  // Hovered card jumps to z-50 (elevated in front of the center card and all siblings).
  const baseZIndex = 10 + (isLeft ? wingIndex : 3 - wingIndex);
  const zIndex = isHovered ? 50 : isOther ? 8 : baseZIndex;

  // Accordion Parting: When another card is hovered
  let pushX = 0;
  if (isOther && hoveredIndex !== null) {
    pushX = index < hoveredIndex ? -30 : 30;
  }

  const isAdjacent = hoveredIndex !== null && Math.abs(index - hoveredIndex) === 1;
  const otherScale = isAdjacent ? 0.84 : 0.88;

  return (
    <motion.div
      style={{
        x: isReducedMotion ? '0vw' : scrollX,
        y: isReducedMotion ? 0 : scrollY,
        rotateY: isReducedMotion ? 0 : scrollRotateY,
        scale: scrollScale,
        opacity: isOther ? 1 : scrollOpacity,
        zIndex,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
    >
      {/* ── 2. TIER 2: HOVER & SPRING PHYSICS CONTAINER ── */}
      <motion.div
        onMouseEnter={() => onHover(index)}
        onMouseLeave={() => onHover(null)}
        onClick={(e) => {
          e.stopPropagation();
          onHover(isHovered ? null : index);
        }}
        animate={
          isHovered
            ? {
                y: -50, // comes UPWARD
                scale: 1.18, // comes FORWARD
                x: 0,
                rotateY: 0, // straightens directly to face camera
                rotateX: 0,
                rotateZ: 0,
                opacity: 1,
              }
            : isOther
            ? {
                y: 0,
                scale: otherScale, // adjacent/other cards SHRINK to give proper space
                x: pushX, // parts away horizontally
                rotateY: 0,
                rotateX: isReducedMotion ? 0 : tilt.x * 0.15,
                rotateZ: 0,
                opacity: 0.38, // dims to let hovered card be the clear spotlight
              }
            : {
                y: 0,
                scale: 1,
                x: 0,
                rotateY: 0,
                rotateX: isReducedMotion ? 0 : tilt.x * 0.25,
                rotateZ: 0,
                opacity: 1,
              }
        }
        transition={{
          type: 'spring',
          stiffness: 340,
          damping: 26,
          mass: 0.8,
        }}
        className={cn(
          'relative overflow-hidden cursor-pointer select-none transition-[border-color,box-shadow] duration-300',
          // Mobile smartphone proportions vs Desktop developer card proportions:
          isMobileApp
            ? 'w-[110px] xs:w-[130px] sm:w-[155px] md:w-[185px] lg:w-[215px] xl:w-[235px] h-[225px] xs:h-[265px] sm:h-[320px] md:h-[385px] lg:h-[450px] xl:h-[490px] rounded-[24px] xs:rounded-[28px] sm:rounded-[34px] border-[3px] sm:border-[4px] bg-neutral-950 shadow-2xl'
            : 'w-[115px] xs:w-[135px] sm:w-[170px] md:w-[215px] lg:w-[250px] xl:w-[275px] h-[165px] xs:h-[195px] sm:h-[245px] md:h-[300px] lg:h-[350px] xl:h-[385px] rounded-xl sm:rounded-2xl border bg-card/90 shadow-xl sm:shadow-2xl',
          isHovered
            ? 'border-primary ring-2 ring-primary/60 shadow-[0_25px_60px_rgba(144,97,249,0.55),0_0_35px_rgba(144,97,249,0.3)]'
            : isMobileApp
            ? 'border-neutral-800 dark:border-neutral-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.5)]'
            : 'border-white/10 dark:border-white/15'
        )}
      >
        {/* ── SMARTPHONE HARDWARE ACCENTS (Only for mobile app variant) ── */}
        {isMobileApp && (
          <>
            {/* Top Dynamic Island */}
            <div className="absolute top-2 inset-x-0 flex justify-center z-30 pointer-events-none">
              <div className="w-12 sm:w-16 h-3 sm:h-3.5 bg-black rounded-full flex items-center justify-between px-2 shadow-inner border border-white/5">
                <span className="w-1 h-1 rounded-full bg-blue-500/90 animate-pulse" />
                <span className="w-1 h-1 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Top iOS Status Bar (Time & Icons) */}
            <div className="absolute top-1.5 inset-x-3 flex items-center justify-between text-[8px] sm:text-[9px] font-mono font-bold text-white/90 z-20 pointer-events-none select-none">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="text-[7px]">5G</span>
                <span className="inline-block w-2.5 h-1.5 rounded-sm border border-white/80 bg-white/40" />
              </div>
            </div>

            {/* Bottom Home Indicator Swipe Bar */}
            <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-30 pointer-events-none">
              <div className="w-14 sm:w-20 h-1 bg-white/70 rounded-full shadow-sm" />
            </div>
          </>
        )}

        {/* Visual Image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={card.imageSrc}
            alt={card.alt}
            fill
            sizes={
              isMobileApp
                ? '(max-width: 640px) 130px, (max-width: 1024px) 185px, 235px'
                : '(max-width: 640px) 135px, (max-width: 1024px) 215px, 275px'
            }
            className={cn(
              'object-cover transition-transform duration-500 ease-out',
              isHovered ? 'scale-110' : 'scale-100'
            )}
            priority={index < 4}
          />

          {/* Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/35 to-black/30" />
          <div
            className={cn(
              'absolute inset-0 bg-primary/20 transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />

          {/* Top Meta Bar */}
          <div
            className={cn(
              'absolute inset-x-2 sm:inset-x-3 flex items-center justify-between text-xs',
              isMobileApp ? 'top-6 sm:top-7' : 'top-2.5 sm:top-3'
            )}
          >
            <span
              className={cn(
                'inline-flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-full backdrop-blur-md border font-mono text-[9px] sm:text-[10px] font-semibold shadow-sm transition-colors',
                isHovered
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background/85 border-white/15 text-foreground/90'
              )}
            >
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full animate-pulse',
                  isHovered ? 'bg-white' : 'bg-primary'
                )}
              />
              <span className="truncate max-w-[65px] sm:max-w-none">{card.category}</span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-white/80 font-bold px-1.5 sm:px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm">
              0{index + 1}
            </span>
          </div>

          {/* Bottom Information Card */}
          <div
            className={cn(
              'absolute inset-x-2.5 sm:inset-x-3.5 flex flex-col gap-1 sm:gap-1.5',
              isMobileApp ? 'bottom-4 sm:bottom-5' : 'bottom-2.5 sm:bottom-3.5'
            )}
          >
            <h3
              className={cn(
                'font-heading text-xs sm:text-sm font-bold tracking-tight leading-snug drop-shadow-md transition-colors duration-200 line-clamp-2',
                isHovered ? 'text-primary' : 'text-white'
              )}
            >
              {card.title}
            </h3>

            {/* Tech Pill Tags */}
            {card.techTags && card.techTags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-0.5">
                {card.techTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'text-[9px] font-mono px-1.5 py-0.5 rounded-md backdrop-blur-sm border transition-colors',
                      isHovered
                        ? 'bg-primary/20 border-primary/30 text-white font-medium'
                        : 'bg-white/10 dark:bg-white/15 border-white/10 text-white/90'
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PanoramicSpreadHero({
  serviceId = 'web-development',
  cardVariant,
  eyebrow,
  title,
  titleHighlight,
  description,
  primaryCTA,
  secondaryCTA,
  cards,
  className,
}: PanoramicSpreadHeroProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isReducedMotion = !!useReducedMotion();

  // Hover state for interactive focus and accordion spacing
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Load fallback preset config from develop-services if available
  const presetConfig = React.useMemo(() => {
    return getDevelopService(serviceId) || DEVELOP_SERVICES['web-development'];
  }, [serviceId]);

  // Determine card variant (mobile phone frame vs desktop card frame)
  const resolvedCardVariant: PanoramicCardVariant =
    cardVariant ?? (serviceId === 'mobile-app-development' ? 'mobile' : 'desktop');

  const resolvedEyebrow = eyebrow ?? presetConfig.eyebrow;
  const resolvedTitle = title ?? presetConfig.title;
  const resolvedHighlight = titleHighlight ?? presetConfig.titleHighlight;
  const resolvedDescription = description ?? presetConfig.description;
  const resolvedPrimaryCTA = primaryCTA ?? presetConfig.primaryCTA;
  const resolvedSecondaryCTA = secondaryCTA ?? presetConfig.secondaryCTA;
  const resolvedCards = cards ?? presetConfig.cards;

  // Track page scroll to collapse cards beside the center card as user scrolls down
  const { scrollY } = useScroll();
  const collapseProgress = useTransform(scrollY, [0, 360], [0, 1]);

  // Mouse Parallax Pointer Tilt
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isReducedMotion) return;
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / innerHeight - 0.5) * 2;
      setTilt({
        x: -yRatio * 3,
        y: xRatio * 4,
      });
    },
    [isReducedMotion]
  );

  const handleMouseLeave = React.useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHoveredIndex(null);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-background text-foreground overflow-hidden select-none isolate',
        className
      )}
    >
      {/* Background Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] lg:w-[1000px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-primary/15 via-purple-600/10 to-transparent blur-[100px] sm:blur-[140px] rounded-full opacity-70" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[200px] bg-primary/10 blur-[80px] rounded-full opacity-40" />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* ── 3D PANORAMIC STAGE (Cards on left & right wings flanking the center card) ── */}
      <div
        onClick={() => setHoveredIndex(null)}
        className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-auto"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* ── 8 PANORAMIC CARDS (4 ON LEFT FLANK, 4 ON RIGHT FLANK) ── */}
        {resolvedCards.map((card, idx) => (
          <PanoramicCard
            key={card.id}
            card={card}
            index={idx}
            totalCards={resolvedCards.length}
            tilt={tilt}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            collapseProgress={collapseProgress}
            isReducedMotion={isReducedMotion}
            cardVariant={resolvedCardVariant}
          />
        ))}
      </div>

      {/* ── CENTER HERO CARD (PROMINENT, FROSTED GLASS & ALWAYS 100% READABLE) ── */}
      <div
        className={cn(
          'relative z-30 max-w-xl sm:max-w-2xl lg:max-w-[620px] mx-auto flex flex-col items-center text-center px-4 pointer-events-auto select-none transition-opacity duration-300',
          hoveredIndex !== null ? 'opacity-85' : 'opacity-100'
        )}
      >
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-background/90 dark:bg-background/80 backdrop-blur-2xl border border-white/10 dark:border-white/15 shadow-2xl flex flex-col items-center transition-all duration-300">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 dark:bg-secondary/60 backdrop-blur-md border border-border/70 shadow-sm mb-4"
          >
            <Code2 className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-primary uppercase">
              {resolvedEyebrow}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight text-foreground leading-[1.08] mb-3 sm:mb-4 drop-shadow-sm"
          >
            {resolvedTitle}{' '}
            {resolvedHighlight && (
              <span className="italic text-primary font-normal block sm:inline">
                {resolvedHighlight}
              </span>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl font-body leading-relaxed mb-6 sm:mb-8 drop-shadow-sm"
          >
            {resolvedDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {resolvedPrimaryCTA && (
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                <Link href={resolvedPrimaryCTA.href}>
                  {resolvedPrimaryCTA.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            )}

            {resolvedSecondaryCTA && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-5 sm:px-7 py-5 sm:py-6 text-sm sm:text-base font-semibold backdrop-blur-md border-border/80 hover:bg-secondary/70 transition-all duration-300"
              >
                <Link href={resolvedSecondaryCTA.href}>
                  <Terminal className="w-4 h-4 mr-2 text-primary" />
                  {resolvedSecondaryCTA.text}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default PanoramicSpreadHero;

