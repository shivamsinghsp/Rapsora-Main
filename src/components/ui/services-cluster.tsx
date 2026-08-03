'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  href?: string;
}

export interface CategoryData {
  id: string;
  heading: string;
  bgWord: string;
  description: string;
  services: ServiceItem[];
}

export const CATEGORIES: CategoryData[] = [
  {
    id: 'design',
    heading: 'Design',
    bgWord: 'DESIGN',
    description: 'Brand designers and web designers in-house crafting visuals to match your brand values.',
    services: [
      { id: 'brand-identity', number: '01', name: 'Brand Identity', href: '/services#branding' },
      { id: 'web-design', number: '02', name: 'Web Design', href: '/services#web-design' },
      { id: 'ui-ux-design', number: '03', name: 'UI/UX Design', href: '/services#ui-ux' },
      { id: 'graphic-design', number: '04', name: 'Graphic Design', href: '/services#graphic-design' },
    ],
  },
  {
    id: 'develop',
    heading: 'Develop',
    bgWord: 'DEVELOP',
    description: 'Our engineers build blazing-fast, scalable websites and applications engineered for growth.',
    services: [
      { id: 'web-development', number: '01', name: 'Web Development', href: '/services#web-development' },
      { id: 'e-commerce', number: '02', name: 'E-Commerce', href: '/services#ecommerce' },
      { id: 'custom-platforms', number: '03', name: 'Custom Platforms', href: '/services#custom-platforms' },
      { id: 'cms-integration', number: '04', name: 'CMS Integration', href: '/services#cms' },
      { id: 'api-development', number: '05', name: 'API Development', href: '/services#api' },
    ],
  },
  {
    id: 'marketing',
    heading: 'Marketing',
    bgWord: 'MARKETING',
    description: 'Data-driven growth strategies that compound over time to engineer sustainable revenue systems.',
    services: [
      { id: 'seo-growth', number: '01', name: 'SEO & Organic Growth', href: '/services#seo' },
      { id: 'content-strategy', number: '02', name: 'Content Strategy', href: '/services#content' },
      { id: 'social-media', number: '03', name: 'Social Media', href: '/services#social' },
      { id: 'email-marketing', number: '04', name: 'Email Marketing', href: '/services#email' },
    ],
  },
  {
    id: 'support',
    heading: 'Support',
    bgWord: 'SUPPORT',
    description: 'Lean on our in-house team for ongoing support with your design, development, and growth needs.',
    services: [
      { id: 'website-maintenance', number: '01', name: 'Website Maintenance', href: '/services#maintenance' },
      { id: 'hosting-security', number: '02', name: 'Hosting & Security', href: '/services#security' },
      { id: 'analytics-reporting', number: '03', name: 'Analytics & Reporting', href: '/services#analytics' },
      { id: 'consultation', number: '04', name: 'Consultation', href: '/services#consultation' },
    ],
  },
];

const EASE_POWER4_OUT = [0.22, 1, 0.36, 1] as const;

interface ServicesClusterProps {
  categories?: CategoryData[];
  defaultCategoryId?: string;
  className?: string;
}

