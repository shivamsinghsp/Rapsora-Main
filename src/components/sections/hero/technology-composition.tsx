'use client';

import type { CSSProperties, PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { HERO_CONFIG } from './hero-config';
import { InterfaceCard } from './interface-mockups';
import styles from './hero.module.css';

const COMP = HERO_CONFIG.composition;
const SPRING = { stiffness: 120, damping: 20, mass: 0.6 };

const stageVars = {
    '--stage-w-base': `${COMP.stageWidth.base}%`,
    '--stage-w-md': `${COMP.stageWidth.md}%`,
    '--stage-w-lg': `${COMP.stageWidth.lg}%`,
    '--stage-max': `${COMP.maxStageWidth}px`,
    '--stage-h': COMP.height,
    '--stage-perspective': COMP.perspective,
    '--card-delay': `${COMP.entranceDelay}ms`,
    '--card-stagger': `${COMP.entranceStagger}ms`,
    '--card-duration': `${COMP.entranceDuration}ms`,
} as CSSProperties;

/**
 * Layered 3D interface previews. Pure CSS 3D for layout and entrance; the only
 * JavaScript is an optional, spring-smoothed pointer tilt for mouse users.
 */
export function TechnologyComposition() {
    const reduceMotion = useReducedMotion();
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const rotateX = useSpring(useTransform(py, (v) => -v * COMP.maxTilt.x), SPRING);
    const rotateY = useSpring(useTransform(px, (v) => v * COMP.maxTilt.y), SPRING);

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (reduceMotion || event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        px.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
        py.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const resetTilt = () => {
        px.set(0);
        py.set(0);
    };

    return (
        <div className={styles.stageOuter} style={stageVars} aria-hidden="true">
            <div className={styles.stage} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
                <motion.div className={styles.stageTilt} style={{ rotateX, rotateY }}>
                    {COMP.cards.map((card) => (
                        <div
                            key={card.id}
                            className={styles.card}
                            data-from={card.visibleFrom}
                            style={
                                {
                                    '--w': card.width,
                                    '--aspect': card.aspect,
                                    '--x': card.x,
                                    '--y': card.y,
                                    '--z': card.z,
                                    '--ry': card.rotateY,
                                    '--order': card.order,
                                    '--dim': Math.min(0.28, Math.max(0, -card.z * 0.011)).toFixed(3),
                                } as CSSProperties
                            }
                        >
                            <div className={styles.cardInner} data-rs-card="">
                                <InterfaceCard kind={card.kind} label={card.label} />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
