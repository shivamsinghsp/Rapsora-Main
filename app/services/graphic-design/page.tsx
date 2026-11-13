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

const SERVICE = DESIGN_SERVICES['graphic-design'];

export default function GraphicDesignPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO WITH LIVE METRICS ── */}
      <DesignServiceHero service={SERVICE} />

      {/* ── 2. STRATEGIC ARCHITECTURE PILLARS ── */}
      <DesignPillarsSection
        pillars={SERVICE.pillars}
        title="Engineering Tactile Authority."
        subtitle="Mathematical Swiss-grid layouts, luxury structural packaging dielines, and vector illustration systems that demand attention across both physical and digital realms."
      />

      {/* ── 3. SPECIALIZED GRAPHIC CAPABILITIES ── */}
      <DesignCapabilitiesGrid
        capabilities={SERVICE.capabilities}
        title="Comprehensive Print & Visual Deliverables."
        subtitle="From annual publication spreads and custom unboxing packaging to massive out-of-home billboards and viral omnichannel campaign suites."
      />

      {/* ── 4. 5-STAGE GRAPHIC DESIGN PROCESS ── */}
      <DesignProcess
        steps={SERVICE.process}
        title="Our Print & Visual Cadence."
        subtitle="A rigorous production workflow moving from physical scoping to concept grids, asset crafting, and press pre-flight calibration."
      />

      {/* ── 5. CREATIVE TOOLING STACK ── */}
      <DesignTools
        tools={SERVICE.tools}
        title="Print Engineering & Vector Tooling."
        subtitle="Master publishing software, vector drawing suites, photo manipulation engines, and 3D mockup tools we use for production perfection."
      />

      {/* ── 6. GRAPHIC DESIGN FAQS ── */}
      <DesignFaq
        faqs={SERVICE.faqs}
        title="Graphic Design FAQs."
        subtitle="Answers regarding print vendor management, custom packaging dielines, large-format billboard resolutions, and custom icon sets."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
