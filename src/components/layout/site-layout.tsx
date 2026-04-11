'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Header } from './header';
import { Footer } from './footer';

interface SiteLayoutProps {
    children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const isDiagnostic = pathname?.startsWith('/diagnostic');
    const isAdmin = pathname?.startsWith('/admin');
    const isAuth = pathname?.startsWith('/auth');
    const hideChrome = isDiagnostic || isAdmin || isAuth;

    return (
        <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 md:px-12 lg:px-16 border-x border-border/30 bg-background shadow-2xl shadow-primary/5 relative">
            {!hideChrome && <Header />}
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
            >
                {children}
            </motion.main>
            {!hideChrome && <Footer />}
        </div>
    );
}
