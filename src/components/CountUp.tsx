import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Cuenta desde 0 hasta `value` cuando entra en viewport (anime.js). */
const CountUp: React.FC<CountUpProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1600,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        animate(obj, {
          v: value,
          duration,
          ease: 'outExpo',
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.v)}${suffix}`;
          },
        });
        obs.unobserve(el);
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default CountUp;
