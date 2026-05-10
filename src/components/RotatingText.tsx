import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence, type Transition, type TargetAndTransition, type VariantLabels } from 'framer-motion';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  transition?: Transition;
  initial?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  mainClassName?: string;
  splitBy?: 'characters' | 'words' | string;
  auto?: boolean;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      rotationInterval = 2000,
      transition = { type: 'spring', damping: 30, stiffness: 400 },
      initial = { y: '100%', opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: '-120%', opacity: 0 },
      mainClassName,
      splitBy = 'words',
      auto = true
    },
    ref
  ) => {
    const [index, setIndex] = useState(0);

    const splitInto = useCallback(
      (text: string) => {
        if (splitBy === 'characters') return Array.from(text);
        if (splitBy === 'words') return text.split(' ');
        return text.split(splitBy);
      },
      [splitBy]
    );

    const parts = useMemo(() => splitInto(texts[index] || ''), [texts, index, splitInto]);

    const next = useCallback(() => setIndex(i => (i === texts.length - 1 ? 0 : i + 1)), [texts.length]);
    const previous = useCallback(() => setIndex(i => (i === 0 ? texts.length - 1 : i - 1)), [texts.length]);
    const jumpTo = useCallback((i: number) => setIndex(() => Math.max(0, Math.min(i, texts.length - 1))), [texts.length]);
    const reset = useCallback(() => setIndex(0), []);

    useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [next, previous, jumpTo, reset]);

    useEffect(() => {
      if (!auto) return;
      const id = setInterval(next, rotationInterval);
      return () => clearInterval(id);
    }, [next, rotationInterval, auto]);

    return (
        <span className={cn('inline-block align-middle', mainClassName)} title={texts[index]}>
        <span className="sr-only">{texts[index]}</span>
        {/* Reserve horizontal space and avoid layout shifts: tighter min/max ch units to prevent reflow */}
        <span className="inline-block align-middle min-w-[5ch] max-w-[10ch] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={transition}
              className="inline-flex items-center w-full"
              aria-hidden="true"
            >
              {parts.map((p, i) => (
                <span key={i} className="inline-block overflow-hidden whitespace-nowrap truncate">
                  <span className="inline-block truncate">{p}</span>
                  {splitBy === 'words' && i !== parts.length - 1 && <span>&nbsp;</span>}
                </span>
              ))}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    );
  }
);

RotatingText.displayName = 'RotatingText';
export default RotatingText;
