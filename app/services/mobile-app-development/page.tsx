'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Terminal,
  Server,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

const EASE = [0.22, 1, 0.36, 1] as const;

const MOBILE_PILLARS = [
  {
    number: '01',
    tag: 'NATIVE PERFORMANCE',
    title: 'SwiftUI & Jetpack Compose',
    icon: Smartphone,
    desc: 'Direct platform integration with zero bridge overhead. Harness Apple Metal and Android Vulkan for hardware-accelerated 120fps animations, haptic feedback, and fluid tactile interfaces.',
    specs: ['Swift 6 & SwiftUI', 'Kotlin 2.0 & Compose', 'Hardware Acceleration'],
  },
  {
    number: '02',
    tag: 'UNIVERSAL CODEBASE',
    title: 'Universal React Native & Expo',
    icon: Layers,
    desc: 'Single production-grade TypeScript codebase delivering 98% code sharing between iOS and Android. Native JSI runtime performance, Reanimated 3 spring gestures, and OTA updates.',
    specs: ['React Native 0.76', 'Expo Router v4', 'Reanimated 3'],
  },
  {
    number: '03',
    tag: 'DATA & OFFLINE SYNC',
    title: 'Offline-First SQLite Engine',
    icon: Database,
    desc: 'Local-first database architecture with automatic conflict resolution. Users can interact with the app in airplane mode with sub-5ms query times and seamless background cloud sync.',
    specs: ['WatermelonDB & SQLite', 'Background Sync', 'Zero-Latency Queries'],
  },
  {
    number: '04',
    tag: 'HARDWARE SECURITY',
    title: 'Biometric Secure Enclave',
    icon: ShieldCheck,
    desc: 'Hardware-backed encryption utilizing Apple Secure Enclave and Android KeyStore. Fingerprint and FaceID biometric authentication with zero sensitive keys stored on remote servers.',
    specs: ['FaceID & TouchID', 'Hardware KeyStore', 'AES-256 GCM'],
  },
];

const MOBILE_METRICS = [
  { value: '120fps', label: 'Frame Rate', desc: 'Silky smooth gestures without drop-frames' },
  { value: '<1.2s', label: 'Cold Start Time', desc: 'Instant application boot on modern chipsets' },
  { value: '99.9%', label: 'Crash-Free Users', desc: 'Rigorous memory leak prevention & unit tests' },
  { value: '100%', label: 'Offline Ready', desc: 'Local SQLite replica with automatic delta sync' },
];

const MOBILE_PIPELINE = [
  {
    step: '01',
    title: 'Mobile UX & Gesture Architecture',
    desc: 'We map tactile user flows, thumb-zone ergonomics, and fluid gesture physics before writing native application code.',
  },
  {
    step: '02',
    title: 'Component-Driven Native Sprints',
    desc: 'Rapid bi-weekly sprint delivery with automated Expo preview builds and weekly TestFlight / Firebase beta builds.',
  },
  {
    step: '03',
    title: 'Automated Device Matrix Testing',
    desc: 'Continuous integration tests run across a fleet of real iOS and Android devices to verify memory usage, battery draw, and screen sizes.',
  },
  {
    step: '04',
    title: 'Fastlane App Store Launch',
    desc: 'Automated App Store and Google Play Store submission pipelines with staged canary rollouts and 24/7 crash telemetry.',
  },
];

