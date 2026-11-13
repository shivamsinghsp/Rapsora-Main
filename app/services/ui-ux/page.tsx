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

const SERVICE = DESIGN_SERVICES['ui-ux'];

export default function UIUXPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO WITH LIVE METRICS ── */}
      <DesignServiceHero service={SERVICE} />

      {/* ── 2. STRATEGIC ARCHITECTURE PILLARS ── */}
      <DesignPillarsSection
        pillars={SERVICE.pillars}
        title="Engineering Intuitive Workflows."
        subtitle="We build frictionless digital products, complex SaaS dashboards, and native mobile interfaces engineered to turn complex workflows into effortless human interactions."
      />

      {/* ── 3. SPECIALIZED UI/UX CAPABILITIES ── */}
      <DesignCapabilitiesGrid
        capabilities={SERVICE.capabilities}
        title="Comprehensive Product Deliverables."
        subtitle="From data-dense SaaS dashboards and native iOS/Android interfaces to tokenized design systems and usability testing reports."
      />

      {/* ── 4. 5-STAGE UI/UX CREATIVE PROCESS ── */}
      <DesignProcess
        steps={SERVICE.process}
        title="Our Product Design Cadence."
        subtitle="A human-centered discovery and prototyping methodology that moves from deep user interviews to stress-tested design tokens."
      />

      {/* ── 5. CREATIVE TOOLING STACK ── */}
      <DesignTools
        tools={SERVICE.tools}
        title="Product Interface & Validation Stack."
        subtitle="The industry-leading prototyping, user testing, and component documentation software we utilize to build world-class products."
      />

      {/* ── 6. UI/UX DESIGN FAQS ── */}
      <DesignFaq
        faqs={SERVICE.faqs}
        title="UI/UX Design FAQs."
        subtitle="Answers regarding data-dense interfaces, Figma design token pipelines, developer collaboration, and legacy product refactors."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
