'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────────────────────
   SERVICE CATEGORIES DATA — Rapsora's Core Offerings
───────────────────────────────────────────────────────────── */
const SERVICE_CATEGORIES = [
    {
        title: 'Design',
        description:
            'Brand designers and web designers in-house crafting visuals to match your brand values.',
        services: [
            { number: '01', name: 'Brand Identity', href: '/services/branding' },
            { number: '02', name: 'Web Design', href: '/services/web-design' },
            { number: '03', name: 'UI/UX Design', href: '/services/ui-ux' },
            { number: '04', name: 'Graphic Design', href: '/services/graphic-design' },
            { number: '05', name: 'Motion Design', href: '/services/motion-design' },
        ],
    },
    {
        title: 'Develop',
        description:
            'Our engineers build blazing-fast, scalable websites and applications engineered for growth.',
        services: [
            { number: '01', name: 'Web Development', href: '/services/web-development' },
            {
                number: '02',
                name: 'Mobile Application Development',
                href: '/services/mobile-app-development',
                children: [
                    { name: 'Android Application Development', href: '/services/android-app-development' },
                    { name: 'iOS Application Development', href: '/services/ios-app-development' },
                ],
            },
            { number: '03', name: 'Desktop Application Development', href: '/services/desktop-app-development' },
            { number: '04', name: 'UI / UX Design Services', href: '/services/ui-ux' },
            { number: '05', name: 'Artificial Intelligence (AI) Integration Services', href: '/services/ai-integration' },
            { number: '06', name: 'Web and Mobile App Development (End-to-End Solutions)', href: '/services/end-to-end-development' },
            { number: '07', name: 'E-commerce Application & Website Development', href: '/services/ecommerce' },
            { number: '08', name: 'AI Chatbot and Audio Bot Solutions', href: '/services/ai-chatbot' },
            { number: '09', name: 'Cloud-Based Solutions and Deployment Services', href: '/services/cloud-deployment' },
            { number: '10', name: 'Enterprise Resource Planning (ERP) Solutions', href: '/services/erp' },
            { number: '11', name: 'Customer Relationship Management (CRM) Solutions', href: '/services/crm' },
        ],
    },
    {
        title: 'Marketing',
        description:
            'Data-driven growth strategies that compound over time to engineer sustainable revenue systems.',
        services: [
            { number: '01', name: 'SEO & Organic Growth', href: '/services/seo' },
            { number: '02', name: 'Content Strategy', href: '/services/content-strategy' },
            { number: '03', name: 'Social Media', href: '/services/social-media' },
            { number: '04', name: 'Email Marketing', href: '/services/email-marketing' },
        ],
    },
    {
        title: 'Support',
        description:
            'Lean on our in-house team for ongoing support with your design, development, and growth needs.',
        services: [
            { number: '01', name: 'Website Maintenance', href: '/services/maintenance' },
            { number: '02', name: 'Hosting & Security', href: '/services/hosting' },
            { number: '03', name: 'Analytics & Reporting', href: '/services/analytics' },
            { number: '04', name: 'Consultation', href: '/services/consultation' },
        ],
    },
];

type ServiceListItem = {
    number: string;
    name: string;
    href?: string;
    children?: { name: string; href?: string }[];
};

