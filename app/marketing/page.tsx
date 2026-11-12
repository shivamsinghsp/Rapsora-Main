'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { ArcGalleryHero } from '@/components/ui/arc-gallery-hero-component';
import { MarketingServicesGrid } from '@/components/marketing/marketing-services-grid';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const MARKETING_GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=600&q=80',
];

const VALUE_PROPOSITIONS = [
  {
    icon: Target,
    title: 'High-Intent Customer Acquisition',
    desc: 'We focus exclusively on capture channels where buyers are actively researching, evaluating, and purchasing solutions.',
  },
  {
    icon: BarChart3,
    title: 'Closed-Loop Revenue Attribution',
    desc: 'No vanity metrics. We measure qualified pipeline, cost-per-acquisition reduction, and compound customer lifetime value.',
  },
  {
    icon: Layers,
    title: 'Cross-Channel Synergy',
    desc: 'SEO captures demand, content establishes authority, social media expands brand equity, and email drives automated retention.',
  },
  {
    icon: ShieldCheck,
    title: '100% White-Hat & Brand Safe',
    desc: 'Zero spam shortcuts, zero algorithmic penalty risks. Sustainable strategies built to withstand platform and search updates.',
  },
];

export default function MarketingOverviewPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO SECTION ── */}
      <ArcGalleryHero
        images={MARKETING_GALLERY_IMAGES}
        title="Engineer Sustainable Revenue"
        titleHighlight="Through Data-Driven Growth."
        description="We combine technical search engine dominance, high-authority editorial content, native social storytelling, and behavioral email automation into an integrated customer acquisition engine."
        primaryCTA={{ text: 'Explore Marketing Services', href: '#services' }}
        secondaryCTA={{ text: 'Schedule a Growth Audit', href: '/contact' }}
      />

      {/* ── 2. VALUE PROPOSITION STRIP ── */}
      <section className="py-16 lg:py-24 border-y border-border/60 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_PROPOSITIONS.map((prop) => {
              const IconComp = prop.icon;
              return (
                <div key={prop.title} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-1">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. REDESIGNED MARKETING SERVICES GRID (4 SERVICES) ── */}
      <MarketingServicesGrid />

      {/* ── 4. WHY RAPSORA VS TRADITIONAL AGENCIES ── */}
      <section className="py-20 lg:py-32 bg-secondary/15 border-t border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-14 lg:mb-20">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              A growth partner that builds <br />
              <span className="italic font-medium text-primary">permanent enterprise equity.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Traditional agencies bill for hours and output vanity impressions. We operate as an extension of your product and revenue team, engineering measurable pipeline velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Engineering Mindset',
                desc: 'We treat marketing as code: structured experiments, automated testing, rigorous telemetry, and continuous iterative refinement.',
              },
              {
                title: 'Cross-Functional Mastery',
                desc: 'Our strategists work side-by-side with full-stack engineers and UI/UX designers, ensuring seamless technical execution from day one.',
              },
              {
                title: 'Transparent Reporting',
                desc: 'Real-time client telemetry dashboards with direct CRM revenue integration. No PDF smoke-and-mirrors—just verifiable growth.',
              },
            ].map((adv) => (
              <div
                key={adv.title}
                className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary mb-6" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

