export interface DesignMetric {
  value: string;
  label: string;
  desc: string;
}

export interface DesignPillar {
  number: string;
  tag: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface DesignCapability {
  number: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface DesignProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface DesignTool {
  name: string;
  category: string;
  desc: string;
}

export interface DesignFaqItem {
  question: string;
  answer: string;
}

export interface DesignServiceConfig {
  id: string;
  slug: string;
  route: string;
  aliases: string[];
  number: string;
  name: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  metrics: DesignMetric[];
  galleryImages: string[];
  pillars: DesignPillar[];
  capabilities: DesignCapability[];
  process: DesignProcessStep[];
  tools: DesignTool[];
  faqs: DesignFaqItem[];
}

export const DESIGN_SERVICES: Record<string, DesignServiceConfig> = {
  branding: {
    id: 'branding',
    slug: 'branding',
    route: '/services/branding',
    aliases: ['brand-identity', 'brand', 'branding-design'],
    number: '01',
    name: 'Brand Identity',
    headline: 'We Build Brands That',
    headlineHighlight: 'Command Loyalty.',
    description:
      'We engineer timeless visual and emotional identity systems that cut through market noise, establish instant authority, and turn customers into lifelong advocates.',
    primaryCTA: {
      text: 'Start Brand Project',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Identity System',
      href: '#pillars',
    },
    metrics: [
      { value: '4.8x', label: 'Recall Rate', desc: 'Superior brand recognition across competitive search and social channels' },
      { value: '100%', label: 'Vector Scalability', desc: 'Mathematical vector systems engineered for micro-favicon to stadium scale' },
      { value: '200+', label: 'Design Tokens', desc: 'Exhaustive color, typography, elevation, and component token libraries' },
      { value: 'Zero', label: 'Template Work', desc: 'Bespoke custom typography, logomarks, and visual guidelines' },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
    ],
    pillars: [
      {
        number: '01',
        tag: 'Visual Authority',
        title: 'Geometric Logomarks & Symbols',
        desc: 'Calculated mathematical proportions, optical balance, and distinctive iconography that create immediate sensory recall.',
        iconName: 'Shapes',
      },
      {
        number: '02',
        tag: 'Brand Positioning',
        title: 'Strategic Narrative & Messaging',
        desc: 'Bulletproof brand positioning and value propositions that differentiate your offering from legacy competitors.',
        iconName: 'ShieldCheck',
      },
      {
        number: '03',
        tag: 'Subconscious Impact',
        title: 'Target Archetype & Psychology',
        desc: 'Deep psychological persona mapping to align visual cues, colors, and textures with high-intent customer trust.',
        iconName: 'Focus',
      },
      {
        number: '04',
        tag: 'Scalable System',
        title: 'Comprehensive Brand Guidelines',
        desc: 'Exhaustive documentation covering color contrast, clear space, minimum sizing, secondary palettes, and misuses.',
        iconName: 'Layers',
      },
      {
        number: '05',
        tag: 'Verbal Identity',
        title: 'Tone of Voice & Copy Standards',
        desc: 'Defining verbal cadence, brand manifestos, microcopy guides, and taglines that keep communication consistent.',
        iconName: 'MessageSquareQuote',
      },
      {
        number: '06',
        tag: 'Omnichannel Presence',
        title: 'Multi-Surface Brand Collateral',
        desc: 'Adapting the identity across digital products, social channels, printed packaging, business stationery, and investor decks.',
        iconName: 'Compass',
      },
    ],
    capabilities: [
      {
        number: '01',
        category: 'Core Visual Identity',
        title: 'Primary & Secondary Logomarks',
        desc: 'Master vector logo suites engineered in dark, light, monochrome, and responsive icon formats.',
        tags: ['Scalable Vectors', 'Responsive Marks', 'Optical Balancing'],
      },
      {
        number: '02',
        category: 'Typography Architecture',
        title: 'Custom Font Pairings & Type Scales',
        desc: 'Curated editorial and body typography pairings complete with typographic scale ratios and webfont licenses.',
        tags: ['Type Hierarchy', 'Webfont Licensing', 'Editorial Pairings'],
      },
      {
        number: '03',
        category: 'Chromatic System',
        title: 'Color Palettes & Contrast Calibration',
        desc: 'Primary brand hues, functional UI tints, and accessible WCAG AAA compliant color combinations.',
        tags: ['WCAG Contrast', 'Hex/RGB/CMYK/Pantone', 'Dark/Light Tokens'],
      },
      {
        number: '04',
        category: 'Physical & Digital',
        title: 'Packaging & Print Identity',
        desc: 'Custom box dielines, foil-stamped cards, merchandise mockups, and tactile paper stock specifications.',
        tags: ['Custom Dielines', 'Foil & Emboss', 'CMYK Print Ready'],
      },
      {
        number: '05',
        category: 'Digital Governance',
        title: 'Living Brand Book & Asset Portal',
        desc: 'Cloud-hosted interactive styleguide and vector export repository accessible by your global team.',
        tags: ['Figma Libraries', 'Asset Repositories', 'Usage Rules'],
      },
      {
        number: '06',
        category: 'Launch Enablement',
        title: 'Pitch Decks & Marketing Templates',
        desc: 'Turnkey Keynote, Google Slides, and social media template kits that maintain brand polish from day one.',
        tags: ['Keynote/Figma', 'Deck Design', 'Social Master Kits'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Brand Archeology & Audit',
        desc: 'We examine your business model, customer psychology, competitor positioning, and long-term commercial goals.',
      },
      {
        step: '02',
        title: 'Strategic Positioning & Moodboards',
        desc: 'We define the core brand thesis and explore distinct artistic trajectories through tactile moodboards.',
      },
      {
        step: '03',
        title: 'Iterative Vector Exploration',
        desc: 'We draft and refine bespoke logomarks, typography pairings, and chromatic systems with mathematical rigor.',
      },
      {
        step: '04',
        title: 'Stress-Testing & Surface Mockups',
        desc: 'We simulate the identity across mobile viewports, outdoor billboards, packaging, and high-contrast environments.',
      },
      {
        step: '05',
        title: 'System Delivery & Tokenization',
        desc: 'We package print-ready vector files, digital design tokens, and a comprehensive cloud brand portal.',
      },
    ],
    tools: [
      { name: 'Adobe Illustrator', category: 'Vector Precision', desc: 'Precision mathematical vector drafting and mark refinement' },
      { name: 'Figma', category: 'Design System', desc: 'Dynamic component libraries, responsive tokens, and collaborative handoff' },
      { name: 'Glyphs', category: 'Type Engineering', desc: 'Bespoke letterform kerning, ligature design, and custom logotype tuning' },
      { name: 'Cinema 4D', category: 'Spatial Mockup', desc: 'Photorealistic packaging simulations and architectural signage previews' },
    ],
    faqs: [
      {
        question: 'What deliverables are included in a complete brand identity project?',
        answer:
          'You receive a comprehensive brand package including master vector files (SVG, EPS, PDF, PNG), responsive logo lockups, typography licenses, color tokens (Pantone, CMYK, RGB, HEX), social media kits, stationery templates, and an interactive cloud brand portal.',
      },
      {
        question: 'How long does a brand identity project typically take?',
        answer:
          'A typical brand identity engagement spans 4 to 6 weeks, covering deep discovery, 3 distinct creative directions, iterative refinement, stress-testing, and complete asset tokenization.',
      },
      {
        question: 'Do you help with naming and trademark checking?',
        answer:
          'Yes. We offer brand naming workshops and conduct preliminary USPTO/international trademark and domain availability screenings before finalizing any naming recommendation.',
      },
      {
        question: 'Can you evolve an existing logo rather than doing a full rebrand?',
        answer:
          'Yes. We regularly execute strategic brand refreshes—modernizing letterforms, fixing optical alignment, and creating unified design tokens while preserving hard-earned customer recognition.',
      },
    ],
  },

  'web-design': {
    id: 'web-design',
    slug: 'web-design',
    route: '/services/web-design',
    aliases: ['website-design', 'responsive-web-design', 'landing-page-design'],
    number: '02',
    name: 'Web Design',
    headline: 'Obsessive Architecture.',
    headlineHighlight: 'Sub-Second Conversions.',
    description:
      'We design responsive digital destinations that captivate visitors, elevate brand authority, and turn casual traffic into qualified commercial opportunities.',
    primaryCTA: {
      text: 'Start Web Design',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Architecture',
      href: '#pillars',
    },
    metrics: [
      { value: '3.4x', label: 'Average CRO Lift', desc: 'Measured conversion increase across redesigned landing pages' },
      { value: '100%', label: 'Fluid Responsive', desc: 'Pixel-perfect rendering across smartphone, tablet, laptop, and ultrawide' },
      { value: '<1s', label: 'Visual Perception', desc: 'Clear visual hierarchies engineered for instant comprehension' },
      { value: 'AAA', label: 'Accessibility Score', desc: 'Strict WCAG compliance ensuring inclusive browsing for all users' },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80',
    ],
    pillars: [
      {
        number: '01',
        tag: 'User Psychology',
        title: 'Behavioral Information Architecture',
        desc: 'Carefully ordered content hierarchies designed to lead user gaze naturally toward high-conviction decision gates.',
        iconName: 'MousePointer2',
      },
      {
        number: '02',
        tag: 'Editorial Polish',
        title: 'Modern Typography & Whitespace',
        desc: 'Generous negative space, bold editorial typography, and high-contrast color rhythms that project enterprise credibility.',
        iconName: 'Layers',
      },
      {
        number: '03',
        tag: 'Speed Tuning',
        title: 'Performance-First Design Systems',
        desc: 'Components designed with vector lightweight assets, sub-second perceived load times, and fluid responsive layouts.',
        iconName: 'Zap',
      },
      {
        number: '04',
        tag: 'Conversion Focus',
        title: 'High-Intent Conversion Paths',
        desc: 'Sticky navigation bars, contextual inquiry triggers, and micro-conversion forms that eliminate friction.',
        iconName: 'Target',
      },
      {
        number: '05',
        tag: 'Mobile Mastery',
        title: 'Thumb-Zone Mobile Ergonomics',
        desc: 'Mobile-first interaction patterns with bottom sheet menus, tap-friendly touch targets, and zero horizontal overflow.',
        iconName: 'Smartphone',
      },
      {
        number: '06',
        tag: 'Interactive Story',
        title: 'Bespoke Micro-Interactions',
        desc: 'Subtle hover states, scroll-bound transitions, and tactile feedback that make browsing feel alive and memorable.',
        iconName: 'Sparkles',
      },
    ],
    capabilities: [
      {
        number: '01',
        category: 'Corporate & Marketing',
        title: 'Enterprise Marketing Websites',
        desc: 'Flagship multi-page brand sites engineered for enterprise credibility, lead generation, and investor prestige.',
        tags: ['Multi-Page Architecture', 'Lead Capture Funnels', 'CMS Integration'],
      },
      {
        number: '02',
        category: 'Product & SaaS',
        title: 'High-Converting Landing Pages',
        desc: 'Laser-focused single-product and campaign landing pages optimized for paid ad campaigns and viral launches.',
        tags: ['A/B Testing Ready', 'Feature Matrix', 'Dynamic Social Proof'],
      },
      {
        number: '03',
        category: 'E-commerce Experiences',
        title: 'Editorial Commerce Layouts',
        desc: 'Product detail pages, curated lookbooks, and conversion-optimized cart drawers that maximize average order value.',
        tags: ['Rich Product Grids', 'Sticky Cart Drawers', 'Editorial Lookbooks'],
      },
      {
        number: '04',
        category: 'Design Systems',
        title: 'Atomic Web Component Libraries',
        desc: 'Exhaustive Figma libraries with typography tokens, responsive grid templates, and pre-built interactive states.',
        tags: ['Auto-Layout 5.0', 'Variables & Tokens', 'Dark/Light Variants'],
      },
      {
        number: '05',
        category: 'Interactive Media',
        title: 'Creative Web Art Direction',
        desc: 'Custom visual asset direction, bespoke 3D element integration, and interactive scroll storytelling.',
        tags: ['Interactive Art Direction', 'Three.js / WebGL Ready', 'Cinematic Layouts'],
      },
      {
        number: '06',
        category: 'Design-to-Code Handoff',
        title: 'Production-Ready Engineering Specs',
        desc: 'Flawlessly annotated Figma files with auto-layout, spacing variables, and CSS-ready token parameters.',
        tags: ['Tailwind Tokens', 'Clean Handoff', 'Responsive Breakpoints'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & User Flow Scoping',
        desc: 'We map user personas, search intent, key commercial conversion funnels, and technical requirements.',
      },
      {
        step: '02',
        title: 'Wireframing & Information Hierarchy',
        desc: 'We prototype low-fidelity structural blueprints to nail messaging flow before applying visual styling.',
      },
      {
        step: '03',
        title: 'High-Fidelity Visual Design',
        desc: 'We craft pixel-perfect mockups in Figma, infusing your brand identity, typography, and visual assets.',
      },
      {
        step: '04',
        title: 'Interactive Prototyping',
        desc: 'We build click-through prototypes simulating micro-interactions, responsive states, and transitions.',
      },
      {
        step: '05',
        title: 'Design System & Developer Handoff',
        desc: 'We deliver structured component tokens, asset exports, and developer documentation for seamless Next.js/React build.',
      },
    ],
    tools: [
      { name: 'Figma', category: 'Interface Design', desc: 'Collaborative UI design, responsive auto-layout, and interactive prototypes' },
      { name: 'Spline', category: '3D Web Assets', desc: 'Interactive real-time 3D web models with web-native performance' },
      { name: 'Tailwind CSS', category: 'Design Tokens', desc: 'Standardized spacing, color, and typographic tokens aligned with code' },
      { name: 'Storybook', category: 'Component Catalog', desc: 'Isolated UI component verification ensuring design-to-code parity' },
    ],
    faqs: [
      {
        question: 'Do you design mobile and tablet versions as well?',
        answer:
          'Yes, absolutely. Every web design project includes explicit, bespoke responsive layouts for mobile (375px+), tablet (768px+), laptop (1280px+), and wide desktop (1440px–1920px).',
      },
      {
        question: 'Can you work with our existing frontend development team?',
        answer:
          'Yes. We prepare developer-first Figma files with comprehensive auto-layout, tokenized variables, interaction guidelines, and export-ready SVG/WebP assets, participating in kickoff and code reviews.',
      },
      {
        question: 'What is the difference between Web Design and UI/UX Design?',
        answer:
          'Web Design focuses primarily on marketing websites, brand storytelling, typography, visual rhythm, and conversion funnels. UI/UX Design focuses on complex digital products, multi-step application workflows, dashboards, and usability systems.',
      },
      {
        question: 'How do you ensure designs convert visitors into customers?',
        answer:
          'We leverage proven cognitive psychology principles: F-shaped and Z-shaped scanning patterns, high-contrast action triggers, social proof placement, and low-friction form design.',
      },
    ],
  },

  'ui-ux': {
    id: 'ui-ux',
    slug: 'ui-ux',
    route: '/services/ui-ux',
    aliases: ['product-design', 'app-design', 'ux-design', 'ui-design'],
    number: '03',
    name: 'UI/UX Design',
    headline: 'Visceral Dynamics.',
    headlineHighlight: 'Zero-Friction Flows.',
    description:
      'We architect intuitive, high-velocity digital products and SaaS platforms that simplify complex workflows, reduce user churn, and delight users on every interaction.',
    primaryCTA: {
      text: 'Start UI/UX Project',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Product Framework',
      href: '#pillars',
    },
    metrics: [
      { value: '72%', label: 'Task Time Reduction', desc: 'Streamlined multi-step workflow completion speeds' },
      { value: '99.2%', label: 'SUS Usability Score', desc: 'Top-decile System Usability Scale across customer evaluations' },
      { value: '500+', label: 'Design System Tokens', desc: 'Comprehensive atomic components, variants, and keyboard accessible states' },
      { value: 'Zero', label: 'Cognitive Friction', desc: 'Mental models structured around natural human intuition' },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    ],
    pillars: [
      {
        number: '01',
        tag: 'Cognitive Simplicity',
        title: 'Neural Information Architecture',
        desc: 'Structuring data tables, filter trees, and dashboard views to minimize mental tax and accelerate user decision-making.',
        iconName: 'Layout',
      },
      {
        number: '02',
        tag: 'Visual Precision',
        title: 'Enterprise Aesthetic Authority',
        desc: 'Sleek, modern dark-mode and light-mode interfaces calibrated with micro-borders, clean typography, and purposeful contrast.',
        iconName: 'Palette',
      },
      {
        number: '03',
        tag: 'Micro Feedback',
        title: 'High-Velocity Interaction States',
        desc: 'Optimistic UI updates, skeleton loadings, and tactile haptic feedback that make applications feel instant.',
        iconName: 'Zap',
      },
      {
        number: '04',
        tag: 'Atomic Scale',
        title: 'Enterprise Design Systems',
        desc: 'Scalable component libraries built with Figma variants, auto-layout, tokenized variables, and accessibility standards.',
        iconName: 'Layers',
      },
      {
        number: '05',
        tag: 'User Validation',
        title: 'Usability Testing & User Research',
        desc: 'Proactive session replays, click tracking, and moderated user interviews that validate prototypes before code is written.',
        iconName: 'Users',
      },
      {
        number: '06',
        tag: 'Inclusive Design',
        title: 'WCAG AAA Accessibility Standards',
        desc: 'Screen-reader friendly semantic structures, keyboard navigation loops, and color-blind safe telemetry visualizations.',
        iconName: 'CheckCircle2',
      },
    ],
    capabilities: [
      {
        number: '01',
        category: 'SaaS & Enterprise',
        title: 'B2B Software & Web App Dashboards',
        desc: 'Complex data-dense dashboards, analytical charts, role-based admin panels, and multi-tenant SaaS interfaces.',
        tags: ['Data Density', 'Role-Based Views', 'Real-Time Charts'],
      },
      {
        number: '02',
        category: 'Mobile Applications',
        title: 'iOS & Android Native Mobile UX',
        desc: 'Human Interface Guidelines (HIG) and Material Design 3 compliant mobile interfaces with tactile gesture navigation.',
        tags: ['HIG Compliant', 'Material You', 'Fluid Gesture UX'],
      },
      {
        number: '03',
        category: 'Ecosystem Standards',
        title: 'Multi-Brand Design Systems',
        desc: 'Tokenized foundations for engineering teams: button matrices, form inputs, modal dialogs, and navigation drawers.',
        tags: ['Figma Variables', 'Component Variants', 'Zero Drift'],
      },
      {
        number: '04',
        category: 'Usability & Research',
        title: 'UX Audits & Friction Teardowns',
        desc: 'Heuristic evaluations of existing legacy applications identifying churn causes, drop-off gates, and accessibility gaps.',
        tags: ['Heuristic Audit', 'Cognitive Walkthrough', 'Friction Maps'],
      },
      {
        number: '05',
        category: 'Customer Journeys',
        title: 'Onboarding & Activation Flows',
        desc: 'Self-serve product onboarding tours, empty state illustrations, and progressive disclosure patterns that boost retention.',
        tags: ['First-Run UX', 'Progressive Disclosure', 'Activation Boost'],
      },
      {
        number: '06',
        category: 'Interactive Testing',
        title: 'High-Fidelity Clickable Prototypes',
        desc: 'Realistic interactive prototypes simulating dynamic data states, modal flows, and validation logic for stakeholder testing.',
        tags: ['Click-Through UX', 'Interactive States', 'User Testing Ready'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Product Discovery & User Interviews',
        desc: 'We interview stakeholders and power users to map real user mental models, pain points, and workflow bottlenecks.',
      },
      {
        step: '02',
        title: 'User Journeys & Workflow Wireframes',
        desc: 'We map end-to-end task flows and construct low-fidelity wireframes to validate interaction architecture.',
      },
      {
        step: '03',
        title: 'High-Fidelity Interface System',
        desc: 'We craft the visual layer in Figma—applying refined typography, tokenized color palettes, and component variants.',
      },
      {
        step: '04',
        title: 'Click-Through Usability Validation',
        desc: 'We stress-test interactive prototypes with real users to uncover edge-case friction points before development.',
      },
      {
        step: '05',
        title: 'Design System Delivery & Engineering Sync',
        desc: 'We deliver comprehensive component specs, token definitions, and work hand-in-hand with frontend developers.',
      },
    ],
    tools: [
      { name: 'Figma', category: 'Interface Design', desc: 'Atomic design systems, auto-layout variants, and interactive prototyping' },
      { name: 'Maze', category: 'User Testing', desc: 'Quantitative usability benchmarks, heatmaps, and remote user testing' },
      { name: 'Linear', category: 'Product Sync', desc: 'Direct issue integration with engineering teams for continuous design review' },
      { name: 'Zeroheight', category: 'Documentation', desc: 'Living design system documentation accessible across product teams' },
    ],
    faqs: [
      {
        question: 'How do you handle complex, data-heavy SaaS interfaces?',
        answer:
          'We utilize progressive disclosure, customizable table density, advanced faceted filtering, and visual hierarchy tricks so power users can access deep metrics without overwhelming first-time visitors.',
      },
      {
        question: 'Do you provide design systems with Figma tokens?',
        answer:
          'Yes. Every UI/UX project is delivered with a structured atomic design system utilizing Figma Variables for typography, colors, border-radii, spacing, and dark/light modes that map 1:1 to Tailwind or CSS tokens.',
      },
      {
        question: 'How do you collaborate with our engineering team?',
        answer:
          'We work directly inside your Slack, GitHub, or Linear workflows. We provide pixel-perfect inspect-ready files, interactive component state matrices (default, hover, focus, disabled, loading, error), and join sprint plannings.',
      },
      {
        question: 'Can you redesign an existing live product without breaking current user habits?',
        answer:
          'Yes. We use phased rollout strategies, conducting customer journey audits to preserve familiar mental models while systematically eliminating unnecessary clicks and friction.',
      },
    ],
  },

  'graphic-design': {
    id: 'graphic-design',
    slug: 'graphic-design',
    route: '/services/graphic-design',
    aliases: ['print-design', 'visual-design', 'marketing-graphics', 'packaging-design'],
    number: '04',
    name: 'Graphic Design',
    headline: 'Visual Precision.',
    headlineHighlight: 'Tactile Distinction.',
    description:
      'We craft prestige editorial publications, bespoke packaging, high-impact outdoor campaigns, and vector illustration systems that leave an indelible mark.',
    primaryCTA: {
      text: 'Start Graphic Project',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Disciplines',
      href: '#pillars',
    },
    metrics: [
      { value: '300DPI', label: 'Print Mastery', desc: 'Flawlessly pre-flighted CMYK, spot-color, and die-cut press files' },
      { value: '100%', label: 'Vector Purity', desc: 'Mathematically crisp vector assets that scale to stadium billboards' },
      { value: 'Swiss', label: 'Grid Discipline', desc: 'Mathematical typographic hierarchy and calculated white space' },
      { value: 'Zero', label: 'Generic Stock', desc: 'Custom tailored visual compositions, illustrations, and art direction' },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    ],
    pillars: [
      {
        number: '01',
        tag: 'Tactile Authority',
        title: 'Editorial & Publication Layouts',
        desc: 'Swiss-grid typesetting, editorial magazines, investor prospectuses, and lookbooks engineered with mathematical rigor.',
        iconName: 'Printer',
      },
      {
        number: '02',
        tag: 'Ceremonial Unboxing',
        title: 'Luxury Structural Packaging',
        desc: 'Custom box dielines, debossing, spot UV, holographic foils, and premium paper stock selection that turn unboxing into ceremony.',
        iconName: 'Box',
      },
      {
        number: '03',
        tag: 'Visual Disruption',
        title: 'Outdoor & Transit Advertising',
        desc: 'High-impact billboard displays, subway takeovers, and event signage designed for split-second recognition and viral buzz.',
        iconName: 'Eye',
      },
      {
        number: '04',
        tag: 'Micro Precision',
        title: 'Custom Iconography & Vector Sets',
        desc: 'Bespoke geometric icon libraries and technical diagram systems built to communicate complex features effortlessly.',
        iconName: 'PenTool',
      },
      {
        number: '05',
        tag: 'Tactile Finish',
        title: 'Print Production & Pre-Flight',
        desc: 'Exhaustive color proofing, spot varnish separations, bleed margins, and press supervision guaranteeing zero print surprises.',
        iconName: 'Palette',
      },
      {
        number: '06',
        tag: 'Digital Presence',
        title: 'Social & Digital Campaign Suites',
        desc: 'High-converting social ad creative sets, display banners, and multi-ratio promotional assets designed to stop the scroll.',
        iconName: 'Sparkles',
      },
    ],
    capabilities: [
      {
        number: '01',
        category: 'Editorial & Books',
        title: 'Prestige Publications & Reports',
        desc: 'Annual reports, brand magazines, lookbooks, and whitepapers with editorial grid structures and bespoke layout spreads.',
        tags: ['Swiss Grid', 'Book Design', 'Print-Ready PDF/X'],
      },
      {
        number: '02',
        category: 'Packaging Design',
        title: 'Product Packaging & Dielines',
        desc: 'Folding cartons, bottles, labels, tins, and e-commerce mailer boxes engineered with custom die lines and finishing specs.',
        tags: ['Custom Dielines', 'Foil & Emboss', 'Shelf Impact'],
      },
      {
        number: '03',
        category: 'Out of Home',
        title: 'Billboards & Environmental Signage',
        desc: 'Massive scale airport takeovers, architectural wayfinding signage, trade show booth designs, and retail graphics.',
        tags: ['Large Format', 'Vector Scale', 'Wayfinding'],
      },
      {
        number: '04',
        category: 'Visual Assets',
        title: 'Bespoke Vector Illustration Systems',
        desc: 'Custom editorial illustrations, technical architectural infographics, and character sets aligned with your brand voice.',
        tags: ['Custom Vectors', 'Infographics', 'Brand Illustrations'],
      },
      {
        number: '05',
        category: 'Corporate Collateral',
        title: 'Executive Stationery & Decks',
        desc: 'Business cards, letterheads, branded folders, pitch deck templates, and luxury corporate merchandise.',
        tags: ['Executive Stationery', 'Keynote Decks', 'Merch Design'],
      },
      {
        number: '06',
        category: 'Digital Ads',
        title: 'Omnichannel Campaign Kits',
        desc: 'Turnkey creative sets for Meta, LinkedIn, Google Display, and programmatic platforms in all standard IAB ratios.',
        tags: ['High-Conversion', 'All IAB Ratios', 'Retina Crisp'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Creative Brief & Physical Scoping',
        desc: 'We analyze your campaign objectives, target context, paper materials, and print/production specs.',
      },
      {
        step: '02',
        title: 'Concept & Grid Architecture',
        desc: 'We explore visual layout directions, typographical contrast, structural dielines, and color harmonies.',
      },
      {
        step: '03',
        title: 'Asset Crafting & Layout Polish',
        desc: 'We build high-resolution artwork, custom vectors, photo-manipulation composites, and detailed layout spreads.',
      },
      {
        step: '04',
        title: 'Pre-Flight & Press Calibration',
        desc: 'We verify color profiles (Pantone/CMYK), bleeds, trapping, dielines, and overprint settings.',
      },
      {
        step: '05',
        title: 'Production Handoff & Press Oversight',
        desc: 'We deliver certified print-ready PDF/X files and assist your chosen print vendor throughout the production run.',
      },
    ],
    tools: [
      { name: 'Adobe InDesign', category: 'Publication Design', desc: 'Master typographic grid layouts, multi-page book architecture, and print pre-flight' },
      { name: 'Adobe Illustrator', category: 'Vector Engineering', desc: 'Precision vector drawing, packaging dielines, and scalable icon development' },
      { name: 'Adobe Photoshop', category: 'Photo Retouching', desc: 'High-end color grading, texture synthesis, and composite image manipulation' },
      { name: 'Blender / 3D', category: 'Packaging Mockups', desc: 'Photorealistic packaging rendering for realistic client visualization' },
    ],
    faqs: [
      {
        question: 'Do you manage printing and manufacturing vendors?',
        answer:
          'Yes. We prepare certified print-ready files (PDF/X-1a, PDF/X-4), provide material specifications (paper weight, coating, deboss depth), and directly review digital press proofs with your printer.',
      },
      {
        question: 'Can you design packaging for custom physical products?',
        answer:
          'Yes. We develop custom dielines from scratch or work with your manufacturer’s CAD drawings, ensuring exact folding tolerances, structural stability, and luxury tactile finishes.',
      },
      {
        question: 'What formats do you deliver for outdoor billboards?',
        answer:
          'We deliver exact ratio vector files or high-resolution 300DPI TIFF/PDF files calibrated for billboard raster processors, including spot color separations where specified.',
      },
      {
        question: 'Do you create custom icon sets for digital use?',
        answer:
          'Yes. We craft bespoke SVG vector icon libraries with consistent stroke weights, geometric optical curves, and padding boxes ready for frontend development.',
      },
    ],
  },

  'motion-design': {
    id: 'motion-design',
    slug: 'motion-design',
    route: '/services/motion-design',
    aliases: ['3d-motion', 'animation', 'kinetic-typography', 'video-production'],
    number: '05',
    name: 'Motion Design',
    headline: 'Cinematic Kinetics.',
    headlineHighlight: 'Hypnotic Immersion.',
    description:
      'We bring brands and digital products to life through photorealistic 3D simulations, kinetic brand systems, fluid UI micro-interactions, and broadcast-tier commercial films.',
    primaryCTA: {
      text: 'Start Motion Project',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Motion Reel',
      href: '#pillars',
    },
    metrics: [
      { value: '60/120fps', label: 'Fluid Motion', desc: 'Buttery smooth interpolation across native mobile and modern web browsers' },
      { value: '4K/8K', label: 'Cinema Quality', desc: 'Photorealistic raytraced 3D animations rendered with physical lighting' },
      { value: '<50kb', label: 'Lottie Optimized', desc: 'Ultra-lightweight vector JSON animations engineered for sub-second web load' },
      { value: '100%', label: 'Bespoke Sound', desc: 'Synchronized sound design and audio stings custom-scored to animation curves' },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    ],
    pillars: [
      {
        number: '01',
        tag: 'Spatial Realism',
        title: 'Photorealistic 3D Simulations',
        desc: 'Raytraced product reveals, exploded mechanical views, and physics-driven liquid/cloth simulations rendered with cinematic lighting.',
        iconName: 'Boxes',
      },
      {
        number: '02',
        tag: 'Dynamic Identity',
        title: 'Kinetic Logomarks & Stings',
        desc: 'Living, breathing brand identities designed to establish prestige on splash screens, video openers, and interactive digital touchpoints.',
        iconName: 'Orbit',
      },
      {
        number: '03',
        tag: 'Tactile UI',
        title: 'Micro-Interactions & Lottie JSON',
        desc: 'Sub-50ms spring curves, interactive toggles, and lightweight Lottie animations that provide dopamine loops without lagging apps.',
        iconName: 'Zap',
      },
      {
        number: '04',
        tag: 'Cinematic Story',
        title: 'Commercial Launch Films & Teasers',
        desc: 'High-octane commercial visual effects, title sequences, and social hype trailers engineered to maximize pre-orders and brand prestige.',
        iconName: 'Film',
      },
      {
        number: '05',
        tag: 'Creative Code',
        title: 'WebGL Shaders & Interactive 3D',
        desc: 'Real-time Three.js Canvas shaders, scroll-driven camera sequences, and interactive 3D web models running at 60fps.',
        iconName: 'Cpu',
      },
      {
        number: '06',
        tag: 'Sonic Sync',
        title: 'Sound Design & Audio Branding',
        desc: 'Custom synthesized sound effects, tactile haptic clicks, and musical logos mathematically synchronized with animation keyframes.',
        iconName: 'Sparkles',
      },
    ],
    capabilities: [
      {
        number: '01',
        category: '3D Cinematics',
        title: 'Product Launch Films',
        desc: 'High-end 3D product animations showcasing industrial design, material craftsmanship, and micro-engineering details.',
        tags: ['Octane / Redshift', 'PBR Shaders', '4K Master'],
      },
      {
        number: '02',
        category: 'Digital Product',
        title: 'Lottie & Rive UI Animations',
        desc: 'Interactive vector animations designed in After Effects / Rive and exported as lightweight code for iOS, Android, and Web.',
        tags: ['Rive State Machine', 'Lottie JSON', 'Zero CPU Lag'],
      },
      {
        number: '03',
        category: 'Brand Kinetic',
        title: 'Logo Animation & Broadcast Packages',
        desc: 'Animated logos, bumper stings, lower-thirds, and YouTube/streaming packages that reinforce brand authority.',
        tags: ['Sonic Sync', 'Alpha Channels', 'Broadcast Safe'],
      },
      {
        number: '04',
        category: 'Web Experience',
        title: 'Interactive 3D Web Models',
        desc: 'Optimized GLTF/GLB 3D models embedded into Next.js/React websites with scroll-tied rotation and camera journeys.',
        tags: ['Three.js Ready', 'Sub-2MB GLTF', 'Draco Compression'],
      },
      {
        number: '05',
        category: 'Social Campaigns',
        title: 'Viral Motion Ads & Reels',
        desc: 'High-retention vertical 9:16 reels, kinetic typography promos, and thumb-stopping 3D visual hooks for digital ad campaigns.',
        tags: ['9:16 Vertical', 'Kinetic Type', 'Hook Rate +40%'],
      },
      {
        number: '06',
        category: 'Explainer & Tech',
        title: 'Technical 3D Workflow Explainers',
        desc: 'Visualizing complex SaaS architectures, blockchain consensus, hardware internals, and medical science with visual clarity.',
        tags: ['Abstract 3D', 'Data Telemetry', 'Complex Workflows'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Scripting, Storyboarding & Styleframes',
        desc: 'We draft beat-by-beat scripts and design high-fidelity static styleframes that lock in visual art direction and lighting.',
      },
      {
        step: '02',
        title: 'Animatics & Timing Verification',
        desc: 'We create a rough 2D/3D animatic with scratch audio to dial in rhythm, camera speeds, and narrative pacing.',
      },
      {
        step: '03',
        title: '3D Modeling, Texturing & Animation',
        desc: 'We build photorealistic geometry, apply physically based materials (PBR), and keyframe smooth camera moves.',
      },
      {
        step: '04',
        title: 'Lighting, GPU Rendering & Compositing',
        desc: 'We render multi-pass sequences using GPU raytracing and composite color grading, lens flares, and motion blur in post.',
      },
      {
        step: '05',
        title: 'Sound Design & Multi-Format Master Delivery',
        desc: 'We layer custom sound effects, mix audio, and deliver ProRes 4444, web-optimized MP4/WebM, and Lottie JSON files.',
      },
    ],
    tools: [
      { name: 'Maxon Cinema 4D', category: '3D Animation', desc: 'Industry-standard 3D modeling, camera animation, and MoGraph physics simulation' },
      { name: 'Redshift / Octane', category: 'GPU Raytracing', desc: 'Photorealistic physically-based rendering with cinematic lighting and caustics' },
      { name: 'After Effects', category: 'Motion & Post', desc: 'Kinetic typography, 2D vector animation, compositing, and visual effects' },
      { name: 'Rive', category: 'Interactive Runtime', desc: 'Real-time interactive state machine animations for web and mobile applications' },
    ],
    faqs: [
      {
        question: 'What is the turnaround time for a 3D product animation?',
        answer:
          'A typical 30-to-60-second 3D product animation project takes 3 to 5 weeks, progressing through storyboarding, 3D modeling, animatic timing, high-resolution rendering, sound design, and final compositing.',
      },
      {
        question: 'Can you deliver lightweight animations that do not slow down our website?',
        answer:
          'Yes. For web interfaces, we utilize Lottie (JSON) or Rive runtimes, which produce vector animations under 50KB that render natively using hardware-accelerated SVG/Canvas with zero impact on page speed or Core Web Vitals.',
      },
      {
        question: 'Do you create sound design and background music for animations?',
        answer:
          'Yes. Every motion project can include dedicated sound design—custom UI clicks, atmospheric swooshes, bass drops, and licensed or bespoke musical scores synchronized frame-by-frame with animation cues.',
      },
      {
        question: 'Can we provide our existing CAD or 3D files for rendering?',
        answer:
          'Yes. We can import STEP, IGES, OBJ, FBX, and Rhino CAD files directly, cleanly retopologizing the geometry into cinema-ready meshes for texturing and lighting.',
      },
    ],
  },
};