/* ─────────────────────────────────────────────────────────────
   ANIMATED SERVICE ROW (Clickable links)
───────────────────────────────────────────────────────────── */
function ServiceRow({ service, index }: {
    service: ServiceListItem;
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-5% 0px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: EASE, delay: index * 0.08 }}
        >
            <div className="border-b border-foreground/[0.06]">
                {service.href ? (
                    <Link
                        href={service.href}
                        className="flex items-center justify-between py-5 lg:py-6 group transition-colors duration-300 hover:pl-2"
                    >
                        <div className="flex items-center gap-6 lg:gap-10">
                            <span className="text-muted-foreground/40 text-[13px] font-bold tabular-nums tracking-wider w-6 shrink-0 group-hover:text-primary transition-colors duration-300">
                                {service.number}
                            </span>
                            <h4 className="text-foreground text-[1.1rem] lg:text-[1.25rem] font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                {service.name}
                            </h4>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/0 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0 -translate-x-2 group-hover:opacity-100 opacity-0" />
                    </Link>
                ) : (
                    <div className="flex items-center justify-between py-5 lg:py-6">
                        <div className="flex items-center gap-6 lg:gap-10">
                            <span className="text-muted-foreground/40 text-[13px] font-bold tabular-nums tracking-wider w-6 shrink-0">
                                {service.number}
                            </span>
                            <h4 className="text-foreground text-[1.1rem] lg:text-[1.25rem] font-bold tracking-tight">
                                {service.name}
                            </h4>
                        </div>
                    </div>
                )}
                {service.children?.map((child) => (
                    child.href ? (
                        <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center gap-6 lg:gap-10 py-3 lg:py-3.5 pl-12 lg:pl-16 border-t border-foreground/[0.04] group/child hover:pl-14 lg:hover:pl-18 transition-all duration-300"
                        >
                            <span className="text-muted-foreground/30 text-[13px] w-6 shrink-0" aria-hidden>
                                ·
                            </span>
                            <p className="text-foreground/85 text-[1rem] lg:text-[1.1rem] font-semibold tracking-tight group-hover/child:text-primary transition-colors duration-300">
                                {child.name}
                            </p>
                        </Link>
                    ) : (
                        <div
                            key={child.name}
                            className="flex items-center gap-6 lg:gap-10 py-3 lg:py-3.5 pl-12 lg:pl-16 border-t border-foreground/[0.04]"
                        >
                            <span className="text-muted-foreground/30 text-[13px] w-6 shrink-0" aria-hidden>
                                ·
                            </span>
                            <p className="text-foreground/85 text-[1rem] lg:text-[1.1rem] font-semibold tracking-tight">
                                {child.name}
                            </p>
                        </div>
                    )
                ))}
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────────────────────────
   SERVICE CATEGORY BLOCK — Giant heading + description + rows
