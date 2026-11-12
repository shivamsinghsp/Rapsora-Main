'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  Clock,
  Cpu,
  Globe,
  Lock,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Zap,
  Users,
  Compass,
  Layers,
  FileCode,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* Visual 1: Website Management Operational Console                           */
/* -------------------------------------------------------------------------- */
export function WebsiteManagementHeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-primary/5">
      {/* Window Controls Header */}
      <div className="flex items-center justify-between pb-5 border-b border-border/60 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">app.rapsora.cloud / ops</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">99.98% Healthy</span>
        </div>
      </div>

      {/* Core Web Vitals Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/60">
          <div className="text-[11px] font-mono text-muted-foreground uppercase">LCP (Speed)</div>
          <div className="text-xl sm:text-2xl font-heading font-black text-foreground mt-1">0.76s</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Top 1% Global</div>
        </div>
        <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/60">
          <div className="text-[11px] font-mono text-muted-foreground uppercase">CLS (Stability)</div>
          <div className="text-xl sm:text-2xl font-heading font-black text-foreground mt-1">0.00</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Zero Shift</div>
        </div>
        <div className="p-3.5 rounded-2xl bg-secondary/40 border border-border/60">
          <div className="text-[11px] font-mono text-muted-foreground uppercase">FID / INP</div>
          <div className="text-xl sm:text-2xl font-heading font-black text-foreground mt-1">11ms</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Instant</div>
        </div>
      </div>

      {/* Real-Time Operational Log */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/25 border border-border/40">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-foreground font-medium">
              <span>Automated Dependency Regression Suite</span>
              <span className="text-[10px] text-muted-foreground">08:42 AM</span>
            </div>
            <div className="text-muted-foreground text-[11px] mt-0.5">
              34 unit & E2E staging tests verified. 0 breaking regressions found.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/25 border border-border/40">
          <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-foreground font-medium">
              <span>Asset Minification & Edge Cache Warm</span>
              <span className="text-[10px] text-muted-foreground">09:15 AM</span>
            </div>
            <div className="text-muted-foreground text-[11px] mt-0.5">
              Reduced bundle size by 38%. Edge TTFB verified at 24ms across 14 zones.
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/25 border border-border/40">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-foreground font-medium">
              <span>Continuous Integrity & Backup Snapshot</span>
              <span className="text-[10px] text-muted-foreground">10:00 AM</span>
            </div>
            <div className="text-muted-foreground text-[11px] mt-0.5">
              Redundant encrypted snapshot stored in dual geography. Recovery point ready.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-primary" />
          Dedicated Engineer on Duty
        </span>
        <span className="font-mono text-foreground font-medium">SLA: Under 2 Hours</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 2: Hosting & Security Cloud Defense Visual                          */
/* -------------------------------------------------------------------------- */
export function HostingSecurityHeroVisual() {
  const edgeLocations = [
    { city: 'New York (US-East)', latency: '8ms', status: 'Optimal' },
    { city: 'London (EU-West)', latency: '12ms', status: 'Optimal' },
    { city: 'Frankfurt (EU-Central)', latency: '14ms', status: 'Optimal' },
    { city: 'Tokyo (AP-East)', latency: '22ms', status: 'Optimal' },
    { city: 'Singapore (AP-SE)', latency: '19ms', status: 'Optimal' },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-primary/5">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-border/60 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-bold text-foreground text-sm">Edge Defense & Cloud Infrastructure</div>
            <div className="font-mono text-[11px] text-muted-foreground">Multi-Region Enterprise Mesh</div>
          </div>
        </div>
        <div className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
          DDoS Shield Active
        </div>
      </div>

      {/* Edge Node Latency Grid */}
      <div className="space-y-2.5 mb-6">
        <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
          Global Edge Presence & Latency
        </div>
        {edgeLocations.slice(0, 4).map((node) => (
          <div
            key={node.city}
            className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/50 text-xs"
          >
            <div className="flex items-center gap-2.5 font-medium text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{node.city}</span>
            </div>
            <div className="flex items-center gap-4 font-mono">
              <span className="text-muted-foreground">{node.status}</span>
              <span className="font-semibold text-primary">{node.latency}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Security Architecture Indicators */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/60">
        <div className="p-3.5 rounded-2xl bg-secondary/20 border border-border/50">
          <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span>SSL / TLS Grade A+</span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            Strict HSTS, modern TLS 1.3, automated 90-day rotation.
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-secondary/20 border border-border/50">
          <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1">
            <Server className="w-3.5 h-3.5 text-primary" />
            <span>Daily Encrypted Backups</span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            30-day retention with instant 1-click disaster recovery.
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 3: Analytics & Reporting Visual                                     */
/* -------------------------------------------------------------------------- */
export function AnalyticsReportingHeroVisual() {
  const funnelSteps = [
    { label: 'Total Unique Visitors', value: '142,850', percent: '100%' },
    { label: 'High-Intent Engagement', value: '89,420', percent: '62.5%' },
    { label: 'Form & Lead Interactions', value: '14,350', percent: '16.0%' },
    { label: 'Qualified Deal Conversions', value: '3,840', percent: '26.7%' },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-primary/5">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-border/60 mb-6">
        <div>
          <div className="font-heading font-bold text-foreground text-sm">Commercial Conversion Intelligence</div>
          <div className="font-mono text-[11px] text-muted-foreground">Live Telemetry & User Journey Funnel</div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+28.4% YoY</span>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="space-y-3 mb-6">
        {funnelSteps.map((step, idx) => (
          <div key={step.label} className="p-3 rounded-2xl bg-secondary/30 border border-border/50">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium text-foreground">{step.label}</span>
              <div className="flex items-center gap-3 font-mono">
                <span className="text-muted-foreground">{step.percent}</span>
                <span className="font-bold text-foreground">{step.value}</span>
              </div>
            </div>
            {/* Visual Bar */}
            <div className="w-full h-1.5 bg-secondary/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000"
                style={{
                  width: idx === 0 ? '100%' : idx === 1 ? '62.5%' : idx === 2 ? '32%' : '18%',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Channel Attribution Summary */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/60 font-mono text-xs">
        <div className="p-3 rounded-xl bg-secondary/20 border border-border/40 text-center">
          <div className="text-muted-foreground text-[10px] uppercase">Organic Search</div>
          <div className="font-heading text-lg font-bold text-foreground mt-1">54.2%</div>
          <div className="text-emerald-600 dark:text-emerald-400 text-[10px]">+18% MoM</div>
        </div>
        <div className="p-3 rounded-xl bg-secondary/20 border border-border/40 text-center">
          <div className="text-muted-foreground text-[10px] uppercase">Direct / Brand</div>
          <div className="font-heading text-lg font-bold text-foreground mt-1">29.1%</div>
          <div className="text-emerald-600 dark:text-emerald-400 text-[10px]">+11% MoM</div>
        </div>
        <div className="p-3 rounded-xl bg-secondary/20 border border-border/40 text-center">
          <div className="text-muted-foreground text-[10px] uppercase">Referral & Social</div>
          <div className="font-heading text-lg font-bold text-foreground mt-1">16.7%</div>
          <div className="text-emerald-600 dark:text-emerald-400 text-[10px]">+24% MoM</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Visual 4: Consultation Strategic Roadmap Visual                            */
/* -------------------------------------------------------------------------- */
export function ConsultationHeroVisual() {
  const advisoryPillars = [
    { title: 'Tech Stack & Architecture', status: 'Evaluated & De-risked', lead: 'Senior Architect' },
    { title: 'Core Web Vitals & Scalability', status: 'Audit Completed', lead: 'Principal Engineer' },
    { title: 'Conversion & UX Flow', status: 'Blueprint Delivered', lead: 'Product Strategist' },
    { title: 'Infrastructure Cost Audit', status: '35% Savings Identified', lead: 'Cloud Director' },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-primary/5">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-border/60 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-bold text-foreground text-sm">Strategic Advisory & Architecture</div>
            <div className="font-mono text-[11px] text-muted-foreground">Executive Technology Consultation</div>
          </div>
        </div>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
          Executive Tier
        </span>
      </div>

      {/* Advisory Focus Items */}
      <div className="space-y-2.5 mb-6">
        {advisoryPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex items-center justify-between p-3.5 rounded-xl bg-secondary/30 border border-border/50 text-xs"
          >
            <div>
              <div className="font-semibold text-foreground text-sm">{pillar.title}</div>
              <div className="font-mono text-[11px] text-muted-foreground mt-0.5">{pillar.lead}</div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-mono text-[11px] font-semibold text-foreground">{pillar.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Milestone Card */}
      <div className="p-4 rounded-2xl bg-secondary/20 border border-border/50 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono text-muted-foreground uppercase">Next Milestone Deliverable</div>
          <div className="font-heading font-bold text-foreground text-sm mt-0.5">
            Technical Roadmap & Vendor-Neutral RFP Review
          </div>
        </div>
        <div className="font-mono text-xs px-3 py-1.5 rounded-xl bg-primary text-primary-foreground font-semibold">
          Ready
        </div>
      </div>
    </div>
  );
}

