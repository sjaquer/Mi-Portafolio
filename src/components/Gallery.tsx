import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gallery as galleryData } from '../data/portfolio';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const getGridProps = (width: number, height: number) => {
  const aspectRatio = width / height;
  let colSpan = 1, rowSpan = 1;
  if (aspectRatio > 1.3) { // Horizontal
    colSpan = 2;
    rowSpan = 1;
  } else if (aspectRatio < 0.8) { // Vertical
    colSpan = 1;
    rowSpan = 2;
  } else { // Cuadrada o casi
    colSpan = 1;
    rowSpan = 1;
  }
  return { aspectRatio, colSpan, rowSpan };
};

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedItem, setSelectedItem] = useState<typeof galleryData[0] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [gallery, setGallery] = useState(galleryData);

  useEffect(() => {
    // Solo para imágenes, detecta dimensiones y ajusta grid
    Promise.all(
      galleryData.map((item) => {
        if (item.type !== 'image') return Promise.resolve(item);
        return new Promise(resolve => {
          const img = new window.Image();
          img.src = item.src;
          img.onload = () => {
            const { aspectRatio, colSpan, rowSpan } = getGridProps(img.naturalWidth, img.naturalHeight);
            resolve({ ...item, aspectRatio, colSpan, rowSpan });
          };
          img.onerror = () => resolve(item);
        });
      })
    ).then((newGallery) => setGallery(newGallery));
  }, []);

  const openModal = (item: typeof gallery[0], index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedIndex(null);
  };

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (selectedIndex === null) return;
    const newIndex = direction === 'next'
      ? (selectedIndex + 1) % gallery.length
      : (selectedIndex - 1 + gallery.length) % gallery.length;
    setSelectedItem(gallery[newIndex]);
    setSelectedIndex(newIndex);
  }, [selectedIndex, gallery]);

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
            Una selección de mis trabajos visuales. Haz clic en cualquier elemento para verlo en detalle.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group overflow-hidden rounded-xl relative shadow-lg cursor-pointer`}
              onClick={() => openModal(item, index)}
              style={{
                gridColumn: `span ${item.colSpan || 1}`,
                gridRow: `span ${item.rowSpan || 1}`,
              }}
            >
              {item.type === 'image' ? (
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={item.poster}
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-[90vw] h-[80vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-full object-contain" />
              ) : (
                <video src={selectedItem.src} className="w-full h-full object-contain" controls autoPlay loop poster={selectedItem.poster} />
              )}
            </motion.div>
            
            <button onClick={closeModal} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50">
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 rounded-full p-2 z-50"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors bg-black/30 rounded-full p-2 z-50"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;