───────────────────────────────────────────────────────────── */
function CategoryBlock({ category, index }: {
    category: typeof SERVICE_CATEGORIES[0];
    index: number;
}) {
    const ref = useRef(null);
    const titleRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
    const isTitleInView = useInView(titleRef, { once: true, margin: '-5% 0px' });

    return (
        <section
            id={category.title.toLowerCase()}
            ref={ref}
            className="py-16 lg:py-24 scroll-mt-28 lg:scroll-mt-32"
        >
            {/* Heading at the top */}
            <div className="mb-10 lg:mb-16">
                <motion.h2
                    ref={titleRef}
                    initial={{ opacity: 0, y: 60 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 1.4, ease: EASE }}
                    className="font-heading text-[3.2rem] xs:text-[4.5rem] sm:text-[7rem] lg:text-[11rem] xl:text-[14rem] 2xl:text-[18rem] font-bold leading-[0.95] tracking-[-0.051em] text-foreground pb-2 lg:pb-4"
                >
                    {category.title}
                </motion.h2>
            </div>

            {/* Content below the heading */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Left: Description */}
                <div className="lg:col-span-5 xl:col-span-5">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                        className="text-foreground/80  text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] font-medium leading-[1.3] tracking-tight max-w-sm"
                    >
                        {category.description}
                    </motion.p>
                </div>

                {/* Right: Service Rows */}
                <div className="lg:col-span-7 xl:col-span-7 lg:pt-0">
                    {category.services.map((service, i) => (
                        <ServiceRow
                            key={service.name}
                            service={service}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}



/* ═══════════════════════════════════════════════════════════════
   MAIN SERVICES PAGE
═══════════════════════════════════════════════════════════════ */
export default function ServicesPage() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true, margin: '-5% 0px' });

    const { scrollYProgress } = useScroll();
    const parallaxY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

    return (
        <main className="bg-background overflow-hidden w-full relative">
            {/* ── HERO SECTION ── */}
            <section className="relative w-full pt-32 lg:pt-44 pb-20 lg:pb-32 overflow-hidden bg-background">
                {/* Ambient Glow Accents */}
                <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
                    <div ref={heroRef} className="flex flex-col gap-10 lg:gap-14">
                        
                        {/* Section Label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                            className="flex items-center gap-3.5"
                        >
                            <div className="relative flex h-3 w-3 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_#9061F9]"></span>
                            </div>
                            <h2 className="font-heading text-sm sm:text-base font-extrabold tracking-wider uppercase text-foreground">
                                Our Services
                            </h2>
                        </motion.div>

                        {/* Main Grid: Headline + Description */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
                            <motion.div
                                className="lg:col-span-7"
                                style={{ y: parallaxY }}
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                    transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                                    className="font-heading text-[2.8rem] sm:text-[4rem] lg:text-[5.2rem] xl:text-[6rem] font-bold leading-[1.02] tracking-[-0.04em] text-foreground"
                                >
                                    We craft digital experiences with <span className="italic font-medium text-primary">uncompromising precision.</span>
                                </motion.h1>
                            </motion.div>

                            <motion.div
                                className="lg:col-span-5 flex flex-col justify-end gap-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
                            >
                                <p className="text-muted-foreground text-lg sm:text-xl font-medium leading-[1.7]">
                                    We bring our passion for exceptional design and high-performance engineering to ambitious brands — delivering scalable systems, captivating interfaces, and revenue growth.
                                </p>

                                {/* Service Feature Tags */}
                                <div className="flex flex-wrap gap-2.5 pt-2">
                                    {['Brand Identity', 'UI/UX Design', 'Scalable Code', 'AI Solutions', 'Digital Growth'].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 rounded-full bg-foreground/[0.04] border border-foreground/10 text-xs font-bold text-foreground/80 tracking-wide uppercase"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── SERVICE CATEGORIES ── */}
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                {SERVICE_CATEGORIES.map((category, index) => (
                    <CategoryBlock key={category.title} category={category} index={index} />
                ))}
            </div>



            {/* ── PROCESS SECTION ── */}
            <section className="w-full py-20 lg:py-32">
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 1.2, ease: EASE }}
                            >
                                <div className="flex items-center gap-3 text-muted-foreground  font-bold tracking-tight text-[14px] mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Our Process
                                </div>
                                <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold tracking-[-0.03em] text-foreground  leading-[1.1]">
                                    From brief to
                                    <br />
                                    <span className="italic font-medium">brilliant</span>
                                </h2>
                                <p className="mt-6 text-muted-foreground  text-[15px] font-medium leading-[1.8] max-w-sm">
                                    Every project follows our battle-tested process, designed to maximise impact and minimise friction. No surprises — just results.
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-7">
                            {[
                                { step: '01', title: 'Discovery & Strategy', description: 'Deep-dive into your business, audience, and goals. We uncover what makes you unique and build a strategy around it.' },
                                { step: '02', title: 'Design & Prototype', description: 'We craft stunning visual concepts and interactive prototypes. Every pixel is intentional, every interaction purposeful.' },
                                { step: '03', title: 'Develop & Build', description: 'Clean, performant code brought to life. We build with speed, accessibility, and scalability baked in from day one.' },
                                { step: '04', title: 'Launch & Grow', description: 'We don\'t disappear after launch. Ongoing optimization, analytics, and support to ensure sustained growth.' },
                            ].map((item, index) => {
                                const ref = useRef(null);
                                const isInView = useInView(ref, { once: true, margin: '-5% 0px' });
                                return (
                                    <motion.div
                                        key={item.step}
                                        ref={ref}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{ duration: 1, ease: EASE, delay: index * 0.1 }}
                                        className="flex gap-6 py-8 border-b border-foreground/[0.06]  last:border-none"
                                    >
                                        <span className="text-primary font-heading text-[2rem] lg:text-[2.5rem] font-bold leading-none tracking-tight">
                                            {item.step}
                                        </span>
                                        <div>
                                            <h3 className="text-foreground  text-[1.15rem] lg:text-[1.3rem] font-bold tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="mt-2 text-muted-foreground  text-[14px] lg:text-[15px] font-medium leading-[1.7] max-w-md">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
