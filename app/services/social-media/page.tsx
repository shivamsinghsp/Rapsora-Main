'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Share2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ServiceDetailHero } from '@/components/marketing/service-detail-hero';
import { ServiceCapabilitiesSection } from '@/components/marketing/service-capabilities-section';
import { MarketingProcess } from '@/components/marketing/marketing-process';
import { MarketingTools } from '@/components/marketing/marketing-tools';
import { MarketingFaq } from '@/components/marketing/marketing-faq';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { MARKETING_SERVICES } from '@/data/marketing-services';

const SERVICE = MARKETING_SERVICES['social-media'];

const PLATFORMS = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    focus: 'B2B Authority & Executive Branding',
    desc: 'High-performing document carousels, founder thought leadership ghostwriting, and client milestone case studies driving qualified enterprise pipeline.',
    features: ['Founder Ghostwriting', 'Document Carousels', 'Employee Advocacy', 'B2B Inbound DMs'],
    badge: 'Primary B2B Growth',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    focus: 'Aesthetic Identity & Short-Form Reels',
    desc: 'Cohesive visual grid design, typography motion reels, behind-the-scenes company culture, and interactive daily Stories polls.',
    features: ['Aesthetic Grid Layout', 'Motion Design Reels', 'Interactive Stories', 'Highlight Vaults'],
    badge: 'Brand Culture & Visuals',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    focus: 'Shorts & Long-Form Video Hub',
    desc: 'Transforming webinars, founder keynotes, and product tutorials into viral 60-second shorts and authoritative evergreen video libraries.',
    features: ['YouTube Shorts Engine', 'Animated Dynamic Subtitles', 'Long-Form Video SEO', 'Custom Click-Driven Thumbnails'],
    badge: 'Evergreen Video Reach',
  },
  {
    name: 'X & Threads',
    icon: Twitter,
    focus: 'Real-Time Industry Commentary',
    desc: 'Rapid-fire breakdown threads, conversational trend reactions, community networking, and direct interaction with industry journalists and peers.',
    features: ['Viral Educational Threads', 'Real-Time Trend Commenting', 'Community Replies', 'Spaces / Audio Discussions'],
    badge: 'Viral Conversational Speed',
  },
];

export default function SocialMediaPage() {
  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. SOCIAL MEDIA HERO WITH METRICS ── */}
      <ServiceDetailHero service={SERVICE} />

      {/* ── 2. PLATFORMS WE SUPPORT SHOWCASE ── */}
      <section id="platforms" className="py-20 lg:py-28 bg-secondary/20 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="max-w-3xl mb-14 lg:mb-18">
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Platforms engineered for <br />
              <span className="italic font-medium text-primary">native engagement.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We never lazily copy-paste the same image across every feed. Each channel receives bespoke creative assets engineered for its specific algorithm and user mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORMS.map((platform, idx) => {
              const IconComp = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-muted-foreground">
                        {platform.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                      {platform.name}
                    </h3>
                    <p className="text-xs font-mono text-primary font-semibold mb-3">
                      {platform.focus}
                    </p>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      {platform.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <ul className="space-y-1.5">
                      {platform.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. STRATEGIC OVERVIEW, PILLARS & CAPABILITIES ── */}
      <ServiceCapabilitiesSection service={SERVICE} />

      {/* ── 4. 5-STEP SOCIAL MEDIA WORKFLOW ── */}
      <MarketingProcess
        steps={SERVICE.process}
        title="Our social growth framework."
        titleHighlight="From audit to viral reach."
        subtitle="We handle end-to-end production: audits, design templates, 30-day scheduled batches, active community response, and algorithmic telemetry."
      />

      {/* ── 5. TOOLS & SOCIAL SUITE ── */}
      <MarketingTools
        tools={SERVICE.tools}
        title="Social Management & Analytics Stack"
        subtitle="We utilize enterprise scheduling queues, visual motion suites, and social listening tools to manage feeds with surgical precision."
      />

      {/* ── 6. TRANSPARENT FAQS ── */}
      <MarketingFaq
        faqs={SERVICE.faqs}
        title="Frequently asked questions about Social Media Marketing."
        subtitle="Common questions about founder personal branding, platform prioritization, time requirements, and lead attribution."
      />

      {/* ── 7. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}

