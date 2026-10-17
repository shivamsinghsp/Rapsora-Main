'use client';

import * as React from 'react';
import type { ThemeColors } from './types';

interface CinematicStreaksCanvasProps {
  theme: ThemeColors;
  speedMultiplier?: number;
  intensity?: number;
  streakCount?: number;
  parallaxOffset?: { x: number; y: number };
  reducedMotion?: boolean;
}

interface Streak {
  id: number;
  yPercent: number; // 0 to 1
  x: number;
  speed: number;
  length: number;
  headRadius: number;
  flareWidth: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  direction: number; // 1 (L->R) or -1 (R->L)
  depth: number; // 0.6 (distant) to 1.4 (foreground)
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function CinematicStreaksCanvas({
  theme,
  speedMultiplier = 1.0,
  intensity = 1.0,
  streakCount = 11,
  parallaxOffset = { x: 0, y: 0 },
  reducedMotion = false,
}: CinematicStreaksCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const streaksRef = React.useRef<Streak[]>([]);
  const isVisibleRef = React.useRef(true);
  const lastTimeRef = React.useRef<number | null>(null);

  // Parse colors
  const streakRgb = React.useMemo(() => hexToRgb(theme.streakColor), [theme.streakColor]);
  const headRgb = React.useMemo(() => hexToRgb(theme.streakHeadColor), [theme.streakHeadColor]);

  // Initialize streaks
  const initStreaks = React.useCallback(
    (width: number) => {
      // Stratified vertical positions inspired by reference video & screenshot
      const baseHeights = [
        0.18, 0.24, 0.32, 0.40, 0.48, 0.54, 0.64, 0.72, 0.78, 0.85, 0.36, 0.60
      ];

      const newStreaks: Streak[] = [];
      const count = Math.max(4, Math.min(22, streakCount));

      for (let i = 0; i < count; i++) {
        const yBase = baseHeights[i % baseHeights.length];
        const yJitter = (Math.random() - 0.5) * 0.06;
        const yPercent = Math.max(0.12, Math.min(0.88, yBase + yJitter));

        // Depth affects speed, size, and brightness
        const depth = 0.7 + Math.random() * 0.7;
        const length = (220 + Math.random() * 320) * depth;
        const speed = (90 + Math.random() * 190) * depth;
        const flareWidth = (80 + Math.random() * 160) * depth;

        // Spread initial x positions across the screen
        const startX = Math.random() * (width + length * 2) - length;

        newStreaks.push({
          id: i,
          yPercent,
          x: startX,
          speed,
          length,
          headRadius: (2.5 + Math.random() * 2) * depth,
          flareWidth,
          alpha: (0.6 + Math.random() * 0.4) * intensity,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 1.5 + Math.random() * 2.5,
          direction: 1, // Primarily cinematic left-to-right
          depth,
        });
      }
      streaksRef.current = newStreaks;
    },
    [streakCount, intensity]
  );

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = 1;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.scale(dpr, dpr);

      if (streaksRef.current.length === 0) {
        initStreaks(rect.width);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Pause when hero scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Pause on tab visibility change
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
      if (document.hidden) {
        lastTimeRef.current = null;
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Render loop
    const render = (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }
      const delta = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Clear previous frame
      ctx.clearRect(0, 0, width, height);

      if (isVisibleRef.current && width > 0 && height > 0) {
        ctx.save();
        // Screen blend creates radiant luminous light bloom
        ctx.globalCompositeOperation = 'screen';

        const streaks = streaksRef.current;
        for (let i = 0; i < streaks.length; i++) {
          const s = streaks[i];

          if (!reducedMotion) {
            // Advance streak
            s.x += s.speed * speedMultiplier * delta * s.direction;
            s.pulsePhase += s.pulseSpeed * delta;

            // Reset when passed viewport boundary
            if (s.direction > 0 && s.x - s.length > width + 60) {
              s.x = -s.length - Math.random() * 150;
            } else if (s.direction < 0 && s.x + s.length < -60) {
              s.x = width + s.length + Math.random() * 150;
            }
          }

          // Parallax deflection based on depth
          const py = s.yPercent * height + (parallaxOffset.y * 35 * s.depth);
          const px = s.x + (parallaxOffset.x * 25 * s.depth);

          const pulse = 0.85 + Math.sin(s.pulsePhase) * 0.15;
          const currentAlpha = Math.min(1, s.alpha * pulse * intensity);

          const tailX = px - (s.length * s.direction);

          // 1. Soft Ambient Trail Bloom (wide, diffuse glow)
          const bloomGrad = ctx.createLinearGradient(tailX, py, px, py);
          bloomGrad.addColorStop(0, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, 0)`);
          bloomGrad.addColorStop(0.65, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, ${currentAlpha * 0.15})`);
          bloomGrad.addColorStop(1, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, ${currentAlpha * 0.45})`);

          ctx.fillStyle = bloomGrad;
          ctx.beginPath();
          ctx.ellipse(
            (px + tailX) / 2,
            py,
            s.length / 2,
            12 * s.depth,
            0,
            0,
            Math.PI * 2
          );
          ctx.fill();

          // 2. Focused Laser Streak Core
          const coreGrad = ctx.createLinearGradient(tailX, py, px, py);
          coreGrad.addColorStop(0, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, 0)`);
          coreGrad.addColorStop(0.5, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, ${currentAlpha * 0.4})`);
          coreGrad.addColorStop(0.85, `rgba(${headRgb.r}, ${headRgb.g}, ${headRgb.b}, ${currentAlpha * 0.8})`);
          coreGrad.addColorStop(1, `rgba(255, 255, 255, ${currentAlpha})`);

          ctx.lineWidth = 1.8 * s.depth;
          ctx.strokeStyle = coreGrad;
          ctx.beginPath();
          ctx.moveTo(tailX, py);
          ctx.lineTo(px, py);
          ctx.stroke();

          // 3. Anamorphic Horizontal Lens Flare Glint
          const flareGrad = ctx.createLinearGradient(
            px - s.flareWidth / 2,
            py,
            px + s.flareWidth / 2,
            py
          );
          flareGrad.addColorStop(0, `rgba(${headRgb.r}, ${headRgb.g}, ${headRgb.b}, 0)`);
          flareGrad.addColorStop(0.5, `rgba(255, 255, 255, ${currentAlpha * 0.9})`);
          flareGrad.addColorStop(1, `rgba(${headRgb.r}, ${headRgb.g}, ${headRgb.b}, 0)`);

          ctx.lineWidth = 2.2 * s.depth;
          ctx.strokeStyle = flareGrad;
          ctx.beginPath();
          ctx.moveTo(px - s.flareWidth / 2, py);
          ctx.lineTo(px + s.flareWidth / 2, py);
          ctx.stroke();

          // 4. Luminous Spark Head Radial Flare
          const headRadius = s.headRadius * 6;
          const radial = ctx.createRadialGradient(px, py, 0, px, py, headRadius);
          radial.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
          radial.addColorStop(0.2, `rgba(${headRgb.r}, ${headRgb.g}, ${headRgb.b}, ${currentAlpha * 0.85})`);
          radial.addColorStop(0.5, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, ${currentAlpha * 0.35})`);
          radial.addColorStop(1, `rgba(${streakRgb.r}, ${streakRgb.g}, ${streakRgb.b}, 0)`);

          ctx.fillStyle = radial;
          ctx.beginPath();
          ctx.arc(px, py, headRadius, 0, Math.PI * 2);
          ctx.fill();

          // 5. White-hot micro center
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
          ctx.beginPath();
          ctx.arc(px, py, s.headRadius * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (reducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    theme,
    speedMultiplier,
    intensity,
    parallaxOffset.x,
    parallaxOffset.y,
    reducedMotion,
    initStreaks,
    streakRgb,
    headRgb,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 size-full z-10"
      aria-hidden="true"
    />
  );
}