export function ServicesCluster({
  categories = CATEGORIES,
  defaultCategoryId = 'design',
  className,
}: ServicesClusterProps) {
  const [activeCategoryId, setActiveCategoryId] = React.useState(defaultCategoryId);

  const activeCategory = React.useMemo(() => {
    return categories.find((c) => c.id === activeCategoryId) || categories[0];
  }, [categories, activeCategoryId]);

  const activeIndex = categories.findIndex((c) => c.id === activeCategory.id);

  // Keyboard navigation between categories
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % categories.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + categories.length) % categories.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = categories.length - 1;
    }
    if (nextIndex !== index) {
      setActiveCategoryId(categories[nextIndex].id);
      const nextButton = document.getElementById(`service-tab-${categories[nextIndex].id}`);
      nextButton?.focus();
    }
  };

  return (
    <section
      aria-label="Services and Capabilities"
      className={cn(
        "relative w-full bg-background py-20 lg:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden select-none",
        className
      )}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_POWER4_OUT }}
          className="flex items-center gap-3.5 mb-8 sm:mb-12"
        >
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_#9061F9]"></span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* ----------------------------------------------------------------- */}
        {/* TOP CLUSTER AREA                                                 */}
        {/* Organic, editorial cluster selector                              */}
        {/* ----------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE_POWER4_OUT }}
          className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24"
        >


          {/* Organic Cluster Buttons */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 max-w-3xl mx-auto"
          >
            {categories.map((cat, idx) => {
              const isActive = cat.id === activeCategory.id;
              
              // Organic positioning offsets for editorial agency layout feel
              const offsets = [
                "translate-y-0 sm:-translate-y-2", // Design
                "translate-y-0 sm:translate-y-2",  // Develop
                "translate-y-0 sm:translate-y-1",  // Marketing
                "translate-y-0 sm:-translate-y-3", // Support
              ];

              return (
                <button
                  key={cat.id}
                  id={`service-tab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`service-tabpanel-${cat.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCategoryId(cat.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={cn(
                    "relative group px-6 py-3 rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading tracking-tight transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background cursor-pointer",
                    offsets[idx % offsets.length],
                    isActive
                      ? "font-bold text-foreground scale-105"
                      : "font-normal text-muted-foreground/50 hover:text-foreground/80 hover:scale-[1.03]"
                  )}
                >
                  {/* Active Indicator Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-secondary/80 rounded-full border border-primary/20 -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.heading}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ----------------------------------------------------------------- */}
        {/* CONTENT AREA                                                     */}
        {/* Two-column layout with Watermark and Staggered Service Rows       */}
        {/* ----------------------------------------------------------------- */}
        <div
          id={`service-tabpanel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`service-tab-${activeCategory.id}`}
          className="relative min-h-[420px] w-full"
        >
          {/* Animated Background Watermark Word */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-word-${activeCategory.id}`}
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              animate={{ opacity: 0.04, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.02 }}
              transition={{ duration: 0.8, ease: EASE_POWER4_OUT }}
              className="absolute -top-8 sm:-top-14 md:-top-18 inset-x-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-start"
            >
              <span className="block text-[12vw] sm:text-[10vw] lg:text-[8.5vw] font-black uppercase tracking-tight text-foreground leading-none opacity-100 whitespace-nowrap">
                {activeCategory.bgWord}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Animated Content Block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeCategory.id}`}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: EASE_POWER4_OUT }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Left Column (35% -> lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-start">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: EASE_POWER4_OUT }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground"
                >
                  {activeCategory.heading}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18, ease: EASE_POWER4_OUT }}
                  className="mt-6 text-lg sm:text-xl font-body text-muted-foreground leading-relaxed max-w-md"
                >
                  {activeCategory.description}
                </motion.p>
              </div>

              {/* Right Column (65% -> lg:col-span-7) */}
              <div className="lg:col-span-7 w-full flex flex-col divide-y divide-border/60 border-t border-b border-border/60">
                {activeCategory.services.map((service, sIdx) => (
                  <motion.a
                    key={service.id}
                    href={service.href || '#'}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + sIdx * 0.08,
                      ease: EASE_POWER4_OUT,
                    }}
                    className="group relative flex items-center justify-between py-6 sm:py-7 md:py-8 px-2 sm:px-4 cursor-pointer text-foreground no-underline transition-colors duration-300 hover:bg-secondary/40 rounded-xl"
                  >
                    {/* Left: Number + Service Name */}
                    <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
                      <span className="font-mono text-sm sm:text-base font-semibold text-primary/80 group-hover:text-primary transition-colors duration-300">
                        {service.number}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:translate-x-3 transition-transform duration-300 ease-out">
                        {service.name}
                      </h3>
                    </div>

                    {/* Right: Circular Arrow Button */}
                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border/80 bg-background group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 ease-out shadow-sm">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
