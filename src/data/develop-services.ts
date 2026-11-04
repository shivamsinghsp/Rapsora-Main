export interface DevelopCardItem {
  id: string | number;
  title: string;
  category: string;
  imageSrc: string;
  alt: string;
  techTags: string[];
}

export interface DevelopPillar {
  number: string;
  tag: string;
  title: string;
  iconName: string;
  desc: string;
  specs: string[];
}

export interface DevelopMetric {
  value: string;
  label: string;
  desc: string;
}

export interface DevelopPipelineStep {
  step: string;
  title: string;
  desc: string;
}

export interface DevelopServiceConfig {
  id: string;
  slug: string;
  aliases: string[];
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  cards: DevelopCardItem[];
  metrics: DevelopMetric[];
  pillars: DevelopPillar[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  pipeline: DevelopPipelineStep[];
}

export const DEVELOP_SERVICES: Record<string, DevelopServiceConfig> = {
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    aliases: ['web development', 'web-development', 'webdev'],
    number: '01',
    name: 'Web Development',
    eyebrow: 'WEB DEVELOPMENT',
    title: 'Building Digital Experiences.',
    titleHighlight: 'Engineered for Growth.',
    description:
      'From intuitive user interfaces to powerful backend architectures, I build modern, responsive, and scalable web applications that turn ideas into functional digital experiences.',
    primaryCTA: {
      text: 'Start your project',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore technical architecture',
      href: '#architecture',
    },
    cards: [
      {
        id: 'frontend-editor',
        title: 'Modern Frontend Architecture',
        category: 'React 19 & Next.js 16',
        imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-performance VS Code editor interface displaying TypeScript React code with syntax highlighting',
        techTags: ['React 19', 'Next.js', 'TypeScript'],
      },
      {
        id: 'sleek-ui',
        title: 'Design System & UI Engineering',
        category: 'Component Libraries',
        imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
        alt: 'Professional dark-mode website interface showcase with crisp typography and layout hierarchy',
        techTags: ['Tailwind v4', 'shadcn/ui', 'Radix'],
      },
      {
        id: 'backend-architecture',
        title: 'Distributed Cloud Backend',
        category: 'Serverless & Microservices',
        imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-speed cloud server architecture and network hardware infrastructure node',
        techTags: ['Node.js', 'Go', 'GraphQL API'],
      },
      {
        id: 'responsive-design',
        title: 'Adaptive Multi-Device Layouts',
        category: 'Responsive Engineering',
        imageSrc: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1000&q=80',
        alt: 'Seamless responsive web application rendering synchronously across smartphone, tablet, and widescreen monitor',
        techTags: ['Fluid Layouts', 'Touch & Gestures', 'PWA'],
      },
      {
        id: 'turbopack-env',
        title: 'Server-Side Rendering & Turbopack',
        category: 'Build Optimization',
        imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
        alt: 'Full stack developer workstation demonstrating Next.js Turbopack compilation and hot module reloading',
        techTags: ['RSC', 'Turbopack', 'Edge Compute'],
      },
      {
        id: 'database-telemetry',
        title: 'Relational & Vector Data Layers',
        category: 'Database Architecture',
        imageSrc: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-throughput database architecture schemas, vector embeddings, and real-time query streams',
        techTags: ['PostgreSQL', 'Prisma', 'Redis'],
      },
      {
        id: 'saas-dashboard',
        title: 'Real-Time SaaS Analytics',
        category: 'Web Applications',
        imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        alt: 'Modern SaaS application dashboard visualizing telemetry data, conversion funnels, and user analytics',
        techTags: ['Data Viz', 'WebSockets', 'Sub-50ms'],
      },
      {
        id: 'cicd-workflow',
        title: 'Automated CI/CD & Zero-Downtime',
        category: 'DevOps & Deployment',
        imageSrc: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
        alt: 'Automated Git version control branching strategy and continuous integration deployment pipeline',
        techTags: ['Docker', 'Vercel', 'GitHub Actions'],
      },
    ],
    metrics: [
      { value: '100', label: 'Lighthouse Score', desc: 'Obsessive performance & Core Web Vitals optimization' },
      { value: '<50ms', label: 'Global Edge TTFB', desc: 'Sub-second server response across edge nodes' },
      { value: '99.99%', label: 'Uptime Reliability', desc: 'Enterprise fault-tolerant cloud architecture' },
      { value: '0.00', label: 'Layout Shift (CLS)', desc: 'Zero visual jump with calculated spatial containers' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'FRONTEND ARCHITECTURE',
        title: 'React 19 & Next.js 16 RSC',
        iconName: 'Code2',
        desc: 'React Server Components (RSC) and streaming SSR engineered for instant First Contentful Paint. Zero hydration drift, sub-100ms route transitions, and pixel-perfect responsiveness across every breakpoint.',
        specs: ['Next.js 16 Turbopack', 'React 19 Server Actions', 'Tailwind CSS v4'],
      },
      {
        number: '02',
        tag: 'BACKEND & APIS',
        title: 'Distributed Cloud Microservices',
        iconName: 'Server',
        desc: 'High-throughput API microservices built with Go and Node.js. Optimized connection pooling, sub-50ms edge caching, and scalable GraphQL/REST endpoints that gracefully handle millions of requests.',
        specs: ['Node.js / Bun / Go', 'GraphQL & REST', 'Sub-50ms Edge TTFB'],
      },
      {
        number: '03',
        tag: 'DATA & PERSISTENCE',
        title: 'Hardened Database Layers',
        iconName: 'Database',
        desc: 'Fault-tolerant data modeling using PostgreSQL, Redis caching tiers, and modern vector storage. Strict ACID compliance, zero data loss protocols, and automated point-in-time recovery.',
        specs: ['PostgreSQL & Prisma', 'Redis Caching', 'Vector Embeddings'],
      },
      {
        number: '04',
        tag: 'DEVOPS & INFRASTRUCTURE',
        title: 'Zero-Downtime Deployment CI/CD',
        iconName: 'Cpu',
        desc: 'Automated GitHub Actions pipelines, containerized Docker microservices, and instant preview environments. Security hardening, automatic SSL, and autoscaling across global edge nodes.',
        specs: ['Docker & Kubernetes', 'GitHub Actions CI/CD', '99.99% Uptime SLA'],
      },
    ],
    codeSnippet: {
      filename: 'app/services/web-development/page.tsx',
      language: 'typescript',
      code: `// High-Performance Server Component with Turbopack & RSC
import { Suspense } from 'react';
import { PanoramicSpreadHero } from '@/components/ui/panoramic-spread-hero';

export default async function WebDevPage() {
  const telemetry = await fetchTelemetry({ next: { revalidate: 3600 } });
  return (
    <main className="relative bg-background overflow-hidden">
      <PanoramicSpreadHero {...telemetry} />
    </main>
  );
}`,
    },
    pipeline: [
      { step: '01', title: 'Architecture & System Blueprint', desc: 'Data modeling, schema contracts, and interactive wireframes.' },
      { step: '02', title: 'Component-Driven Agile Sprints', desc: 'Bi-weekly sprint iterations with automated branch preview environments.' },
      { step: '03', title: 'Automated Testing & Security Audit', desc: 'E2E tests, type safety verification, and WCAG accessibility audits.' },
      { step: '04', title: 'Zero-Downtime Launch & Hypercare', desc: 'Canary deployments, zero-downtime DB migrations, and 24/7 APM monitoring.' },
    ],
  },

