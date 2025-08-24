import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery as galleryData } from '../data/portfolio';

/*
  Gallery: adaptado al estilo visual de Hero/Experience/Skills/Education
  - Paleta primary/secondary, glows coherentes
  - Grid responsivo y ordenado (auto-rows-fr)
  - Aspect-ratio consistente, items destacados se ven mejor
  - Modal accesible con navegación por teclado
*/

const getGridProps = (width: number, height: number) => {
  const aspect = width / height || 1;
  if (aspect > 1.4) return { colSpan: 2, rowSpan: 1, aspectRatio: aspect };
  if (aspect < 0.8) return { colSpan: 1, rowSpan: 2, aspectRatio: aspect };
  return { colSpan: 1, rowSpan: 1, aspectRatio: aspect };
};

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [items, setItems] = useState(galleryData);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Detecta dimensiones de imágenes y ajusta col/row/ratio
    Promise.all(
      galleryData.map((it) => {
        if (it.type !== 'image') return Promise.resolve(it);
        return new Promise(resolve => {
          const img = new window.Image();
          img.src = it.src;
          img.onload = () => {
            const props = getGridProps(img.naturalWidth, img.naturalHeight);
            resolve({ ...it, aspectRatio: props.aspectRatio, colSpan: props.colSpan, rowSpan: props.rowSpan });
          };
          img.onerror = () => resolve(it);
        });
      })
    ).then((newItems) => setItems(newItems as typeof galleryData));
  }, []);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const navigate = useCallback((dir: 'next' | 'prev') => {
    if (selectedIndex === null) return;
    const next = dir === 'next' ? (selectedIndex + 1) % items.length : (selectedIndex - 1 + items.length) % items.length;
    setSelectedIndex(next);
  }, [selectedIndex, items]);

  // teclado en modal
  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex, navigate]);

  return (
    <section id="gallery" ref={ref} className="relative py-20 px-6 lg:px-16 bg-gradient-to-br from-primary/6 to-dark/86 overflow-hidden">
      {/* glows coherentes con resto de secciones */}
      <div className="pointer-events-none absolute -top-28 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-[110px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-36 -right-28 w-[30rem] h-[30rem] rounded-full bg-secondary/6 blur-[160px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/700">Galería</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">Selección visual de proyectos y assets — minimal y clara.</p>
        </motion.header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr" style={{ gridAutoFlow: 'dense' }}>
          {items.map((item, idx) => {
            const col = item.colSpan || 1;
            const row = item.rowSpan || 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-[rgba(6,12,25,0.78)] border border-dark-200/40"
                style={{ gridColumn: `span ${col}`, gridRow: `span ${row}`, minHeight: 140 }}
                onClick={() => openModal(idx)}
                role="button"
                aria-label={item.alt || 'Abrir elemento de galería'}
              >
                <div className="w-full h-full flex items-center justify-center bg-dark-100">
                  {item.type === 'image' ? (
                    <img loading="lazy" src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    /* Mostrar previsualización de video en la grilla:
                       autoplay muted loop playsInline + poster para apreciar horizontalidad */
                    <video
                      src={item.src}
                      poster={item.poster}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      aria-label={item.alt}
                    />
                  )}
                </div>

                {/* overlay sutil con paleta */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-t from-black/40 via-primary/6 to-transparent rounded-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="relative w-full max-w-5xl h-[82vh] bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              {items[selectedIndex] && items[selectedIndex].type === 'image' ? (
                <img src={items[selectedIndex].src} alt={items[selectedIndex].alt} className="w-full h-full object-contain rounded-lg" />
              ) : (
                /* Modal con controles para reproducir el video a detalle */
                <video
                  src={items[selectedIndex]?.src}
                  poster={items[selectedIndex]?.poster}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg"
                />
              )}

              <button onClick={closeModal} className="absolute top-4 right-4 text-white/90 bg-black/30 hover:bg-black/40 p-2 rounded-full">
                <X size={22} />
              </button>

              <button onClick={(e) => { e.stopPropagation(); navigate('prev'); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 bg-black/30 hover:bg-black/40 p-2 rounded-full">
                <ChevronLeft size={26} />
              </button>

              <button onClick={(e) => { e.stopPropagation(); navigate('next'); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 bg-black/30 hover:bg-black/40 p-2 rounded-full">
                <ChevronRight size={26} />
              </button>

              {/* caption ligera */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-gray-200 bg-[rgba(0,0,0,0.36)] px-4 py-2 rounded-md">
                {items[selectedIndex]?.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;