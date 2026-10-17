'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, RotateCcw, Sparkles } from 'lucide-react';
import { THEME_PRESETS } from './presets';
import type { PresetKey, ThemeColors } from './types';
import { cn } from '@/lib/utils';

interface MotionHeroCustomizerProps {
  currentPreset: PresetKey;
  onPresetChange: (preset: PresetKey) => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  intensity: number;
  onIntensityChange: (intensity: number) => void;
  streakCount: number;
  onStreakCountChange: (count: number) => void;
  parallax: boolean;
  onParallaxChange: (enabled: boolean) => void;
  reducedMotion: boolean;
  onReducedMotionChange: (enabled: boolean) => void;
  onReset: () => void;
  theme: ThemeColors;
}

export function MotionHeroCustomizer({
  currentPreset,
  onPresetChange,
  speed,
  onSpeedChange,
  intensity,
  onIntensityChange,
  streakCount,
  onStreakCountChange,
  parallax,
  onParallaxChange,
  reducedMotion,
  onReducedMotionChange,
  onReset,
  theme,
}: MotionHeroCustomizerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const presets = Object.keys(THEME_PRESETS) as PresetKey[];

  return (
    <div className="absolute bottom-6 right-6 z-40 select-none">
      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Customize motion hero settings"
        aria-expanded={isOpen}
        className={cn(
          'flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-heading font-medium tracking-wide transition-all duration-300 shadow-xl backdrop-blur-md border cursor-pointer',
          isOpen
            ? 'bg-foreground text-background border-foreground'
            : 'bg-black/40 text-white/80 hover:text-white border-white/15 hover:border-white/30 hover:bg-black/60'
        )}
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Cinematic Engine</span>
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: theme.streakColor }}
        />
      </button>

      {/* Slide-out Customization Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-12 right-0 w-[310px] sm:w-[350px] p-5 rounded-3xl bg-[#140C08]/95 border border-white/15 backdrop-blur-2xl shadow-2xl text-white flex flex-col gap-4 text-xs"
            role="dialog"
            aria-label="Motion Hero Customizer Settings"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <h4 className="font-heading font-bold text-sm tracking-tight text-white">
                  Motion Engine Settings
                </h4>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={onReset}
                  title="Reset to defaults"
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Presets Grid */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                Atmospheric Presets
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {presets.map((key) => {
                  const p = THEME_PRESETS[key];
                  const isActive = currentPreset === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => onPresetChange(key)}
                      className={cn(
                        'flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-left transition-all',
                        isActive
                          ? 'border-white/60 bg-white/15 font-semibold text-white shadow-sm'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                      )}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${p.gradientStart}, ${p.streakColor})`,
                        }}
                      />
                      <span className="truncate text-[11px] font-heading">{p.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Light Streak Count Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">Light Streak Density</span>
                <span className="font-mono text-white/80">{streakCount} streaks</span>
              </div>
              <input
                type="range"
                min="4"
                max="20"
                step="1"
                value={streakCount}
                onChange={(e) => onStreakCountChange(Number(e.target.value))}
                className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            {/* Speed Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">Animation Speed</span>
                <span className="font-mono text-white/80">{speed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.4"
                max="2.0"
                step="0.1"
                value={speed}
                onChange={(e) => onSpeedChange(Number(e.target.value))}
                className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            {/* Intensity Slider */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">Glow Intensity</span>
                <span className="font-mono text-white/80">{Math.round(intensity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                value={intensity}
                onChange={(e) => onIntensityChange(Number(e.target.value))}
                className="w-full h-1 bg-white/15 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            {/* Toggles */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
              <label className="flex items-center gap-2 cursor-pointer text-white/80">
                <input
                  type="checkbox"
                  checked={parallax}
                  onChange={(e) => onParallaxChange(e.target.checked)}
                  className="rounded border-white/20 accent-amber-400"
                />
                3D Parallax Tilt
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-white/80">
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={(e) => onReducedMotionChange(e.target.checked)}
                  className="rounded border-white/20 accent-amber-400"
                />
                Static Mode
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
