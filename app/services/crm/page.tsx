'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Workflow,
  Zap,
  Globe,
  CheckCircle2,
  Users,
  LineChart,
  PhoneCall,
  FileCheck,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { DEVELOP_SERVICES } from '@/data/develop-services';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE = DEVELOP_SERVICES['crm'];

const CRM_PILLARS = [
  {
    number: '01',
    tag: 'SALES VELOCITY',
    title: 'Optimistic Deal Pipeline Kanban',
    icon: Workflow,
    desc: 'Interactive opportunity board with sub-10ms drag-and-drop feedback. Real-time WebSocket synchronization ensures all sales reps view live pipeline updates simultaneously with zero collisions.',
    specs: ['Optimistic UI', 'WebSocket Live Sync', 'Automated Stage Transitions', 'Live Probability Weighting'],
  },
  {
    number: '02',
    tag: 'PREDICTIVE REVENUE',
    title: 'Machine Learning Lead Scoring',
    icon: Zap,
    desc: 'Proprietary ML algorithms analyzing prospect website visits, email response latencies, and firmographic data to compute live win probabilities and suggest next best actions for sales reps.',
    specs: ['Intent Signal Analysis', 'Win-Loss Predictive Models', 'Next Best Action AI', 'Real-Time Re-Scoring'],
  },
  {
    number: '03',
    tag: 'OMNICHANNEL SYNCHRONIZATION',
    title: 'Unified Communication & VoIP',
    icon: Globe,
    desc: 'Built-in browser WebRTC softphone with automated call recording and AI transcription. Seamless two-way integration with Gmail, Outlook 365, and WhatsApp Business API.',
    specs: ['WebRTC Softphone', 'Automated AI Summaries', 'Two-Way Inbox Sync', 'WhatsApp Meta Cloud'],
  },
  {
    number: '04',
    tag: 'DEAL CLOSING & CPQ',
    title: 'Dynamic Proposals & E-Signatures',
    icon: CheckCircle2,
    desc: 'Configure complex tiered pricing and discount structures on the fly. Generate pixel-perfect PDF proposals and execute legally binding cryptographic digital signatures in minutes.',
    specs: ['Zod Pricing Rules', 'Automated PDF Generation', 'Cryptographic Signatures', 'Audit Trail Certificate'],
  },
];

const CODE_TABS = [
  {
    id: 'scoring',
    filename: 'lead-scoring-engine.ts',
    language: 'typescript',
    code: `// Real-Time Predictive Lead Scoring & Intent Feature Extractor
import { db } from '@/lib/db';
import { calculateIntentProbability } from '@/lib/ml/scoring-model';

export async function evaluateLeadScore(contactId: string) {
  // 1. Gather 360-Degree Behavioral Telemetry
  const [activities, pageViews, emailEvents] = await Promise.all([
    db.activity.findMany({ where: { contactId }, take: 50, orderBy: { timestamp: 'desc' } }),
    db.pageTelemetry.findMany({ where: { contactId, isPricingOrDemo: true } }),
    db.emailEvent.findMany({ where: { contactId, openedOrClicked: true } }),
  ]);

  // 2. Extract ML Feature Vector
  const features = {
    pricingPageVisits: pageViews.length,
    emailEngagementRate: emailEvents.length / Math.max(activities.length, 1),
    recencyHours: (Date.now() - activities[0]?.timestamp.getTime()) / (1000 * 3600),
    interactionVelocity: activities.filter(a => a.timestamp > new Date(Date.now() - 7 * 86400000)).length,
  };

  // 3. Compute Propensity Score & Suggest Action
  const { score, grade, recommendedAction } = calculateIntentProbability(features);

  return await db.contact.update({
    where: { id: contactId },
    data: { leadScore: score, leadGrade: grade, nextBestAction: recommendedAction },
  });
}`,
  },
  {
    id: 'kanban',
    filename: 'kanban-sync-handler.ts',
    language: 'typescript',
    code: `// Optimistic WebSocket Pipeline Sync with Conflict Resolution
import { socketServer } from '@/lib/realtime/socket';
import { db } from '@/lib/db';

export async function handleDealStageMove(dealId: string, targetStageId: string, currentVersion: number) {
  const updatedDeal = await db.$transaction(async (tx) => {
    const existing = await tx.deal.findUniqueOrThrow({ where: { id: dealId } });
    if (existing.version !== currentVersion) {
      throw new Error('Concurrent modification detected. Refreshing deal state.');
    }

    return await tx.deal.update({
      where: { id: dealId },
      data: {
        stageId: targetStageId,
        version: { increment: 1 },
        stageChangedAt: new Date(),
      },
    });
  });

  socketServer.to(\`pipeline:\${updatedDeal.pipelineId}\`).emit('DEAL_MOVED', {
    dealId,
    targetStageId,
    version: updatedDeal.version,
  });

  return updatedDeal;
}`,
  },
  {
    id: 'timeline',
    filename: 'activity-timeline-stream.ts',
    language: 'typescript',
    code: `// Unified 360-Degree Activity Stream Aggregator
export async function getUnifiedTimeline(contactId: string) {
  const [emails, calls, tickets, visits] = await Promise.all([
    mailService.getThreadHistory(contactId),
    telephonyService.getCallRecordings(contactId),
    helpdeskService.getSupportTickets(contactId),
    analyticsService.getVisitorSessions(contactId),
  ]);

  return [...emails, ...calls, ...tickets, ...visits]
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .map(event => ({
      ...event,
      formattedTime: formatRelative(event.timestamp, new Date()),
    }));
}`,
  },
];

