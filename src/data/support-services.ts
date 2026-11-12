export interface SupportMetric {
  value: string;
  label: string;
  desc: string;
}

export interface SupportFeatureItem {
  title: string;
  desc: string;
  tag?: string;
}

export interface SupportProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface SupportFaqItem {
  question: string;
  answer: string;
}

export interface SupportServiceConfig {
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
  overview: {
    title: string;
    description: string;
    points: string[];
  };
  metrics: SupportMetric[];
  servicesList: SupportFeatureItem[];
  secondaryServicesTitle?: string;
  secondaryServicesList?: SupportFeatureItem[];
  process: SupportProcessStep[];
  benefits: {
    title: string;
    desc: string;
  }[];
  faqs: SupportFaqItem[];
}

export const SUPPORT_SERVICES: Record<string, SupportServiceConfig> = {
  'website-management': {
    id: 'website-management',
    slug: 'website-management',
    route: '/support/website-management',
    aliases: ['maintenance', 'website-maintenance', 'website-management'],
    number: '01',
    name: 'Website Management',
    headline: 'Your Website Deserves',
    headlineHighlight: 'More Than Maintenance.',
    description:
      'We keep your digital presence running smoothly through continuous updates, performance improvements, proactive maintenance, and dedicated technical support.',
    primaryCTA: {
      text: "Let's Talk",
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Our Approach',
      href: '#approach',
    },
    overview: {
      title: 'A living website needs proactive engineering, not reactive bug fixes.',
      description:
        'Your website is the primary touchpoint for your brand. Outdated software, broken links, sluggish load times, and dormant content erode user trust. We operate as your dedicated web operations team, handling every technical layer so your team can focus entirely on business growth.',
      points: [
        'Weekly core, plugin, and dependency regression testing',
        'Continuous Core Web Vitals optimization to sustain sub-second load times',
        'Dedicated SLA response times with zero ticket bureaucracy',
        'Staged deployment pipelines ensuring zero production downtime',
      ],
    },
    metrics: [
      { value: '99.98%', label: 'Average Uptime', desc: 'Continuous round-the-clock automated uptime verification' },
      { value: '<2hr', label: 'Critical Issue SLA', desc: 'Rapid response resolution for production-impacting bugs' },
      { value: '100+', label: 'Monthly Audits', desc: 'Proactive performance, security, and broken-link scans' },
      { value: '0', label: 'Unplanned Downtime', desc: 'Staged sandbox environments for all updates and deploys' },
    ],
    servicesList: [
      {
        title: 'Website Updates & Maintenance',
        desc: 'Routine updates to CMS cores, frameworks, libraries, and security patches tested on staging before deployment.',
        tag: 'Core Operations',
      },
      {
        title: 'Bug Fixing & Troubleshooting',
        desc: 'Swift diagnostic resolution for layout glitches, broken forms, API disconnects, and mobile rendering errors.',
        tag: 'Rapid Response',
      },
      {
        title: 'Performance Optimization',
        desc: 'Image compression, cache configuration, code minification, and database index cleanup to maintain high speeds.',
        tag: 'Speed Tuning',
      },
      {
        title: 'Content Updates',
        desc: 'Publishing new case studies, blog posts, team bios, pricing adjustments, and banners with pixel-perfect care.',
        tag: 'Editorial Support',
      },
      {
        title: 'UI/UX Improvements',
        desc: 'Iterative micro-improvements to menus, checkout funnels, mobile navigation, and interactive component states.',
        tag: 'Continuous Polish',
      },
      {
        title: 'Website Backup & Recovery',
        desc: 'Automated daily encrypted offsite backups with instant one-click disaster rollback protocols.',
        tag: 'Data Safety',
      },
      {
        title: 'Technical Support',
        desc: 'Direct Slack, email, or video call access to senior frontend and backend engineers who built your platform.',
        tag: 'Dedicated Team',
      },
      {
        title: 'Continuous Monitoring',
        desc: '24/7 synthetic browser pings, SSL validity checks, and automated domain DNS record drift monitoring.',
        tag: 'Proactive Telemetry',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Understand',
        desc: 'We perform a full architectural discovery of your codebase, dependencies, server environment, and existing pain points.',
      },
      {
        step: '02',
        title: 'Monitor',
        desc: 'We install non-intrusive synthetic monitors to track page speed, uptime, error logs, and user journey bottlenecks.',
      },
      {
        step: '03',
        title: 'Maintain',
        desc: 'We execute systematic weekly maintenance cycles, security patches, and automated regression tests on staging branches.',
      },
      {
        step: '04',
        title: 'Improve',
        desc: 'We continuously deliver UX enhancements, conversion tweaks, and performance gains to keep your website ahead of competitors.',
      },
    ],
    benefits: [
      {
        title: 'Superior Reliability',
        desc: 'Proactive prevention catches issues before customers or stakeholders ever notice them.',
      },
      {
        title: 'Faster Core Web Vitals',
        desc: 'Continuous asset and database tuning guarantees fast loading across mobile and desktop devices.',
      },
      {
        title: 'Zero Technical Overhead',
        desc: 'Free your internal team from managing hosting, updates, and maintenance tickets.',
      },
      {
        title: 'Compounding Investment',
        desc: 'Regular incremental improvements preserve and grow the long-term enterprise value of your digital platform.',
      },
    ],
    faqs: [
      {
        question: 'What types of websites do you manage?',
        answer:
          'We manage modern web applications built on Next.js, React, Node.js, Headless CMS architectures, WordPress/WooCommerce, Shopify Plus, and custom full-stack solutions.',
      },
      {
        question: 'How do you handle updates without breaking the live website?',
        answer:
          'We operate on a strict staging-first pipeline. All changes are tested on an isolated preview environment with automated regression checks before being deployed to production with zero downtime.',
      },
      {
        question: 'How quickly does your team respond to critical emergencies?',
        answer:
          'Critical severity issues (such as payment gateway outages or total site downtime) receive immediate triage with a guaranteed response time of under 2 hours, 24/7.',
      },
      {
        question: 'Can you work with our existing hosting provider?',
        answer:
          'Yes. We can manage websites hosted on AWS, Vercel, Cloudflare, DigitalOcean, Google Cloud, or your existing private servers.',
      },
    ],
  },

  'hosting-security': {
    id: 'hosting-security',
    slug: 'hosting-security',
    route: '/support/hosting-security',
    aliases: ['hosting', 'security', 'hosting-security'],
    number: '02',
    name: 'Hosting & Security',
    headline: 'Built for Performance.',
    headlineHighlight: 'Protected by Design.',
    description:
      'Reliable hosting and proactive security solutions designed to keep your website fast, available, and protected around the clock.',
    primaryCTA: {
      text: 'Secure Your Website',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Solutions',
      href: '#solutions',
    },
    overview: {
      title: 'Infrastructure that scales under surge traffic and defends against modern threats.',
      description:
        'A slow or compromised website destroys customer confidence in seconds. Modern web infrastructure requires a defense-in-depth posture: global edge distribution, automated SSL provisioning, real-time DDoS mitigation, and daily encrypted recovery snapshots.',
      points: [
        'Global edge network with sub-50ms Time to First Byte (TTFB)',
        'Automated TLS/SSL encryption with automated renewal pipelines',
        'Proactive Web Application Firewall (WAF) blocking malicious exploits',
        'Automated multi-region database failover and immutable snapshots',
      ],
    },
    metrics: [
      { value: '99.99%', label: 'Target Uptime SLA', desc: 'Fault-tolerant distributed edge topology' },
      { value: '<50ms', label: 'Global Edge TTFB', desc: 'Lightning-fast server response across edge nodes' },
      { value: '256-Bit', label: 'Encrypted Backups', desc: 'Automated daily snapshots stored offsite' },
      { value: '24/7', label: 'Threat Telemetry', desc: 'Real-time automated intrusion detection' },
    ],
    servicesList: [
      {
        title: 'Website Hosting Management',
        desc: 'Fully managed cloud infrastructure tailored for high-concurrency web applications, APIs, and eCommerce.',
        tag: 'Cloud Infrastructure',
      },
      {
        title: 'Server Configuration & Tuning',
        desc: 'Custom HTTP/3, Brotli compression, memory caching, and worker thread optimization for peak speed.',
        tag: 'Server Engineering',
      },
      {
        title: 'Domain & DNS Management',
        desc: 'Anycast DNS routing with sub-second propagation, CAA records, SPF/DKIM validation, and DNSSEC protection.',
        tag: 'Network Core',
      },
      {
        title: 'SSL Certificate Management',
        desc: 'Automated wildcard and custom TLS certificates with zero-expiration monitoring and HSTS enforcement.',
        tag: 'Encryption',
      },
      {
        title: 'Website Performance & Uptime',
        desc: 'Elastic autoscaling handles viral traffic spikes without manual intervention or server crashes.',
        tag: 'High Availability',
      },
      {
        title: 'Backup Management & Recovery',
        desc: 'Automated daily snapshots stored across multiple geographic regions with point-in-time recovery capabilities.',
        tag: 'Disaster Recovery',
      },
      {
        title: 'Hosting Migration Assistance',
        desc: 'Seamless zero-downtime migration from slow shared hosting to modern high-performance cloud environments.',
        tag: 'Cloud Migration',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Infrastructure Setup',
        desc: 'We configure hardened cloud compute, secure VPC networks, object storage buckets, and edge routing.',
      },
      {
        step: '02',
        title: 'Security Configuration',
        desc: 'We implement firewall rules, rate limiting, bot protection, and strict authentication controls.',
      },
      {
        step: '03',
        title: 'Continuous Monitoring',
        desc: 'Automated sensors scan for anomalous traffic patterns, uptime fluctuations, and resource bottlenecks.',
      },
      {
        step: '04',
        title: 'Maintenance & Recovery',
        desc: 'Regular OS updates, security vulnerability patching, and scheduled dry-run disaster recovery drills.',
      },
    ],
    benefits: [
      {
        title: 'Enterprise Availability',
        desc: 'Eliminate downtime and maintain seamless customer access during high-volume sales campaigns.',
      },
      {
        title: 'Bulletproof Data Protection',
        desc: 'Safeguard customer information and proprietary assets with enterprise-grade encryption standards.',
      },
      {
        title: 'Global Edge Speed',
        desc: 'Deliver cached static and streaming content instantly to users across every continent.',
      },
      {
        title: 'Frictionless Compliance',
        desc: 'Ensure compliance with modern privacy mandates, browser security requirements, and search engine standards.',
      },
    ],
    faqs: [
      {
        question: 'What hosting solution is right for my website?',
        answer:
          'We evaluate your expected traffic, dynamic database requirements, geographic audience, and tech stack to recommend the most cost-effective and scalable setup (e.g., Vercel, AWS ECS, Cloudflare Workers, or dedicated clusters).',
      },
      {
        question: 'Can you manage an existing hosting setup?',
        answer:
          'Yes. We regularly assume management of existing cloud environments on AWS, Google Cloud, DigitalOcean, or private VPS setups, auditing and hardening security upon onboarding.',
      },
      {
        question: 'Why does my website need an SSL certificate?',
        answer:
          'SSL encrypts communication between the visitor and your server, protecting sensitive data. Modern browsers flag unencrypted sites as insecure, and search engines penalize sites without HTTPS.',
      },
      {
        question: 'How frequently should website backups be performed?',
        answer:
          'We recommend daily automated backups for standard websites, and hourly or real-time transactional backups for eCommerce and dynamic SaaS platforms.',
      },
      {
        question: 'Can you help migrate our existing website with zero downtime?',
        answer:
          'Yes. We stage the full application on the target infrastructure, verify all functionality, sync databases, and execute DNS cutover with TTL reduction to guarantee zero downtime.',
      },
    ],
  },

  'analytics-reporting': {
    id: 'analytics-reporting',
    slug: 'analytics-reporting',
    route: '/support/analytics-reporting',
    aliases: ['analytics', 'reporting', 'analytics-reporting'],
    number: '03',
    name: 'Analytics & Reporting',
    headline: 'See What Matters.',
    headlineHighlight: 'Understand What Works.',
    description:
      'Transform website and business performance data into meaningful insights that help you make smarter, faster decisions.',
    primaryCTA: {
      text: 'Discover Your Insights',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Our Analytics Approach',
      href: '#process',
    },
    overview: {
      title: 'Stop drowning in data. Start making clear, revenue-focused decisions.',
      description:
        'Most organizations track vanity metrics—page views and clicks that fail to explain why users convert or leave. We implement clean, privacy-compliant telemetry architectures that measure the complete customer journey, identify conversion drop-offs, and generate actionable executive reports.',
      points: [
        'Server-side Google Tag Manager and GA4 setup eliminating cookie blocking',
        'Custom funnel and cohort analysis revealing exact drop-off points',
        'Interactive Looker Studio and Metabase executive reporting dashboards',
        'Privacy-compliant tracking adhering to GDPR, CCPA, and PECR regulations',
      ],
    },
    metrics: [
      { value: '100%', label: 'Clean Event Tracking', desc: 'Strict server-side validation with zero duplicated hits' },
      { value: '3.2x', label: 'Funnel Clarity', desc: 'Clear visibility from first touchpoint to closed deal' },
      { value: '0%', label: 'Vanity Metrics', desc: 'Focus strictly on commercial conversion data' },
      { value: 'Monthly', label: 'Executive Briefs', desc: 'Actionable summaries with strategic recommendations' },
    ],
    servicesList: [
      {
        title: 'Website Traffic Analysis',
        desc: 'Unpack visitor volumes, session quality, geographical distribution, and device preferences with precision.',
        tag: 'Traffic Telemetry',
      },
      {
        title: 'User Behavior & Journey Mapping',
        desc: 'Scroll heatmaps, session replays, and navigation flow analysis to identify where users hesitate.',
        tag: 'Behavioral Insights',
      },
      {
        title: 'Conversion Funnel Tracking',
        desc: 'Step-by-step funnel measurement from product views and form interactions to finalized checkout orders.',
        tag: 'Revenue Tracking',
      },
      {
        title: 'Traffic Source Attribution',
        desc: 'Determine which channels (organic search, email, referral, or paid) drive the highest quality leads.',
        tag: 'Attribution Modeling',
      },
      {
        title: 'Engagement & Retention Metrics',
        desc: 'Measure time-on-page, return frequency, content engagement, and churn signals over time.',
        tag: 'Audience Health',
      },
      {
        title: 'Landing Page Performance',
        desc: 'A/B testing telemetry and bounce rate audits to maximize conversion rates across top landing pages.',
        tag: 'CRO Intelligence',
      },
      {
        title: 'SEO Performance Insights',
        desc: 'Connect search impressions and keyword click data with downstream on-site behavior.',
        tag: 'Search Visibility',
      },
      {
        title: 'Custom Executive Reporting',
        desc: 'Tailored automated dashboards delivered weekly or monthly with concise human-written executive summaries.',
        tag: 'Executive Dashboards',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Data Collection',
        desc: 'We configure server-side tags, event triggers, and privacy controls to capture accurate behavioral telemetry.',
      },
      {
        step: '02',
        title: 'Data Analysis',
        desc: 'We clean raw event streams, eliminate bot traffic, and segment user cohorts based on commercial intent.',
      },
      {
        step: '03',
        title: 'Insight Generation',
        desc: 'We identify friction points, conversion leaks, and high-value opportunities within your customer journey.',
      },
      {
        step: '04',
        title: 'Reporting & Action',
        desc: 'We deliver clear visual dashboards and prioritized recommendations for your engineering and marketing teams.',
      },
    ],
    benefits: [
      {
        title: 'Objective Decision-Making',
        desc: 'Replace guesswork and opinions with verified user telemetry and measurable conversion data.',
      },
      {
        title: 'Higher Conversion Rates',
        desc: 'Identify and fix specific UX bottlenecks in your sign-up, inquiry, or checkout funnels.',
      },
      {
        title: 'Optimized Marketing ROI',
        desc: 'Reallocate budget towards the traffic sources and campaigns that actually produce paying customers.',
      },
      {
        title: 'Executive Time Savings',
        desc: 'Receive consolidated, easy-to-digest dashboards rather than spending hours sifting through raw data tables.',
      },
    ],
    faqs: [
      {
        question: 'What analytics platforms do you work with?',
        answer:
          'We configure and manage Google Analytics 4 (GA4), Google Tag Manager (client and server-side), PostHog, Mixpanel, Looker Studio, Plausible, and custom warehouse connections.',
      },
      {
        question: 'Can you configure custom event tracking for our specific business goals?',
        answer:
          'Yes. We define and implement custom events for button clicks, video plays, PDF downloads, multi-step form progress, eCommerce transactions, and custom micro-conversions.',
      },
      {
        question: 'How do you address modern ad-blockers and privacy regulations?',
        answer:
          'We implement server-side tracking (via Google Tag Manager on your own domain) and privacy-compliant consent modes, ensuring accurate first-party data while fully respecting user privacy choices.',
      },
      {
        question: 'How often are analytics reports generated?',
        answer:
          'You receive real-time access to live interactive dashboards, supplemented with monthly or quarterly strategic review reports featuring written analysis and recommendations from our team.',
      },
    ],
  },

  'consultation': {
    id: 'consultation',
    slug: 'consultation',
    route: '/support/consultation',
    aliases: ['consultation', 'advisory', 'digital-consultation'],
    number: '04',
    name: 'Consultation',
    headline: 'Big Ideas Start With',
    headlineHighlight: 'Better Conversations.',
    description:
      'Get expert guidance, practical recommendations, and a clear direction for your next digital project before committing capital.',
    primaryCTA: {
      text: 'Book a Consultation',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore How We Help',
      href: '#services',
    },
    overview: {
      title: 'Objective, senior-level guidance to de-risk your digital roadmap.',
      description:
        'Building the wrong product or choosing the wrong tech stack is the most expensive mistake in digital business. Our consultation services give you direct access to senior architects, UX strategists, and creative directors who examine your objectives, challenge assumptions, and chart a realistic, high-ROI course forward.',
      points: [
        'Vendor-neutral technology evaluation and architectural scoping',
        'Practical roadmaps prioritizing high-impact MVP milestones',
        'Direct 1-on-1 collaboration with senior practitioners, not account reps',
        'Actionable written summary documentation and architecture diagrams',
      ],
    },
    metrics: [
      { value: '1-on-1', label: 'Senior Guidance', desc: 'Direct access to experienced digital directors' },
      { value: '100%', label: 'Vendor Neutral', desc: 'Unbiased recommendations tailored to your goals' },
      { value: 'Zero', label: 'Sales Pressure', desc: 'Objective technical and strategic evaluation' },
      { value: 'Actionable', label: 'Deliverables', desc: 'Clear roadmaps and architecture blueprints' },
    ],
    servicesList: [
      {
        title: 'Website Strategy',
        desc: 'Define digital goals, target audience personas, messaging hierarchy, and user journeys that drive measurable commercial outcomes.',
        tag: 'Digital Strategy',
      },
      {
        title: 'Technology Selection',
        desc: 'Evaluate frontend frameworks, CMS options, hosting platforms, and database architectures to avoid costly tech debt.',
        tag: 'Tech Advisory',
      },
      {
        title: 'Digital Transformation',
        desc: 'Modernize legacy business workflows, eliminate manual processes, and transition to cloud-first digital ecosystems.',
        tag: 'Transformation',
      },
      {
        title: 'Website Improvement Planning',
        desc: 'Comprehensive UX, performance, and accessibility teardowns of your existing site with prioritized action plans.',
        tag: 'Site Audits',
      },
      {
        title: 'Performance & Optimization Advice',
        desc: 'Diagnostic consultations tackling slow loading speeds, high server costs, and technical infrastructure bottlenecks.',
        tag: 'Optimization',
      },
      {
        title: 'Project Planning & Scoping',
        desc: 'Scope feature requirements, technical milestones, realistic timelines, and resource budgets before writing code.',
        tag: 'Scoping & Budgeting',
      },
      {
        title: 'Technical Problem Solving',
        desc: 'Unblock complex engineering hurdles, database concurrency issues, and third-party API integration roadblocks.',
        tag: 'Engineering Advisory',
      },
      {
        title: 'Growth & Digital Scaling',
        desc: 'Plan for internationalization, multi-currency commerce, headless architectures, and enterprise team workflows.',
        tag: 'Scaling Strategy',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discover',
        desc: 'We listen carefully to understand your business model, core objectives, current tech stack, and pressing bottlenecks.',
      },
      {
        step: '02',
        title: 'Analyze',
        desc: 'We evaluate market context, architectural feasibility, potential risks, and high-impact leverage points.',
      },
      {
        step: '03',
        title: 'Recommend',
        desc: 'We present practical, vendor-neutral recommendations with clear pros, cons, cost projections, and architectural alternatives.',
      },
      {
        step: '04',
        title: 'Plan',
        desc: 'We deliver an actionable roadmap with phased milestones, required resources, and immediate next steps.',
      },
    ],
    benefits: [
      {
        title: 'Avoid Costly Tech Mistakes',
        desc: 'Selecting the wrong framework or architecture can cost tens of thousands in rework. We guide you toward the right foundation early.',
      },
      {
        title: 'Fast-Track Execution',
        desc: 'Move from ambiguity to an unambiguous execution plan backed by senior digital experience.',
      },
      {
        title: 'Unbiased Perspective',
        desc: 'Get an objective outside evaluation that challenges assumptions and identifies overlooked opportunities.',
      },
      {
        title: 'Immediate Practical Clarity',
        desc: 'Walk away with clear written documentation and architectural diagrams your team can act on immediately.',
      },
    ],
    faqs: [
      {
        question: 'How do I book a consultation?',
        answer:
          'Simply submit an inquiry through our contact form. We will follow up to understand your primary objectives and schedule a focused strategy session.',
      },
      {
        question: 'What should we prepare before our consultation?',
        answer:
          'Having a brief outline of your business goals, current challenges, target timeline, and links to existing websites or documentation helps us make our discussion immediately productive.',
      },
      {
        question: 'Can you consult on an existing website or application?',
        answer:
          'Yes. A significant portion of our consultations involve reviewing existing codebases, performance issues, or planned redesigns of active products.',
      },
      {
        question: 'What happens after the consultation session?',
        answer:
          'We deliver a written summary detailing our findings, architectural diagrams, and recommended next steps. You are free to execute this plan with your internal team or engage RapSora to build it.',
      },
    ],
  },
};

export function getSupportService(slugOrId: string): SupportServiceConfig | null {
  const normalized = decodeURIComponent(slugOrId).toLowerCase().trim().replace(/\s+/g, '-');

  if (SUPPORT_SERVICES[normalized]) {
    return SUPPORT_SERVICES[normalized];
  }

  for (const service of Object.values(SUPPORT_SERVICES)) {
    if (
      service.slug === normalized ||
      service.id === normalized ||
      service.aliases.some((a) => a.toLowerCase().replace(/\s+/g, '-') === normalized)
    ) {
      return service;
    }
  }

  return null;
}

