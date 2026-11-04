'use client';

import * as React from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export interface ParsedMetric {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  startValue: number;
}

/**
 * Parses raw metric strings into prefix, target number, decimals precision, and suffix.
 * Handles patterns such as:
 * - '100' -> prefix: '', target: 100, decimals: 0, suffix: ''
 * - '<50ms' -> prefix: '<', target: 50, decimals: 0, suffix: 'ms'
 * - '99.99%' -> prefix: '', target: 99.99, decimals: 2, suffix: '%'
 * - '0.00' -> prefix: '', target: 0.00, decimals: 2, suffix: '', startValue: 0.18 (satisfying downward countdown)
 */
export function parseMetricValue(raw: string): ParsedMetric {
  const trimmed = raw.trim();
  const match = trimmed.match(/^([^0-9.]*?)(\d+(?:\.\d+)?)([^0-9.]*)$/);

  if (!match) {
    return {
      prefix: '',
      target: 0,
      decimals: 0,
      suffix: trimmed,
      startValue: 0,
    };
  }

  const prefix = match[1] || '';
  const numStr = match[2];
  const suffix = match[3] || '';
  const target = parseFloat(numStr);
  const decimalParts = numStr.split('.');
  const decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;

  // For zero scores like 0.00 layout shift (CLS), count down from 0.18 to 0.00 for a benchmark feel!
  const startValue = target === 0 && decimals > 0 ? 0.18 : 0;

  return {
    prefix,
    target,
    decimals,
    suffix,
    startValue,
  };
}

export interface AnimatedCounterProps {
  value: string | number;
  className?: string;
  delay?: number;
}

export function AnimatedCounter({
  value,
  className,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });

  const rawString = typeof value === 'number' ? value.toString() : value;
  const parsed = React.useMemo(() => parseMetricValue(rawString), [rawString]);

  const [displayValue, setDisplayValue] = React.useState(() =>
    parsed.startValue.toFixed(parsed.decimals)
  );

  const motionValue = useMotionValue(parsed.startValue);
  const springValue = useSpring(motionValue, {
    stiffness: 75,
    damping: 25,
    mass: 0.9,
  });

  React.useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      motionValue.set(parsed.target);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, motionValue, parsed.target, delay]);

  React.useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest.toFixed(parsed.decimals));
    });
    return unsubscribe;
  }, [springValue, parsed.decimals]);

  return (
    <span ref={ref} className={className ?? 'tabular-nums'}>
      {parsed.prefix}
      {displayValue}
      {parsed.suffix}
    </span>
  );
}

export default AnimatedCounter;
