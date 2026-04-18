import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExpertiseSection } from '@/components/sections/expertise-section';
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { TeamSection } from '@/components/sections/team-section';
import { CtaSection } from '@/components/sections/cta-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectShowcase />
            <ExpertiseSection />
            <TestimonialsSection />
            <TeamSection />
            <CtaSection />
            <ContactFormSection />
        </main>
    );
}