  'mobile-app-development': {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    aliases: ['mobile app development', 'mobile-app-development', 'mobile', 'android-app-development', 'ios-app-development'],
    number: '02',
    name: 'Mobile Application Development',
    eyebrow: 'MOBILE APP DEVELOPMENT',
    title: 'Native Fluidity in Your Pocket.',
    titleHighlight: 'iOS & Android Engineered.',
    description:
      'High-velocity iOS and Android applications engineered with React Native, Flutter, and native Swift/Kotlin. 120fps gesture fluidity, offline-first sync, and biometric authentication.',
    primaryCTA: {
      text: 'Build your mobile app',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore iOS & Android stack',
      href: '#architecture',
    },
    cards: [
      {
        id: 'fintech-crypto',
        title: 'Neo-Banking & Crypto Wallet',
        category: 'iOS FinTech',
        imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        alt: 'Sleek dark-mode iOS mobile banking and crypto portfolio application interface with real-time balance charts',
        techTags: ['SwiftUI', 'FaceID', 'Metal'],
      },
      {
        id: 'fitness-tracker',
        title: 'HealthKit & Activity Tracking',
        category: 'Fitness & Health',
        imageSrc: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
        alt: 'High-energy mobile fitness tracking screen displaying live heart-rate metrics and calorie burn progress rings',
        techTags: ['HealthKit', 'Sensors', 'LiveWidgets'],
      },
      {
        id: 'courier-maps',
        title: 'Hyperlocal Delivery & Live Maps',
        category: 'On-Demand Delivery',
        imageSrc: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
        alt: 'Smartphone screen showing interactive vector delivery map with live courier vehicle tracking',
        techTags: ['Mapbox', 'WebSockets', 'CoreLocation'],
      },
      {
        id: 'social-video',
        title: '120fps Gesture Social Feed',
        category: 'Universal App',
        imageSrc: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
        alt: 'Modern social media mobile interface displaying vertical reels, likes counter, and comments drawer',
        techTags: ['React Native', 'Expo', 'Reanimated 3'],
      },
      {
        id: 'voice-ai',
        title: 'Neural Voice Assistant & AI Chat',
        category: 'On-Device CoreML',
        imageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
        alt: 'Futuristic conversational mobile AI assistant with glowing voice audio wave and smart suggestions',
        techTags: ['CoreML', 'Whisper', 'AudioKit'],
      },
      {
        id: 'ar-commerce',
        title: 'Streetwear & AR 3D Showroom',
        category: 'ARKit Commerce',
        imageSrc: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
        alt: 'Mobile e-commerce sneaker drop application with 3D product view and instant Apple Pay checkout',
        techTags: ['ARKit', 'Apple Pay', 'StoreKit 2'],
      },
      {
        id: 'media-streamer',
        title: 'Spatial Audio & Media Player',
        category: 'Music & Podcasts',
        imageSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
        alt: 'Lossless audio streaming mobile player with interactive scrubber, volume visualizer, and dynamic lockscreen controls',
        techTags: ['AVAudioEngine', 'Haptics', 'LockscreenWidgets'],
      },
      {
        id: 'fastlane-delivery',
        title: 'Automated Fastlane App Store CI',
        category: 'Continuous Delivery',
        imageSrc: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
        alt: 'Mobile application design system and automated TestFlight release deployment pipeline',
        techTags: ['Fastlane', 'TestFlight', 'GooglePlay'],
      },
    ],
    metrics: [
      { value: '120fps', label: 'Frame Rate', desc: 'Silky smooth gestures without drop-frames' },
      { value: '<1.2s', label: 'Cold Start Time', desc: 'Instant application boot on modern chipsets' },
      { value: '99.9%', label: 'Crash-Free Users', desc: 'Rigorous memory leak prevention & unit tests' },
      { value: '100%', label: 'Offline Ready', desc: 'Local SQLite replica with automatic delta sync' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'NATIVE PERFORMANCE',
        title: 'SwiftUI & Jetpack Compose',
        iconName: 'Smartphone',
        desc: 'Direct platform integration with zero bridge overhead. Harness Apple Metal and Android Vulkan for hardware-accelerated animations and high-performance tactile interfaces.',
        specs: ['Swift 6', 'Kotlin 2.0', 'Hardware Acceleration'],
      },
      {
        number: '02',
        tag: 'CROSS-PLATFORM SPEED',
        title: 'React Native & Flutter',
        iconName: 'Layers',
        desc: 'Single codebase targeting iOS and Android simultaneously without compromising native ergonomics. Shared state logic and custom platform-native view wrappers.',
        specs: ['React Native 0.76+', 'New Architecture', 'TurboModules'],
      },
      {
        number: '03',
        tag: 'OFFLINE ARCHITECTURE',
        title: 'Conflict-Free Replicated Data',
        iconName: 'Database',
        desc: 'Local-first architecture that functions seamlessly on airplanes or remote locations, automatically resolving data conflicts the moment connectivity resumes.',
        specs: ['CRDT Sync', 'SQLite Encryption', 'Background Worker'],
      },
      {
        number: '04',
        tag: 'APP STORE SUCCESS',
        title: 'App Store & Play Store CI/CD',
        iconName: 'CheckCircle2',
        desc: 'End-to-end release automation with Fastlane. Automated screenshots, metadata localization, beta TestFlight distribution, and expedited compliance approval.',
        specs: ['Fastlane CI', 'TestFlight Automated', 'ASO Optimization'],
      },
    ],
    codeSnippet: {
      filename: 'src/hooks/useDeviceSensors.ts',
      language: 'typescript',
      code: `// 120fps Haptic & Spatial Gesture Hook
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';

export function useParallaxTilt() {
  const rotation = useAnimatedSensor(SensorType.ROTATION, { interval: 8 });
  return useDerivedValue(() => {
    const { roll, pitch } = rotation.sensor.value;
    return {
      rotateX: \`\${pitch * 15}deg\`,
      rotateY: \`\${roll * 15}deg\`,
    };
  });
}`,
    },
    pipeline: [
      { step: '01', title: 'Ergonomic UX & Wireframing', desc: 'Thumb-zone mapping, touch targets, and iOS Human Interface Guidelines compliance.' },
      { step: '02', title: 'Core Native Implementation', desc: 'State architecture, secure storage, and hardware-accelerated component development.' },
      { step: '03', title: 'Beta Testing & TestFlight', desc: 'Continuous testing on physical iOS and Android test fleets.' },
      { step: '04', title: 'Store Submission & Monitoring', desc: 'Submission approval handling and live crashlytics monitoring.' },
    ],
  },

