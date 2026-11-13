'use client';

import * as React from 'react';
import { DesignServiceHero } from '@/components/design/design-service-hero';
import { DesignPillarsSection } from '@/components/design/design-pillars-section';
import { DesignCapabilitiesGrid } from '@/components/design/design-capabilities-grid';
import { DesignProcess } from '@/components/design/design-process';
import { DesignTools } from '@/components/design/design-tools';
import { DesignFaq } from '@/components/design/design-faq';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { DESIGN_SERVICES } from '@/data/design-services';

const SERVICE = DESIGN_SERVICES['branding'];

export default function BrandingPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO WITH LIVE METRICS ── */}
      <DesignServiceHero service={SERVICE} />

      {/* ── 2. STRATEGIC ARCHITECTURE PILLARS ── */}
      <DesignPillarsSection
        pillars={SERVICE.pillars}
        title="Engineering Visual Authority."
        subtitle="We build mathematical vector systems, psychological archetype mappings, and comprehensive brand books designed to turn brands into industry icons."
      />

      {/* ── 3. SPECIALIZED BRAND CAPABILITIES ── */}
      <DesignCapabilitiesGrid
        capabilities={SERVICE.capabilities}
        title="Comprehensive Brand Deliverables."
        subtitle="From primary vector lockups and bespoke typography scales to luxury physical packaging and cloud design tokens."
      />

      {/* ── 4. 5-STAGE BRAND CREATIVE PROCESS ── */}
      <DesignProcess
        steps={SERVICE.process}
        title="Our Brand Creation Cadence."
        subtitle="A disciplined methodology progressing from strategic brand archeology to production-certified asset tokenization."
      />

      {/* ── 5. CREATIVE TOOLING STACK ── */}
      <DesignTools
        tools={SERVICE.tools}
        title="Brand Engineering & Vector Stack."
        subtitle="Industry-standard precision software used to design, test, and package flawless vector brand assets."
      />

      {/* ── 6. BRAND IDENTITY FAQS ── */}
      <DesignFaq
        faqs={SERVICE.faqs}
        title="Brand Identity FAQs."
        subtitle="Everything you need to know about deliverables, trademark clearances, vector licensing, and turnaround times."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
