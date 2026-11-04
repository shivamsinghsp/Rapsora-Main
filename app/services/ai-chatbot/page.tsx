'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Workflow,
  Globe,
  ShieldCheck,
  Terminal,
  Radio,
  Bot,
  Sparkles,
  PhoneCall,
  Lock,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { DEVELOP_SERVICES } from '@/data/develop-services';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE = DEVELOP_SERVICES['ai-chatbot'];

const CHATBOT_PILLARS = [
  {
    number: '01',
    tag: 'REAL-TIME AUDIO ENGINE',
    title: 'Full-Duplex WebRTC Audio Streaming',
    icon: Radio,
    desc: 'Direct audio stream negotiation using WebRTC data channels and lightweight WebSocket fallbacks. Silero Voice Activity Detection (VAD) detects user interruptions instantly with zero delay, enabling natural human-paced conversations.',
    specs: ['WebRTC Media Streams', 'Silero VAD', '<180ms Round-Trip', 'Opus 48kHz Audio'],
  },
  {
    number: '02',
    tag: 'COGNITIVE REASONING',
    title: 'Agentic Tool & Hybrid RAG Orchestration',
    icon: Workflow,
    desc: 'Grounded semantic retrieval combined with strict JSON schema tool validation. Bots seamlessly book calendar appointments, process refund requests, query customer order statuses, and update CRM records in real time.',
    specs: ['LangGraph Workflows', 'Hybrid Dense + BM25 RAG', 'Deterministic Action Calls', 'Cohere Re-ranking'],
  },
  {
    number: '03',
    tag: 'OMNICHANNEL DISTRIBUTION',
    title: 'Universal Meta Cloud & Web Hub',
    icon: Globe,
    desc: 'Single unified conversational core broadcasting across WhatsApp Business Cloud API, Telegram, Slack, Intercom, and customized high-speed embeddable web chat widgets with live typing indicators and markdown rendering.',
    specs: ['WhatsApp Cloud API', 'WebChat Widget', 'Bi-Directional Webhooks', 'Zendesk Bridge'],
  },
  {
    number: '04',
    tag: 'SAFETY & COMPLIANCE',
    title: 'PII Scrubbing & Zero Data Retention',
    icon: ShieldCheck,
    desc: 'In-flight scrubbing of credit cards, social security numbers, and sensitive client telemetry. Strict zero data retention policies ensure full compliance with GDPR, HIPAA, and SOC2 security mandates.',
    specs: ['Automated Redaction', 'Zero Training Retention', 'Prompt Injection Barrier', 'SOC2 Certified'],
  },
];

const CODE_TABS = [
  {
    id: 'audio',
    filename: 'webrtc-voice-agent.ts',
    language: 'typescript',
    code: `// Low-Latency Full-Duplex WebRTC Voice Agent Stream
import { createAudioStreamer, SileroVAD } from '@rapsora/voice-core';
import { conversationalAgent } from '@/lib/agents/support-bot';

export async function initVoiceSession(peerConnection: RTCPeerConnection) {
  const vad = new SileroVAD({ sensitivity: 0.85, debounceMs: 120 });
  const audioStream = createAudioStreamer(peerConnection);

  vad.on('user_interrupt', () => {
    audioStream.interruptPlayback();
    conversationalAgent.cancelCurrentTokenStream();
  });

  peerConnection.ontrack = async (event) => {
    const userAudioTrack = event.streams[0];
    for await (const chunk of audioStream.listen(userAudioTrack)) {
      if (vad.isSpeaking(chunk)) {
        const replyStream = await conversationalAgent.respondStreaming(chunk);
        await audioStream.playChunkedPCM(replyStream);
      }
    }
  };
}`,
  },
  {
    id: 'tools',
    filename: 'agent-action-dispatcher.ts',
    language: 'typescript',
    code: `// Deterministic Tool Execution Engine with Zod Schema Validation
import { z } from 'zod';
import { crmClient } from '@/lib/crm/client';

export const BookAppointmentTool = {
  name: 'book_appointment',
  description: 'Books a consultative discovery call on company calendar',
  schema: z.object({
    customerEmail: z.string().email(),
    preferredSlot: z.string().datetime(),
    serviceScope: z.enum(['web', 'mobile', 'ai', 'cloud', 'erp']),
  }),
  execute: async (args: z.infer<typeof BookAppointmentTool.schema>) => {
    const booking = await crmClient.scheduleSlot(args);
    return { success: true, bookingId: booking.id, confirmationSent: true };
  },
};`,
  },
  {
    id: 'guardrails',
    filename: 'pii-safety-guardrails.ts',
    language: 'typescript',
    code: `// Real-Time PII Masking and Hallucination Verification
import { createGuardrailPipeline } from '@rapsora/guardrails';

export const safetyGuard = createGuardrailPipeline({
  redactPii: ['CREDIT_CARD', 'SSN', 'PHONE_NUMBER', 'API_KEY'],
  groundedVerification: {
    sourceDocuments: true,
    hallucinationThreshold: 0.96,
  },
  onViolation: (violation) => {
    console.warn(\`Safety Violation Filtered: \${violation.type}\`);
    return { action: 'REDACT_AND_LOG' };
  },
});`,
  },
];

export default function AiChatbotPage() {
  const [activeTab, setActiveTab] = React.useState<'audio' | 'tools' | 'guardrails'>('audio');
  const activeSnippet = CODE_TABS.find((t) => t.id === activeTab) || CODE_TABS[0];

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. 3D PANORAMIC SPREAD HERO ── */}
      <PanoramicSpreadHero
        serviceId="ai-chatbot"
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
              TECHNICAL SPECIFICATIONS // REF.008
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Conversational intelligence. <br />
              <span className="italic text-primary font-normal">Sub-180ms latency.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We engineer voice and text agents that think and respond at human conversation speed. From full-duplex WebRTC streaming to grounded RAG verification, your customers experience effortless automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {CHATBOT_PILLARS.map((pillar) => {
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
                    rapsora-voice/runtime
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 bg-neutral-950/80 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('audio')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'audio'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    WebRTC Stream
                  </button>
                  <button
                    onClick={() => setActiveTab('tools')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'tools'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Tool Dispatcher
                  </button>
                  <button
                    onClick={() => setActiveTab('guardrails')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'guardrails'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    PII Guardrails
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
              Engineered conversation. <br />
              <span className="italic text-primary font-normal">Predictable rollout.</span>
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
