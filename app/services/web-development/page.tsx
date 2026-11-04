'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
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
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const EASE = [0.22, 1, 0.36, 1] as const;

const ARCHITECTURE_PILLARS = [
  {
    number: '01',
    tag: 'FRONTEND ARCHITECTURE',
    title: 'React 19 & Next.js 16 RSC',
    icon: Code2,
    desc: 'React Server Components (RSC) and streaming SSR engineered for instant First Contentful Paint. Zero hydration drift, sub-100ms route transitions, and pixel-perfect responsiveness across every breakpoint.',
    specs: ['Next.js 16 Turbopack', 'React 19 Server Actions', 'Tailwind CSS v4'],
  },
  {
    number: '02',
    tag: 'BACKEND & APIS',
    title: 'Distributed Cloud Microservices',
    icon: Server,
    desc: 'High-throughput API microservices built with Go and Node.js. Optimized connection pooling, sub-50ms edge caching, and scalable GraphQL/REST endpoints that gracefully handle millions of requests.',
    specs: ['Node.js / Bun / Go', 'GraphQL & REST', 'Sub-50ms Edge TTFB'],
  },
  {
    number: '03',
    tag: 'DATA & PERSISTENCE',
    title: 'Hardened Database Layers',
    icon: Database,
    desc: 'Fault-tolerant data modeling using PostgreSQL, Redis caching tiers, and modern vector storage. Strict ACID compliance, zero data loss protocols, and automated point-in-time recovery.',
    specs: ['PostgreSQL & Prisma', 'Redis Caching', 'Vector Embeddings'],
  },
  {
    number: '04',
    tag: 'DEVOPS & INFRASTRUCTURE',
    title: 'Zero-Downtime Deployment CI/CD',
    icon: Cpu,
    desc: 'Automated GitHub Actions pipelines, containerized Docker microservices, and instant preview environments. Security hardening, automatic SSL, and autoscaling across global edge nodes.',
    specs: ['Docker & Kubernetes', 'GitHub Actions CI/CD', '99.99% Uptime SLA'],
  },
];

const ENGINEERING_METRICS = [
  { value: '100', label: 'Lighthouse Score', desc: 'Obsessive performance & Core Web Vitals optimization' },
  { value: '<50ms', label: 'Global Edge TTFB', desc: 'Sub-second server response across edge nodes' },
  { value: '99.99%', label: 'Uptime Reliability', desc: 'Enterprise fault-tolerant cloud architecture' },
  { value: '0.00', label: 'Layout Shift (CLS)', desc: 'Zero visual jump with calculated spatial containers' },
];

const DEV_PIPELINE = [
  {
    step: '01',
    title: 'Architecture & System Blueprint',
    desc: 'We map data schemas, choose optimal state architectures, and construct interactive wireframe contracts before writing production code.',
  },
  {
    step: '02',
    title: 'Component-Driven Agile Sprints',
    desc: 'Bi-weekly sprint iterations delivering tested, production-ready slices with automated branch previews and PR validation.',
  },
  {
    step: '03',
    title: 'Automated Testing & Security Audit',
    desc: 'End-to-end integration tests, type safety validation, automated dependency scanning, and accessibility compliance (WCAG 2.1 AA).',
  },
  {
    step: '04',
    title: 'Zero-Downtime Launch & Hypercare',
    desc: 'Canary releases, live database migration protocols, real-time APM telemetry monitoring, and post-launch optimization.',
  },
];

