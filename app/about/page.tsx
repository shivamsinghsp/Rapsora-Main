import { Metadata } from 'next';
import { AboutIntro } from '@/components/sections/about/about-intro';
import { AboutVision } from '@/components/sections/about/about-vision';
import { AboutMission } from '@/components/sections/about/about-mission';
import { AboutBranding } from '@/components/sections/about/about-branding';
import { AboutTeam } from '@/components/sections/about/about-team';

export const metadata: Metadata = {
    title: 'About Us | Rapsora',
    description: 'Hooking hearts, winning minds. Learn the story behind the company that prioritizes growth over ego.',
};

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-background overflow-hidden px-0">
            <div className="pt-20">
                <AboutIntro />
                <AboutVision />
                <AboutMission />
                <AboutBranding />
                <AboutTeam />
            </div>
            {/* Additional sections will be added here one by one */}
        </main>
    );
}
