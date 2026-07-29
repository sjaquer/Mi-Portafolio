import { motion } from 'framer-motion';

const stats = [
  { label: 'Reducción en tiempo operativo', value: '35%' },
  { label: 'Sistemas construidos desde cero', value: '5+' },
  { label: 'Industrias con impacto real', value: '3' },
];

export const SocialProof = () => {
  return (
    <div className="py-12 relative z-10 border-y border-zinc-900/50 bg-zinc-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-zinc-50 font-display tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-medium text-zinc-500 uppercase tracking-widest text-center md:text-left">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
