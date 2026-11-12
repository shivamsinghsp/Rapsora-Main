'use client';

import * as React from 'react';
import { SupportHero } from '@/components/support/support-hero';
import { SupportOverviewSplit } from '@/components/support/support-overview-split';
import { SupportFeatureGrid } from '@/components/support/support-feature-grid';
import { SupportProcess } from '@/components/support/support-process';
import { SupportBenefits } from '@/components/support/support-benefits';
import { SupportFaq } from '@/components/support/support-faq';
import { HostingSecurityHeroVisual } from '@/components/support/support-visuals';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { SUPPORT_SERVICES } from '@/data/support-services';
import { ShieldCheck, Cloud, Zap, Lock } from 'lucide-react';

const SERVICE = SUPPORT_SERVICES['hosting-security'];

export default function HostingSecurityPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. EDITORIAL HERO WITH CLOUD DEFENSE CONSOLE ── */}
      <SupportHero
        service={SERVICE}
        visualSlot={<HostingSecurityHeroVisual />}
      />

      {/* ── 2. STRATEGIC OVERVIEW SPLIT ── */}
      <SupportOverviewSplit
        service={SERVICE}
        rightVisual={
          <div className="relative rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Multi-Region Redundancy</h3>
                <p className="font-mono text-xs text-muted-foreground">High-availability architecture with sub-50ms latency</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                A slow or insecure website erodes revenue and customer trust within seconds. We engineer enterprise cloud setups backed by globally distributed edge networks, intelligent caching, and multi-layer threat defense.
              </p>
              <p>
                From sudden traffic surges during product launches to malicious bot networks attempting SQL injections, our architecture ensures your digital applications stay fast, resilient, and continuously accessible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/60 font-mono text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Zap className="w-4 h-4 text-primary" />
                <span>Edge TTFB: Under 50ms</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Lock className="w-4 h-4 text-emerald-500" />
                <span>Immutable Daily Snapshots</span>
              </div>
            </div>
          </div>
        }
      />

      {/* ── 3. HOSTING SOLUTIONS (7 CAPABILITIES) ── */}
      <SupportFeatureGrid
        id="solutions"
        title="Enterprise hosting solutions."
        subtitle="High-performance cloud compute, global CDN delivery, automated backups, and autoscaling built for serious workloads."
        features={SERVICE.servicesList}
        columns={4}
      />

      {/* ── 4. SECURITY SOLUTIONS (7 CAPABILITIES) ── */}
      {SERVICE.secondaryServicesList && (
        <SupportFeatureGrid
          id="security"
          title={SERVICE.secondaryServicesTitle || 'Proactive security solutions.'}
          subtitle="Multi-layer cyber defense protecting your brand, database, and customers against modern web vulnerabilities."
          features={SERVICE.secondaryServicesList}
          columns={4}
          className="bg-secondary/10 border-t border-border/60"
        />
      )}

      {/* ── 5. 4-STAGE ARCHITECTURE & SECURITY PROCESS ── */}
      <SupportProcess
        steps={SERVICE.process}
        title="Our infrastructure & defense process."
        subtitle="A disciplined approach to provisioning, hardening, monitoring, and maintaining mission-critical web applications."
      />

      {/* ── 6. RELIABILITY & PERFORMANCE ADVANTAGES ── */}
      <SupportBenefits
        title="Engineered for reliability & performance."
        subtitle="Why leading digital brands trust our cloud architecture to safeguard uptime and customer trust."
        benefits={SERVICE.benefits}
        columns={4}
      />

      {/* ── 7. DETAILED FREQUENTLY ASKED QUESTIONS ── */}
      <SupportFaq
        faqs={SERVICE.faqs}
        title="Hosting & security FAQs."
        subtitle="Clear answers about cloud migrations, server management, SSL automation, and disaster recovery."
      />

      {/* ── 8. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