  'desktop-app-development': {
    id: 'desktop-app-development',
    slug: 'desktop-app-development',
    aliases: ['desktop app development', 'desktop-app-development', 'desktop'],
    number: '03',
    name: 'Desktop Application Development',
    eyebrow: 'DESKTOP APPLICATIONS',
    title: 'High-Performance Desktop Power.',
    titleHighlight: 'Tauri & Electron Engineered.',
    description:
      'Cross-platform desktop software built with Rust-powered Tauri and Electron. Native OS integrations, hardware acceleration, sub-10ms latency, and auto-updating binaries for macOS, Windows, and Linux.',
    primaryCTA: {
      text: 'Build your desktop app',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Tauri & Rust engine',
      href: '#architecture',
    },
    cards: [
      {
        id: 'tauri-rust',
        title: 'Rust Core & Lightweight Binaries',
        category: 'Tauri 2.0',
        imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-speed Rust code terminal compile on macOS workstation',
        techTags: ['Rust', 'Tauri 2.0', '<15MB Binary'],
      },
      {
        id: 'electron-power',
        title: 'Enterprise Electron Tooling',
        category: 'Cross-Platform',
        imageSrc: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
        alt: 'Desktop multi-window workspace displaying complex IDE layouts',
        techTags: ['Electron', 'IPC Channels', 'Chromium'],
      },
      {
        id: 'os-integration',
        title: 'Deep OS Menu & Tray Integrations',
        category: 'System Ergononics',
        imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        alt: 'Native macOS menu bar and Windows tray utility execution',
        techTags: ['Global Shortcuts', 'Native Tray', 'Notifications'],
      },
      {
        id: 'gpu-accel',
        title: 'GPU Accelerated Canvas & 3D',
        category: 'Graphics Engine',
        imageSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-frequency 3D render benchmark on native graphics pipeline',
        techTags: ['WebGPU', 'Metal', 'DirectX'],
      },
      {
        id: 'file-system',
        title: 'Secure Sandbox File I/O',
        category: 'Native Capabilities',
        imageSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
        alt: 'Microsecond file system indexing and encrypted disk persistence',
        techTags: ['Zero-Copy I/O', 'AES-256', 'Memory Mapped'],
      },
      {
        id: 'auto-updater',
        title: 'Cryptographic Auto-Updater',
        category: 'Deployment',
        imageSrc: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1000&q=80',
        alt: 'Automated delta background binary updater with code signing',
        techTags: ['Code Signing', 'Delta Updates', 'Notarization'],
      },
      {
        id: 'offline-persistence',
        title: 'Embedded High-Speed DB',
        category: 'Local Storage',
        imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
        alt: 'Embedded RocksDB and DuckDB query execution on desktop',
        techTags: ['DuckDB', 'SQLite', 'Zero Latency'],
      },
      {
        id: 'multi-platform',
        title: 'macOS, Windows, & Linux Universal',
        category: 'Architecture',
        imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
        alt: 'Universal binaries compiling across Apple Silicon and x86 architectures',
        techTags: ['Apple Silicon', 'Windows 11', 'Linux AppImage'],
      },
    ],
    metrics: [
      { value: '<15MB', label: 'Binary Footprint', desc: 'Ultra-lean bundle size powered by Tauri & Rust' },
      { value: '<30MB', label: 'Idle RAM Usage', desc: 'Minimal background footprint unlike bloated electron apps' },
      { value: '3 Platforms', label: 'Universal Support', desc: 'macOS (Intel/M-series), Windows 11, and Linux' },
      { value: '100%', label: 'Code Signed', desc: 'Apple notarization & Microsoft SmartScreen verified' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'SYSTEM INTEGRITY',
        title: 'Rust Core Architecture',
        iconName: 'Cpu',
        desc: 'Memory safety without garbage collection pauses. Custom Rust backend functions invoked directly via zero-overhead IPC protocols.',
        specs: ['Rust 2024', 'Tokio Async', 'Safe Memory'],
      },
      {
        number: '02',
        tag: 'DESKTOP ERGONOMICS',
        title: 'Native OS Features',
        iconName: 'Layers',
        desc: 'Global keyboard shortcuts, system menu bar items, customized titlebars, file drag-and-drop, and deep OS protocol handlers.',
        specs: ['Tray Icons', 'Global Hotkeys', 'Window Management'],
      },
      {
        number: '03',
        tag: 'OFFLINE CAPABILITY',
        title: 'Local-First Data Storage',
        iconName: 'Database',
        desc: 'Embedded DuckDB and SQLite engines providing instantaneous analytical capabilities completely disconnected from the cloud.',
        specs: ['Embedded DuckDB', 'Encrypted Disk', 'Sync Workers'],
      },
      {
        number: '04',
        tag: 'RELEASE ENGINEERING',
        title: 'Notarization & Auto-Updates',
        iconName: 'CheckCircle2',
        desc: 'Automated GitHub Actions release pipeline. Delta binary updates, cryptographic signature checks, and Apple Notary Service clearance.',
        specs: ['Apple Notarized', 'MSIX Packages', 'Silent Updates'],
      },
    ],
    codeSnippet: {
      filename: 'src-tauri/src/main.rs',
      language: 'rust',
      code: `// High-Performance Rust Command Handler in Tauri 2.0
#[tauri::command]
async fn execute_heavy_computation(data: Vec<f64>) -> Result<f64, String> {
    tokio::task::spawn_blocking(move || {
        Ok(data.into_par_iter().sum())
    }).await.map_err(|e| e.to_string())?
}`,
    },
    pipeline: [
      { step: '01', title: 'System API Architecture', desc: 'Defining permissions, sandboxing policies, and IPC contracts.' },
      { step: '02', title: 'Frontend UI & Rust Core', desc: 'Building high-density interfaces hooked to native backend logic.' },
      { step: '03', title: 'Multi-OS Testing & Profiling', desc: 'Benchmarking RAM usage, thread safety, and startup times.' },
      { step: '04', title: 'Signing & Distribution', desc: 'Notarization, code signing certificates, and auto-updater configuration.' },
    ],
  },

