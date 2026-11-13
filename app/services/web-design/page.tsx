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

const SERVICE = DESIGN_SERVICES['web-design'];

export default function WebDesignPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO WITH LIVE METRICS ── */}
      <DesignServiceHero service={SERVICE} />

      {/* ── 2. STRATEGIC ARCHITECTURE PILLARS ── */}
      <DesignPillarsSection
        pillars={SERVICE.pillars}
        title="Engineering Conversion Architecture."
        subtitle="Every layout, typography pairing, whitespace cadence, and interactive state is engineered to guide user intent toward high-value conversions."
      />

      {/* ── 3. SPECIALIZED WEB DESIGN CAPABILITIES ── */}
      <DesignCapabilitiesGrid
        capabilities={SERVICE.capabilities}
        title="Comprehensive Web Deliverables."
        subtitle="From enterprise corporate flagships and high-velocity SaaS landing pages to editorial e-commerce stores and complete atomic component systems."
      />

      {/* ── 4. 5-STAGE WEB DESIGN PROCESS ── */}
      <DesignProcess
        steps={SERVICE.process}
        title="Our Web Design Cadence."
        subtitle="A proven five-phase process progressing from user flow scoping to interactive prototyping and production-certified developer handoff."
      />

      {/* ── 5. CREATIVE TOOLING STACK ── */}
      <DesignTools
        tools={SERVICE.tools}
        title="Web Interface & Prototyping Stack."
        subtitle="Modern collaborative design tools, 3D engines, and component testing platforms ensuring design-to-code parity."
      />

      {/* ── 6. WEB DESIGN FAQS ── */}
      <DesignFaq
        faqs={SERVICE.faqs}
        title="Web Design FAQs."
        subtitle="Answers regarding responsive design viewports, developer handoffs, conversion optimization, and design system governance."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
