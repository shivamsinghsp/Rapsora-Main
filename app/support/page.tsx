'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Lock,
  Server,
  Shield,
  Zap,
} from 'lucide-react';
import { ArcGalleryHero } from '@/components/ui/arc-gallery-hero-component';
import { Button } from '@/components/ui/button';
import { SUPPORT_SERVICES } from '@/data/support-services';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const EASE = [0.22, 1, 0.36, 1] as const;

const SUPPORT_GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
];

const SUPPORT_SERVICES_LIST = [
  {
    number: '01',
    name: 'Website Management',
    slug: 'website-management',
    route: '/support/website-management',
    description:
      'We keep your digital presence running smoothly through continuous updates, performance improvements, proactive maintenance, and dedicated technical support.',
    highlights: [
      'Weekly core & dependency regression testing',
      'Continuous Core Web Vitals optimization',
      'Under 2-hour critical emergency response',
      'Zero downtime staging-to-production pipeline',
    ],
  },
  {
    number: '02',
    name: 'Hosting & Security',
    slug: 'hosting-security',
    route: '/support/hosting-security',
    description:
      'Reliable hosting and proactive security solutions designed to keep your website fast, available, and protected around the clock.',
    highlights: [
      'Multi-region global edge CDN acceleration',
      'Automated Layer 3/4 & Layer 7 DDoS mitigation',
      'Automated daily encrypted offsite snapshots',
      'Automated TLS/SSL certificates & HSTS enforcement',
    ],
  },
  {
    number: '03',
    name: 'Analytics & Reporting',
    slug: 'analytics-reporting',
    route: '/support/analytics-reporting',
    description:
      'Transform website and business performance data into meaningful insights that help you make smarter, faster decisions.',
    highlights: [
      'Server-side GTM & GA4 ad-block resilient tracking',
      'Step-by-step conversion funnel drop-off analysis',
      'Channel attribution & revenue contribution modeling',
      'Custom Looker Studio executive reporting',
    ],
  },
  {
    number: '04',
    name: 'Consultation',
    slug: 'consultation',
    route: '/support/consultation',
    description:
      'Get expert guidance, practical recommendations, and a clear direction for your next digital project before committing capital.',
    highlights: [
      'Vendor-neutral technology stack & framework advisory',
      'Architecture teardowns & scalability assessments',
      'Actionable MVP milestones & realistic cost budgeting',
      'Direct 1-on-1 collaboration with senior practitioners',
    ],
  },
];

const SUPPORT_GUARANTEES = [
  {
    icon: Clock,
    title: 'Guaranteed Rapid Response',
    desc: 'Critical production disruptions receive immediate triage with a sub-2 hour SLA, backed by direct engineer access.',
  },
  {
    icon: Server,
    title: '99.98% High Availability',
    desc: 'Fault-tolerant multi-zone cloud infrastructure that absorbs viral traffic spikes with zero service interruptions.',
  },
  {
    icon: Shield,
    title: 'Proactive Threat Defense',
    desc: 'Automated firewalls, vulnerability scans, and daily encrypted snapshots ensuring your data is safe and recoverable.',
  },
  {
    icon: Zap,
    title: 'Continuous Modernization',
    desc: 'Regular incremental UX, speed, and security updates ensure your web platform never falls into legacy decay.',
  },
];

export default function SupportOverviewPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO SECTION ── */}
      <ArcGalleryHero
        images={SUPPORT_GALLERY_IMAGES}
        title="Your Digital Operations Partner."
        titleHighlight="Reliability, Security & Scale."
        description="We partner with ambitious organizations to maintain, protect, analyze, and strategically evolve their web applications—ensuring peak speed, ironclad security, and continuous commercial growth."
        primaryCTA={{ text: 'Explore Support Services', href: '#services' }}
        secondaryCTA={{ text: 'Talk to an Engineer', href: '/contact' }}
      />

      {/* ── 2. METRICS & OPERATIONAL STANDARDS ── */}
      <section className="py-12 border-y border-border/60 bg-secondary/20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">99.98%</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Target Availability</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">&lt;2 Hours</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Emergency SLA</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">24/7/365</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Automated Defense</div>
            </div>
            <div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground">100%</div>
              <div className="text-xs font-mono text-muted-foreground uppercase mt-1">Senior Engineers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUR CORE SUPPORT SERVICES EDITORIAL GRID ── */}
      <section id="services" className="py-24 sm:py-32 relative">
        {/* Oversized background typography watermark */}
        <div className="pointer-events-none absolute top-10 right-0 select-none overflow-hidden opacity-[0.02] dark:opacity-[0.04] z-0">
          <span className="font-heading text-[22vw] font-black leading-none tracking-tighter text-foreground">
            SUPPORT
          </span>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
              Ongoing Stewardship
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Four dedicated services to safeguard and elevate your website.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every service is engineered with dedicated service level agreements, proactive monitoring, and direct access to the specialists who build and scale modern web platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPPORT_SERVICES_LIST.map((service, idx) => (
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

      {/* ── 4. ARCHITECTURAL GUARANTEES & STANDARDS ── */}
      <section className="py-24 sm:py-32 bg-secondary/15 border-t border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
              Operational Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Engineered for absolute continuity.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We eliminate technical friction, prevent downtime, and ensure your web presence functions as an always-on growth engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORT_GUARANTEES.map((item, idx) => {
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