  'ai-integration': {
    id: 'ai-integration',
    slug: 'ai-integration',
    aliases: ['ai integration', 'ai-integration', 'ai', 'artificial intelligence'],
    number: '05',
    name: 'Artificial Intelligence (AI) Integration',
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    title: 'Autonomous Intelligence at Scale.',
    titleHighlight: 'LLMs & Agentic Workflows.',
    description:
      'Production-grade AI integration with OpenAI, Claude, Gemini, and open-source models. RAG retrieval pipelines, autonomous multi-agent systems, semantic search, and fine-tuned enterprise models.',
    primaryCTA: {
      text: 'Integrate AI into your product',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Inspect our RAG pipeline',
      href: '#architecture',
    },
    cards: [
      {
        id: 'llm-orchestration',
        title: 'Multi-Model LLM Orchestration',
        category: 'Model Routing',
        imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
        alt: 'Artificial intelligence neural network visualization and semantic routing',
        techTags: ['OpenAI', 'Claude 3.5', 'Gemini 1.5'],
      },
      {
        id: 'rag-pipeline',
        title: 'Hybrid RAG & Vector Knowledge',
        category: 'Semantic Retrieval',
        imageSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-density vector embeddings space visualizing semantic clusters',
        techTags: ['Pinecone', 'Qdrant', 'Hybrid Search'],
      },
      {
        id: 'autonomous-agents',
        title: 'Autonomous Multi-Agent Loops',
        category: 'Agentic Workflows',
        imageSrc: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80',
        alt: 'Autonomous agent decision trees executing asynchronous business tasks',
        techTags: ['LangChain', 'LlamaIndex', 'Function Calling'],
      },
      {
        id: 'fine-tuning',
        title: 'Domain Fine-Tuning & LoRA',
        category: 'Custom Weights',
        imageSrc: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1000&q=80',
        alt: 'Neural network training loss curves and fine-tuned domain checkpoints',
        techTags: ['LoRA', 'Hugging Face', 'Quantization'],
      },
      {
        id: 'ai-guardrails',
        title: 'Enterprise Safety & Guardrails',
        category: 'Governance',
        imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Enterprise AI safety firewall filtering hallucination and PII leaks',
        techTags: ['Guardrails AI', 'PII Scrubbing', 'Zero Data Retention'],
      },
      {
        id: 'voice-agents',
        title: 'Low-Latency Voice & Audio Bots',
        category: 'Real-Time Audio',
        imageSrc: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80',
        alt: 'Real-time conversational voice agent waveform visualization',
        techTags: ['WebRTC', 'Whisper', 'Cartesia Audio'],
      },
      {
        id: 'predictive-ml',
        title: 'Predictive Business Intelligence',
        category: 'Statistical ML',
        imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        alt: 'Predictive forecasting model output charts for high-retention revenue',
        techTags: ['XGBoost', 'Prophet', 'Time-Series'],
      },
      {
        id: 'inference-cache',
        title: 'Semantic Prompt Caching',
        category: 'Cost Optimization',
        imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        alt: 'Semantic similarity cache preventing duplicate expensive LLM calls',
        techTags: ['GPTCache', 'Redis Vector', '70% Cost Reduction'],
      },
    ],
    metrics: [
      { value: '<250ms', label: 'Time to First Token', desc: 'Streaming low-latency model inference' },
      { value: '70%', label: 'Cost Reduction', desc: 'Semantic caching and intelligent small-model routing' },
      { value: '98.5%', label: 'Retrieval Precision', desc: 'Hybrid dense + BM25 sparse re-ranking' },
      { value: '100%', label: 'Enterprise Private', desc: 'Zero data retention and on-premise model options' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'ORCHESTRATION',
        title: 'Intelligent Model Routing',
        iconName: 'Cpu',
        desc: 'Dynamically routes prompts to the fastest, cheapest model that satisfies the task requirements (e.g. Claude 3.5 Sonnet for code, Haiku for summaries).',
        specs: ['Smart Fallbacks', 'Latency Routing', 'Rate-Limit Guard'],
      },
      {
        number: '02',
        tag: 'RETRIEVAL AUGMENTATION',
        title: 'Hybrid RAG Knowledge Base',
        iconName: 'Database',
        desc: 'Connect your internal documents, databases, and APIs. Semantic vector search combined with BM25 keyword matching and cross-encoder re-ranking.',
        specs: ['Cohere Rerank', 'Chunking Strategy', 'Context Windows'],
      },
      {
        number: '03',
        tag: 'ACTION EXECUTION',
        title: 'Deterministic Function Calling',
        iconName: 'Workflow',
        desc: 'Enable LLMs to query SQL databases, send emails, trigger Stripe refunds, and update CRM records with strict Zod schema validation.',
        specs: ['Zod Validation', 'Type Safety', 'Audit Logging'],
      },
      {
        number: '04',
        tag: 'COMPLIANCE',
        title: 'Security & PII Anonymization',
        iconName: 'ShieldCheck',
        desc: 'In-flight redaction of Personally Identifiable Information (PII) before prompts reach third-party inference endpoints.',
        specs: ['HIPAA Compliant', 'SOC2 Certified', 'Zero Training Logs'],
      },
    ],
    codeSnippet: {
      filename: 'src/lib/ai/rag-pipeline.ts',
      language: 'typescript',
      code: `// Enterprise RAG with Streaming & Semantic Caching
export async function queryKnowledgeBase(query: string) {
  const cached = await semanticCache.find(query, { threshold: 0.94 });
  if (cached) return cached.stream();

  const contexts = await vectorStore.hybridSearch({
    query,
    topK: 6,
    rerank: true,
  });

  return streamText({
    model: anthropic('claude-3-5-sonnet-latest'),
    system: SYSTEM_PROMPT_WITH_SOURCES,
    prompt: formatContext(query, contexts),
  });
}`,
    },
    pipeline: [
      { step: '01', title: 'Data Ingestion & Embedding', desc: 'Parsing PDFs, databases, and APIs into clean vector chunks.' },
      { step: '02', title: 'Model Selection & Guardrails', desc: 'Benchmarking accuracy, latency, and setting up hallucination barriers.' },
      { step: '03', title: 'Integration & Streaming UI', desc: 'Connecting streaming responses to frontend chat & voice interfaces.' },
      { step: '04', title: 'Telemetry & Prompt Tuning', desc: 'Observability logging with Langfuse to monitor token usage and accuracy.' },
    ],
  },

