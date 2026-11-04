'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Server,
  ShieldCheck,
  Workflow,
  BarChart3,
  Layers,
  Coins,
  Cpu,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { DEVELOP_SERVICES } from '@/data/develop-services';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE = DEVELOP_SERVICES['erp'];

const ERP_PILLARS = [
  {
    number: '01',
    tag: 'FINANCIAL ACCURACY',
    title: 'Immutable Double-Entry Ledger',
    icon: Database,
    desc: 'Strict double-entry accounting engine enforcing debit-credit equality at the database constraint level. Supports unlimited subsidiary entities, automated multi-currency revaluation, and GAAP/IFRS compliant financial reporting.',
    specs: ['Strict ACID Invariants', 'Multi-Currency Revaluation', 'Automated Journal Entries', 'Sub-Second Close'],
  },
  {
    number: '02',
    tag: 'LOGISTICS & OPERATIONS',
    title: 'Smart Supply Chain & Inventory',
    icon: Server,
    desc: 'Unified visibility across multiple physical fulfillment hubs and production lines. Dynamic reorder points calculated using machine learning lead-time models, barcode/RFID tracking, and automated vendor scorecards.',
    specs: ['Lot & Serial Tracking', 'Dynamic Restock Thresholds', 'Automated EDI Invoicing', 'FIFO / LIFO Costing'],
  },
  {
    number: '03',
    tag: 'GOVERNANCE & TRUST',
    title: 'Immutable Audit Trail & RBAC',
    icon: ShieldCheck,
    desc: 'Every state mutation is cryptographically signed and archived into an append-only audit log. Fine-grained field-level permissions prevent unauthorized data viewing or tampering, ensuring continuous SOC1 and SOC2 compliance.',
    specs: ['Append-Only Ledger', 'SOC1 / SOC2 Compliant', 'Field-Level Encryption', 'Granular Role Matrices'],
  },
  {
    number: '04',
    tag: 'SYSTEM INTEGRATION',
    title: 'Event-Driven Microservices Hub',
    icon: Workflow,
    desc: 'High-throughput Kafka and RabbitMQ event streaming pipes connecting legacy SAP/Oracle systems, modern e-commerce storefronts, payment gateways, and banking APIs with zero data loss guarantees.',
    specs: ['Kafka & RabbitMQ', 'REST & GraphQL APIs', 'Legacy Database Bridges', '100k+ Trans/Sec'],
  },
];

const CODE_TABS = [
  {
    id: 'ledger',
    filename: 'double-entry-ledger.ts',
    language: 'typescript',
    code: `// Enterprise Double-Entry Ledger Transaction with Invariant Validation
import { db } from '@/lib/db';
import { Decimal } from 'decimal.js';

export async function postJournalEntry(entry: JournalEntryPayload) {
  return await db.$transaction(async (tx) => {
    // 1. Calculate Debit and Credit Sums with Decimal Precision
    const totalDebit = entry.lines.reduce((acc, l) => acc.plus(l.debit || 0), new Decimal(0));
    const totalCredit = entry.lines.reduce((acc, l) => acc.plus(l.credit || 0), new Decimal(0));

    // 2. Enforce Double-Entry Balancing Invariant
    if (!totalDebit.equals(totalCredit)) {
      throw new Error(\`Ledger Invariant Violation: Debits (\${totalDebit}) must equal Credits (\${totalCredit})\`);
    }

    // 3. Persist Immutable Journal Header & Lines with Cryptographic Hash
    const journal = await tx.journalEntry.create({
      data: {
        referenceNumber: entry.referenceNumber,
        entityId: entry.entityId,
        currency: entry.currency,
        postedAt: new Date(),
        lines: { createMany: { data: entry.lines } },
      },
    });

    await tx.auditLog.create({
      data: { action: 'JOURNAL_POSTED', recordId: journal.id, hash: computeHash(journal) },
    });

    return journal;
  });
}`,
  },
  {
    id: 'inventory',
    filename: 'inventory-reorder-worker.ts',
    language: 'typescript',
    code: `// Event-Driven Inventory Telemetry & Automated Replenishment
import { kafkaConsumer } from '@/lib/events/kafka';
import { procurementService } from '@/lib/erp/procurement';

export async function startInventoryWorker() {
  await kafkaConsumer.subscribe({ topic: 'warehouse.stock_scanned' });
  
  await kafkaConsumer.run({
    eachMessage: async ({ message }) => {
      const stockUpdate = JSON.parse(message.value.toString());
      const stockLevel = await db.inventory.updateStock(stockUpdate);

      // Trigger automatic purchase requisition if watermark crossed
      if (stockLevel.currentQty <= stockLevel.reorderPoint) {
        await procurementService.createAutoRequisition({
          sku: stockLevel.sku,
          warehouseId: stockLevel.warehouseId,
          suggestedQty: stockLevel.optimalReorderQty,
          vendorId: stockLevel.primaryVendorId,
        });
      }
    },
  });
}`,
  },
  {
    id: 'tax',
    filename: 'multi-entity-tax-engine.ts',
    language: 'typescript',
    code: `// Real-Time Cross-Border Multi-Entity Tax Nexus Engine
import { Decimal } from 'decimal.js';

export function calculateJurisdictionTax(invoice: InvoiceContext) {
  const nexusRules = taxNexusRegistry.get(invoice.subsidiaryEntityId);
  let totalTax = new Decimal(0);

  for (const item of invoice.lineItems) {
    const rate = nexusRules.getRateForProductCategory(item.taxCode, invoice.destinationAddress);
    const lineTax = new Decimal(item.subtotal).times(rate);
    totalTax = totalTax.plus(lineTax);
  }

  return {
    taxableAmount: invoice.subtotal,
    appliedRate: totalTax.dividedBy(invoice.subtotal).toDecimalPlaces(4),
    taxTotal: totalTax.toDecimalPlaces(2),
  };
}`,
  },
];

export default function ErpSolutionsPage() {
  const [activeTab, setActiveTab] = React.useState<'ledger' | 'inventory' | 'tax'>('ledger');
  const activeSnippet = CODE_TABS.find((t) => t.id === activeTab) || CODE_TABS[0];

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. 3D PANORAMIC SPREAD HERO ── */}
      <PanoramicSpreadHero
        serviceId="erp"
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
              TECHNICAL SPECIFICATIONS // REF.010
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Mission-critical operations. <br />
              <span className="italic text-primary font-normal">Zero compromise.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We design and engineer bespoke enterprise resource planning platforms that eradicate operational silos. Double-entry precision, real-time inventory telemetry, and SOC2-grade governance built for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {ERP_PILLARS.map((pillar) => {
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
                    rapsora-erp/core-ledger
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 bg-neutral-950/80 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('ledger')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'ledger'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Double-Entry Core
                  </button>
                  <button
                    onClick={() => setActiveTab('inventory')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'inventory'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Inventory Worker
                  </button>
                  <button
                    onClick={() => setActiveTab('tax')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                      activeTab === 'tax'
                        ? 'bg-primary text-primary-foreground font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Tax Nexus
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
              Architectural rigor. <br />
              <span className="italic text-primary font-normal">Zero-discrepancy cutover.</span>
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