export default function WebDevelopmentPage() {
  const [activeCodeTab, setActiveCodeTab] = React.useState<'component' | 'api' | 'schema'>('component');

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. PANORAMIC SPREAD HERO (WEB DEVELOPMENT THEME) ── */}
      <PanoramicSpreadHero
        eyebrow="WEB DEVELOPMENT"
        title="Building Digital Experiences."
        titleHighlight="Engineered for Growth."
        description="From intuitive user interfaces to powerful backend architectures, I build modern, responsive, and scalable web applications that turn ideas into functional digital experiences."
        primaryCTA={{
          text: 'Start your project',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'Explore technical architecture',
          href: '#architecture',
        }}
      />

      {/* ── 2. ENGINEERING METRICS BAR (COUNTABLE ANIMATED NUMBERS) ── */}
      <section className="relative z-20 py-10 lg:py-14 bg-card/60 backdrop-blur-md border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {ENGINEERING_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="flex flex-col items-center text-center p-3"
              >
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-1.5 tabular-nums">
                  <AnimatedCounter value={metric.value} delay={i * 0.1} />
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground mb-1">
                  {metric.label}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px]">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ARCHITECTURE PILLARS ── */}
      <section id="architecture" className="py-14 lg:py-20 bg-background relative z-10">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3"
            >
              TECHNICAL SPECIFICATIONS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Obsessive code quality. <br />
              <span className="italic text-primary font-normal">Zero technical debt.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Modern web applications need more than just aesthetic flair. They demand rock-solid engineering, predictable state management, and edge-optimized infrastructure.
            </motion.p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {ARCHITECTURE_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-secondary/30 hover:bg-secondary/60 border border-border/70 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-primary">
                      {pillar.number} // {pillar.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE TERMINAL CODE SHOWCASE ── */}
      <section className="py-14 lg:py-20 bg-secondary/20 border-y border-border/60 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                LIVE PRODUCTION ARCHITECTURE
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Inspect the Stack Under the Hood
              </h2>
            </div>

            {/* Terminal Window Mockup */}
            <div className="rounded-2xl overflow-hidden border border-border/80 bg-black/90 shadow-2xl backdrop-blur-xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-neutral-400">
                    rapsora-core/web-architecture
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('component')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'component'
                        ? 'bg-primary/20 text-primary font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    page.tsx
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('api')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'api'
                        ? 'bg-primary/20 text-primary font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    api/stream.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('schema')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'schema'
                        ? 'bg-primary/20 text-primary font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    schema.prisma
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
                {activeCodeTab === 'component' && (
                  <pre className="text-neutral-200">
                    <code>
{`// Server Component with Streaming SSR & Suspense
import { Suspense } from 'react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { MetricsStream } from '@/components/metrics-stream';

export default async function WebDevelopmentPage() {
  const telemetryData = await fetchTelemetryMetrics({ next: { revalidate: 3600 } });

  return (
    <main className="relative bg-background overflow-hidden">
      <PanoramicSpreadHero
        eyebrow="WEB DEVELOPMENT"
        title="Building Digital Experiences."
        cards={telemetryData.cards}
      />
      <Suspense fallback={<SkeletonLoader />}>
        <MetricsStream initialData={telemetryData} />
      </Suspense>
    </main>
  );
}`}
                    </code>
                  </pre>
                )}

                {activeCodeTab === 'api' && (
                  <pre className="text-neutral-200">
                    <code>
{`// Edge Runtime API Handler with Sub-50ms Response
export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cacheKey = searchParams.get('key') ?? 'default';

  const cached = await redis.get(cacheKey);
  if (cached) {
    return new Response(cached, {
      headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' },
    });
  }

  const payload = await generateTelemetryPayload();
  await redis.set(cacheKey, JSON.stringify(payload), { ex: 300 });

  return Response.json(payload, { status: 200 });
}`}
                    </code>
                  </pre>
                )}

                {activeCodeTab === 'schema' && (
                  <pre className="text-neutral-200">
                    <code>
{`// Prisma Schema — Relational Core & Strict Typing
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Project {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  architecture String
  techStack   String[]
  lighthouse  Int      @default(100)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([slug, createdAt])
}`}
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. AGILE ENGINEERING PIPELINE ── */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              DELIVERY LIFECYCLE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Predictable delivery. <br />
              <span className="italic text-primary font-normal">No surprises.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEV_PIPELINE.map((pipe, idx) => (
              <motion.div
                key={pipe.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
                className="p-6 sm:p-8 rounded-2xl bg-secondary/25 border border-border/70 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-primary block mb-4">
                    {pipe.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-tight">
                    {pipe.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pipe.desc}
                  </p>
                </div>
              </motion.div>
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