  'cloud-deployment': {
    id: 'cloud-deployment',
    slug: 'cloud-deployment',
    aliases: ['cloud deployment', 'cloud-deployment', 'devops', 'cloud'],
    number: '09',
    name: 'Cloud-Based Solutions & Deployment',
    eyebrow: 'CLOUD & DEVOPS',
    title: 'Bulletproof Cloud Infrastructure.',
    titleHighlight: 'Autoscaling & Zero Downtime.',
    description:
      'Enterprise cloud architecture on AWS, GCP, and Vercel. Docker containerization, Kubernetes orchestration, Infrastructure as Code (Terraform), and automated CI/CD pipelines engineered for 99.99% availability.',
    primaryCTA: {
      text: 'Architect your cloud infrastructure',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Inspect DevOps pipeline',
      href: '#architecture',
    },
    cards: [
      {
        id: 'kubernetes-cluster',
        title: 'Kubernetes & Container Mesh',
        category: 'Orchestration',
        imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-availability Kubernetes server cluster running containerized workloads',
        techTags: ['K8s', 'Docker', 'Helm Charts'],
      },
      {
        id: 'terraform-iac',
        title: 'Infrastructure as Code (IaC)',
        category: 'Terraform',
        imageSrc: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
        alt: 'Terraform declarative infrastructure provisioning code in terminal',
        techTags: ['Terraform', 'AWS CDK', 'GitOps'],
      },
      {
        id: 'aws-architecture',
        title: 'AWS & Multi-Region Resiliency',
        category: 'Cloud Architecture',
        imageSrc: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Multi-region AWS cloud nodes communicating across global fiber backbones',
        techTags: ['AWS ECS', 'Lambda', 'CloudFront'],
      },
      {
        id: 'cicd-automation',
        title: 'Automated GitHub Actions CI/CD',
        category: 'Release Pipelines',
        imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
        alt: 'Automated continuous integration pipeline testing code before production',
        techTags: ['GitHub Actions', 'ArgoCD', 'Canary'],
      },
      {
        id: 'telemetry-grafana',
        title: 'Real-Time Observability & APM',
        category: 'Telemetry',
        imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        alt: 'Prometheus and Grafana telemetry dashboards visualizing server health and latency',
        techTags: ['Grafana', 'Prometheus', 'Datadog'],
      },
      {
        id: 'ddos-security',
        title: 'Cloudflare WAF & DDoS Protection',
        category: 'Edge Security',
        imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Enterprise DDoS mitigation firewall blocking malicious network traffic',
        techTags: ['Cloudflare Enterprise', 'WAF', 'SSL/TLS'],
      },
      {
        id: 'database-ha',
        title: 'High-Availability Database Clusters',
        category: 'Data Reliability',
        imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
        alt: 'Automated multi-AZ database failover cluster with zero data loss',
        techTags: ['Aurora Multi-AZ', 'Redis Cluster', 'PITR Backups'],
      },
      {
        id: 'zero-trust',
        title: 'Zero-Trust IAM & Secret Vaults',
        category: 'Compliance',
        imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
        alt: 'Encrypted secrets management and identity access management logs',
        techTags: ['HashiCorp Vault', 'AWS IAM', 'Least Privilege'],
      },
    ],
    metrics: [
      { value: '99.99%', label: 'Uptime SLA', desc: 'Redundant multi-zone enterprise deployment' },
      { value: '<1s', label: 'Failover Recovery', desc: 'Automated health checks and instant node replacement' },
      { value: 'Zero', label: 'Deployment Downtime', desc: 'Canary and blue-green release strategies' },
      { value: '100%', label: 'Reproducible IaC', desc: 'Entire cloud fleet defined declaratively in code' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'INFRASTRUCTURE AS CODE',
        title: 'Declarative Cloud Fleet',
        iconName: 'Server',
        desc: 'Every VPC, subnet, security group, and server is written in Terraform. Zero manual cloud console changes, eliminating configuration drift forever.',
        specs: ['Terraform Cloud', 'GitOps State', 'Drift Detection'],
      },
      {
        number: '02',
        tag: 'CONTAINERIZATION',
        title: 'Kubernetes & Docker Scale',
        iconName: 'Cpu',
        desc: 'Horizontal Pod Autoscalers (HPA) spin up compute within seconds during traffic spikes and scale to zero during off-peak hours to slash operational costs.',
        specs: ['EKS / GKE', 'Microservices', 'Zero-Downtime'],
      },
      {
        number: '03',
        tag: 'CI/CD PIPELINE',
        title: 'Automated GitOps Pipelines',
        iconName: 'Workflow',
        desc: 'Merging to main triggers automated unit tests, vulnerability scans, container image signing, and zero-downtime blue-green deployments.',
        specs: ['GitHub Actions', 'ArgoCD', 'Image Signing'],
      },
      {
        number: '04',
        tag: 'OBSERVABILITY',
        title: '24/7 APM & Incident Telemetry',
        iconName: 'ShieldCheck',
        desc: 'Distributed tracing, structured JSON logs, and real-time alert thresholds that notify engineers before customers ever notice an issue.',
        specs: ['OpenTelemetry', 'PagerDuty Hook', 'Sentry APM'],
      },
    ],
    codeSnippet: {
      filename: 'terraform/main.tf',
      language: 'hcl',
      code: `# Multi-AZ High-Availability ECS Cluster
module "ecs_cluster" {
  source  = "terraform-aws-modules/ecs/aws"
  version = "~> 5.0"

  cluster_name = "rapsora-prod-cluster"
  fargate_capacity_providers = {
    FARGATE_SPOT = { default_capacity_provider_strategy = { weight = 80 } }
    FARGATE      = { default_capacity_provider_strategy = { weight = 20 } }
  }
}`,
    },
    pipeline: [
      { step: '01', title: 'Architecture Audit & VPC Planning', desc: 'Security groups, subnet partitioning, and cost projections.' },
      { step: '02', title: 'Declarative IaC Construction', desc: 'Codifying all resources in modular Terraform.' },
      { step: '03', title: 'Automated CI/CD Hardening', desc: 'Setting up automated build, test, and release runners.' },
      { step: '04', title: 'Chaos Testing & Handover', desc: 'Simulating node outages and training internal teams.' },
    ],
  },