export default function MobileAppDevelopmentPage() {
  const [activeCodeTab, setActiveCodeTab] = React.useState<'swift' | 'reactnative' | 'compose'>('swift');

  return (
    <main className="relative bg-background overflow-hidden text-foreground">
      {/* ── 1. 3D PANORAMIC SMARTPHONE SPREAD HERO ── */}
      <PanoramicSpreadHero
        serviceId="mobile-app-development"
        cardVariant="mobile"
        eyebrow="MOBILE APP DEVELOPMENT"
        title="Native Fluidity in Your Pocket."
        titleHighlight="iOS & Android Engineered."
        description="High-velocity iOS and Android applications engineered with React Native, Flutter, and native Swift/Kotlin. 120fps gesture fluidity, offline-first sync, and biometric authentication."
        primaryCTA={{
          text: 'Build your mobile app',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'Explore iOS & Android stack',
          href: '#architecture',
        }}
      />

      {/* ── 2. MOBILE METRICS BAR (COUNTABLE ANIMATED NUMBERS) ── */}
      <section className="relative z-20 py-10 lg:py-14 bg-card/60 backdrop-blur-md border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {MOBILE_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="flex flex-col items-center text-center p-3"
              >
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-1.5 tabular-nums">
                  <AnimatedCounter value={metric.value} delay={i * 0.1} />
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground mb-1">
                  {metric.label}
                </span>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px]">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MOBILE ARCHITECTURE PILLARS ── */}
      <section id="architecture" className="py-14 lg:py-20 bg-background relative z-10">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3"
            >
              MOBILE ENGINEERING STANDARDS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              120fps gesture fluidity. <br />
              <span className="italic text-primary font-normal">Zero dropped frames.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Mobile users judge quality by tactile response. We engineer sub-millisecond gesture handling, buttery smooth list inertia, and battery-friendly background sync.
            </motion.p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {MOBILE_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-secondary/30 hover:bg-secondary/60 border border-border/70 hover:border-primary/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-primary">
                      {pillar.number} // {pillar.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. NATIVE MOBILE CODE SHOWCASE ── */}
      <section className="py-14 lg:py-20 bg-secondary/20 border-y border-border/60 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                PRODUCTION MOBILE ARCHITECTURE
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Inspect Native iOS & Android Implementations
              </h2>
            </div>

            {/* Code Window Mockup */}
            <div className="rounded-2xl overflow-hidden border border-border/80 bg-black/95 shadow-2xl backdrop-blur-xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-neutral-400">
                    rapsora-mobile/core
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('swift')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'swift'
                        ? 'bg-primary/20 text-primary font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    WalletView.swift
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('reactnative')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'reactnative'
                        ? 'bg-primary/20 text-primary font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    FeedGesture.tsx
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('compose')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      activeCodeTab === 'compose'
                        ? 'bg-primary/20 text-primary font-bold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    MetricsScreen.kt
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
                {activeCodeTab === 'swift' && (
                  <pre className="text-neutral-200">
                    <code>
{`// Native iOS 18 SwiftUI with Interactive Gesture Physics & Haptics
import SwiftUI

struct WalletView: View {
    @State private var dragOffset: CGSize = .zero
    @State private var isUnlocked: Bool = false
    private let haptics = UIImpactFeedbackGenerator(style: .medium)

    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()
            
            VStack(spacing: 24) {
                // Interactive 3D Card with Spring Animation
                RoundedRectangle(cornerRadius: 24, style: .continuous)
                    .fill(LinearGradient.rapsoraGlow)
                    .frame(height: 220)
                    .offset(y: dragOffset.height)
                    .gesture(
                        DragGesture()
                            .onChanged { gesture in
                                dragOffset = gesture.translation
                                haptics.impactOccurred(intensity: 0.4)
                            }
                            .onEnded { _ in
                                withAnimation(.spring(response: 0.35, dampingFraction: 0.7)) {
                                    dragOffset = .zero
                                }
                            }
                    )
            }
        }
    }
}`}
                    </code>
                  </pre>
                )}

                {activeCodeTab === 'reactnative' && (
                  <pre className="text-neutral-200">
                    <code>
{`// Universal React Native 0.76 with Reanimated 3 Worklet
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export function FluidCard() {
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      'worklet';
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      'worklet';
      translateY.value = withSpring(0, { damping: 15, stiffness: 120 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, animatedStyle]} />
    </GestureDetector>
  );
}`}
                    </code>
                  </pre>
                )}

                {activeCodeTab === 'compose' && (
                  <pre className="text-neutral-200">
                    <code>
{`// Android Jetpack Compose 2.0 Declarative Metric Screen
@Composable
fun TelemetryScreen(viewModel: TelemetryViewModel) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()

    Scaffold(
        containerColor = MaterialTheme.colorScheme.background,
        topBar = { TopAppBar(title = { Text("Performance 120fps") }) }
    ) { padding ->
        LazyColumn(
            modifier = Modifier.padding(padding),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(state.metrics) { metric ->
                MetricCard(
                    title = metric.title,
                    value = metric.value,
                    modifier = Modifier.animateItemPlacement()
                )
            }
        }
    }
}`}
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MOBILE APP STORE LIFECYCLE ── */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              APP STORE DELIVERY LIFECYCLE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-[1.1]">
              From prototype to TestFlight. <br />
              <span className="italic text-primary font-normal">Fastlane automated.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOBILE_PIPELINE.map((pipe, idx) => (
              <motion.div
                key={pipe.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE }}
                className="p-6 sm:p-8 rounded-2xl bg-secondary/25 border border-border/70 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-primary block mb-4">
                    {pipe.step}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-tight">
                    {pipe.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pipe.desc}
                  </p>
                </div>
              </motion.div>
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
