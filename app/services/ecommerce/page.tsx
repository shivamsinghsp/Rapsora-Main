'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  CreditCard,
  Rocket,
  ShieldCheck,
  Zap,
  Database,
  Layers,
  ArrowRight,
  CheckCircle2,
  Workflow,
  TrendingUp,
  PackageCheck,
  RefreshCw,
  Terminal,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { DEVELOP_SERVICES } from '@/data/develop-services';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE = DEVELOP_SERVICES['ecommerce'];

const ECOMMERCE_PILLARS = [
  {
    number: '01',
    tag: 'HEADLESS STOREFRONT ARCHITECTURE',
    title: 'Next.js 16 & Headless Commerce Core',
    icon: ShoppingCart,
    desc: 'Decoupled frontend storefronts powered by Next.js 16 Server Components, Turbopack, and distributed edge caching. Blazing sub-second Core Web Vitals eliminate bounce rates and guarantee instant search indexing across millions of SKUs.',
    specs: ['Next.js 16 Turbopack', 'Shopify / Medusa API', 'Sub-800ms Edge TTFB', 'Streaming SSR'],
  },
  {
    number: '02',
    tag: 'CHECKOUT PSYCHOLOGY & PAYMENTS',
    title: 'Global High-Conversion Payment Gateway',
    icon: CreditCard,
    desc: 'Unified payment gateway orchestration supporting Stripe Elements, Apple Pay, Google Pay, Klarna, and localized international currencies. Hardened with 3D Secure 2.0 biometric verification, auto-tax calculations, and zero fraud friction.',
    specs: ['Stripe & Adyen Direct', 'Apple / Google 1-Click', 'Dynamic Tax & Duties', '3D Secure 2.0 PSD2'],
  },
  {
    number: '03',
    tag: 'OMNICHANNEL INVENTORY & OMS',
    title: 'Real-Time SKU Synchronization & Stock Locking',
    icon: Workflow,
    desc: 'Atomic distributed Redis locks guarantee that high-demand flash sales and limited product drops never suffer from stockouts or overselling. Seamless event-driven bi-directional sync with ERPs, Amazon, and 3PL fulfillment networks.',
    specs: ['Redis Distributed Locks', 'Event-Driven Webhooks', 'ERP & 3PL Integration', 'Automated Returns'],
  },
  {
    number: '04',
    tag: 'CONTINUOUS MANAGEMENT & GROWTH',
    title: '24/7 Storefront Ops & Conversion Optimization',
    icon: ShieldCheck,
    desc: 'Active store management, security patch deployment, uptime telemetry, and weekly conversion rate optimization (CRO) sprints. Automated cart abandonment sequences and personalized loyalty engines to compound customer lifetime value.',
    specs: ['24/7 APM Monitoring', 'Automated A/B Testing', 'Cart Recovery Engine', 'Zero-Downtime Releases'],
  },
];

