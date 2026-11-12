'use client';

import * as React from 'react';
import { SupportHero } from '@/components/support/support-hero';
import { SupportOverviewSplit } from '@/components/support/support-overview-split';
import { SupportFeatureGrid } from '@/components/support/support-feature-grid';
import { SupportProcess } from '@/components/support/support-process';
import { SupportBenefits } from '@/components/support/support-benefits';
import { SupportFaq } from '@/components/support/support-faq';
import { WebsiteManagementHeroVisual } from '@/components/support/support-visuals';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { SUPPORT_SERVICES } from '@/data/support-services';
import { Activity, ShieldCheck, Terminal, Layers } from 'lucide-react';

const SERVICE = SUPPORT_SERVICES['website-management'];

export default function WebsiteManagementPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. EDITORIAL HERO WITH OPERATIONAL CONSOLE ── */}
      <SupportHero
        service={SERVICE}
        visualSlot={<WebsiteManagementHeroVisual />}
      />

      {/* ── 2. STRATEGIC OVERVIEW SPLIT ── */}
      <SupportOverviewSplit
        service={SERVICE}
        rightVisual={
          <div className="relative rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Proactive Web Operations</h3>
                <p className="font-mono text-xs text-muted-foreground">Continuous staging, zero production surprises</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Modern websites are not static brochures—they are living software platforms. They depend on APIs, dynamic data, CMS updates, payment gateways, and browser standards that evolve constantly.
              </p>
              <p>
                Our engineering team acts as your dedicated operations department. We run automated regression suites, monitor server response times, optimize Core Web Vitals, and patch vulnerabilities before they become emergencies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/60 font-mono text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Zero Production Breakage</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Activity className="w-4 h-4 text-primary" />
                <span>24/7 Heartbeat Monitoring</span>
              </div>
            </div>
          </div>
        }
      />

      {/* ── 3. WHAT WE MANAGE (8 DISTINCT CAPABILITIES) ── */}
      <SupportFeatureGrid
        id="services"
        title="What we manage for your business."
        subtitle="Comprehensive day-to-day stewardship covering technical maintenance, code reliability, design iterations, and database security."
        features={SERVICE.servicesList}
        columns={4}
      />

      {/* ── 4. 4-STAGE MANAGEMENT PROCESS ── */}
      <SupportProcess
        id="approach"
        steps={SERVICE.process}
        title="Our management process."
        subtitle="A proven operational cadence that keeps your platform stable, performant, and ahead of technical debt."
      />

      {/* ── 5. WHY WEBSITE MANAGEMENT MATTERS ── */}
      <SupportBenefits
        title="Why dedicated website management matters."
        subtitle="The commercial and technical advantages of having senior engineers safeguard your digital presence."
        benefits={SERVICE.benefits}
        columns={4}
      />

      {/* ── 6. DETAILED FREQUENTLY ASKED QUESTIONS ── */}
      <SupportFaq
        faqs={SERVICE.faqs}
        title="Website management FAQs."
        subtitle="Clear answers regarding our SLA guarantees, update workflows, and emergency escalation policies."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

