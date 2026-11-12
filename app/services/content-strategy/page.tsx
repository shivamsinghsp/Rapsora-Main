'use client';

import * as React from 'react';
import { ServiceDetailHero } from '@/components/marketing/service-detail-hero';
import { ServiceCapabilitiesSection } from '@/components/marketing/service-capabilities-section';
import { MarketingProcess } from '@/components/marketing/marketing-process';
import { MarketingTools } from '@/components/marketing/marketing-tools';
import { MarketingFaq } from '@/components/marketing/marketing-faq';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { MARKETING_SERVICES } from '@/data/marketing-services';

const SERVICE = MARKETING_SERVICES['content-strategy'];

export default function ContentStrategyPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. CONTENT STRATEGY HERO WITH METRICS ── */}
      <ServiceDetailHero service={SERVICE} />

      {/* ── 2. STRATEGIC OVERVIEW, PILLARS & CAPABILITIES ── */}
      <ServiceCapabilitiesSection service={SERVICE} />

      {/* ── 3. 5-STEP EDITORIAL WORKFLOW ── */}
      <MarketingProcess
        steps={SERVICE.process}
        title="Our editorial workflow."
        titleHighlight="From ideation to impact."
        subtitle="Every asset goes through subject-matter research, outline validation, rigorous editing, and visual layout before publishing."
      />

      {/* ── 4. TOOLS & EDITORIAL STACK ── */}
      <MarketingTools
        tools={SERVICE.tools}
        title="Editorial & Optimization Suite"
        subtitle="We employ collaborative production hubs, readability analyzers, and search intent tools to guarantee publication-grade copy."
      />

      {/* ── 5. TRANSPARENT FAQS ── */}
      <MarketingFaq
        faqs={SERVICE.faqs}
        title="Frequently asked questions about Content Strategy."
        subtitle="Common questions about our voice workshops, writing processes, deliverables, and performance tracking."
      />

      {/* ── 6. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

