'use client';

import * as React from 'react';
import { SupportHero } from '@/components/support/support-hero';
import { SupportOverviewSplit } from '@/components/support/support-overview-split';
import { SupportFeatureGrid } from '@/components/support/support-feature-grid';
import { SupportProcess } from '@/components/support/support-process';
import { SupportBenefits } from '@/components/support/support-benefits';
import { SupportFaq } from '@/components/support/support-faq';
import { AnalyticsReportingHeroVisual } from '@/components/support/support-visuals';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { SUPPORT_SERVICES } from '@/data/support-services';
import { BarChart3, Target, LineChart, CheckCircle2 } from 'lucide-react';

const SERVICE = SUPPORT_SERVICES['analytics-reporting'];

export default function AnalyticsReportingPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. EDITORIAL HERO WITH CONVERSION INTELLIGENCE CONSOLE ── */}
      <SupportHero
        service={SERVICE}
        visualSlot={<AnalyticsReportingHeroVisual />}
      />

      {/* ── 2. STRATEGIC OVERVIEW SPLIT ── */}
      <SupportOverviewSplit
        service={SERVICE}
        rightVisual={
          <div className="relative rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Server-Side Telemetry Precision</h3>
                <p className="font-mono text-xs text-muted-foreground">Privacy-compliant, ad-block resilient tracking</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Most analytics setups leak 20% to 35% of visitor data due to aggressive browser ad-blockers, iOS tracking restrictions, and broken cookie consents.
              </p>
              <p>
                We build first-party, server-side data pipelines that capture clean commercial signals: exact form drops, checkout hesitation, and channel attribution, without compromising visitor privacy or GDPR/CCPA compliance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/60 font-mono text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Target className="w-4 h-4 text-primary" />
                <span>100% Attribution Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <LineChart className="w-4 h-4 text-emerald-500" />
                <span>Zero Vanity Metrics</span>
              </div>
            </div>
          </div>
        }
      />

      {/* ── 3. WHAT WE TRACK & ANALYZE (8 CAPABILITIES) ── */}
      <SupportFeatureGrid
        id="services"
        title="What we track, measure & analyze."
        subtitle="End-to-end commercial tracking covering visitor acquisition, engagement friction, conversion funnels, and customer retention."
        features={SERVICE.servicesList}
        columns={4}
      />

      {/* ── 4. 4-STAGE ANALYTICS METHODOLOGY ── */}
      <SupportProcess
        id="process"
        steps={SERVICE.process}
        title="From raw events to revenue clarity."
        subtitle="A proven four-stage methodology that turns fragmented analytics into confident strategic decisions."
      />

      {/* ── 5. VALUE OF OBJECTIVE INTELLIGENCE ── */}
      <SupportBenefits
        title="Why commercial reporting drives faster growth."
        subtitle="Eliminate guesswork and allocate capital directly into high-converting user pathways."
        benefits={SERVICE.benefits}
        columns={4}
      />

      {/* ── 6. DETAILED FREQUENTLY ASKED QUESTIONS ── */}
      <SupportFaq
        faqs={SERVICE.faqs}
        title="Analytics & reporting FAQs."
        subtitle="Clear answers on GA4 setup, server-side tracking, custom event definitions, and executive reporting frequency."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

