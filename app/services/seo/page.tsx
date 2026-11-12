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

const SERVICE = MARKETING_SERVICES['seo'];

export default function SeoServicePage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. SEO HERO WITH METRICS ── */}
      <ServiceDetailHero service={SERVICE} />

      {/* ── 2. STRATEGIC OVERVIEW, PILLARS & CAPABILITIES ── */}
      <ServiceCapabilitiesSection service={SERVICE} />

      {/* ── 3. 5-STEP CONTINUOUS SEO PROCESS ── */}
      <MarketingProcess
        steps={SERVICE.process}
        title="Our continuous SEO process."
        titleHighlight="Compounding search equity."
        subtitle="Our 5-stage sprint cycle systematically eliminates crawl friction, captures competitor keyword gaps, and drives verified organic pipeline."
      />

      {/* ── 4. TOOLS & SEARCH TELEMETRY STACK ── */}
      <MarketingTools
        tools={SERVICE.tools}
        title="SEO Diagnostics & Search Telemetry Stack"
        subtitle="We employ industry-leading diagnostic and monitoring tools to ensure zero guesswork in our organic search optimizations."
      />

      {/* ── 5. TRANSPARENT FAQS ── */}
      <MarketingFaq
        faqs={SERVICE.faqs}
        title="Frequently asked questions about SEO."
        subtitle="Everything you need to know about our organic growth strategy, timelines, and technical execution."
      />

      {/* ── 6. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
