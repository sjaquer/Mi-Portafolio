import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gallery } from '../data/portfolio';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
              Galería Multimedia
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de fotografías y videos destacados de mis proyectos recientes.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ gridAutoFlow: 'dense' }}
        >
          {gallery.map((item, index) => {
            const colSpan = item.colSpan || (item.aspectRatio && item.aspectRatio > 1.2 ? 2 : 1);
            const rowSpan = item.rowSpan || (item.aspectRatio && item.aspectRatio < 0.8 ? 2 : 1);
            const aspect = item.aspectRatio || '16/9';

            // Centrado si colSpan o rowSpan es impar
            const centerClass =
              (colSpan % 2 !== 0 || rowSpan % 2 !== 0)
                ? 'mx-auto justify-self-center'
                : '';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
          group overflow-hidden rounded-xl relative
          col-span-${colSpan} row-span-${rowSpan}
          flex items-center justify-center bg-[#262626]/60 backdrop-blur-md shadow-lg
          ${centerClass}
        `}
                style={{
                  aspectRatio: aspect,
                  width: '100%',
                  display: 'flex'
                }}
              >
                {item.type === 'image' ? (
                  <img
                    loading="lazy"
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{
                      aspectRatio: aspect,
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    preload="metadata"
                    poster={item.poster}
                    style={{
                      aspectRatio: aspect,
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
