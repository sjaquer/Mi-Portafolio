import { useCallback, useEffect, useRef, useState } from 'react';
import { poemas } from '../../data/poemas';

export function usePoemVisibility(isAuthenticated: boolean) {
  const [visibility, setVisibility] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const poemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const registerRef = (i: number) => (el: HTMLDivElement | null) => {
    poemRefs.current[i] = el;
  };

  const scrollToPoem = useCallback((i: number) => {
    poemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    poemRefs.current = poemas.map(() => null);
    setVisibility(poemas.map(() => 0));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const ratios = new Map<number, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number(entry.target.getAttribute('data-index'));
          ratios.set(idx, entry.intersectionRatio);
        }
        let maxRatio = 0;
        let maxIdx = 0;
        const newVis: number[] = [];
        for (let i = 0; i < poemas.length; i++) {
          const r = ratios.get(i) ?? 0;
          newVis[i] = r;
          if (r > maxRatio) {
            maxRatio = r;
            maxIdx = i;
          }
        }
        setVisibility(newVis);
        setActiveIndex(maxIdx);
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('.blog-article').forEach((el) => obs.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, [isAuthenticated]);

  return { visibility, activeIndex, registerRef, scrollToPoem };
}