  'ai-chatbot': {
    id: 'ai-chatbot',
    slug: 'ai-chatbot',
    aliases: ['ai chatbot and audio bot solutions', 'ai-chatbot', 'audio-bot', 'chatbot', 'voice-bot', 'conversational-ai'],
    number: '08',
    name: 'AI Chatbot and Audio Bot Solutions',
    eyebrow: 'CONVERSATIONAL AI & AUDIO BOTS',
    title: 'Real-Time Conversational Agents.',
    titleHighlight: 'Speech & Multimodal Intelligence.',
    description:
      'Sub-180ms conversational voice agents, intelligent text bots, and omnichannel messaging pipelines. Powered by WebRTC audio streaming, neural TTS, hybrid RAG knowledge bases, and deterministic CRM tool execution.',
    primaryCTA: {
      text: 'Deploy an AI voice/chat bot',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Inspect speech architecture',
      href: '#architecture',
    },
    cards: [
      {
        id: 'webrtc-voice-stream',
        title: 'Full-Duplex WebRTC Voice Engine',
        category: 'Real-Time Audio',
        imageSrc: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1000&q=80',
        alt: 'Real-time conversational voice assistant waveform visualization and low latency audio processing',
        techTags: ['WebRTC', 'Sub-180ms', 'VAD'],
      },
      {
        id: 'multimodal-rag-bot',
        title: 'Multimodal RAG Knowledge Base',
        category: 'Grounded Retrieval',
        imageSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-density vector embeddings space visualizing semantic clusters for enterprise document retrieval',
        techTags: ['Hybrid Search', 'Pinecone', 'Cross-Encoder'],
      },
      {
        id: 'omnichannel-messaging',
        title: 'WhatsApp & Omnichannel Hub',
        category: 'Enterprise Messaging',
        imageSrc: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1000&q=80',
        alt: 'Omnichannel messaging hub dashboard routing customer inquiries across WhatsApp, Slack, and web widgets',
        techTags: ['WhatsApp Cloud API', 'Slack Bot', 'WebSockets'],
      },
      {
        id: 'neural-tts-synthesis',
        title: 'Expressive Neural Voice Synthesis',
        category: 'Voice Generation',
        imageSrc: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=80',
        alt: 'Studio microphone and sound engineering console representing human-like natural voice synthesis',
        techTags: ['Cartesia Sonic', 'ElevenLabs', 'Emotional Cadence'],
      },
      {
        id: 'intelligent-handoff',
        title: 'Sentiment-Aware Human Handoff',
        category: 'Escalation Engine',
        imageSrc: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Customer support specialist console with real-time sentiment analysis and seamless bot-to-human transfer',
        techTags: ['Sentiment Telemetry', 'Zendesk Bridge', 'Live Context Sync'],
      },
      {
        id: 'tool-execution-agent',
        title: 'Autonomous Tool & API Execution',
        category: 'Function Calling',
        imageSrc: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-performance code execution interface representing deterministic API calling and database querying',
        techTags: ['Zod Validation', 'LangGraph', 'Database Queries'],
      },
      {
        id: 'multilingual-translation',
        title: 'Bidirectional Voice Translation',
        category: '50+ Languages',
        imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
        alt: 'Global network topology showing instant real-time multi-language voice and text translation',
        techTags: ['Whisper Large v3', 'Zero Latency', 'Auto Language Detect'],
      },
      {
        id: 'bot-guardrails-security',
        title: 'Enterprise Guardrails & PII Shield',
        category: 'Security & Safety',
        imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Enterprise AI security firewall screening prompt injections and redacting sensitive customer PII',
        techTags: ['PII Masking', 'Hallucination Barrier', 'SOC2 Compliant'],
      },
    ],
    metrics: [
      { value: '<180ms', label: 'Audio Latency', desc: 'Streaming full-duplex conversational voice response' },
      { value: '94%', label: 'Deflection Rate', desc: 'Inquiries resolved accurately without human intervention' },
      { value: '50+', label: 'Languages Supported', desc: 'Real-time multilingual translation and voice accents' },
      { value: '99.9%', label: 'Uptime Availability', desc: 'Redundant low-latency WebRTC cluster topology' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'REAL-TIME AUDIO PIPELINE',
        title: 'Full-Duplex WebRTC Streaming',
        iconName: 'Zap',
        desc: 'Direct audio stream negotiation using WebRTC data channels and lightweight WebSocket fallbacks. Silero Voice Activity Detection (VAD) detects user interruptions instantly with zero delay.',
        specs: ['WebRTC Media Streams', 'Silero VAD', '<180ms Round-Trip'],
      },
      {
        number: '02',
        tag: 'COGNITIVE REASONING',
        title: 'Agentic Tool & RAG Orchestration',
        iconName: 'Workflow',
        desc: 'Grounded semantic retrieval combined with strict JSON schema tool validation. Bots seamlessly book appointments, process refund requests, and verify order statuses in real-time.',
        specs: ['LangGraph Agents', 'Hybrid Vector RAG', 'Deterministic Actions'],
      },
      {
        number: '03',
        tag: 'OMNICHANNEL DISTRIBUTION',
        title: 'Universal Meta Cloud & Web Hub',
        iconName: 'Globe',
        desc: 'Single unified conversational core broadcasting across WhatsApp Business Cloud API, Telegram, Slack, Intercom, and customized high-speed embeddable web chat widgets.',
        specs: ['Meta Cloud API', 'Custom Embed Widget', 'Bi-Directional Webhooks'],
      },
      {
        number: '04',
        tag: 'SAFETY & COMPLIANCE',
        title: 'PII Scrubbing & Zero Retention',
        iconName: 'ShieldCheck',
        desc: 'In-flight scrubbing of credit cards, social security numbers, and sensitive client telemetry. Strict zero data retention policies ensure full compliance with GDPR and HIPAA mandates.',
        specs: ['Automated Redaction', 'Zero Training Retention', 'Audit Telemetry'],
      },
    ],
    codeSnippet: {
      filename: 'src/lib/audio/webrtc-voice-agent.ts',
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
    pipeline: [
      { step: '01', title: 'Domain Knowledge & Intent Mapping', desc: 'Ingesting FAQs, product manuals, and API endpoints into semantic vector clusters.' },
      { step: '02', title: 'Persona & Voice Cadence Tuning', desc: 'Customizing brand voice tone, pronunciation glossaries, and interruption behaviors.' },
      { step: '03', title: 'Omnichannel Integration & Testing', desc: 'Connecting WhatsApp Cloud API, web widgets, and establishing fallback escalation routes.' },
      { step: '04', title: 'Canary Rollout & Active Learning', desc: 'Deploying with confidence scoring, live sentiment telemetry, and continuous fine-tuning.' },
    ],
  },

  'erp': {
    id: 'erp',
    slug: 'erp',
    aliases: ['enterprise resource planning', 'enterprise resource planning (erp) solutions', 'erp', 'erp-solutions'],
    number: '10',
    name: 'Enterprise Resource Planning (ERP) Solutions',
    eyebrow: 'ENTERPRISE SYSTEMS',
    title: 'Unified Enterprise Operations.',
    titleHighlight: 'Resilient Core Orchestration.',
    description:
      'Cloud-native ERP systems unifying multi-entity general ledger, automated procurement, inventory tracking, supply chain telemetry, and real-time executive business intelligence.',
    primaryCTA: {
      text: 'Architect your custom ERP',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore ERP architecture',
      href: '#architecture',
    },
    cards: [
      {
        id: 'multi-entity-ledger',
        title: 'Multi-Entity Double-Entry Ledger',
        category: 'Financial Core',
        imageSrc: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
        alt: 'Financial ledger analytics dashboard displaying multi-currency balances and automated reconciliation',
        techTags: ['ACID Ledger', 'Multi-Currency', 'Real-Time Close'],
      },
      {
        id: 'supply-chain-bom',
        title: 'Supply Chain & Manufacturing BOM',
        category: 'Operations',
        imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
        alt: 'Modern logistics automation warehouse tracking supply chain telemetry and bills of materials',
        techTags: ['BOM Management', 'Lead-Time AI', 'Vendor Portals'],
      },
      {
        id: 'multi-warehouse-inventory',
        title: 'Multi-Warehouse Inventory Tracking',
        category: 'Inventory Control',
        imageSrc: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80',
        alt: 'High-density industrial warehouse racks equipped with barcode scanning and automated replenishment thresholds',
        techTags: ['FIFO / LIFO', 'Barcode / RFID', 'Auto-Replenish'],
      },
      {
        id: 'enterprise-payroll-hr',
        title: 'Global Payroll & HR Matrix',
        category: 'Workforce Management',
        imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
        alt: 'Executive workforce planning interface displaying automated tax calculations and timesheet approval workflows',
        techTags: ['Multi-Region Tax', 'Approval Chains', 'Compliance'],
      },
      {
        id: 'procure-to-pay',
        title: 'Procure-to-Pay Automation',
        category: 'Procurement',
        imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        alt: 'Automated 3-way purchase order reconciliation interface with digital approval routing',
        techTags: ['3-Way Matching', 'PO Generation', 'Expense Control'],
      },
      {
        id: 'executive-bi-telemetry',
        title: 'Executive BI & Cashflow Telemetry',
        category: 'Business Intelligence',
        imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        alt: 'Real-time executive financial dashboard visualizing EBITDA, working capital, and predictive cash runway',
        techTags: ['Live EBITDA', 'Cashflow AI', 'Board Reports'],
      },
      {
        id: 'rbac-audit-trails',
        title: 'Granular RBAC & Immutable Audit Logs',
        category: 'Governance & Security',
        imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
        alt: 'Security audit terminal showing immutable cryptographic change logs and strict role-based access controls',
        techTags: ['Cryptographic Audit', 'SOC1 / SOC2', 'Field Permissions'],
      },
      {
        id: 'distributed-erp-core',
        title: 'High-Throughput Microservices Core',
        category: 'Architecture',
        imageSrc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        alt: 'Enterprise distributed server infrastructure processing thousands of concurrent transactional operations',
        techTags: ['Event-Driven', 'PostgreSQL Partitioning', 'Sub-Second Queries'],
      },
    ],
    metrics: [
      { value: '0', label: 'Discrepancy Invariants', desc: 'Mathematically guaranteed double-entry ledger balance' },
      { value: '10x', label: 'Faster Month Close', desc: 'Automated reconciliation replacing manual spreadsheets' },
      { value: '99.99%', label: 'Transactional Uptime', desc: 'Mission-critical database clusters with zero data loss' },
      { value: '100k+', label: 'Daily Trans Capacity', desc: 'Horizontally scaled event-driven accounting engine' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'FINANCIAL ACCURACY',
        title: 'Immutable Double-Entry Ledger',
        iconName: 'Database',
        desc: 'Strict double-entry accounting engine enforcing debit-credit equality at the database constraint level. Supports unlimited subsidiary entities, automated currency conversions, and GAAP compliance.',
        specs: ['Strict ACID Invariants', 'Multi-Currency Revaluation', 'Automated Journal Entries'],
      },
      {
        number: '02',
        tag: 'LOGISTICS & OPERATIONS',
        title: 'Smart Supply Chain & Inventory',
        iconName: 'Server',
        desc: 'Unified visibility across multiple physical fulfillment hubs. Dynamic reorder points calculated using machine learning lead-time models, barcode integration, and vendor scorecards.',
        specs: ['Lot & Serial Tracking', 'Dynamic Restock Points', 'Automated EDI Invoicing'],
      },
      {
        number: '03',
        tag: 'GOVERNANCE & TRUST',
        title: 'Immutable Audit Trail & RBAC',
        iconName: 'ShieldCheck',
        desc: 'Every state mutation is cryptographically signed and archived into an append-only audit log. Fine-grained field-level permissions prevent unauthorized data viewing or tampering.',
        specs: ['Append-Only Ledger', 'SOC2 / SOX Ready', 'Field-Level Encryption'],
      },
      {
        number: '04',
        tag: 'SYSTEM INTEGRATION',
        title: 'Event-Driven Microservices Hub',
        iconName: 'Workflow',
        desc: 'High-throughput Kafka and RabbitMQ event streaming pipes connecting legacy SAP/Oracle systems, modern e-commerce storefronts, payment gateways, and banking APIs.',
        specs: ['Kafka / RabbitMQ', 'REST & GraphQL APIs', 'Legacy Database Bridges'],
      },
    ],
    codeSnippet: {
      filename: 'src/lib/erp/double-entry-ledger.ts',
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
    pipeline: [
      { step: '01', title: 'Business Workflow & Schema Mapping', desc: 'Auditing existing accounting charts, inventory workflows, and organizational structures.' },
      { step: '02', title: 'Modular Core Architecture Build', desc: 'Developing the double-entry engine, RBAC matrices, and supply chain connectors.' },
      { step: '03', title: 'Legacy Data Migration & Reconciliation', desc: 'Extracting, transforming, and validating historic transactions with zero balance discrepancies.' },
      { step: '04', title: 'Zero-Downtime Cutover & 24/7 Hypercare', desc: 'Switching production traffic with parallel run verification and ongoing engineering support.' },
    ],
  },

  'crm': {
    id: 'crm',
    slug: 'crm',
    aliases: ['customer relationship management', 'customer relationship management (crm) solutions', 'crm', 'crm-solutions'],
    number: '11',
    name: 'Customer Relationship Management (CRM) Solutions',
    eyebrow: 'REVENUE ENGINE ARCHITECTURE',
    title: 'Intelligent Customer Lifecycle.',
    titleHighlight: 'Compounded Revenue Velocity.',
    description:
      'High-velocity CRM platforms engineered with predictive deal scoring, 360-degree customer telemetry, omnichannel communication hubs, automated outreach sequences, and real-time revenue analytics.',
    primaryCTA: {
      text: 'Engineer your custom CRM',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Inspect CRM architecture',
      href: '#architecture',
    },
    cards: [
      {
        id: 'visual-deal-kanban',
        title: 'Visual Pipeline & Opportunity Kanban',
        category: 'Sales Execution',
        imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
        alt: 'Interactive drag-and-drop sales deal pipeline board with real-time deal stage probabilities',
        techTags: ['Optimistic UI', 'Drag & Drop', 'Live Deal Values'],
      },
      {
        id: '360-customer-telemetry',
        title: '360° Unified Customer Telemetry',
        category: 'Relationship Intelligence',
        imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
        alt: 'Unified timeline consolidating customer emails, call recordings, website page visits, and support tickets',
        techTags: ['Timeline Stream', 'Unified Activity', 'Omnichannel Sync'],
      },
      {
        id: 'predictive-lead-scoring',
        title: 'Predictive Machine Learning Lead Scoring',
        category: 'Revenue AI',
        imageSrc: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Machine learning lead prioritization charts displaying buyer intent signals and conversion probabilities',
        techTags: ['Intent Models', 'Behavioral Scoring', 'Deal Win Probability'],
      },
      {
        id: 'omnichannel-comms-hub',
        title: 'Omnichannel Voice & Messaging Hub',
        category: 'Communications',
        imageSrc: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80',
        alt: 'In-app VoIP calling dialer with real-time transcription and two-way Gmail and Outlook synchronization',
        techTags: ['In-App VoIP', 'Two-Way Email Sync', 'WhatsApp API'],
      },
      {
        id: 'automated-outreach-cadence',
        title: 'Automated Sales Sequences & Cadences',
        category: 'Sales Automation',
        imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
        alt: 'Multi-touch automated sales sequence workflow delivering personalized follow-ups and calendar bookings',
        techTags: ['Sequence Builder', 'Calendar Hooks', 'Smart Delays'],
      },
      {
        id: 'cpq-esignature',
        title: 'Dynamic CPQ & In-App E-Signatures',
        category: 'Deal Closing',
        imageSrc: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
        alt: 'Dynamic configure-price-quote generator creating customized digital proposals with legally binding signatures',
        techTags: ['Dynamic Pricing', 'PDF Generator', 'Legally Binding E-Sign'],
      },
      {
        id: 'churn-forecasting',
        title: 'Retention & Account Health Scoring',
        category: 'Customer Success',
        imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
        alt: 'Customer success dashboard tracking product adoption telemetry, risk scores, and churn prevention alerts',
        techTags: ['Health Index', 'Usage Telemetry', 'Proactive Alerts'],
      },
      {
        id: 'revenue-analytics',
        title: 'Multi-Touch Revenue Attribution',
        category: 'Analytics',
        imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        alt: 'Executive revenue analytics dashboard displaying cohort retention curves and rep quota attainment',
        techTags: ['Attribution Models', 'Rep Performance', 'Quota Forecasting'],
      },
    ],
    metrics: [
      { value: '3.4x', label: 'Pipeline Velocity', desc: 'Accelerated conversion from discovery call to signed deal' },
      { value: '42%', label: 'Churn Reduction', desc: 'Proactive account health alerts catching at-risk renewals' },
      { value: '360°', label: 'Unified Telemetry', desc: 'Every touchpoint, email, call, and ticket in one timeline' },
      { value: '<50ms', label: 'Contact Sync Latency', desc: 'Real-time WebSocket sync across all sales reps' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'SALES VELOCITY',
        title: 'Optimistic Deal Pipeline Kanban',
        iconName: 'Workflow',
        desc: 'Interactive opportunity board with sub-10ms drag-and-drop feedback. Real-time WebSocket synchronization ensures all sales reps view live pipeline updates simultaneously with zero collisions.',
        specs: ['Optimistic UI', 'WebSocket Live Sync', 'Automated Stage Transitions'],
      },
      {
        number: '02',
        tag: 'PREDICTIVE REVENUE',
        title: 'Machine Learning Lead Scoring',
        iconName: 'Zap',
        desc: 'Proprietary ML algorithms analyzing prospect website visits, email response latencies, and firmographic data to compute live win probabilities and suggest next best actions for sales reps.',
        specs: ['Intent Signal Analysis', 'Win-Loss Predictive Models', 'Next Best Action AI'],
      },
      {
        number: '03',
        tag: 'OMNICHANNEL SYNCHRONIZATION',
        title: 'Unified Communication & VoIP',
        iconName: 'Globe',
        desc: 'Built-in browser WebRTC softphone with automated call recording and AI transcription. Seamless two-way integration with Gmail, Outlook 365, and WhatsApp Business API.',
        specs: ['WebRTC Softphone', 'Automated AI Summaries', 'Two-Way Inbox Sync'],
      },
      {
        number: '04',
        tag: 'DEAL CLOSING & CPQ',
        title: 'Dynamic Proposals & E-Signatures',
        iconName: 'CheckCircle2',
        desc: 'Configure complex tiered pricing and discount structures on the fly. Generate pixel-perfect PDF proposals and execute legally binding cryptographic digital signatures in minutes.',
        specs: ['Zod Pricing Rules', 'Automated PDF Generation', 'Cryptographic Signatures'],
      },
    ],
    codeSnippet: {
      filename: 'src/lib/crm/lead-scoring-engine.ts',
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
    pipeline: [
      { step: '01', title: 'Sales Funnel Audit & Mapping', desc: 'Evaluating qualification stages, conversion drop-offs, and team communication rituals.' },
      { step: '02', title: 'Data Cleaning & Legacy Migration', desc: 'Deduplicating contact lists, normalizing accounts, and migrating historic activity logs.' },
      { step: '03', title: 'Custom Pipeline & Automation Sprint', desc: 'Constructing Kanban boards, automated email cadences, and CPQ quote templates.' },
      { step: '04', title: 'Team Rollout & Velocity Optimization', desc: 'Conducting sales team onboarding, establishing live dashboards, and tuning ML models.' },
    ],
  },
};

export function getDevelopService(slug: string): DevelopServiceConfig | null {
  const normalized = decodeURIComponent(slug).toLowerCase().trim().replace(/\s+/g, '-');
  
  // Direct match
  if (DEVELOP_SERVICES[normalized]) {
    return DEVELOP_SERVICES[normalized];
  }

  // Alias match
  for (const service of Object.values(DEVELOP_SERVICES)) {
    if (
      service.aliases.some(
        (alias) => alias.toLowerCase().replace(/\s+/g, '-') === normalized
      )
    ) {
      return service;
    }
  }

  return null;
}
