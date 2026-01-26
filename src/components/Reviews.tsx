// src/components/Reviews.tsx
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import { testimonials } from '../data/portfolio';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#1e1e1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f5fcff] font-display">
                Testimonios
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Lo que dicen mis clientes y colaboradores sobre el impacto de mi trabajo.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#2d2d2d] p-8 rounded-2xl border border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                    <div className="flex items-start justify-between mb-6">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-xl">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-[#f5fcff] leading-tight">{t.name}</div>
                                <div className="text-xs text-slate-400 font-medium">{t.role}</div>
                            </div>
                         </div>
                         <Quote className="text-primary-200 dark:text-primary-900/30 rotate-180" size={40} />
                    </div>

                    <div className="flex mb-6">
                        {[...Array(5)].map((_, idx) => (
                            <Star 
                                key={idx} 
                                size={16} 
                                className={`${idx < (t.rating || 5) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}`} 
                            />
                        ))}
                    </div>

                    <p className="text-slate-400 dark:text-slate-300 text-sm leading-relaxed italic flex-grow">
                        "{t.text}"
                    </p>

                    <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                            <MapPin size={12} /> {t.location}
                        </span>
                        <span>
                           {t.date ? new Date(t.date).toLocaleDateString() : ''}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;