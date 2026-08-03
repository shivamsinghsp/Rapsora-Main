'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'white' | 'black';
}

export function Logo({ className, variant = 'black' }: LogoProps) {
    const logoSrc = variant === 'white' ? '/logo white.png' : '/Logo black.png';

    return (
        <Link
            href="/"
            aria-label="RapSora — Home"
            className={cn("group shrink-0 focus-visible:outline-none flex items-center", className)}
        >
            <div className="relative h-6 sm:h-7 md:h-8 w-auto transition-transform duration-500 group-hover:scale-105">
                <img
                    src={logoSrc}
                    alt="RapSora"
                    className="h-full w-auto object-contain"
                />
            </div>
        </Link>
    );
}
