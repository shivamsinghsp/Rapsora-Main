'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Layers,
  Palette,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ArcGalleryHero } from '@/components/ui/arc-gallery-hero-component';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const EASE = [0.22, 1, 0.36, 1] as const;

const DESIGN_GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=600&q=80',
];

const DESIGN_SERVICES_LIST = [
  {
    number: '01',
    name: 'Brand Identity',
    slug: 'branding',
    route: '/services/branding',
    description:
      'Timeless visual and emotional identity systems engineered to command market authority, build instant recognition, and foster customer loyalty.',
    highlights: [
      'Bespoke geometric logomarks & symbols',
      'Editorial font pairings & custom type scales',
      'Comprehensive cloud brand book & tokens',
      'Physical packaging, print & stationery specs',
    ],
  },
  {
    number: '02',
    name: 'Web Design',
    slug: 'web-design',
    route: '/services/web-design',
    description:
      'Responsive, high-conversion web architectures that merge editorial elegance with psychological scanning patterns to turn traffic into pipeline.',
    highlights: [
      'Fluid responsive viewports (375px to 4K)',
      'High-velocity conversion information architecture',
      'Atomic component systems & design tokens',
      'Production-ready engineering handoff specs',
    ],
  },
  {
    number: '03',
    name: 'UI/UX Design',
    slug: 'ui-ux',
    route: '/services/ui-ux',
    description:
      'Frictionless digital product interfaces, complex SaaS dashboards, and native mobile experiences engineered for maximum user velocity.',
    highlights: [
      'B2B web app dashboards & data density design',
      'Native iOS (HIG) & Android (Material You) UX',
      'Tokenized design systems built with Figma variables',
      'Usability research, heatmaps & clickable prototypes',
    ],
  },
  {
    number: '04',
    name: 'Graphic Design',
    slug: 'graphic-design',
    route: '/services/graphic-design',
    description:
      'Prestige Swiss-grid editorial publications, luxury structural packaging dielines, custom vector illustration systems, and high-impact campaigns.',
    highlights: [
      'Editorial magazines, annual reports & whitepapers',
      'Luxury structural packaging dielines & foil finishes',
      'Outdoor billboards & transit campaign takeovers',
      'Bespoke SVG iconography & technical diagrams',
    ],
  },
  {
    number: '05',
    name: 'Motion Design',
    slug: 'motion-design',
    route: '/services/motion-design',
    description:
      'Photorealistic 3D simulations, kinetic brand systems, buttery 120fps UI micro-interactions, and broadcast-tier commercial launch films.',
    highlights: [
      'Raytraced 4K 3D product animations & reveals',
      'Kinetic logo animations & broadcast bumpers',
      'Sub-50kb lightweight Lottie & Rive JSON code',
      'Synchronized custom sound design & audio branding',
    ],
  },
];

const DESIGN_COMMITMENTS = [
  {
    icon: Palette,
    title: 'Zero Template Work',
    desc: 'Every logomark, curve, typography scale, and layout is custom designed from scratch to reflect your exact brand essence.',
  },
  {
    icon: Layers,
    title: 'Atomic System Thinking',
    desc: 'We construct unified, tokenized component libraries that scale seamlessly across web, mobile, marketing, and print.',
  },
  {
    icon: Zap,
    title: 'Conversion-Engineered UX',
    desc: 'Aesthetic beauty backed by cognitive psychology, eye-tracking patterns, and validated commercial user flows.',
  },
  {
    icon: Compass,
    title: 'Production Parity',
    desc: 'Developer-first Figma files with auto-layout and CSS token mappings ensuring flawless implementation in code.',
  },
];

export default function DesignOverviewPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO SECTION ── */}
      <ArcGalleryHero
        images={DESIGN_GALLERY_IMAGES}
        title="Visual Authority & Digital Craft."
        titleHighlight="Obsessive Design That Converts."
        description="We build distinctive brand identities, high-velocity websites, intuitive SaaS products, luxury packaging, and cinematic 3D motion design that command prestige and accelerate commercial growth."
        primaryCTA={{ text: 'Explore Design Services', href: '#services' }}
        secondaryCTA={{ text: 'Start a Creative Project', href: '/contact' }}
      />

      {/* ── 2. METRICS & OPERATIONAL STANDARDS ── */}
      <section className="py-12 border-y border-border/60 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">3.4x</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Average CRO Lift</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">100%</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Vector Precision</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">AAA</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Accessibility Standard</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">60/120fps</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Fluid Kinetics</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FIVE CORE DESIGN SERVICES EDITORIAL GRID ── */}
      <section id="services" className="py-24 sm:py-32 relative">
        {/* Oversized background typography watermark */}
        <div className="pointer-events-none absolute top-10 right-0 select-none overflow-hidden opacity-[0.02] dark:opacity-[0.04] z-0">
          <span className="font-heading text-[22vw] font-black leading-none tracking-tighter text-foreground">
            DESIGN
          </span>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
              Design Disciplines
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Five specialized disciplines to establish unmistakable brand authority.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every discipline is led by senior art directors and product designers focused on turning visual appeal into tangible enterprise value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESIGN_SERVICES_LIST.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.8, ease: EASE, delay: idx * 0.1 }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-4xl sm:text-5xl font-black text-primary/80 group-hover:text-primary transition-colors tabular-nums">
                      {service.number}
                    </span>
                    <Link
                      href={service.route}
                      className="w-12 h-12 rounded-full border border-border/80 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                      aria-label={`View ${service.name} details`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-6 border-t border-border/60">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                  <Button asChild variant="ghost" className="px-0 hover:bg-transparent text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <Link href={service.route}>
                      Explore Service
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CREATIVE COMMITMENTS & STANDARDS ── */}
      <section className="py-24 sm:py-32 bg-secondary/15 border-t border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
              Design Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Engineered for distinction and durability.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We reject transient design gimmicks in favor of mathematical craft, ergonomic clarity, and brand longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_COMMITMENTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
