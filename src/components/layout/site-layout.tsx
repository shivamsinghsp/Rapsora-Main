'use client';

import { motion } from 'framer-motion';
import { Header } from './header';
import { Footer } from './footer';

interface SiteLayoutProps {
    children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background relative">
            <Header />
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
}