const CODE_TABS = [
  {
    id: 'checkout',
    filename: 'checkout-orchestrator.ts',
    tabLabel: 'Stripe Checkout',
    language: 'typescript',
    code: `// High-Concurrency Stripe Checkout Session with Dynamic 3DS 2.0 & Apple Pay
import { stripe } from '@/lib/stripe';
import { redis } from '@/lib/redis';
import { db } from '@/lib/db';

export async function createCommerceCheckoutSession({
  cartId,
  customerId,
  currency = 'usd',
  successUrl,
  cancelUrl,
}: CheckoutParams) {
  // 1. Acquire Distributed Redis Locks for Cart SKUs
  const cartItems = await db.cartItem.findMany({ where: { cartId } });
  const lockAcquired = await redis.set(\`lock:checkout:\${cartId}\`, 'LOCKED', 'EX', 300, 'NX');

  if (!lockAcquired) {
    throw new Error('Checkout session already active. Please proceed with current session.');
  }

  // 2. Invariant Validation: Real-Time Stock Availability
  for (const item of cartItems) {
    const stock = await redis.get(\`stock:\${item.sku}\`);
    if (Number(stock) < item.quantity) {
      throw new Error(\`Insufficient inventory for item: \${item.name} (\${item.sku})\`);
    }
  }

  // 3. Dispatch Stripe Checkout Session with Localized Apple Pay & Klarna
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card', 'link'],
    mode: 'payment',
    billing_address_collection: 'auto',
    shipping_address_collection: { allowed_countries: ['US', 'CA', 'GB', 'EU', 'AU'] },
    line_items: cartItems.map((item) => ({
      price_data: {
        currency,
        product_data: { name: item.name, images: [item.image] },
        unit_amount: item.unitPriceCents,
      },
      quantity: item.quantity,
    })),
    success_url: \`\${successUrl}?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: cancelUrl,
    metadata: { cartId, customerId },
  });

  return { checkoutUrl: session.url, sessionId: session.id };
}`,
  },
  {
    id: 'inventory',
    filename: 'flash-sale-stock-lock.ts',
    tabLabel: 'Redis Stock Lock',
    language: 'typescript',
    code: `// Atomic Distributed Redis Stock Reservation (Zero Oversell on Flash Sales)
import { redis } from '@/lib/redis';

export async function reserveFlashSaleStock(sku: string, quantity: number, orderId: string) {
  // Lua script ensuring atomic decrement and condition check in single Redis execution
  const luaScript = \`
    local currentStock = tonumber(redis.call('get', KEYS[1]) or '0')
    local requestedQty = tonumber(ARGV[1])
    if currentStock >= requestedQty then
      redis.call('decrby', KEYS[1], requestedQty)
      redis.call('sadd', KEYS[2], ARGV[2])
      return 1
    else
      return 0
    end
  \`;

  const stockKey = \`inventory:sku:\${sku}\`;
  const reservedOrdersKey = \`inventory:reserved:\${sku}\`;

  const result = await redis.eval(luaScript, 2, stockKey, reservedOrdersKey, quantity, orderId);

  if (result !== 1) {
    throw new Error(\`High concurrency stock collision: SKU \${sku} has sold out.\`);
  }

  return { success: true, reservedSku: sku, quantityReserved: quantity };
}`,
  },
  {
    id: 'sync',
    filename: 'inventory-sync-webhook.ts',
    tabLabel: 'OMS Webhook Sync',
    language: 'typescript',
    code: `// Real-Time ERP & 3PL Omnichannel Webhook Catalog Sync
import { NextRequest, NextResponse } from 'next/server';
import { verifyHmacSignature } from '@/lib/crypto';
import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';

export async function handleCatalogSyncWebhook(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-oms-signature') || '';

  if (!verifyHmacSignature(rawBody, signature, process.env.OMS_WEBHOOK_SECRET!)) {
    return NextResponse.json({ error: 'Unauthorized webhook signature' }, { status: 401 });
  }

  const payload = JSON.parse(rawBody);

  // Sync SKU pricing, variants, and stock tiers into Edge Cache
  await db.$transaction(async (tx) => {
    for (const update of payload.items) {
      await tx.productVariant.upsert({
        where: { sku: update.sku },
        update: { price: update.price, inventoryCount: update.stock, updatedAt: new Date() },
        create: { sku: update.sku, name: update.name, price: update.price, inventoryCount: update.stock },
      });
    }
  });

  // Revalidate Next.js edge tags for instant storefront cache update
  revalidateTag('products');
  revalidateTag('inventory');

  return NextResponse.json({ status: 'Synchronized', syncedCount: payload.items.length });
}`,
  },
];

export default function EcommercePage() {
  const [activeTab, setActiveTab] = React.useState<'checkout' | 'inventory' | 'sync'>('checkout');
  const activeSnippet = CODE_TABS.find((t) => t.id === activeTab) || CODE_TABS[0];

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. 3D PANORAMIC SPREAD HERO ── */}
      <PanoramicSpreadHero
        serviceId="ecommerce"
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
              TECHNICAL SPECIFICATIONS // REF.007
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              High-conversion architecture. <br />
              <span className="italic text-primary font-normal">Zero friction.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We engineer scalable e-commerce systems designed for speed, peak holiday traffic surges, and seamless transactional workflows. From lightning-fast headless storefronts to real-time inventory locks and automated management, we build engines that compound revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {ECOMMERCE_PILLARS.map((pillar) => {
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
                    rapsora-commerce/checkout-engine
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 bg-neutral-950/80 p-1 rounded-lg border border-white/5">
                  {CODE_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'checkout' | 'inventory' | 'sync')}
                      className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {tab.tabLabel}
                    </button>
                  ))}
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
              Engineered commerce. <br />
              <span className="italic text-primary font-normal">Measurable GMV acceleration.</span>
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
