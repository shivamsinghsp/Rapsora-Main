export interface MarketingCardItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  alt: string;
  techTags: string[];
}

export interface MarketingMetric {
  value: string;
  label: string;
  desc: string;
}

export interface MarketingPillar {
  number: string;
  tag: string;
  title: string;
  iconName: string;
  desc: string;
  specs: string[];
}

export interface MarketingProcessStep {
  step: string;
  title: string;
  desc: string;
  deliverables?: string[];
}

export interface MarketingFaqItem {
  question: string;
  answer: string;
}

export interface MarketingToolItem {
  name: string;
  category: string;
  icon?: string;
  description: string;
}

export interface MarketingServiceConfig {
  id: string;
  slug: string;
  route: string;
  aliases: string[];
  number: string;
  name: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  overview: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    highlights: string[];
  };
  metrics: MarketingMetric[];
  pillars: MarketingPillar[];
  capabilities: {
    title: string;
    desc: string;
    tags: string[];
  }[];
  process: MarketingProcessStep[];
  tools: MarketingToolItem[];
  benefits: {
    title: string;
    desc: string;
    stat?: string;
  }[];
  faqs: MarketingFaqItem[];
}

export const MARKETING_SERVICES: Record<string, MarketingServiceConfig> = {
  'seo': {
    id: 'seo',
    slug: 'seo',
    route: '/marketing/seo-organic-growth',
    aliases: ['seo', 'seo-organic-growth', 'search-engine-optimization', 'organic-growth'],
    number: '01',
    name: 'SEO & Organic Growth',
    eyebrow: 'Search Engine Optimization',
    title: 'Command High-Intent',
    titleHighlight: 'Search Traffic.',
    description:
      'We engineer search dominance through technical precision, semantic content clustering, and authoritative backlink profiles. No black-hat shortcuts—only sustainable, compounding organic pipeline.',
    heroImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Search engine optimization analytics dashboard displaying organic traffic exponential growth curves',
    primaryCTA: {
      text: 'Request Free SEO Audit',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore SEO Capabilities',
      href: '#capabilities',
    },
    overview: {
      heading: 'Organic search is not an expense—it is a compounding enterprise asset.',
      subheading: 'Turn search engines into your most profitable customer acquisition channel.',
      paragraphs: [
        'Over 68% of all trackable online experiences begin with a search engine. When buyers search for solutions in your industry, algorithmic positioning determines whether your brand wins the pipeline or hands it to a competitor.',
        'At RapSora, we take a software engineer’s and data scientist’s approach to SEO. We eliminate technical crawl friction, optimize Core Web Vitals to sub-second thresholds, architect topical authority clusters, and build digital PR assets that earn Tier-1 editorial citations.',
      ],
      highlights: [
        'Zero algorithmic penalty risk (100% White-Hat)',
        'Technical audits covering 140+ crawlability checkpoints',
        'Entity-based semantic search optimization for Google SGE & AI Overviews',
        'Transparent multi-touch revenue attribution modeling',
      ],
    },
    metrics: [
      { value: '312%', label: 'Avg. Organic Traffic Lift', desc: 'Compound annual growth across enterprise client portfolios' },
      { value: '#1', label: 'Top 3 Keyword Rankings', desc: 'Dominating high-commercial intent transactional terms' },
      { value: '<0.8s', label: 'LCP Core Web Vitals', desc: 'Sub-second page speeds favored by Google mobile-first index' },
      { value: '4.6x', label: 'Organic Pipeline ROI', desc: 'Measured customer acquisition cost reduction vs. paid ads' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'TECHNICAL EXCELLENCE',
        title: 'Deep Architecture & Crawlability Audits',
        iconName: 'Terminal',
        desc: 'Eliminating render-blocking assets, orphaned URLs, redirect chains, and indexing bloat. We optimize XML sitemaps, structured schema data, and canonical hierarchies for zero crawl budget waste.',
        specs: ['Log File Analysis', 'Schema.org JSON-LD', 'Core Web Vitals Pass', 'JavaScript Rendering Optimization'],
      },
      {
        number: '02',
        tag: 'TOPICAL DOMINANCE',
        title: 'Semantic Content Architecture & Clustering',
        iconName: 'Layers',
        desc: 'Mapping search intent across informational, navigational, and transactional queries. We construct high-authority pillar pages and cluster spoke topics that signal comprehensive domain mastery to Google.',
        specs: ['Topical Authority Maps', 'Search Intent Modeling', 'Entities & Knowledge Graph', 'Content Gap Elimination'],
      },
      {
        number: '03',
        tag: 'DIGITAL PR & AUTHORITY',
        title: 'Editorial Link Equity & Outreach',
        iconName: 'TrendingUp',
        desc: 'Securing top-tier editorial backlinks through original proprietary industry research, data studies, expert commentary, and unlinked brand mention reclamations.',
        specs: ['Proprietary Data Reports', 'Journalist Pitching', 'Unlinked Mention Fixes', 'Competitor Link Reclamation'],
      },
      {
        number: '04',
        tag: 'REVENUE TELEMETRY',
        title: 'Closed-Loop Conversion Analytics',
        iconName: 'BarChart',
        desc: 'Real-time telemetry tracking organic keyword rank velocity, assisted conversions, and pipeline value directly integrated into your CRM and data warehouse.',
        specs: ['Google Search Console API', 'Looker Studio Dashboards', 'Server-Side GTM', 'Revenue Attribution'],
      },
    ],
    capabilities: [
      {
        title: 'Technical SEO Infrastructure',
        desc: 'Complete audit and remediation of server response codes, canonical tags, hreflang tags for international sites, robots.txt, and headless Next.js SSR crawlability.',
        tags: ['SSR Optimization', 'Crawl Budget', 'Schema Markup', 'International Hreflang'],
      },
      {
        title: 'On-Page Optimization & Intent Alignment',
        desc: 'Fine-tuning title tags, semantic header hierarchy, internal linking distribution, image alt semantics, and contextual anchor texts for optimal rank signals.',
        tags: ['Title Optimization', 'Internal PageRank', 'Entity Modeling', 'Anchor Distribution'],
      },
      {
        title: 'Strategic Keyword & Competitor Intelligence',
        desc: 'Uncovering low-competition, high-conversion commercial queries your competitors overlooked. Reverse-engineering competitor backlink profiles and content velocity.',
        tags: ['Competitor Reverse-Engineering', 'Search Volume Modeling', 'Long-Tail Capture', 'SERP Feature Steals'],
      },
      {
        title: 'Local & Regional SEO Domination',
        desc: 'Google Business Profile optimization, local citation normalization across 80+ directories, geotargeted landing pages, and automated review management pipelines.',
        tags: ['Google Business Profile', 'NAP Consistency', 'Local Citations', 'Geo-Targeted Pages'],
      },
      {
        title: 'AI Search & Google SGE Readiness',
        desc: 'Formatting structured content, tabular datasets, and definitive quotable answers to secure prime inclusion in AI Overviews and conversational answer engines.',
        tags: ['AI Overviews (SGE)', 'Direct Answer Feeds', 'Perplexity Citation', 'Information Gain'],
      },
      {
        title: 'Penalty Recovery & Toxic Link Audits',
        desc: 'Thorough forensic analysis of algorithmic or manual Google penalties. Algorithmic disavow files, unlinking outreach, and thin content pruning.',
        tags: ['Disavow Engineering', 'Manual Action Removal', 'Thin Content Pruning', 'Algorithmic Recovery'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Forensic Audit & Baseline Telemetry',
        desc: 'We crawl every URL, analyze server logs, evaluate Core Web Vitals, and map current ranking positions against commercial revenue goals.',
        deliverables: ['140-Point Technical Audit Report', 'Competitor Keyword Matrix', 'Index Health Scorecard'],
      },
      {
        step: '02',
        title: 'Strategic Roadmap & Semantic Architecture',
        desc: 'Developing an intentional 6-month growth plan prioritizing quick-win technical fixes followed by systematic topical cluster builds.',
        deliverables: ['Topical Cluster Blueprint', 'Technical Sprint Backlog', 'Schema Implementation Plan'],
      },
      {
        step: '03',
        title: 'Technical Execution & Content Production',
        desc: 'Our engineers implement technical code fixes while our editorial strategists deploy search-optimized, intent-matched long-form content.',
        deliverables: ['Production Code Pull Requests', 'Optimized Content Releases', 'Internal Link Redirection'],
      },
      {
        step: '04',
        title: 'Digital PR & Authority Amplification',
        desc: 'Launching targeted outreach campaigns to journalists, industry publishers, and authoritative domains to build permanent domain authority.',
        deliverables: ['High-DR Editorial Links', 'Syndicated Press Citations', 'Brand Mentions Report'],
      },
      {
        step: '05',
        title: 'Continuous Telemetry & Compound Growth',
        desc: 'Monitoring keyword fluctuations, algorithmic shifts, and conversion metrics weekly, feeding data back into iterative content upgrades.',
        deliverables: ['Live Looker Studio Dashboard', 'Monthly Executive Review', 'Continuous SERP Tracking'],
      },
    ],
    tools: [
      { name: 'Google Search Console', category: 'Official Telemetry', description: 'Real-time indexation, impression clicks, and search query tracking directly from Google.' },
      { name: 'Ahrefs Enterprise', category: 'Competitive Intelligence', description: 'Comprehensive backlink verification, keyword difficulty modeling, and SERP volatility.' },
      { name: 'Semrush', category: 'Position Tracking', description: 'Daily keyword ranking tracking and competitor advertising intelligence.' },
      { name: 'Screaming Frog SEO Spider', category: 'Technical Crawling', description: 'Deep technical audits, JavaScript rendering emulation, and redirect chain detection.' },
      { name: 'PageSpeed Insights & Lighthouse', category: 'Performance', description: 'Automated Core Web Vitals audits ensuring sub-second Largest Contentful Paint.' },
      { name: 'Schema.org & Google Rich Results', category: 'Structured Data', description: 'Validated JSON-LD microdata enabling search rich snippets, ratings, and FAQs.' },
    ],
    benefits: [
      { title: 'Predictable, Compounding Customer Acquisition', desc: 'Unlike paid ads where traffic stops the second ad spend pauses, organic search traffic builds lasting equity.', stat: '3.4x ROI' },
      { title: 'Higher Commercial Trust & Brand Authority', desc: 'Over 70% of B2B decision makers bypass sponsored ads in favor of the top three organic results.', stat: '70%+ Preference' },
      { title: 'Substantially Lower Blended CAC', desc: 'By supplementing or replacing high-cost PPC bids with organic rankings, your overall blended acquisition costs drop.', stat: '-45% CAC' },
      { title: 'Shield Against Competitor Poaching', desc: 'Owning the prominent SERP real estate for your branded and core industry queries prevents competitors from siphoning leads.', stat: '100% Brand Defense' },
    ],
    faqs: [
      {
        question: 'How long before we see measurable organic growth?',
        answer: 'While technical quick fixes often yield ranking jumps within 3 to 6 weeks, significant organic growth typically compounds between months 3 and 6 as search engines crawl newly built topical clusters and index high-authority backlinks.',
      },
      {
        question: 'Do you guarantee a #1 ranking on Google?',
        answer: 'No reputable, ethical agency guarantees a specific #1 rank on Google because Google’s algorithms are proprietary and evolve continuously. What we guarantee is a rigorous, proven engineering process, complete transparency, and measurable improvements in organic impressions, traffic, and pipeline.',
      },
      {
        question: 'How do you approach Google AI Overviews (SGE)?',
        answer: 'We optimize for information gain, structured schema markup, concise direct-answer paragraphs, and verified expert author credentials (E-E-A-T), positioning your content to be cited as the authoritative source in AI-generated answers.',
      },
      {
        question: 'What is the difference between Technical SEO and On-Page SEO?',
        answer: 'Technical SEO focuses on how search engine bots crawl, render, and index your website (server speeds, JavaScript rendering, sitemaps, canonical tags). On-Page SEO focuses on content quality, keyword intent alignment, internal linking, and meta tags.',
      },
    ],
  },

  'content-strategy': {
    id: 'content-strategy',
    slug: 'content-strategy',
    route: '/marketing/content-strategy',
    aliases: ['content-strategy', 'content-marketing', 'editorial-strategy', 'copywriting'],
    number: '02',
    name: 'Content Strategy',
    eyebrow: 'Editorial Strategy',
    title: 'Content That Commands',
    titleHighlight: 'Attention & Closes Deals.',
    description:
      'We craft authoritative editorial strategies, persuasive website copy, and conversion-engineered content ecosystems that establish thought leadership and guide buyers down the funnel.',
    heroImage:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Editorial desk showing strategic content planning calendars, typography layouts, and creative copywriting drafts',
    primaryCTA: {
      text: 'Build Your Content Roadmap',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'View Editorial Framework',
      href: '#workflow',
    },
    overview: {
      heading: 'Words that define industries and turn indifferent readers into brand evangelists.',
      subheading: 'Stop publishing commodity fluff. Publish definitive assets that educate and convert.',
      paragraphs: [
        'The internet is drowned in generic, AI-spun articles that provide zero novel insights. High-value B2B buyers and discerning consumers immediately recognize generic content and bounce.',
        'At RapSora, our content strategy is rooted in journalistic rigor, domain expertise, and deep buyer psychology. We design content ecosystems that answer high-friction buyer questions, position your brand as the unquestioned authority, and create frictionless paths to conversion.',
      ],
      highlights: [
        'Zero fluff policy—every piece provides unique original insights',
        'Customer journey alignment from awareness to bottom-funnel evaluation',
        'Multi-channel repurposing engine (one core asset → 10 micro-assets)',
        'Measurable conversion tracking and content attribution',
      ],
    },
    metrics: [
      { value: '4.8x', label: 'Average Time-on-Page', desc: 'Deep engagement driven by compelling narrative architecture' },
      { value: '62%', label: 'Lead Velocity Increase', desc: 'Accelerated sales cycles through objection-handling content' },
      { value: '10x', label: 'Asset Repurposing Multiplier', desc: 'Each long-form pillar feeds social, newsletters, and sales decks' },
      { value: '98%', label: 'Editorial Acceptance Rate', desc: 'High-standard research assets cited across industry publications' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'NARRATIVE ARCHITECTURE',
        title: 'Brand Positioning & Core Messaging Guides',
        iconName: 'Sparkles',
        desc: 'Defining your unique value proposition, tone of voice, vocabulary rules, and brand perspective that differentiates your company from every lookalike competitor.',
        specs: ['Voice & Tone Playbook', 'Value Proposition Matrix', 'Customer Persona Dossiers', 'Objection-Handling Framework'],
      },
      {
        number: '02',
        tag: 'EDITORIAL EXCELLENCE',
        title: 'Original Research & Thought Leadership',
        iconName: 'FileText',
        desc: 'Writing definitive industry whitepapers, comprehensive technical guides, benchmark reports, and executive opinion essays that establish industry benchmarks.',
        specs: ['Proprietary Data Surveys', 'Technical Documentation', 'Executive Ghostwriting', 'Case Study Deep-Dives'],
      },
      {
        number: '03',
        tag: 'CONVERSION COPYWRITING',
        title: 'High-Impact Product & Landing Page Copy',
        iconName: 'Zap',
        desc: 'Crafting persuasive headlines, benefits hierarchies, social proof structures, and CTA copy that eliminate purchase anxiety and drive measurable signups.',
        specs: ['Hero Section Messaging', 'Pricing Page Copy', 'Feature-Benefit Translations', 'Micro-Copy & Micro-Interactions'],
      },
      {
        number: '04',
        tag: 'DISTRIBUTION ENGINE',
        title: 'Omnichannel Content Distribution Engine',
        iconName: 'Share2',
        desc: 'Transforming every core long-form asset into newsletter deep-dives, LinkedIn executive posts, infographic summaries, and video scripts for maximum reach.',
        specs: ['Multi-Channel Matrix', 'Social Post Transmutation', 'Newsletter Syndication', 'Email Sequence Integration'],
      },
    ],
    capabilities: [
      {
        title: 'Comprehensive Content Roadmaps & Calendars',
        desc: 'Data-driven editorial calendars mapped to seasonal buyer demand, product release cycles, and high-value search queries.',
        tags: ['Editorial Calendars', 'Keyword Intent Mapping', 'Production Workflows', 'SLA Delivery'],
      },
      {
        title: 'Conversion-Focused Website & Product Copy',
        desc: 'Landing page copy, homepage headlines, and product tour narratives engineered to reduce friction and lift conversion rates.',
        tags: ['Landing Page Copy', 'Value Messaging', 'Friction Elimination', 'A/B Test Copy'],
      },
      {
        title: 'Technical & In-Depth Industry Guides',
        desc: 'Exhaustive, 3,000+ word technical deep-dives that solve complex problems for developers, engineers, and executive decision-makers.',
        tags: ['Deep-Dive Guides', 'API Documentation', 'Developer Portals', 'Code Snippet Inclusion'],
      },
      {
        title: 'Customer Stories & Case Study Assets',
        desc: 'Compelling narrative case studies detailing client challenges, custom solutions, and verifiable ROI metrics that empower sales teams.',
        tags: ['Client Interviews', 'Data Verification', 'Sales Enablement', 'One-Pager PDFs'],
      },
      {
        title: 'Lead Magnet & Whitepaper Design',
        desc: 'High-value gated downloadable assets, interactive spreadsheets, and whitepapers that capture high-intent email leads.',
        tags: ['Gated Whitepapers', 'E-Books', 'Interactive Calculators', 'Templates'],
      },
      {
        title: 'Content Audits & Pruning Diagnostics',
        desc: 'Evaluating your existing content archive to identify underperforming pages, update decaying content, and consolidate duplicate cannibalization.',
        tags: ['Content Decay Fixes', 'Cannibalization Resolution', 'URL Consolidation', 'Refresh Sprints'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Persona & Voice Discovery',
        desc: 'We interview key stakeholders, analyze support tickets, and study client conversations to capture authentic brand tone and customer pain points.',
        deliverables: ['Tone of Voice Guidebook', 'Buyer Pain Matrix', 'Competitor Content Gap Audit'],
      },
      {
        step: '02',
        title: 'Topic Modeling & Production Roadmap',
        desc: 'Developing an intentional quarterly content calendar balancing high-intent search queries with groundbreaking thought leadership.',
        deliverables: ['90-Day Editorial Calendar', 'Content Briefs with Outlines', 'Distribution Channel Plan'],
      },
      {
        step: '03',
        title: 'Rigorous Writing & Subject Matter Reviews',
        desc: 'Our senior writers produce publication-ready drafts verified against factual citations, internal SME interviews, and style guides.',
        deliverables: ['First-Draft Iterations', 'SME Review Pass', 'SEO On-Page Optimization'],
      },
      {
        step: '04',
        title: 'Visual Asset Packaging & Layout',
        desc: 'Pairing copy with custom infographics, typography hierarchy, callout quotes, and diagrams to guarantee maximum readability.',
        deliverables: ['Custom Infographics', 'Social Preview Cards', 'CMS Publishing Ready'],
      },
      {
        step: '05',
        title: 'Amplification & Performance Tracking',
        desc: 'Deploying the asset across newsletters, social channels, and sales enablement libraries while tracking scroll depth and conversions.',
        deliverables: ['Social Snippets Pack', 'Scroll Depth Heatmap', 'Monthly Conversion Attribution'],
      },
    ],
    tools: [
      { name: 'Notion / Linear Editorial Hub', category: 'Project Management', description: 'Real-time collaborative production pipelines keeping writing, editing, and approvals on schedule.' },
      { name: 'Clearscope', category: 'Content Optimization', description: 'AI-assisted topical coverage scoring ensuring content matches searcher query expectations.' },
      { name: 'Grammarly Business & Hemingway', category: 'Readability', description: 'Strict readability and grammatical validation for clear, impactful prose.' },
      { name: 'Figma', category: 'Visual Design', description: 'Custom editorial layouts, charts, and header graphics tailored to brand guidelines.' },
      { name: 'Hotjar / Clarity', category: 'User Telemetry', description: 'Scroll depth tracking and reader engagement heatmaps validating content retention.' },
      { name: 'Google Analytics 4', category: 'Attribution', description: 'First-click and linear conversion attribution measuring real business pipeline impact.' },
    ],
    benefits: [
      { title: 'Shorten Enterprise Sales Cycles', desc: 'Pre-educate prospects with in-depth comparative content so they enter discovery calls already convinced.', stat: '35% Shorter Cycles' },
      { title: 'Establish Undisputed Authority', desc: 'Become the trusted industry benchmark that peers cite, trade publications invite, and buyers prefer.', stat: 'Top-of-Mind Position' },
      { title: 'Create Reusable Sales Enablement Assets', desc: 'Equip your sales development and account executives with content that answers every tough objection.', stat: '100% Sales Alignment' },
      { title: 'Sustainable Organic Discovery', desc: 'High-quality strategic content ranks longer, attracts organic backlinks naturally, and requires less maintenance.', stat: 'Permanent Value' },
    ],
    faqs: [
      {
        question: 'Do you use AI tools to write the content?',
        answer: 'We use AI strictly for research acceleration, outline brainstorming, and proofing. Every single word of your final copy is written, structured, and polished by seasoned human writers with deep industry understanding.',
      },
      {
        question: 'How do you ensure the copy sounds like our internal brand voice?',
        answer: 'We begin with an exhaustive brand voice workshop and audit of your existing materials. We develop a comprehensive Style Guide with do’s and don’ts, which every writer adheres to with editorial review checks.',
      },
      {
        question: 'What types of content formats do you deliver?',
        answer: 'We produce website landing page copy, long-form thought leadership articles, technical how-to guides, customer case studies, executive ghostwritten LinkedIn posts, newsletter editions, and gated whitepapers.',
      },
      {
        question: 'How do we measure the business success of content strategy?',
        answer: 'We track quantitative metrics including scroll depth, time-on-page, newsletter subscriber acquisition, organic keyword rankings, and most importantly, assisted pipeline conversions in your CRM.',
      },
    ],
  },

  'social-media': {
    id: 'social-media',
    slug: 'social-media',
    route: '/marketing/social-media',
    aliases: ['social-media', 'social-media-marketing', 'smm', 'social-growth'],
    number: '03',
    name: 'Social Media Marketing',
    eyebrow: 'Social Media Marketing',
    title: 'Transform Followers Into',
    titleHighlight: 'Passionate Brand Advocates.',
    description:
      'We architect high-engagement social media campaigns, visual storytelling, and active community management across LinkedIn, Instagram, X, and YouTube that drive quantifiable brand equity and inbound inquiries.',
    heroImage:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Social media management console displaying cross-platform audience engagement, impressions, and viral reach metrics',
    primaryCTA: {
      text: 'Scale Your Social Channels',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Platform Strategies',
      href: '#platforms',
    },
    overview: {
      heading: 'Social media is the modern digital storefront and culture hub for your brand.',
      subheading: 'Stop posting corporate static flyers. Start creating content people actually share.',
      paragraphs: [
        'Modern social algorithms heavily penalize broadcast-style advertising and reward genuine conversational engagement, native platform storytelling, and bold visual design.',
        'At RapSora, we turn corporate social profiles into vibrant media channels. We combine platform-native creative direction, executive personal branding, meme fluency, and active community cultivation to build loyal audiences that advocate for your products and services.',
      ],
      highlights: [
        'Tailored platform-specific creative direction (no lazy cross-posting)',
        'Executive ghostwriting for C-suite LinkedIn thought leadership',
        'Active community response management within 15-minute windows',
        'Data-driven hook testing and engagement rate optimization',
      ],
    },
    metrics: [
      { value: '5.2x', label: 'Average Engagement Rate Lift', desc: 'Outperforming industry benchmarks across LinkedIn and Instagram' },
      { value: '100k+', label: 'Organic Monthly Impressions', desc: 'Generated through viral algorithmic hooks and carousel content' },
      { value: '<15m', label: 'Community Response Latency', desc: 'Active human engagement with prospect comments and direct messages' },
      { value: '38%', label: 'Inbound Inquiries from Social', desc: 'Direct-message and bio link qualified customer conversations' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'PLATFORM STRATEGY',
        title: 'Native Channel Architecture & Playbooks',
        iconName: 'Compass',
        desc: 'Developing specialized content playbooks for LinkedIn, Instagram, X, and YouTube. Each channel receives content custom-built for its unique algorithm and user psychological state.',
        specs: ['LinkedIn Executive Carousels', 'Instagram Visual Aesthetic', 'X Conversational Threads', 'YouTube Shorts / Clips'],
      },
      {
        number: '02',
        tag: 'CREATIVE PRODUCTION',
        title: 'High-Impact Visual & Motion Assets',
        iconName: 'Palette',
        desc: 'Producing custom branded carousels, typographic motion clips, infographic carousels, and relatable memes that stop thumbs from scrolling in busy feeds.',
        specs: ['Figma Brand Templates', 'Motion Design Clips', 'Data Infographics', 'High-Res Photo Curation'],
      },
      {
        number: '03',
        tag: 'COMMUNITY & CONVERSATION',
        title: 'Proactive Community Management',
        iconName: 'MessageSquare',
        desc: 'Engaging prospects in comments, sparking meaningful conversations on key industry accounts, and routing high-intent direct messages into your sales funnel.',
        specs: ['Outbound Thought Leader Engagement', 'Comment Response Protocols', 'Direct Message Triage', 'Brand Sentiment Monitoring'],
      },
      {
        number: '04',
        tag: 'ANALYTICS & ITERATION',
        title: 'Algorithmic Telemetry & Attribution',
        iconName: 'BarChart2',
        desc: 'Analyzing post engagement velocity, follower demographic composition, share rates, and link clicks to constantly refine creative hooks and publishing schedules.',
        specs: ['Hook Retention Curves', 'Audience Demographics', 'Bio-Link Conversion Tracking', 'Monthly Strategy Reviews'],
      },
    ],
    capabilities: [
      {
        title: 'LinkedIn B2B Thought Leadership & Executive Branding',
        desc: 'Positioning your founders and executives as industry visionaries with ghostwritten commentary, document carousels, and milestone stories.',
        tags: ['Founder Branding', 'Document Carousels', 'Employee Advocacy', 'B2B Inbound'],
      },
      {
        title: 'Instagram Brand Identity & Aesthetic Curation',
        desc: 'Cohesive visual grid design, carousel education, interactive Stories polls, and behind-the-scenes culture content that humanizes your brand.',
        tags: ['Aesthetic Grid', 'Reels Motion', 'Interactive Stories', 'Highlight Vaults'],
      },
      {
        title: 'X (Twitter) & Threads Real-Time Commentary',
        desc: 'Rapid-fire industry reactions, educational breakdown threads, conversational polls, and community networking that builds viral momentum.',
        tags: ['Viral Threads', 'Real-Time Reactions', 'Community Replies', 'Spaces Hosting'],
      },
      {
        title: 'YouTube & Short-Form Video Repurposing',
        desc: 'Transforming podcast interviews, webinar recordings, and demos into punchy 60-second shorts with dynamic animated subtitles.',
        tags: ['Shorts / Reels', 'Animated Captions', 'Hook Optimization', 'B-Roll Editing'],
      },
      {
        title: 'Influencer & Partner Collab Management',
        desc: 'Identifying, vetting, and managing collaborative content partnerships with authentic industry creators whose audiences match your ideal client profile.',
        tags: ['Creator Outreach', 'Co-Branded Lives', 'Contract Management', 'Affiliate Tracking'],
      },
      {
        title: 'Social Crisis & Sentiment Protection',
        desc: '24/7 brand mention monitoring and pre-approved crisis response protocols that defuse negative sentiment and protect your hard-won reputation.',
        tags: ['Sentiment Telemetry', 'Crisis Escalation', 'Brand Mention Alarms', 'PR Defense'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Social Audit & Competitor Teardown',
        desc: 'We analyze your current channel performance, audience demographics, and top competitors’ viral posts to identify positioning white space.',
        deliverables: ['Competitive Benchmark Report', 'Channel Health Audit', 'Audience Profile Map'],
      },
      {
        step: '02',
        title: 'Creative Direction & Template Systems',
        desc: 'Building bespoke Figma design template systems, motion graphics intro stings, and typographic styles aligned with your brand guidelines.',
        deliverables: ['Social Brand Kit', 'Figma Template Library', 'Hook & Caption Formulas'],
      },
      {
        step: '03',
        title: 'Content Sprint & Monthly Approval Batches',
        desc: 'We produce and schedule 30-day content batches for your review with clear copy, visual previews, and optimal publication scheduling.',
        deliverables: ['Monthly Content Grid', 'Preview Staging Link', 'Hashtag / Tag Strategies'],
      },
      {
        step: '04',
        title: 'Live Publishing & Community Engagement',
        desc: 'Publishing during peak audience activity windows while actively managing comments, mentions, and proactive networking across peers.',
        deliverables: ['Active Comment Management', 'DM Inbound Routing', 'Outbound Networking'],
      },
      {
        step: '05',
        title: 'Data Telemetry & Strategic Optimization',
        desc: 'Reviewing top-performing formats, viral reach spikes, and inbound lead metrics to double down on winning formulas every month.',
        deliverables: ['Monthly Telemetry Dashboard', 'Creative Iteration Plan', 'Quarterly Strategy Pivot'],
      },
    ],
    tools: [
      { name: 'Sprout Social / Buffer', category: 'Publishing & Queue', description: 'Enterprise social scheduling, multi-account queue management, and team approval workflows.' },
      { name: 'Figma & Adobe After Effects', category: 'Creative Suite', description: 'Pixel-perfect carousel layouts, motion graphics animations, and branded templates.' },
      { name: 'Brandwatch / Mention', category: 'Listening & Sentiment', description: 'Real-time social listening tracking brand keyword mentions, hashtags, and sentiment trends.' },
      { name: 'Shield Analytics', category: 'LinkedIn Insights', description: 'Advanced LinkedIn telemetry tracking creator profile traction, reach, and speed of follower growth.' },
      { name: 'CapCut / Premiere Pro', category: 'Short-Form Video', description: 'High-speed vertical video editing with dynamic captions, audio enhancement, and pacing cuts.' },
      { name: 'Bitly / UTM Orchestrator', category: 'Attribution Tracking', description: 'Custom branded shortened links with granular UTM parameters tracking lead conversions.' },
    ],
    benefits: [
      { title: 'Humanize Your Brand & Build Real Trust', desc: 'Modern buyers want to do business with people, not faceless corporations. Social media brings your culture to life.', stat: 'Human Connection' },
      { title: 'Consistent Inbound Qualified Inquiries', desc: 'A steady cadence of value-driven content primes prospects to slide into your DMs ready to discuss solutions.', stat: '38% Inbound Lift' },
      { title: 'Attract Top Tier Industry Talent', desc: 'A thriving social presence showcases your culture, projects, and vision, making your company a magnet for top talent.', stat: 'Employer Branding' },
      { title: 'Exponential Organic Distribution', desc: 'Great social content gets shared freely across peer networks, generating free impressions that ads cannot replicate.', stat: 'Viral Multiplier' },
    ],
    faqs: [
      {
        question: 'Which social platforms should our company focus on?',
        answer: 'We recommend focusing on 2–3 platforms where your ideal clients actually spend their time. For B2B businesses, LinkedIn and X usually drive the highest ROI. For D2C and consumer brands, Instagram, TikTok, and YouTube dominate.',
      },
      {
        question: 'Do we have to be on camera or record videos?',
        answer: 'Not necessarily. While short-form video has strong algorithmic reach, high-performing text-and-image carousels, data infographics, and thought leadership essays frequently generate equal or superior B2B conversion rates.',
      },
      {
        question: 'How much time will our team need to invest each month?',
        answer: 'We do the heavy lifting: strategy, copywriting, visual design, scheduling, and community response. You only need to spend approximately 1 hour per month reviewing and approving the upcoming content batch.',
      },
      {
        question: 'Can you ghostwrite for our CEO / Founders?',
        answer: 'Yes! Executive personal branding is one of our most popular services. We conduct a 30-minute monthly voice capture interview and transform your ideas into authoritative LinkedIn and X thought leadership posts.',
      },
    ],
  },

  'email-marketing': {
    id: 'email-marketing',
    slug: 'email-marketing',
    route: '/marketing/email-marketing',
    aliases: ['email-marketing', 'email-automation', 'lifecycle-marketing', 'retention'],
    number: '04',
    name: 'Email Marketing',
    eyebrow: 'Lifecycle & Retention',
    title: 'High-Converting Email',
    titleHighlight: 'Engines & Automation.',
    description:
      'We design sophisticated automated lifecycle flows, bespoke newsletter designs, and personalized segmentation triggers that turn subscribers into repeat high-value buyers.',
    heroImage:
      'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80',
    heroImageAlt: 'Modern email marketing automation workflow diagram showing behavioral triggers, segment branching, and analytics',
    primaryCTA: {
      text: 'Audit Your Email Flows',
      href: '/contact',
    },
    secondaryCTA: {
      text: 'Explore Automation Triggers',
      href: '#automation',
    },
    overview: {
      heading: 'Your email list is your only direct, algorithm-proof digital communication channel.',
      subheading: 'Stop blasting one-size-fits-all promotions. Build behavioral lifecycle engines.',
      paragraphs: [
        'Unlike social media platforms that throttle your organic reach behind paywalls and algorithmic updates, your email database is an owned asset that delivers an unmatched average return of $36 for every $1 invested.',
        'At RapSora, we build intelligent lifecycle email architectures. We combine behavioral segmentation, dynamic liquid templating, deliverability infrastructure hardening, and persuasive copywriting to maximize open rates, click-through rates, and customer lifetime value.',
      ],
      highlights: [
        'Strict deliverability hardening (DKIM, SPF, DMARC 100% compliant)',
        'Event-triggered behavioral automation flows (abandoned cart, onboarding, winback)',
        'Bespoke responsive HTML/CSS email templates that render flawlessly in dark mode',
        'Advanced subscriber cohort segmentation and predictive LTV modeling',
      ],
    },
    metrics: [
      { value: '44.8%', label: 'Average Open Rate', desc: 'Consistently outperforming industry benchmarks through inbox priming' },
      { value: '6.4%', label: 'Average Click-Through Rate', desc: 'Driven by clear visual hierarchy and single-focused call-to-actions' },
      { value: '38%', label: 'Total Revenue from Automation', desc: 'Hands-off automated revenue generated while you sleep' },
      { value: '99.4%', label: 'Inbox Placement Rate', desc: 'Rigorous domain reputation warming avoiding the spam tab' },
    ],
    pillars: [
      {
        number: '01',
        tag: 'INFRASTRUCTURE & REPUTATION',
        title: 'Domain Authentication & Deliverability',
        iconName: 'ShieldCheck',
        desc: 'Hardening DNS records with SPF, DKIM, DMARC, and BIMI protocols. We monitor IP reputation, unsubscribe headers, and Google/Yahoo bulk sender mandates to guarantee primary inbox delivery.',
        specs: ['DMARC / DKIM / SPF Setup', 'Google Postmaster Telemetry', 'BIMI Verified Checkmarks', 'Dedicated IP Warmup Sprints'],
      },
      {
        number: '02',
        tag: 'BEHAVIORAL AUTOMATION',
        title: 'Event-Triggered Lifecycle Flows',
        iconName: 'GitBranch',
        desc: 'Building intelligent automated sequences triggered by real-time user behavior: multi-step onboarding, browse abandonment, cart recovery, churn risk alerts, and post-purchase winbacks.',
        specs: ['Welcome Series (5-Part)', 'Cart & Browse Abandonment', 'Customer Winback Flows', 'VIP Re-Engagement Logic'],
      },
      {
        number: '03',
        tag: 'SEGMENTATION & DATA',
        title: 'Precision Cohort Segmentation',
        iconName: 'Users',
        desc: 'Segmenting subscribers based on past purchase frequency, average order value, content affinity, engagement recency, and predicted customer lifetime value.',
        specs: ['RFM Cohort Analysis', 'Engagement Tier Buckets', 'Geographic Localization', 'Suppression List Hygiene'],
      },
      {
        number: '04',
        tag: 'CREATIVE & TEMPLATING',
        title: 'Bespoke Responsive Design & Copywriting',
        iconName: 'Mail',
        desc: 'Developing pixel-perfect, mobile-responsive email templates tested across 50+ email clients and dark mode themes, paired with persuasive, narrative-driven copy.',
        specs: ['Dark Mode Responsive HTML', 'Interactive AMP Elements', 'Brand Storytelling Copy', 'A/B Subject Line Engine'],
      },
    ],
    capabilities: [
      {
        title: 'Automated Welcome & Onboarding Cadences',
        desc: 'First impressions matter. We engineer welcoming email journeys that educate new subscribers on your brand story, build trust, and drive first purchases.',
        tags: ['Welcome Series', 'Brand Storytelling', 'First-Purchase Discount', 'Expectation Setting'],
      },
      {
        title: 'High-Recovery Abandoned Cart & Browse Flows',
        desc: 'Dynamic product cards, urgency timers, customer reviews, and personalized incentive ladders that recover up to 24% of lost checkout revenue.',
        tags: ['Dynamic Cart Items', 'Browse Abandonment', 'Incentive Ladders', 'Social Proof Cards'],
      },
      {
        title: 'Editorial & Brand Newsletters',
        desc: 'Engaging, beautifully formatted weekly or bi-weekly newsletters that provide genuine industry value and keep your brand top-of-mind without being salesy.',
        tags: ['Weekly Curation', 'Editorial Commentary', 'Industry Roundups', 'Sponsor Slots'],
      },
      {
        title: 'Post-Purchase & VIP Retention Sequences',
        desc: 'Cross-selling complementary products, requesting reviews, sharing unboxing guides, and rewarding high-spending VIP customers to maximize LTV.',
        tags: ['Unboxing Guides', 'Review Requesting', 'VIP Loyalty Perks', 'Subscription Upgrades'],
      },
      {
        title: 'Winback & Inactive Subscriber Re-Engagement',
        desc: 'Automated reactivation campaigns that detect declining engagement and re-ignite interest before safely pruning unengaged contacts to protect domain health.',
        tags: ['Reactivation Offers', 'Sunset Policy Automations', 'List Scrubbing', 'Deliverability Defense'],
      },
      {
        title: 'Predictive A/B Testing & Conversion Experiments',
        desc: 'Testing subject lines, preview texts, sender names, send times, and button placements to continuously discover winning formulas that maximize ROI.',
        tags: ['Subject Line Matrix', 'Send Time Optimization', 'Plain-Text vs HTML', 'Call-to-Action Testing'],
      },
    ],
    process: [
      {
        step: '01',
        title: 'Deliverability & Tech Stack Audit',
        desc: 'We examine your DNS settings, spam complaint rates, existing automated flows, and list hygiene to eliminate delivery bottlenecks.',
        deliverables: ['Deliverability Health Scorecard', 'DNS Authentication Report', 'Flow Gap Analysis'],
      },
      {
        step: '02',
        title: 'Lifecycle Mapping & Segmentation Strategy',
        desc: 'Architecting the full customer journey map with trigger events, conditional splits, wait intervals, and segmentation definitions.',
        deliverables: ['Customer Journey Blueprint', 'RFM Segmentation Matrix', 'Email Calendar Schedule'],
      },
      {
        step: '03',
        title: 'Template Design & System Coding',
        desc: 'Designing modular, dark-mode compatible email components in Figma and coding clean HTML/CSS templates tested on Litmus.',
        deliverables: ['Modular Design System', 'Litmus Test Proofs', 'ESP Master Template'],
      },
      {
        step: '04',
        title: 'Copywriting & Flow Automation Build',
        desc: 'Writing persuasive, brand-aligned email copy and building out complex automation logic directly inside your ESP (Klaviyo, Mailchimp, HubSpot).',
        deliverables: ['Full Email Copywriting Decks', 'Active Automated Flow Logic', 'Dynamic Personalization Tags'],
      },
      {
        step: '05',
        title: 'Ongoing Campaigns & A/B Optimization',
        desc: 'Managing ongoing campaign broadcasts, monitoring open and revenue telemetry, and executing systematic A/B tests to continuously lift ROI.',
        deliverables: ['Weekly Campaign Releases', 'Live Revenue Telemetry', 'Quarterly List Hygiene Reviews'],
      },
    ],
    tools: [
      { name: 'Klaviyo', category: 'E-commerce Automation', description: 'Premier e-commerce email platform with advanced behavioral triggers, predictive analytics, and dynamic product recommendations.' },
      { name: 'HubSpot Marketing Hub', category: 'B2B Lifecycle', description: 'Comprehensive B2B CRM and email marketing automation aligning sales pipelines with nurture workflows.' },
      { name: 'Litmus / Email on Acid', category: 'Rendering QA', description: 'Cross-client preview testing across 50+ email clients, operating systems, and dark-mode mobile clients.' },
      { name: 'Google Postmaster Tools', category: 'Reputation Telemetry', description: 'Official Google domain reputation scores, spam complaint tracking, and delivery diagnostics.' },
      { name: 'Mailchimp / Brevo', category: 'Newsletter Operations', description: 'Reliable newsletter publishing, list segmentation, and transactional email distribution.' },
      { name: 'Figma', category: 'Email UI/UX', description: 'Pixel-perfect visual design of email layouts, hero banners, product grids, and animated GIF assets.' },
    ],
    benefits: [
      { title: 'Independent From Social Algorithms', desc: 'Social channels can vanish or change rules overnight. Your email list is an owned asset that nobody can deplatform.', stat: '100% Owned Audience' },
      { title: 'Unmatched 36:1 Industry ROI', desc: 'Email consistently generates the highest return on investment of any digital marketing channel in existence.', stat: '$36 for every $1' },
      { title: 'Predictable Hands-Off Revenue', desc: 'Once behavioral flows are engineered and live, they generate sales 24/7 without requiring daily manual input.', stat: 'Passive Revenue Engine' },
      { title: 'Higher Customer Lifetime Value (LTV)', desc: 'Nurtured subscribers purchase more frequently, spend more per transaction, and remain loyal customers longer.', stat: '+28% LTV Lift' },
    ],
    faqs: [
      {
        question: 'Which Email Service Provider (ESP) do you recommend?',
        answer: 'For e-commerce and retail brands, Klaviyo is the industry gold standard. For B2B companies and service agencies, HubSpot or ActiveCampaign provide superior CRM alignment. We build on whatever platform you currently use.',
      },
      {
        question: 'How do you prevent emails from landing in the Spam or Promotions tab?',
        answer: 'We configure strict DNS authentication (SPF, DKIM, DMARC), implement gradual IP warm-up protocols, purge unengaged contacts, maintain high plain-text to image ratios, and optimize subject lines to eliminate spam triggers.',
      },
      {
        question: 'How many emails should we be sending per week?',
        answer: 'There is no one-size-fits-all answer. For most brands, 1 to 2 high-value weekly broadcast newsletters combined with event-triggered automated flows achieve the optimal balance between high revenue and low unsubscribe rates.',
      },
      {
        question: 'Do you design custom templates or use pre-made themes?',
        answer: 'Every template we deliver is 100% custom-designed in Figma to match your unique brand identity, typography, and color palette, then coded with responsive HTML/CSS optimized for dark mode.',
      },
    ],
  },
};

export function getMarketingService(slugOrId: string): MarketingServiceConfig | null {
  const normalized = decodeURIComponent(slugOrId).toLowerCase().trim().replace(/\s+/g, '-');

  if (MARKETING_SERVICES[normalized]) {
    return MARKETING_SERVICES[normalized];
  }

  for (const service of Object.values(MARKETING_SERVICES)) {
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

