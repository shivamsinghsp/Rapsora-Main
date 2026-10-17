'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { CinematicStreaksCanvas } from './cinematic-streaks-canvas';
import { MotionHeroCustomizer } from './motion-hero-customizer';
import { THEME_PRESETS, DEFAULT_MOTION_HERO_CONFIG } from './presets';
import type { MotionHeroConfig, MotionHeroProps, PresetKey } from './types';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

export function MotionHero({
  config: userConfig,
  className,
  onPresetChange: externalOnPresetChange,
}: MotionHeroProps) {
  // Merge userConfig with defaults
  const config = React.useMemo<MotionHeroConfig>(() => {
    return {
      eyebrow: { ...DEFAULT_MOTION_HERO_CONFIG.eyebrow, ...userConfig?.eyebrow },
      headline: { ...DEFAULT_MOTION_HERO_CONFIG.headline, ...userConfig?.headline },
      description: { ...DEFAULT_MOTION_HERO_CONFIG.description, ...userConfig?.description },
      primaryButton: { ...DEFAULT_MOTION_HERO_CONFIG.primaryButton, ...userConfig?.primaryButton },
      secondaryButton: { ...DEFAULT_MOTION_HERO_CONFIG.secondaryButton, ...userConfig?.secondaryButton },
      background: { ...DEFAULT_MOTION_HERO_CONFIG.background, ...userConfig?.background },
      animation: { ...DEFAULT_MOTION_HERO_CONFIG.animation, ...userConfig?.animation },
      customizer: { ...DEFAULT_MOTION_HERO_CONFIG.customizer, ...userConfig?.customizer },
    };
  }, [userConfig]);

  // Live customizer state
  const [presetKey, setPresetKey] = React.useState<PresetKey>(config.background.preset);
  const [speed, setSpeed] = React.useState(config.animation.speed);
  const [intensity, setIntensity] = React.useState(config.animation.intensity);
  const [streakCount, setStreakCount] = React.useState(config.animation.lightStreakCount);
  const [parallaxEnabled, setParallaxEnabled] = React.useState(config.animation.parallax);
  const systemReducedMotion = useReducedMotion();
  const [forceReducedMotion, setForceReducedMotion] = React.useState(false);

  const isReducedMotion = systemReducedMotion || forceReducedMotion;
  const theme = THEME_PRESETS[presetKey] || THEME_PRESETS['solar-ember'];

  const handlePresetSelect = (key: PresetKey) => {
    setPresetKey(key);
    if (externalOnPresetChange) {
      externalOnPresetChange(key);
    }
  };

  const handleReset = () => {
    setPresetKey(config.background.preset);
    setSpeed(config.animation.speed);
    setIntensity(config.animation.intensity);
    setStreakCount(config.animation.lightStreakCount);
    setParallaxEnabled(config.animation.parallax);
    setForceReducedMotion(false);
  };

  // Parallax Tilt Handling
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 24 });

  const [parallaxOffset, setParallaxOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!parallaxEnabled || isReducedMotion) {
      setParallaxOffset({ x: 0, y: 0 });
      return;
    }
    const unsubX = springX.on('change', (val) => {
      setParallaxOffset((prev) => ({ ...prev, x: val }));
    });
    const unsubY = springY.on('change', (val) => {
      setParallaxOffset((prev) => ({ ...prev, y: val }));
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [springX, springY, parallaxEnabled, isReducedMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !parallaxEnabled || isReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Expose CSS variables for live theming
  const heroStyle = {
    '--hero-bg-base': theme.baseBackground,
    '--hero-bg-secondary': theme.secondaryBackground,
    '--hero-glow': theme.atmosphericGlow,
    '--hero-accent': theme.accentGlow,
    '--hero-grad-start': theme.gradientStart,
    '--hero-grad-mid': theme.gradientMiddle,
    '--hero-grad-end': theme.gradientEnd,
    '--hero-desc-color': theme.descriptionColor,
  } as React.CSSProperties;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={heroStyle}
      className={cn(
        'relative w-full min-h-[92vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-700 select-none isolate',
        className
      )}
    >
      {/* ── ATMOSPHERIC BACKGROUND LAYERS ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-700"
        style={{ backgroundColor: theme.baseBackground }}
      >
        {/* Layer 1: Volumetric Cloud Nebula Glow */}
        <div
          className="absolute inset-0 opacity-80 transition-all duration-700 blur-3xl"
          style={{
            background: `radial-gradient(circle at 62% 38%, ${theme.atmosphericGlow} 0%, ${theme.secondaryBackground} 55%, transparent 85%)`,
            transform: parallaxEnabled && !isReducedMotion
              ? `translate3d(${parallaxOffset.x * 20}px, ${parallaxOffset.y * 20}px, 0)`
              : 'none',
          }}
        />

        {/* Layer 2: Core Backlight Glow behind typography */}
        <div
          className="absolute inset-0 opacity-70 transition-all duration-700 blur-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${theme.accentGlow}33 0%, transparent 65%)`,
            transform: parallaxEnabled && !isReducedMotion
              ? `translate3d(${parallaxOffset.x * -15}px, ${parallaxOffset.y * -15}px, 0)`
              : 'none',
          }}
        />

        {/* Layer 3: Cinematic Edge Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 35%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.88) 100%)',
          }}
        />

        {/* Layer 4: Delicate Film Grain Texture */}
        {config.background.showGrain && (
          <div
            className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        )}
      </div>

      {/* ── HIGH-PERFORMANCE LIGHT STREAKS CANVAS ── */}
      <CinematicStreaksCanvas
        theme={theme}
        speedMultiplier={speed}
        intensity={intensity}
        streakCount={streakCount}
        parallaxOffset={parallaxEnabled ? parallaxOffset : { x: 0, y: 0 }}
        reducedMotion={isReducedMotion}
      />

      {/* ── FOREGROUND HERO CONTENT ── */}
      <div className="container relative z-20 mx-auto px-6 py-28 sm:py-36 lg:py-44 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        {config.eyebrow.enabled && (
          <motion.div
            initial={isReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 sm:mb-8"
          >
            <div
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-default"
              style={{
                backgroundColor: theme.badgeBg,
                borderColor: theme.badgeBorder,
                color: theme.badgeText,
              }}
            >
              {config.eyebrow.icon && (
                <span className="text-xs sm:text-sm drop-shadow-sm">
                  {config.eyebrow.icon}
                </span>
              )}
              <span className="text-xs sm:text-[13px] font-heading font-medium tracking-wide">
                {config.eyebrow.text}
              </span>
            </div>
          </motion.div>
        )}

        {/* Main Headline */}
        <motion.div
          initial={isReducedMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: config.animation.stagger, ease: EASE }}
          className={cn('relative w-full flex flex-col items-center mb-6 sm:mb-8', config.headline.maxWidth)}
        >
          {/* Ambient text backlight aura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-12 -inset-y-8 rounded-full blur-3xl opacity-35 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${theme.accentGlow} 0%, ${theme.gradientMiddle}33 45%, transparent 75%)`,
            }}
          />

          <h1
            className="relative font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.06] text-center"
            style={{
              filter: `drop-shadow(0 0 40px ${theme.accentGlow}40)`,
            }}
          >
            <span
              className="block bg-clip-text text-transparent transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientMiddle} 50%, ${theme.gradientEnd} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {config.headline.line1}
            </span>
            <span
              className="block bg-clip-text text-transparent transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientMiddle} 50%, ${theme.gradientEnd} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {config.headline.line2}
            </span>
          </h1>
        </motion.div>

        {/* Supporting Description */}
        {config.description.enabled && (
          <motion.p
            initial={isReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: config.animation.stagger * 2,
              ease: EASE,
            }}
            className={cn(
              'font-body font-normal sm:font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 text-balance transition-colors duration-500',
              config.description.maxWidth
            )}
            style={{ color: theme.descriptionColor }}
          >
            {config.description.text}
          </motion.p>
        )}

        {/* Call to Action Buttons */}
        <motion.div
          initial={isReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: config.animation.stagger * 3,
            ease: EASE,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          {config.primaryButton.enabled && (
            <Link
              href={config.primaryButton.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-bold text-sm sm:text-base tracking-tight transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${theme.primaryBtnFrom}, ${theme.primaryBtnTo})`,
                color: theme.primaryBtnText,
                boxShadow: `0 12px 35px -8px ${theme.accentGlow}66`,
              }}
            >
              {config.primaryButton.label}
            </Link>
          )}

          {/* Secondary CTA */}
          {config.secondaryButton.enabled && (
            <Link
              href={config.secondaryButton.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-heading font-semibold text-sm sm:text-base tracking-tight border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-black/25 hover:bg-black/45"
              style={{
                borderColor: theme.secondaryBtnBorder,
                color: theme.secondaryBtnText,
              }}
            >
              {config.secondaryButton.label}
            </Link>
          )}
        </motion.div>
      </div>

      {/* ── OPTIONAL SETTINGS / PRESET PANEL ── */}
      {config.customizer.enabled && (
        <MotionHeroCustomizer
          currentPreset={presetKey}
          onPresetChange={handlePresetSelect}
          speed={speed}
          onSpeedChange={setSpeed}
          intensity={intensity}
          onIntensityChange={setIntensity}
          streakCount={streakCount}
          onStreakCountChange={setStreakCount}
          parallax={parallaxEnabled}
          onParallaxChange={setParallaxEnabled}
          reducedMotion={forceReducedMotion}
          onReducedMotionChange={setForceReducedMotion}
          onReset={handleReset}
          theme={theme}
        />
      )}
    </section>
  );
}
