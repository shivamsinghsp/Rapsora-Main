import * as React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Code2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Terminal,
  Server,
  Workflow,
  Smartphone,
  CheckCircle2,
  ShoppingCart,
  CreditCard,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import {
  DEVELOP_SERVICES,
  getDevelopService,
  type DevelopServiceConfig,
} from '@/data/develop-services';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Icon mapping helper
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Terminal,
  Server,
  Workflow,
  Smartphone,
  CheckCircle2,
  ShoppingCart,
  CreditCard,
  Rocket,
  TrendingUp,
};

const DEDICATED_STATIC_SLUGS = new Set([
  'web-development',
  'mobile-app-development',
  'ai-chatbot',
  'erp',
  'crm',
  'ecommerce',
]);

export async function generateStaticParams() {
  return Object.keys(DEVELOP_SERVICES)
    .filter((slug) => !DEDICATED_STATIC_SLUGS.has(slug))
    .map((slug) => ({
      slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDevelopService(slug);

  if (!service) {
    return {
      title: 'Service Not Found | RapSora',
    };
  }

  return {
    title: `${service.name} | RapSora`,
    description: service.description,
    openGraph: {
      title: `${service.name} | RapSora Technologies`,
      description: service.description,
    },
  };
}

export default async function DynamicDevelopServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getDevelopService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. BUTTERY SMOOTH 3D PANORAMIC SPREAD HERO ── */}
      <PanoramicSpreadHero
        serviceId={service.id}
        eyebrow={service.eyebrow}
        title={service.title}
        titleHighlight={service.titleHighlight}
        description={service.description}
        primaryCTA={service.primaryCTA}
        secondaryCTA={service.secondaryCTA}
        cards={service.cards}
      />

      {/* ── 2. ENGINEERING METRICS BAR (COUNTABLE ANIMATED NUMBERS) ── */}
      <section className="relative z-20 py-10 lg:py-14 bg-card/60 backdrop-blur-md border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {service.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className="flex flex-col items-center text-center p-3 sm:p-4"
              >
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-2 tabular-nums">
                  <AnimatedCounter value={metric.value} delay={idx * 0.1} />
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground mb-1">
                  {metric.label}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px]">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ARCHITECTURE PILLARS ── */}
      <section id="architecture" className="py-20 lg:py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-14 lg:mb-20">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Engineered for authority. <br />
              <span className="italic text-primary font-normal">Zero compromise.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every system is engineered from the ground up for measurable speed, rock-solid security, and effortless vertical scaling.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {service.pillars.map((pillar) => {
              const IconComp = ICON_MAP[pillar.iconName] || Code2;
              return (
                <div
                  key={pillar.title}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-secondary/30 hover:bg-secondary/60 border border-border/70 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-bold text-primary">
                        {pillar.number} // {pillar.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {pillar.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-background/80 border border-border/60 text-foreground/80 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. CODE SHOWCASE & LIVE ARCHITECTURE ── */}
      {service.codeSnippet && (
        <section className="py-20 lg:py-28 bg-secondary/20 border-y border-border/60 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                  CODE LEVEL ARCHITECTURE
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  {service.codeSnippet.filename}
                </h2>
              </div>

              {/* Terminal Window Mockup */}
              <div className="rounded-2xl overflow-hidden border border-border/80 bg-black/90 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 font-mono text-xs text-neutral-400">
                      rapsora-core/{service.id}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-primary font-bold">
                    {service.codeSnippet.language}
                  </span>
                </div>

                <div className="p-6 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed overflow-x-auto">
                  <pre>
                    <code>{service.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. AGILE DELIVERY LIFECYCLE ── */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14 lg:mb-18">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              DELIVERY LIFECYCLE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Predictable execution. <br />
              <span className="italic text-primary font-normal">Transparent milestones.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {service.pipeline.map((pipe) => (
              <div
                key={pipe.step}
                className="p-6 sm:p-8 rounded-2xl bg-secondary/25 border border-border/70 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-primary block mb-3">
                    {pipe.step}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 tracking-tight">
                    {pipe.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pipe.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
