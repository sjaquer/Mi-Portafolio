import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { throttle } from '../utils/throttle';

interface Orb {
  className: string;
  color: string;
  drift: { x: number; y: number; scale: number; duration: number };
}

const ORBS: Orb[] = [
  { className: 'absolute -top-[12%] left-[4%] w-[46vw] h-[46vw]', color: 'rgba(16,185,129,0.22)', drift: { x: 60, y: -50, scale: 1.15, duration: 11000 } },
  { className: 'absolute top-[28%] -right-[10%] w-[42vw] h-[42vw]', color: 'rgba(13,148,136,0.18)', drift: { x: -50, y: 40, scale: 1.1, duration: 13000 } },
  { className: 'absolute bottom-[6%] left-[2%] w-[50vw] h-[50vw]', color: 'rgba(110,231,183,0.14)', drift: { x: 40, y: 30, scale: 1.2, duration: 9500 } },
  { className: 'absolute bottom-[14%] right-[6%] w-[40vw] h-[40vw]', color: 'rgba(5,90,60,0.30)', drift: { x: -40, y: -35, scale: 1.08, duration: 12500 } },
  { className: 'absolute top-[42%] left-[38%] w-[34vw] h-[34vw]', color: 'rgba(52,211,153,0.10)', drift: { x: 30, y: -45, scale: 1.18, duration: 10500 } },
];

export const ForestScene = () => {
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anims = orbRefs.current.filter(Boolean).map((el, i) => {
      const d = ORBS[i].drift;
      return animate(el, {
        x: [0, d.x],
        y: [0, d.y],
        scale: [1, d.scale],
        duration: d.duration,
        ease: 'inOutSine',
        loop: true,
        alternate: true,
      });
    });

    const onScroll = throttle(() => {
      if (layerRef.current) {
        layerRef.current.style.transform = `translateY(${window.scrollY * 0.04}px)`;
      }
    });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      anims.forEach((a) => a.pause());
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ background: 'radial-gradient(120% 120% at 50% 0%, #07251a 0%, #04130d 45%, #020a07 100%)' }}
    >
      <div ref={layerRef} className="absolute inset-0">
        {/* Light shafts */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full opacity-70"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, rgba(16,185,129,0.05) 35deg, transparent 95deg, rgba(13,148,136,0.05) 175deg, transparent 245deg, rgba(120,235,175,0.04) 315deg, transparent 360deg)',
            animation: 'forest-ray-spin 70s linear infinite',
          }}
        />

        {/* Drifting orbs */}
        {ORBS.map((orb, i) => (
          <div
            key={i}
            ref={(el) => (orbRefs.current[i] = el)}
            className={`rounded-full blur-[120px] ${orb.className}`}
            style={{ background: `radial-gradient(circle, ${orb.color}, transparent 70%)` }}
          />
        ))}

        {/* Fog band */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[42vh] blur-3xl opacity-60"
          style={{
            background: 'linear-gradient(to top, rgba(6,40,28,0.5), transparent)',
            animation: 'forest-fog-drift 26s ease-in-out infinite alternate',
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at center, transparent 52%, rgba(0,0,0,0.55) 100%)' }}
        />
      </div>
    </div>
  );
};

export default ForestScene;
