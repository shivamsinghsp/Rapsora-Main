'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Boxes,
  Film,
  Cpu,
  Orbit,
  Sparkles,
  Zap,
} from 'lucide-react';
import { MotionHero } from '@/components/sections/motion-hero';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const EASE = [0.22, 1, 0.36, 1] as const;

const MOTION_DISCIPLINES = [
  {
    number: '01',
    category: '3D CINEMATICS',
    title: 'Product Cinematics & Simulations',
    icon: Boxes,
    desc: 'Photorealistic 3D product animations, micro-machinery reveals, explosive part breakdowns, and lighting rigs that turn physical and digital hardware into objects of pure desire.',
    specs: ['Octane / Redshift', 'PBR Materials', '4K Master'],
  },
  {
    number: '02',
    category: 'BRAND KINETICS',
    title: 'Kinetic Identity Systems',
    icon: Orbit,
    desc: 'Living, breathing logomarks and dynamic brand motion systems designed to establish instant authority across splash screens, broadcast stings, and digital environments.',
    specs: ['Motion Guidelines', 'Dynamic Toolkits', 'Sonic Sync'],
  },
  {
    number: '03',
    category: 'DIGITAL PRODUCTS',
    title: 'UI Micro-Interactions & Lottie',
    icon: Zap,
    desc: 'High-velocity interface micro-animations, tactile spring transitions, and lightweight 60fps/120fps Lottie JSON assets engineered to provide psychological dopamine loops.',
    specs: ['Lottie / Rive', 'Sub-50ms Curves', 'Zero Lag'],
  },
  {
    number: '04',
    category: 'CAMPAIGNS & TITLES',
    title: 'Commercials & Title Sequences',
    icon: Film,
    desc: 'Broadcast-tier commercial visual effects, title cards, and key marketing launch films that capture audience imagination and command global prestige.',
    specs: ['Cinematic Color Grade', 'Broadcast Safe', 'Dolby Specs'],
  },
  {
    number: '05',
    category: 'CREATIVE TECHNOLOGY',
    title: 'WebGL & Generative Web Motion',
    icon: Cpu,
    desc: 'Custom Three.js, Canvas shaders, and scroll-bound interactive 3D web experiences that elevate standard websites into award-winning digital destinations.',
    specs: ['GLSL Shaders', 'Three.js / WebGL', 'GPU Accelerated'],
  },
  {
    number: '06',
    category: 'PHYSICS SIMULATIONS',
    title: 'Volumetric & Fluid Dynamics',
    icon: Sparkles,
    desc: 'Complex particle fields, cloth dynamics, fluid simulations, and abstract smoke/light interactions that communicate technological transcendence.',
    specs: ['Houdini Solvers', 'Particle Fields', 'Fluid Dynamics'],
  },
];

const MOTION_PIPELINE = [
  {
    step: '01',
    title: 'Kinetic Ideation & Animatics',
    desc: 'We map the emotional cadence, camera trajectories, and storyboard curves to establish the exact rhythm of the visual narrative.',
  },
  {
    step: '02',
    title: 'Spatial Modeling & LookDev',
    desc: 'Custom 3D geometry construction, optical camera lens calibration, and studio lighting setups designed for photo-real depth.',
  },
  {
    step: '03',
    title: 'Dynamics & Choreography',
    desc: 'Simulating physics forces, particle collisions, and non-linear spring easing to achieve organic kinetic weight.',
  },
  {
    step: '04',
    title: 'Multi-Format Industrial Export',
    desc: 'ProRes 4444 archival masters, web-compressed AV1/WebM/MP4, and vector-clean Lottie files for seamless developer handoff.',
  },
];

export default function MotionDesignPage() {
  return (
    <main className="relative bg-background overflow-hidden">
      {/* ── CINEMATIC MOTION DESIGN HERO ── */}
      <MotionHero
        config={{
          eyebrow: {
            enabled: false,
            text: 'CAPABILITY REF.005 • KINETIC DIRECTION',
            icon: '✨',
          },
          headline: {
            line1: 'Kinetic Direction.',
            line2: 'Cinema In Motion.',
          },
          description: {
            enabled: true,
            text: 'We engineer high-velocity 3D cinematics, fluid interface micro-interactions, and living brand motion systems designed to hijack peripheral vision and command visceral engagement.',
          },
          primaryButton: {
            enabled: true,
            label: 'Start your project',
            href: '/contact',
          },
          secondaryButton: {
            enabled: true,
            label: 'Explore our work',
            href: '/work',
          },
        }}
      />

      {/* ── MOTION CAPABILITIES / DISCIPLINES ── */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-background via-secondary/15 to-background border-y border-border/60">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-primary uppercase font-heading block mb-3"
            >
              KINETIC DISCIPLINES & EXPERIENCES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]"
            >
              Motion engineered to command attention and{' '}
              <span className="italic text-primary">dominate memory.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-4 text-muted-foreground font-body font-medium text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Static pixels are easily ignored. We engineer kinetic visual systems that harness human peripheral vision and psychological pacing to maximize engagement.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {MOTION_DISCIPLINES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-card border border-border/80 hover:border-primary/40 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(144,97,249,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(144,97,249,0.25)] transition-all duration-300">
                      <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-black tabular-nums text-muted-foreground/40 font-heading tracking-widest">
                      /{item.number}
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-primary uppercase font-heading block mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed font-medium text-[15px] mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center text-[11px] font-medium font-body px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border/60"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KINETIC CHOREOGRAPHY PROTOCOL (PROCESS) ── */}
      <section className="py-24 lg:py-36 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] sm:text-xs font-black tracking-[0.45em] text-primary uppercase font-heading block mb-3">
              PRODUCTION PROTOCOL
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              The architecture of <span className="italic text-primary">perpetual motion.</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-body font-medium text-base sm:text-lg leading-relaxed">
              Every frame, easing curve, and render pass is orchestrated through our four-stage motion design methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOTION_PIPELINE.map((step, idx) => (
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
                  {step.title}
                </h3>
                <p className="text-sm font-body font-medium text-muted-foreground leading-relaxed">
                  {step.desc}
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
