'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- The ArcGalleryHero Component ---
export type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  // radius for different screen sizes
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  // size of each card for different screen sizes
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  // optional extra class on outer section
  className?: string;
  // customizable content
  badge?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
  badge,
  title = 'Rediscover Your Memories with AI',
  titleHighlight,
  description = 'Our intelligent platform finds, organizes, and brings your most cherished moments back to life.',
  primaryCTA = { text: 'Explore Your Past', href: '#explore' },
  secondaryCTA = { text: 'How It Works', href: '#how-it-works' },
  children,
}) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  // Effect to handle responsive resizing of the arc and cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  // Ensure at least 2 points to distribute angles for the arc calculation
  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section
      className={cn(
        'relative overflow-hidden bg-background text-foreground flex flex-col items-center pt-20 sm:pt-24 pb-14 sm:pb-18 px-4 sm:px-6 isolate',
        className
      )}
    >
      {/* Background Ambient Glow Accents */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[360px] bg-primary/15 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[400px] sm:w-[650px] h-[180px] bg-primary/10 blur-[90px] rounded-full opacity-40" />
      </div>

      {/* Background ring container that controls geometry */}
      <div
        className="relative mx-auto w-full z-10"
        style={{
          // Give it a bit more height to prevent clipping
          height: dimensions.radius * 1.15,
        }}
      >
        {/* Center pivot for transforms - positioned at bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {/* Each image is positioned on the circle and rotated to face outward */}
          {images.map((src, i) => {
            const angle = startAngle + step * i; // degrees
            const angleRad = (angle * Math.PI) / 180;

            // Calculate x and y positions on the arc
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  animationDelay: `${i * 90}ms`,
                  animationFillMode: 'forwards',
                  zIndex: count - i,
                }}
              >
                <div
                  className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-border/80 bg-card transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:ring-primary/60 w-full h-full"
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <img
                    src={src}
                    alt={`Gallery Asset ${i + 1}`}
                    className="block w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                    // Add a reliable fallback in case an image fails to load
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://cdn.21st.dev/assets/mirror/43/43787263c53801c9064e1f3209488a5f4bd83986c0bb01223176c57bb99f959b.svg';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content positioned below the arc */}
      <div className="relative z-20 flex-1 flex items-center justify-center px-4 -mt-24 sm:-mt-32 md:-mt-44 lg:-mt-52">
        {children ? (
          <div
            className="text-center max-w-3xl px-4 opacity-0 animate-fade-in flex flex-col items-center"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            {children}
          </div>
        ) : (
          <div
            className="text-center max-w-3xl px-4 opacity-0 animate-fade-in flex flex-col items-center"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono font-bold tracking-widest uppercase mb-5">
                <span>{badge}</span>
              </div>
            )}

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              {title}{' '}
              {titleHighlight && (
                <span className="italic font-medium text-primary block sm:inline">
                  {titleHighlight}
                </span>
              )}
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {primaryCTA && (
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all cursor-pointer"
                  onClick={primaryCTA.onClick}
                >
                  {primaryCTA.href ? (
                    <Link href={primaryCTA.href}>
                      {primaryCTA.text}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <span>
                      {primaryCTA.text}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </Button>
              )}

              {secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold border-border/80 hover:bg-secondary transition-all cursor-pointer"
                  onClick={secondaryCTA.onClick}
                >
                  {secondaryCTA.href ? (
                    <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                  ) : (
                    <span>{secondaryCTA.text}</span>
                  )}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 50%);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 0.85s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
        .animate-fade-in {
          animation-name: fade-in;
          animation-duration: 0.85s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </section>
  );
};

export default ArcGalleryHero;
