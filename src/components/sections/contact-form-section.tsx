'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
    'Branding',
    'Website Design',
    'UX/UI',
    'Motion Design',
    'Landing Page',
    'Content Creation',
    'Webflow Development',
];

export function ContactFormSection() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setSuccess(true);
        }, 1500);
    };

    return (
        <section className="relative w-full bg-background py-20 lg:py-32 overflow-hidden z-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* ── Left Column: Heading ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="w-full lg:w-[35%] flex flex-col items-start lg:sticky lg:top-32 lg:h-fit"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 mb-8">
                            <span className="text-[13px] font-medium text-foreground/60 tracking-tight">Start a conversation</span>
                        </div>

                        <div className="w-2 h-2 rounded-full bg-foreground mb-6" />

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-foreground">
                            Tell us about your next stage.
                        </h2>
                    </motion.div>

                    {/* ── Right Column: Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                        className="w-full lg:w-[65%]"
                    >
                        <AnimatePresence mode="wait">
                            {!success ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="w-full space-y-8"
                                >
                                    {/* Name & Company */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-[14px] font-medium text-foreground mb-2">Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Evan"
                                                className="w-full bg-transparent border-b border-foreground/15 pb-3 text-[16px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[14px] font-medium text-foreground mb-2">Company</label>
                                            <input
                                                type="text"
                                                placeholder="Microsoft"
                                                className="w-full bg-transparent border-b border-foreground/15 pb-3 text-[16px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-[14px] font-medium text-foreground mb-2">Your Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="evan@microsoft.com"
                                                className="w-full bg-transparent border-b border-foreground/15 pb-3 text-[16px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[14px] font-medium text-foreground mb-2">Your Phone</label>
                                            <input
                                                type="tel"
                                                placeholder="Your number phone"
                                                className="w-full bg-transparent border-b border-foreground/15 pb-3 text-[16px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Service Interest Pills */}
                                    <div>
                                        <p className="text-[14px] font-medium text-foreground mb-4">I'm interested in...</p>
                                        <div className="flex flex-wrap gap-3">
                                            {SERVICES.map((service) => {
                                                const isSelected = selectedServices.includes(service);
                                                return (
                                                    <button
                                                        key={service}
                                                        type="button"
                                                        onClick={() => toggleService(service)}
                                                        className={cn(
                                                            'px-5 py-2.5 rounded-full text-[14px] font-medium border transition-all duration-200 cursor-pointer',
                                                            isSelected
                                                                ? 'bg-foreground text-background border-foreground'
                                                                : 'bg-transparent text-foreground border-foreground/20 hover:border-foreground/50'
                                                        )}
                                                    >
                                                        {service}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <div>
                                        <p className="text-[14px] font-medium text-foreground mb-2">Tell us about your project.</p>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="Write something concise..."
                                            className="w-full bg-transparent border-b border-foreground/15 pb-3 text-[16px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground transition-colors resize-y"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className={cn(
                                                'w-full md:w-auto px-16 py-4 rounded-full text-[16px] font-bold tracking-tight transition-all duration-300 cursor-pointer',
                                                submitting
                                                    ? 'bg-foreground/50 text-background cursor-not-allowed'
                                                    : 'bg-foreground text-background hover:opacity-90 active:scale-[0.98]'
                                            )}
                                        >
                                            {submitting ? 'Sending...' : 'Submit'}
                                        </button>
                                    </div>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full min-h-[400px] flex flex-col items-center justify-center border border-foreground/10 rounded-3xl bg-foreground/[0.02]"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                                    >
                                        <CheckCircle2 className="w-10 h-10 text-primary" />
                                    </motion.div>
                                    <h3 className="text-3xl font-heading font-medium tracking-tight mb-3">Thanks for reaching out!</h3>
                                    <p className="text-foreground/50 text-center max-w-sm">
                                        We've received your message and our team will get back to you within 24-48 hours.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
