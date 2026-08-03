import { PROJECTS } from '@/data/projects';
import { WorkClient } from './work-client';

export const metadata = {
    title: 'Our Work | RapSora Technologies',
    description: 'Explore our portfolio of award-winning websites, branding, and digital experiences.',
};

export default function WorkPage() {
    // Map static PROJECTS to work items format
    const works = PROJECTS.map((p, index) => ({
        _id: p.id,
        title: p.title,
        subtitle: p.subtitle,
        category: p.category,
        categories: [p.category, ...(p.tags || [])],
        description: p.description,
        image: p.image,
        link: p.link,
        color: p.color,
        year: p.year,
        client: p.client,
        tags: p.tags,
        metric: p.metric,
        metricLabel: p.metricLabel,
        isFeatured: index === 0,
    }));

    // Extract unique categories and count them
    const catCounts = works.reduce((acc, work) => {
        work.categories?.forEach((cat: string) => {
            acc[cat] = (acc[cat] || 0) + 1;
        });
        return acc;
    }, {} as Record<string, number>);

    return (
        <main className="min-h-screen pt-[120px] bg-background text-foreground overflow-hidden">
            <WorkClient works={works} categories={catCounts} />
        </main>
    );
}
