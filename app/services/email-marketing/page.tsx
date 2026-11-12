'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  GitBranch,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { ServiceDetailHero } from '@/components/marketing/service-detail-hero';
import { ServiceCapabilitiesSection } from '@/components/marketing/service-capabilities-section';
import { MarketingProcess } from '@/components/marketing/marketing-process';
import { MarketingTools } from '@/components/marketing/marketing-tools';
import { MarketingFaq } from '@/components/marketing/marketing-faq';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { MARKETING_SERVICES } from '@/data/marketing-services';

const SERVICE = MARKETING_SERVICES['email-marketing'];

const AUTOMATION_FLOWS = [
  {
    title: 'High-Converting Welcome Flow',
    trigger: 'Event: Customer creates account or opts in',
    cadence: '5 emails over 14 days',
    desc: 'Introduces your brand origin story, addresses top pre-purchase objections, highlights social proof, and delivers an initial conversion incentive.',
    recoveryRate: '+34% First Order Lift',
  },
  {
    title: 'Dynamic Cart & Browse Recovery',
    trigger: 'Event: User views product or abandons cart',
    cadence: '3 emails (1hr, 24hr, 72hr delay)',
    desc: 'Features dynamic cart thumbnails, real-time stock scarcity badges, customer testimonials, and time-sensitive incentive tiers to recapture lost sales.',
    recoveryRate: '21.4% Recovered Revenue',
  },
  {
    title: 'Post-Purchase VIP & Onboarding',
    trigger: 'Event: Order confirmed / delivered',
    cadence: '4 emails triggered by carrier status',
    desc: 'Delivers product unboxing guides, care instructions, automated product review requests, and personalized cross-sells based on past order history.',
    recoveryRate: '+28% Repeat Purchase Rate',
  },
  {
    title: 'Smart Winback & Sunset Protocol',
    trigger: 'Event: 60+ days without purchase or click',
    cadence: '3 emails before automated pruning',
    desc: 'Behavioral re-engagement offer followed by a polite sunset confirmation to keep your database pristine and guarantee 99%+ primary inbox placement.',
    recoveryRate: '12% Reactivated Contacts',
  },
];

export default function EmailMarketingPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. EMAIL MARKETING HERO WITH METRICS ── */}
      <ServiceDetailHero service={SERVICE} />

      {/* ── 2. AUTOMATION & LIFECYCLE FLOWS SHOWCASE ── */}
      <section id="automation" className="py-20 lg:py-28 bg-secondary/20 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-14 lg:mb-18">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Event-triggered lifecycle flows that <br />
              <span className="italic font-medium text-primary">sell 24/7 on autopilot.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We engineer behavioral automation branches that adapt to each subscriber’s purchase history, browsing activity, and engagement frequency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {AUTOMATION_FLOWS.map((flow) => (
              <div
                key={flow.title}
                className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-primary px-3 py-1 rounded-full bg-secondary">
                      {flow.cadence}
                    </span>
                    <span className="text-xs font-mono font-black text-foreground bg-secondary px-3 py-1 rounded-full">
                      {flow.recoveryRate}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {flow.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mb-4">
                    {flow.trigger}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {flow.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-foreground/80 font-medium">
                  <span className="flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-primary" />
                    <span>Dynamic Liquid Templating</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    <span>DMARC / SPF Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STRATEGIC OVERVIEW, PILLARS & CAPABILITIES ── */}
      <ServiceCapabilitiesSection service={SERVICE} />

      {/* ── 4. 5-STEP EMAIL MARKETING WORKFLOW ── */}
      <MarketingProcess
        steps={SERVICE.process}
        title="Our lifecycle email methodology."
        titleHighlight="From audit to automated ROI."
        subtitle="We build complete email infrastructures: deliverability DNS authentication, RFM segmentation, bespoke responsive template designs, and continuous A/B testing."
      />

      {/* ── 5. TOOLS & EMAIL STACK ── */}
      <MarketingTools
        tools={SERVICE.tools}
        title="Email Service Providers & Diagnostic Suite"
        subtitle="We configure and manage industry-leading ESPs, cross-client rendering testers, and Google Postmaster reputation monitoring."
      />

      {/* ── 6. TRANSPARENT FAQS ── */}
      <MarketingFaq
        faqs={SERVICE.faqs}
        title="Frequently asked questions about Email Marketing."
        subtitle="Common questions about ESP migrations, deliverability, send cadences, template coding, and spam avoidance."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

