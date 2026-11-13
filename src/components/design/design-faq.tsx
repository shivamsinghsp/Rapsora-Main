'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { DesignFaqItem } from '@/data/design-services';
import { cn } from '@/lib/utils';

interface DesignFaqProps {
  faqs: DesignFaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function DesignFaq({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers regarding our creative design workflow, timelines, deliverables, and engineering handoffs.',
  className,
}: DesignFaqProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={cn('py-24 sm:py-32 bg-secondary/15 border-t border-border/60 relative', className)}>
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-3">
            Clarity & FAQs
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={cn(
                  'rounded-2xl border transition-all duration-300 overflow-hidden bg-card/90 backdrop-blur-md',
                  isOpen ? 'border-primary/50 shadow-md shadow-primary/5' : 'border-border/80 hover:border-border'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-foreground">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-border/80 transition-transform duration-300',
                      isOpen ? 'rotate-180 bg-primary text-primary-foreground border-primary' : 'bg-secondary/40 text-muted-foreground'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

