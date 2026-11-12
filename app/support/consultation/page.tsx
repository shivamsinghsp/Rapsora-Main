'use client';

import * as React from 'react';
import Link from 'next/link';
import { SupportHero } from '@/components/support/support-hero';
import { SupportOverviewSplit } from '@/components/support/support-overview-split';
import { SupportFeatureGrid } from '@/components/support/support-feature-grid';
import { SupportProcess } from '@/components/support/support-process';
import { SupportBenefits } from '@/components/support/support-benefits';
import { SupportFaq } from '@/components/support/support-faq';
import { ConsultationHeroVisual } from '@/components/support/support-visuals';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { SUPPORT_SERVICES } from '@/data/support-services';
import { Compass, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SERVICE = SUPPORT_SERVICES['consultation'];

const CONSULTATION_FORMATS = [
  {
    number: '01',
    title: 'Strategic Discovery Call',
    duration: '30 Minutes',
    desc: 'An exploratory alignment session to examine your high-level goals, current technological friction, and strategic project fit.',
    tag: 'Introductory Session',
  },
  {
    number: '02',
    title: 'Technical Deep-Dive',
    duration: 'Full Architecture Review',
    desc: 'A comprehensive audit of your existing codebase, hosting infrastructure, database schemas, and API dependencies to expose hidden technical debt.',
    tag: 'Engineering Audit',
  },
  {
    number: '03',
    title: 'Digital Strategy Workshop',
    duration: 'Half-Day Intensive',
    desc: 'Collaborative workshop aligning executive leadership, product heads, and designers around a prioritized roadmap, tech stack selection, and milestone budgets.',
    tag: 'Strategic Roadmap',
  },
  {
    number: '04',
    title: 'Ongoing Advisory Retainer',
    duration: 'Monthly Partnership',
    desc: 'A dedicated senior technical and strategic sounding board providing weekly check-ins, architectural governance, and vendor review for scaling teams.',
    tag: 'Executive Partnership',
  },
];

export default function ConsultationPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. EDITORIAL HERO WITH STRATEGIC ROADMAP VISUAL ── */}
      <SupportHero
        service={SERVICE}
        visualSlot={<ConsultationHeroVisual />}
      />

      {/* ── 2. STRATEGIC OVERVIEW SPLIT ── */}
      <SupportOverviewSplit
        service={SERVICE}
        rightVisual={
          <div className="relative rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Vendor-Neutral Technology Advisory</h3>
                <p className="font-mono text-xs text-muted-foreground">Unbiased strategic recommendations tailored to your goals</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Choosing the wrong technical stack or miscalculating delivery complexity can cost hundreds of thousands of dollars in rewritten code and delayed launches.
              </p>
              <p>
                We do not sell pre-packaged software licenses or push arbitrary tools. We give you candid, pragmatic advice based on over a decade of architecting high-performance web applications and digital platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/60 font-mono text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Lightbulb className="w-4 h-4 text-primary" />
                <span>Zero Sales Fluff</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>Senior Partners Only</span>
              </div>
            </div>
          </div>
        }
      />

      {/* ── 3. WHAT WE CAN HELP YOU WITH (8 DISTINCT AREAS) ── */}
      <SupportFeatureGrid
        id="services"
        title="What we can advise on & solve."
        subtitle="Senior-level guidance across web architecture, framework selection, digital transformation, performance bottlenecks, and team capability."
        features={SERVICE.servicesList}
        columns={4}
      />

      {/* ── 4. CONSULTATION FORMATS ── */}
      <section className="py-20 lg:py-32 bg-secondary/20 border-y border-border/60 relative">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-14 lg:mb-20">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Consultation formats designed for clarity.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Choose the format that fits your organization’s stage—from high-level strategic alignment to deep architectural forensics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONSULTATION_FORMATS.map((format) => (
              <div
                key={format.number}
                className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-primary tabular-nums">
                      {format.number}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-secondary text-foreground/80 font-medium">
                      {format.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {format.title}
                  </h3>

                  <div className="font-mono text-xs text-primary font-semibold mb-4">
                    {format.duration}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {format.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/50">
                  <Button asChild variant="outline" size="sm" className="w-full rounded-full cursor-pointer">
                    <Link href="/contact">
                      Request Session
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. 4-STAGE CONSULTATION METHODOLOGY ── */}
      <SupportProcess
        steps={SERVICE.process}
        title="Our consultation methodology."
        subtitle="A disciplined four-phase advisory process that moves from thorough discovery to practical, de-risked implementation plans."
      />

      {/* ── 6. WHY WORK WITH RAPSORA CONSULTANTS ── */}
      <SupportBenefits
        title="Why organizations consult with us."
        subtitle="Save months of trial-and-error by tapping into proven engineering and commercial web leadership."
        benefits={SERVICE.benefits}
        columns={4}
      />

      {/* ── 7. DETAILED FREQUENTLY ASKED QUESTIONS ── */}
      <SupportFaq
        faqs={SERVICE.faqs}
        title="Consultation FAQs."
        subtitle="Answers about session preparation, NDA agreements, deliverable timelines, and implementation handoffs."
      />

      {/* ── 8. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

