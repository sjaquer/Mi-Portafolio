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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Galería Multimedia
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una selección de fotografías y videos destacados de mis proyectos recientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`overflow-hidden rounded-xl relative ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              ) : (
                <video src={item.src} className="w-full h-full object-cover" autoPlay loop muted />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sjaquer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Ver portafolio completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
