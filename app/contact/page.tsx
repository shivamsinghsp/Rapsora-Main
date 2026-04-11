import { ContactHero } from '@/components/sections/contact/contact-hero';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { StudioInfo } from '@/components/sections/contact/studio-info';
import { FaqAccordion } from '@/components/sections/contact/faq-accordion';

export const metadata = {
    title: 'Contact Us | RapSora',
    description: 'Get in touch to work on your next award-winning digital project.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-[120px] bg-background text-foreground overflow-hidden">
            {/* 1. Nice to meet ya Hero */}
            <ContactHero />

            {/* 2. Contact Form */}
            <ContactFormSection />

            {/* 3. Physical Studio Presence / Trust Builder */}
            <StudioInfo />

            {/* 4. Anticipatory FAQs */}
            <FaqAccordion />
        </main>
    );
}
