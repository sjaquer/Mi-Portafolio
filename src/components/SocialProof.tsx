import { motion } from 'framer-motion';
import { Briefcase, Award, Zap } from 'lucide-react';

const stats = [
  { label: 'Proyectos Reales', value: '6+', icon: Briefcase, color: 'text-cyan-400' },
  { label: 'Certificaciones IA', value: '3+', icon: Award, color: 'text-violet-400' },
  { label: 'Uptime Soluciones', value: '99%', icon: Zap, color: 'text-emerald-400' },
];

export const SocialProof = () => {
  return (
    <div className="py-12 relative z-10 border-y border-zinc-900/50 bg-zinc-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center md:items-start"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={18} className={stat.color} />
                  <span className="text-3xl md:text-4xl font-extrabold text-zinc-50 font-display tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
