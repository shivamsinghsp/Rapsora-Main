'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Printer,
  Box,
  PenTool,
  Palette,
  Eye,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const EASE = [0.22, 1, 0.36, 1] as const;

const GRAPHIC_DISCIPLINES = [
  {
    number: '01',
    category: 'EDITORIAL & PRINT',
    title: 'Publication Architecture',
    icon: Printer,
    desc: 'Swiss-grid typesetting, editorial book layouts, and prestige annual reports engineered with mathematical precision and tactile authority.',
    tags: ['Swiss Grid', 'Typography Hierarchy', 'CMYK Print-Ready'],
  },
  {
    number: '02',
    category: 'TACTILE IDENTITY',
    title: 'Packaging & Luxury Unboxing',
    icon: Box,
    desc: 'Custom dielines, structural packaging design, foil stamping, and embossing finishes that transform product unwrapping into high-retention ceremony.',
    tags: ['Custom Dielines', 'Foil & Emboss', 'Shelf Dominance'],
  },
  {
    number: '03',
    category: 'CAMPAIGN COLLATERAL',
    title: 'Advertising Visual Engines',
    icon: Eye,
    desc: 'High-impact outdoor billboard creatives, global transit takeovers, and multi-format social campaign suites built to stop thumbs and turn heads.',
    tags: ['OOH Displays', 'Campaign Suites', 'High-Conversion'],
  },
  {
    number: '04',
    category: 'SYSTEM DESIGN',
    title: 'Iconography & Vector Libraries',
    icon: PenTool,
    desc: 'Custom geometric icon sets and bespoke vector illustration libraries meticulously crafted to scale from 16px micro-screens to 50ft stadium banners.',
    tags: ['Infinite Scalability', 'Bespoke Icon Sets', 'SVG Tokens'],
  },
  {
    number: '05',
    category: 'TACTICAL ASSETS',
    title: 'Corporate Stationery Suites',
    icon: FileText,
    desc: 'Premium letterheads, debossed presentation folders, tactile business cards, and digital executive deck templates that project enterprise prestige.',
    tags: ['Executive Decks', 'Foil Stamp', 'Brand Guidelines'],
  },
  {
    number: '06',
    category: 'VISUAL SURREALISM',
    title: '3D Artwork & Brand Key Visuals',
    icon: Sparkles,
    desc: 'Cinematic 3D key visuals, photorealistic product renders, and abstract fluid compositions that set your brand miles apart from template-driven competitors.',
    tags: ['3D Modeling', 'Photorealism', 'Generative Aesthetics'],
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    name: 'Visual Archaeology',
    description: 'We deconstruct your industry’s aesthetic landscape, identifying visual white space and defining typographic principles.',
  },
  {
    step: '02',
    name: 'Mathematical Layout',
    description: 'Every layout is constructed on rigorous Swiss grid frameworks with intentional optical balancing and typographic cadence.',
  },
  {
    step: '03',
    name: 'Chromatic Calibration',
    description: 'Deep color theory profiling with Pantone spot-color matching, digital sRGB mastery, and high-fidelity print proofing.',
  },
  {
    step: '04',
    name: 'Industrial Delivery',
    description: 'Production-ready vector packages, layered master archives, print separations, and digital export suites with asset manuals.',
  },
];

export default function GraphicDesignPage() {
  return (
    <main className="relative bg-background overflow-hidden">
      {/* ── HERO SECTION — Hero with Group of Images, Text & Two Buttons ── */}
      <div className="pt-24 lg:pt-32">
        <Hero
          badge="CAPABILITY REF.004"
          title={
            <>
              Graphic Artistry with{' '}
              <span className="italic text-primary font-heading">
                Uncompromising Authority.
              </span>
            </>
          }
          description="We don't create generic decorations. We engineer visual artifacts that demand attention, communicate pedigree, and command subconscious prestige across print, digital, and physical environments."
          primaryButtonText="Start your project"
          primaryButtonLink="/contact"
          secondaryButtonText="Explore our work"
          secondaryButtonLink="/work"
          images={{
            topSquare:
              'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
            tallRight:
              'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
            bottomSquare:
              'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
          }}
        />
      </div>

      {/* ── DISCIPLINE MATRIX SECTION ── */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-background via-secondary/15 to-background border-y border-border/60">
        <div className="container mx-auto px-6">
          {/* Header Block */}
          <div className="max-w-3xl mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-primary uppercase font-heading block mb-3"
            >
              DISCIPLINES & ARTIFACTS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Mastery across every dimension of{' '}
              <span className="italic text-primary">visual communication.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-4 text-muted-foreground font-body font-medium text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              From Swiss-grid typographic systems to luxury tactile packaging and high-conversion campaign collateral, we craft assets that elevate brand valuation.
            </motion.p>
          </div>

          {/* Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {GRAPHIC_DISCIPLINES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/40 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(144,97,249,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(144,97,249,0.25)] transition-all duration-300">
                      <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-black tabular-nums text-muted-foreground/40 font-heading tracking-widest">
                      /{item.number}
                    </span>
                  </div>

                  {/* Category Eyebrow */}
                  <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-primary uppercase font-heading block mb-2">
                    {item.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed font-medium text-[15px] mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Tags Pill List */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[11px] font-medium font-body px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW / PRECISION CRAFT PROTOCOL ── */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-primary uppercase font-heading block mb-3">
              PRODUCTION PROTOCOL
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Engineered with <span className="italic text-primary">flawless precision.</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-body font-medium text-base sm:text-lg leading-relaxed">
              Every curve, kerning pair, and color profile is vetted through our four-stage industrial graphic design pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
                className="relative flex flex-col gap-4 p-8 rounded-2xl bg-secondary/30 border border-border/60 hover:border-primary/40 transition-colors duration-300"
              >
                <span className="text-3xl font-black font-heading text-primary/40 tracking-tighter">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold font-heading text-foreground tracking-tight">
                  {step.name}
                </h3>
                <p className="text-sm font-body font-medium text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION & CONTACT FORM ── */}
      <CtaSection />
      <ContactFormSection />
    </main>
  );
}
