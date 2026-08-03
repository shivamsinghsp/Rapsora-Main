'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white text-black px-6 overflow-hidden">
            {/* Subtle Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
                {/* 404 Giant Number */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-heading text-[8rem] sm:text-[11rem] md:text-[14rem] font-black leading-none tracking-tighter text-black select-none"
                >
                    404
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-black mb-4"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-base sm:text-lg text-black/70 font-medium max-w-md mb-10 leading-relaxed"
                >
                    The page you are looking for doesn&apos;t exist or has been moved.
                </motion.p>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-base font-bold tracking-tight hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
