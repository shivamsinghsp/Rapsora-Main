'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/data/projects";

const projects = [
    {
        id: 1,
        category: "Agriculture & Tech",
        title: ["INDOSHYAMA", "FERTILIZERS"],
        subtitle: "Naturally. Empowering Farmers with Sustainable Future.",
        cta: "VIEW PROJECT",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        thumbBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        accent: "#f5c518",
        thumbLabel: "Indoshyama",
        image: PROJECTS[0].image,
        video: '/vedios/Video Project 1.mp4',
        link: PROJECTS[0].link,
    },
    {
        id: 2,
        category: "Consultancy & Web",
        title: ["SHYNR", "CONSULTANCY"],
        subtitle: "A Better Perspective For Your Business.",
        cta: "VIEW PROJECT",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 40%, #16213e 100%)",
        thumbBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        accent: "#00f5d4",
        thumbLabel: "Shynr",
        image: PROJECTS[1].image,
        video: '/vedios/Video Project 2.mp4',
        link: PROJECTS[1].link,
    },
    {
        id: 3,
        category: "Agency & Creative",
        title: ["ENTICING", "JATIN"],
        subtitle: "Storytelling, Branding and Complex Identity.",
        cta: "WATCH FILM",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #1a0a00 0%, #3d1c00 50%, #1a0a00 100%)",
        thumbBg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        accent: "#ff6b35",
        thumbLabel: "Enticing Jatin",
        image: PROJECTS[2].image,
        video: '/vedios/Video Project 3.mp4',
        link: PROJECTS[2].link,
    },
    {
        id: 4,
        category: "EdTech Platform",
        title: ["AAO", "SEEKHE"],
        subtitle: "Ace Your Tests. Unlock Top Universities.",
        cta: "VIEW PROJECT",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #001f3f 0%, #0a3d62 50%, #001f3f 100%)",
        thumbBg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        accent: "#4facfe",
        thumbLabel: "Aaoseekhe",
        image: PROJECTS[3].image,
        video: '/vedios/Video Project 4.mp4',
        link: PROJECTS[3].link,
    },
    {
        id: 5,
        category: "Healthcare & Web",
        title: ["DR. BALWANT", "SINGH"],
        subtitle: "Expert Neurosurgeon & Medical Solutions.",
        cta: "BOOK APPOINTMENT",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #1a120b 0%, #3d2c1e 50%, #1a120b 100%)",
        thumbBg: "linear-gradient(135deg, #d4a843 0%, #c27d38 100%)",
        accent: "#d4a843",
        thumbLabel: "Dr. Balwant",
        image: PROJECTS[4].image,
        video: '/vedios/Video Project 5.mp4',
        link: PROJECTS[4].link,
    },
    {
        id: 6,
        category: "Supply Chain & Ops",
        title: ["TAKSMARTS", ".COM"],
        subtitle: "Launch Your Supermarket Franchise in Just 45 Days.",
        cta: "EXPLORE",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #0d1117 100%)",
        thumbBg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        accent: "#a18cd1",
        thumbLabel: "Taksmarts",
        image: PROJECTS[5].image,
        video: '/vedios/Video Project 6.mp4',
        link: PROJECTS[5].link,
    },
    {
        id: 7,
        category: "Luxury E-commerce",
        title: ["HRIDIKA", "JEWELS"],
        subtitle: "Why Settle For Limited Options? Choice High Fashion.",
        cta: "VIEW COLLECTION",
        secondaryCta: "VIEW CASE STUDY",
        bg: "linear-gradient(135deg, #2c3e50 0%, #000000 100%)",
        thumbBg: "linear-gradient(135deg, #d4af37 0%, #f9f9f9 100%)",
        accent: "#d4af37",
        thumbLabel: "Hridika",
        image: PROJECTS[6].image,
        video: '/vedios/Video Project 7.mp4',
        link: PROJECTS[6].link,
    },
];

const INTERVAL = 5000;