export default function CrmSolutionsPage() {
  const [activeTab, setActiveTab] = React.useState<'scoring' | 'kanban' | 'timeline'>('scoring');
  const activeSnippet = CODE_TABS.find((t) => t.id === activeTab) || CODE_TABS[0];

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. 3D PANORAMIC SPREAD HERO ── */}
      <PanoramicSpreadHero
        serviceId="crm"
        eyebrow={SERVICE.eyebrow}
        title={SERVICE.title}
        titleHighlight={SERVICE.titleHighlight}
        description={SERVICE.description}
        primaryCTA={SERVICE.primaryCTA}
        secondaryCTA={SERVICE.secondaryCTA}
        cards={SERVICE.cards}
      />

      {/* ── 2. ENGINEERING METRICS BAR (COUNTABLE NUMBERS) ── */}
      <section className="relative z-20 py-10 lg:py-14 bg-card/60 backdrop-blur-md border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {SERVICE.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className="flex flex-col items-center text-center p-3 sm:p-4"
              >
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-2 tabular-nums">
                  <AnimatedCounter value={metric.value} delay={idx * 0.1} />
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground mb-1">
                  {metric.label}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px]">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ARCHITECTURE PILLARS ── */}
      <section id="architecture" className="py-20 lg:py-32 bg-background relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14 lg:mb-20">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3">
              TECHNICAL SPECIFICATIONS // REF.011
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Predictive revenue engine. <br />
              <span className="italic text-primary font-normal">Compounded velocity.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We engineer custom CRM platforms that transform scattered interactions into high-probability deal flow. From instant drag-and-drop Kanban sync to predictive machine learning deal scoring, your sales team moves faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {CRM_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-secondary/30 hover:bg-secondary/60 border border-border/70 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm font-bold text-primary">
                        {pillar.number} // {pillar.tag}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {pillar.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-background/80 border border-border/60 text-foreground/80 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTION CODE TERMINAL (INTERACTIVE TABS) ── */}
      <section className="py-20 lg:py-28 bg-secondary/20 border-y border-border/60 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                PRODUCTION CODE SHOWCASE
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {activeSnippet.filename}
              </h2>
            </div>

            {/* Terminal Window Mockup */}
            <div className="rounded-2xl overflow-hidden border border-border/80 bg-black/90 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-neutral-400">
                    rapsora-crm/revenue-engine
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 bg-neutral-950/80 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('scoring')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'scoring'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    ML Scoring
                  </button>
                  <button
                    onClick={() => setActiveTab('kanban')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'kanban'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Kanban Sync
                  </button>
                  <button
                    onClick={() => setActiveTab('timeline')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'timeline'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Activity Stream
                  </button>
                </div>
              </div>

              <div className="p-6 font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed overflow-x-auto">
                <pre>
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. AGILE DELIVERY LIFECYCLE ── */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14 lg:mb-18">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              DELIVERY LIFECYCLE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              Engineered revenue. <br />
              <span className="italic text-primary font-normal">Measurable pipeline acceleration.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICE.pipeline.map((pipe) => (
              <div
                key={pipe.step}
                className="p-6 sm:p-8 rounded-2xl bg-secondary/25 border border-border/70 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-primary block mb-3">
                    {pipe.step}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 tracking-tight">
                    {pipe.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pipe.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CLOSING CTA & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
