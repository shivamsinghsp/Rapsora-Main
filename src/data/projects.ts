export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    image: string;
    video?: string;
    link: string;
    color: string;
    year: string;
    client: string;
    tags: string[];
    metric?: string;
    metricLabel?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 'takesmart',
        title: 'Take Smart',
        subtitle: 'Digitizing a modern grocery supply chain business',
        category: 'Supply Chain, Web Platform & Operations',
        description: 'We built a scalable digital platform for Take Smart, streamlining their grocery supply chain operations from inventory management to order flow. The focus was on efficiency, real-time tracking, and seamless vendor coordination — enabling faster deliveries and improved business control.',
        image: 'https://res.cloudinary.com/dswzqgdf3/image/upload/v1775830467/Screenshot_2026-04-10_194327_iovu8h.png',
        link: '/work/takesmart',
        color: '#22C55E',
        year: '2026',
        client: 'Take Smart',
        tags: ['Platform', 'Automation', 'Operations'],
        metric: '↑ 3x order efficiency',
        metricLabel: 'Operational boost'
    },
    {
        id: 'hridika-jewellers',
        title: 'Hridika Jewels',
        subtitle: 'Elevating a luxury jewellery brand into a premium digital experience',
        category: 'Luxury E-commerce, Branding & Experience',
        description: 'We crafted a refined digital presence for Hridika Jewels, blending elegance with high-conversion design. From showcasing intricate collections to building a seamless shopping journey, the platform was designed to enhance brand perception and drive premium customer engagement.',
        image: 'https://res.cloudinary.com/dswzqgdf3/image/upload/v1775830631/Screenshot_2026-04-10_194702_xghxy8.png',
        link: '/work/hridika-jewellers',
        color: '#D4AF37',
        year: '2026',
        client: 'Hridika Jewels',
        tags: ['E-commerce', 'Branding', 'Luxury'],
        metric: '↑ 2x conversions',
        metricLabel: 'Sales growth'
    },
    {
        id: 'shynr-consultancy',
        title: 'Shynr',
        subtitle: 'Building a modern hiring & consultancy experience',
        category: 'Website, Branding & Lead Generation',
        description: 'We developed a complete digital platform for Shynr, a hiring and consultancy company based in Kanpur — focusing on streamlined candidate acquisition, employer engagement, and high-conversion landing experiences. The system was designed to simplify hiring workflows while maximizing lead generation.',
        image: 'https://res.cloudinary.com/dswzqgdf3/image/upload/v1775830491/Screenshot_2026-04-10_194442_pb0g8z.png',
        link: '/work/shynr-consultancy',
        color: '#0EA5E9',
        year: '2026',
        client: 'Shynr',
        tags: ['Website', 'UI/UX', 'Automation'],
        metric: '↑ 180% applications',
        metricLabel: 'Application rate'
    },
    {
        id: 'kanpur-architect',
        title: 'Kanpur Architect',
        subtitle: 'Crafting a high-end digital portfolio for architectural excellence',
        category: 'Architecture, Portfolio & Web Design',
        description: 'We designed a modern, minimalistic digital showcase for Kanpur Architect, presenting structural designs, spatial planning, and residential projects with elegance and high visual clarity to attract premium architectural clients.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop',
        link: '/work/kanpur-architect',
        color: '#8046F4',
        year: '2026',
        client: 'Kanpur Architect',
        tags: ['Architecture', 'Website', 'UI/UX'],
        metric: '↑ 2.8x inquiries',
        metricLabel: 'Project inquiries'
    }
];