export function ProjectShowcase() {
    const [active, setActive] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef(Date.now());
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const project = projects[active];
    const isVideoProject = !!project.video;

    const goTo = (idx: number) => {
        if (idx === active || transitioning) return;
        setTransitioning(true);
        setActive(idx);
        resetProgress();
        setTimeout(() => setTransitioning(false), 600);
    };

    const advanceToNext = () => {
        setTransitioning(true);
        setActive((cur) => (cur + 1) % projects.length);
        resetProgress();
        setTimeout(() => setTransitioning(false), 600);
    };

    const resetProgress = () => {
        setProgress(0);
        startTimeRef.current = Date.now();
    };

    // Auto-advance for NON-video projects (fixed interval)
    useEffect(() => {
        if (isVideoProject) {
            // Video projects: handled by video events below
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }

        intervalRef.current = setInterval(() => {
            advanceToNext();
        }, INTERVAL);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [active, isVideoProject]);

    // Progress for NON-video projects (fixed interval tick)
    useEffect(() => {
        if (isVideoProject) return;

        let frame: number;
        const tick = () => {
            const elapsed = Date.now() - startTimeRef.current;
            setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [active, isVideoProject]);

    // Progress for VIDEO projects (sync with video playback)
    useEffect(() => {
        if (!isVideoProject) return;

        const video = videoRef.current;
        if (!video) return;

        const onTimeUpdate = () => {
            if (video.duration && video.duration !== Infinity) {
                setProgress((video.currentTime / video.duration) * 100);
            }
        };

        const onEnded = () => {
            setProgress(100);
            advanceToNext();
        };

        video.addEventListener('timeupdate', onTimeUpdate);
        video.addEventListener('ended', onEnded);

        return () => {
            video.removeEventListener('timeupdate', onTimeUpdate);
            video.removeEventListener('ended', onEnded);
        };
    }, [active, isVideoProject]);

    return (
        <div className="w-full bg-background px-6 sm:px-10 lg:px-16 py-4">

            {/* Section Title — outside the box */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="flex items-center gap-3 text-foreground/60 font-bold tracking-tight text-[14px] lg:text-[15px] mb-5 lg:mb-6 ml-6 lg:ml-12"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Our Work
            </motion.div>

            <section ref={sectionRef} className="relative w-full overflow-hidden rounded-[2rem] lg:rounded-[3rem] aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7] group">
                {/* Google Fonts */}
                <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600&display=swap');
      `}</style>

                <style jsx>{`
        .hero-title {
          font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
          font-weight: 900;
          font-size: clamp(48px, 10vw, 140px);
          line-height: 0.92;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 4px 40px rgba(0,0,0,0.6);
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .thumbnail-btn {
          position: relative;
          width: 108px;
          height: 72px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          flex-shrink: 0;
        }

        .thumbnail-btn:hover {
          transform: scale(1.04);
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          padding: 14px 28px;
          border-radius: 100px;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .cta-primary:hover {
          background: rgba(255,255,255,0.25);
          border-color: rgba(255,255,255,0.5);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
          background: none;
          border: none;
          padding: 0;
        }

        .cta-secondary:hover {
          color: #fff;
        }
      `}</style>

                {/* Background Layers */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        {/* Background: Video or Image */}
                        {project.video ? (
                            <video
                                ref={videoRef}
                                key={project.id + '-video'}
                                src={project.video}
                                autoPlay
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={project.image}
                                alt={project.title.join(' ')}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text contrast */}
                        {/* Radial glow */}
                        <div style={{
                            position: 'absolute', right: '-5%', top: '-10%',
                            width: '75vw', height: '75vw', borderRadius: '50%',
                            background: `radial-gradient(circle, ${project.accent}15 0%, transparent 65%)`,
                        }} />

                        {/* Vignettes */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Decorative geometric */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute', right: '8%', bottom: '15%',
                                width: '320px', height: '320px',
                                border: `1px solid ${project.accent}20`,
                                borderRadius: '50%',
                            }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Grain overlay */}
                <div className="grain-overlay z-10" />


                {/* Left thumbnail strip - Hidden on small mobile */}
                <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3">
                    {projects.map((p, i) => {
                        const isActive = i === active;
                        return (
                            <div
                                key={p.id}
                                className="relative"
                                onClick={() => goTo(i)}
                            >
                                <div
                                    className="thumbnail-btn"
                                    style={{ opacity: isActive ? 1 : 0.45 }}
                                >
                                    <Image
                                        src={p.image}
                                        alt={p.thumbLabel}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-1.5">
                                        <span className="font-barlow text-[9px] font-semibold text-white/90 uppercase tracking-wider">
                                            {p.thumbLabel}
                                        </span>
                                    </div>
                                </div>

                                {isActive && (
                                    <div className="absolute -inset-[3px] rounded-lg pointer-events-none overflow-hidden">
                                        <div className="absolute inset-0 border-[3px] border-white/90 rounded-lg opacity-30" />
                                        <svg
                                            className="absolute inset-0"
                                            width="114" height="78"
                                            viewBox="0 0 114 78"
                                            fill="none"
                                        >
                                            <rect
                                                x="1.5" y="1.5" width="111" height="75"
                                                rx="4.5" ry="4.5"
                                                stroke={p.accent}
                                                strokeWidth="3"
                                                strokeDasharray={`${(progress / 100) * (2 * (111 + 75))} 9999`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Main Content Area */}
                <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-24 pl-6 sm:pl-40 lg:pl-56 pr-6 sm:pr-20 z-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Category */}
                            <div style={{
                                fontFamily: "'Barlow', sans-serif",
                                fontWeight: 500, fontSize: 16,
                                letterSpacing: '0.06em',
                                color: 'rgba(255,255,255,0.8)',
                                marginBottom: 12,
                            }}>
                                {project.category}
                            </div>

                            {/* Big Title */}
                            <div className="mb-10">
                                {project.title.map((line, i) => (
                                    <div key={i} className="hero-title">{line}</div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                                <button className="cta-primary group">
                                    {project.cta}
                                    <div className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full transition-transform group-hover:translate-x-1">
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </button>

                                <Link href={project.link || "#"} className="cta-secondary group !text-white opacity-100 hover:opacity-80">
                                    {project.secondaryCta}
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Project Counter */}
                <div className="absolute bottom-12 right-12 z-50 flex items-center gap-4">
                    <span className="font-barlow-condensed text-[13px] font-bold text-white/90 tracking-widest">
                        {String(active + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-[1px] bg-white/20 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-white"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="font-barlow-condensed text-[13px] font-medium text-white/40 tracking-widest">
                        {String(projects.length).padStart(2, '0')}
                    </span>
                </div>
            </section>
        </div>
    );
}
