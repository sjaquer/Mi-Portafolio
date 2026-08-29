import { motion } from 'framer-motion';
import anime from 'animejs';
import CountUp from './CountUp';
import { useInViewOnce } from './Reveal';

interface Stat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  { label: 'Reducción en tiempo operativo', value: 35, suffix: '%' },
  { label: 'Sistemas construidos desde cero', value: 5, suffix: '+' },
  { label: 'Industrias con impacto real', value: 3 },
];

const StatItem: React.FC<{ stat: Stat; i: number }> = ({ stat, i }) => {
  const ref = useInViewOnce<SVGSVGElement>((el) => {
    const line = el.querySelector<SVGPathElement>('[data-draw]');
    if (!line) return;
    const len = line.getTotalLength();
    line.style.strokeDasharray = `${len}`;
    anime({ targets: line, strokeDashoffset: [len, 0], duration: 900, delay: i * 120, easing: 'easeOutExpo' });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className="flex flex-col items-center md:items-start"
    >
      <span className="text-3xl md:text-4xl font-extrabold text-zinc-50 font-display tracking-tight mb-2">
        <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
      </span>
      <span className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-widest text-center md:text-left">
        {stat.label}
      </span>
      <svg ref={ref} width="64" height="10" viewBox="0 0 64 10" fill="none" className="mt-3" aria-hidden>
        <path data-draw d="M2 5 H62" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export const SocialProof = () => {
  return (
    <div className="py-12 relative z-10 border-y border-zinc-900/50 bg-zinc-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
