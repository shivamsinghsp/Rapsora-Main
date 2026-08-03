'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Logo } from '@/components/layout/logo';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { siteConfig } from '@/constants/site';

/* ─────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────── */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─────────────────────────────────────────────────────────────
   NAV DATA
───────────────────────────────────────────────────────────── */
const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/work' },
    { label: 'Contact Us', href: '/contact' },
];

type NavLinkItem = (typeof navLinks)[number];



import { GooeyCTA } from '@/components/shared/gooey-cta';

/* ─────────────────────────────────────────────────────────────
   PLAIN DESKTOP NAV LINK
───────────────────────────────────────────────────────────── */
function DesktopNavLink({
    link,
    isActive,
    isScrolled,
    isHome,
    onMouseEnter,
}: {
    link: NavLinkItem;
    isActive: boolean;
    isScrolled: boolean;
    isHome?: boolean;
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}) {
    return (
        <Link
            href={link.href}
            onMouseEnter={onMouseEnter}
            className={cn(
                'relative text-[17px] font-medium tracking-tight px-4 py-2 rounded-full z-10',
                'transition-all duration-300 focus-visible:outline-none',
                isActive
                    ? 'text-primary'
                    : (isScrolled || !isHome) 
                        ? 'text-foreground/75 hover:text-foreground' 
                        : 'text-white/80 hover:text-white'
            )}
        >
            {link.label}
        </Link>
    );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────────────────────── */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const pathname = usePathname();
    useEffect(() => { onClose(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1, y: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40,
                delay: 0.1 + i * 0.04
            },
        }),
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Panel — World Class Bottom Sheet Expansion */}
                    <motion.div
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100) onClose();
                        }}
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 38,
                            mass: 0.8
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        className="fixed inset-0 top-[10%] z-50 flex flex-col bg-white rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.2)] outline-none"
                        role="dialog" aria-modal="true" aria-label="Site navigation"
                    >
                        {/* Drag Handle */}
                        <div className="flex justify-center p-4">
                            <div className="w-10 h-1 bg-foreground/10 rounded-full" />
                        </div>

                        {/* Top bar (Logo only for mobile sheet) */}
                        <div className="flex items-center justify-center px-6 py-2">
                            <Logo />
                        </div>

                        <div className="mx-6 h-px bg-border/40" />

                        {/* Links */}
                        <nav className="flex-1 overflow-y-auto px-4 py-4">
                            <ul className="space-y-0.5">
                                {navLinks.map((link, i) => {
                                    const isActive = pathname === link.href;

                                    return (
                                        <motion.li key={link.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    'flex items-center rounded-lg px-3 py-3',
                                                    'text-[15px] font-medium transition-colors hover:bg-foreground/[0.04]',
                                                    isActive ? 'text-foreground' : 'text-foreground/60'
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* CTA */}
                        <div className="border-t border-border/30 px-6 py-5">
                            <div className="flex w-full justify-center">
                                <GooeyCTA />
                            </div>
                            <p className="mt-2.5 text-center text-[11px] text-muted-foreground">
                                or email us at{' '}
                                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline underline-offset-2">
                                    {siteConfig.email}
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HEADER — Layout matches MadeByShape exactly:
   [Logo]  [Nav links centered]  [Theme]  [CTA pill+circle]
═══════════════════════════════════════════════════════════════ */
export function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const { isScrolled, isHidden } = useScrollPosition(40, 0.6);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const navHidden = isHidden && !mobileOpen;

    const [hoveredRect, setHoveredRect] = useState<{ left: number; width: number } | null>(null);
    const navRef = useRef<HTMLElement>(null);

    const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            setHoveredRect({
                left: rect.left - navRect.left,
                width: rect.width,
            });
        }
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { setMobileOpen(false); }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            {/* Outer wrapper — handles centering + slide hide/show */}
            <motion.div
                initial={false}
                animate={navHidden ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className={cn(
                    'fixed inset-x-0 top-0 z-50 mx-auto flex w-full justify-center transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu',
                    isScrolled ? 'px-4 sm:px-6' : 'px-4 md:px-8 lg:px-12'
                )}
            >
                <motion.header
                    layout
                    initial={false}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 35,
                        mass: 1
                    }}
                    className={cn(
                        'w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform',
                        isScrolled
                            ? [
                                'h-[64px]',
                                'rounded-full',
                                'bg-white/70 backdrop-blur-md',
                                'border border-white/20',
                                'shadow-none',
                            ]
                            : [
                                'h-[80px]',
                                'rounded-none',
                                'bg-transparent',
                                'border border-transparent',
                                'shadow-none',
                            ]
                    )}
                    style={{
                        maxWidth: isScrolled ? 1200 : '100%',
                        marginTop: isScrolled ? 16 : 0,
                    }}
                >
                    <div className={cn(
                        'flex h-full items-center justify-between transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        isScrolled ? 'px-4 sm:px-7' : 'px-4 sm:px-8 md:px-12'
                    )}>

                        {/* ── LEFT: Logo ────────────────────────────── */}
                        <div className="flex flex-1 items-center justify-start">
                            <Logo variant={isHome && !isScrolled ? 'white' : 'black'} />
                        </div>

                        {/* ── CENTRE: Nav links ────────────────────── */}
                        <nav
                            ref={navRef}
                            onMouseLeave={() => setHoveredRect(null)}
                            className="relative hidden shrink-0 items-center justify-center gap-8 lg:flex"
                            aria-label="Primary navigation"
                        >
                            <AnimatePresence>
                                {hoveredRect && (
                                    <motion.div
                                        layoutId="nav-hover-pill"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            left: hoveredRect.left - 12,
                                            width: hoveredRect.width + 24
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 450,
                                            damping: 35
                                        }}
                                        className="absolute top-1/2 -translate-y-1/2 h-10 bg-primary/5 rounded-full z-0"
                                    />
                                )}
                            </AnimatePresence>
                            {navLinks.map((link) => {
                                return (
                                    <DesktopNavLink
                                        key={link.href}
                                        link={link}
                                        isActive={pathname === link.href}
                                        isScrolled={isScrolled}
                                        isHome={isHome}
                                        onMouseEnter={handleLinkHover}
                                    />
                                );
                            })}
                        </nav>

                        {/* ── RIGHT: Controls ──────────────────────── */}
                        <div className="flex flex-1 items-center justify-end gap-3">
                            {/* CTA — desktop */}
                            <div className="hidden lg:block lg:scale-[0.85] origin-right ml-2">
                                <GooeyCTA className="pt-1" />
                            </div>

                            {/* Hamburger — mobile — World Class Animated Toggle */}
                            <button
                                className={cn(
                                    "relative z-[60] flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                                    (isScrolled || !isHome) ? "text-foreground/60 hover:text-foreground hover:bg-foreground/[0.06]" : "text-white/80 hover:text-white hover:bg-white/10"
                                )}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                <div className="flex flex-col gap-1.5 items-center">
                                    <motion.span
                                        animate={{
                                            rotate: mobileOpen ? 45 : 0,
                                            y: mobileOpen ? 7 : 0,
                                            width: mobileOpen ? 20 : 20
                                        }}
                                        className="w-5 h-[2px] bg-current rounded-full origin-center"
                                    />
                                    <motion.span
                                        animate={{
                                            opacity: mobileOpen ? 0 : 1,
                                            x: mobileOpen ? 10 : 0
                                        }}
                                        className="w-5 h-[2px] bg-current rounded-full"
                                    />
                                    <motion.span
                                        animate={{
                                            rotate: mobileOpen ? -45 : 0,
                                            y: mobileOpen ? -7 : 0,
                                            width: mobileOpen ? 20 : 20
                                        }}
                                        className="w-5 h-[2px] bg-current rounded-full origin-center"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.header>
            </motion.div>

            <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
        </>
    );
}
