import { Metadata } from 'next';
import TeamPageContent from '@/components/sections/team/team-page-content';

export const metadata: Metadata = {
    title: 'Our Team | RapSora',
    description:
        'Meet the obsessed specialists behind RapSora. A lean squad of designers, developers, and growth strategists engineering digital authority.',
};

export default function TeamPage() {
    return <TeamPageContent />;
}
