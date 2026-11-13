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

const SERVICE = DESIGN_SERVICES['motion-design'];

export default function MotionDesignPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. ARC GALLERY HERO WITH LIVE METRICS ── */}
      <DesignServiceHero service={SERVICE} />

      {/* ── 2. STRATEGIC ARCHITECTURE PILLARS ── */}
      <DesignPillarsSection
        pillars={SERVICE.pillars}
        title="Engineering Cinematic Motion."
        subtitle="Raytraced 3D product animations, living brand kinetics, buttery 120fps UI micro-interactions, and broadcast-tier commercial visual effects."
      />

      {/* ── 3. SPECIALIZED MOTION CAPABILITIES ── */}
      <DesignCapabilitiesGrid
        capabilities={SERVICE.capabilities}
        title="Comprehensive Motion Deliverables."
        subtitle="From cinema-grade 4K 3D product launch films to sub-50kb Lottie/Rive JSON code animations and WebGL real-time 3D assets."
      />

      {/* ── 4. 5-STAGE MOTION CADENCE ── */}
      <DesignProcess
        steps={SERVICE.process}
        title="Our Motion Production Cadence."
        subtitle="A proven production pipeline progressing from storyboards and animatic timing to GPU raytracing, sound design, and master encoding."
      />

      {/* ── 5. CREATIVE TOOLING STACK ── */}
      <DesignTools
        tools={SERVICE.tools}
        title="3D Engine & Motion Tooling."
        subtitle="Industry-standard 3D animation suites, GPU raytracers, kinetic compositing software, and real-time interactive runtimes."
      />

      {/* ── 6. MOTION DESIGN FAQS ── */}
      <DesignFaq
        faqs={SERVICE.faqs}
        title="Motion Design FAQs."
        subtitle="Answers regarding 3D project turnaround times, lightweight Lottie web performance, bespoke sound design, and CAD file ingestion."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
