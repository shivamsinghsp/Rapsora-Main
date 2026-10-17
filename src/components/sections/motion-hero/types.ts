export type PresetKey =
  | 'solar-ember'
  | 'violet-cosmos'
  | 'arctic-aurora'
  | 'emerald-pulse'
  | 'monochrome-luxe';

export interface ThemeColors {
  id: PresetKey;
  name: string;
  baseBackground: string;
  secondaryBackground: string;
  atmosphericGlow: string;
  accentGlow: string;
  streakColor: string;
  streakHeadColor: string;
  gradientStart: string;
  gradientMiddle: string;
  gradientEnd: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  primaryBtnFrom: string;
  primaryBtnTo: string;
  primaryBtnText: string;
  secondaryBtnBorder: string;
  secondaryBtnText: string;
  descriptionColor: string;
}

export interface MotionHeroConfig {
  eyebrow: {
    enabled: boolean;
    text: string;
    icon?: string;
  };
  headline: {
    line1: string;
    line2: string;
    gradientStart?: string;
    gradientMiddle?: string;
    gradientEnd?: string;
    maxWidth?: string;
    alignment?: 'left' | 'center' | 'right';
  };
  description: {
    enabled: boolean;
    text: string;
    maxWidth?: string;
  };
  primaryButton: {
    enabled: boolean;
    label: string;
    href: string;
  };
  secondaryButton: {
    enabled: boolean;
    label: string;
    href: string;
  };
  background: {
    preset: PresetKey;
    vignetteIntensity: number;
    atmosphericBlur: number;
    showGrain: boolean;
  };
  animation: {
    enabled: boolean;
    speed: number; // 0.5 to 2.0
    intensity: number; // 0.5 to 1.5
    lightStreakCount: number; // 5 to 20
    entranceDuration: number;
    stagger: number;
    parallax: boolean;
  };
  customizer: {
    enabled: boolean;
  };
}

export interface MotionHeroProps {
  config?: Partial<MotionHeroConfig>;
  className?: string;
  onPresetChange?: (preset: PresetKey) => void;
}
