import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, MapPin, Briefcase } from 'lucide-react';
import { testimonials } from '../data/portfolio';
import { Testimonial } from '../types';
import { siteContent } from '../data/siteContent';

const avgRating = (items: Testimonial[]) => {
  if (!items.length) return 0;
  return +(items.reduce((s, r) => s + (r.rating || 0), 0) / items.length).toFixed(1);
};

const initials = (name = '') => name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();

export default function Reviews(): JSX.Element {
  const reduce = useReducedMotion();
  const rating = avgRating(testimonials as Testimonial[]);

  return (
    <section id="reviews" className="relative py-24 px-6 lg:px-16 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        <motion.header
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {siteContent.reviews.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{siteContent.reviews.subtitle}</p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-semibold text-white">{rating}</span>
            </div>
            <div className="text-gray-400">·</div>
            <div className="text-gray-300">
              <span className="text-lg font-medium text-white">{testimonials.length}</span> reseñas
            </div>
          </div>
        </motion.header>

        {/* Custom responsive grid: first item wide, others form columns. Avoids clipping and controls spacing precisely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {testimonials.map((t, i) => {
            const isPrimary = i === 0;
            const colSpan = isPrimary ? 'lg:col-span-8 md:col-span-2 col-span-1' : 'lg:col-span-4 md:col-span-1 col-span-1';

            return (
              <article key={t.id} className={`${colSpan}`}>
                <motion.div
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="h-full w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6 md:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg" style={{ background: 'linear-gradient(135deg, rgba(11,95,255,0.16), rgba(242,183,5,0.12))' }}>
                        {initials(t.name)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-xl font-bold text-white leading-snug truncate">{t.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                          <div className="flex items-center gap-2">
                            <Briefcase size={14} />
                            <span className="truncate">{t.role}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span className="truncate">{t.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Quote size={26} className="text-primary/30" />
                  </div>

                  <div className="mt-4 flex-grow">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {`"${t.text}"`}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.03)] mt-4">
                    <div className="flex gap-2 items-center">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={18} className={idx < (t.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} />
                      ))}
                    </div>

                    <div className="text-sm text-gray-400">
                      {t.date ? new Date(t.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' }) : null}
                    </div>
                  </div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
