import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Briefcase,
  Code,
  Camera,
  Palette
} from 'lucide-react';
import profileImg from '/images/iconperso.webp';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
  ];

  const specialties = [
    { icon: Briefcase, label: 'Estrategia y Consultoría' },
    { icon: Code, label: 'Desarrollo Web' },
    { icon: Camera, label: 'Producción Multimedia' },
    { icon: Palette, label: 'Diseño & 3D' }
  ];

  // solo pulsación del contenedor del perfil (sin iconos orbitando)
  const pulseControls = useAnimation();
  const { ref: heroRef, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      pulseControls.start({
        scale: [1, 1.03, 1],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
      });
    } else {
      pulseControls.stop();
    }
  }, [inView, pulseControls]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/946978919?text=Hola, te eh contactado a través de tu pagina', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'pdf/sebastian-jaque-cv2025.pdf';
    link.download = 'Sebastián Jaque-CV.pdf';
    link.click();
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-primary/8 via-primary/5 to-dark/80 relative overflow-hidden"
    >
      {/* Fondo dinámico ligero (se eliminó la luz amarilla para un estilo uniforme) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-[120px]" />
        {/* luz amarilla removida */}
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
              <span className="text-sm text-gray-300">Disponible para trabajar</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Sebastián Jaque
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-xl sm:text-2xl font-medium text-gray-300 mb-6"
            >
              <span className="text-secondary">Creative Business Designer</span>
              <span className="mx-2 text-gray-500">&</span>
              <span className="text-primary">Solutions Developer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Impulso la eficiencia empresarial con tecnología creativa y soluciones a medida.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
              }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {specialties.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-100 border border-dark-200/40 hover:border-primary/40 transition-colors"
                  >
                    <div className="p-2 rounded-md bg-primary text-white shadow-sm">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm text-white/90">{s.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.55 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Perú, Lima</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>sjaquer@outlook.es</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
            >
              <button onClick={handleDownloadCV} className="btn-primary flex items-center gap-2">
                <Download size={16} />
                Descargar CV
              </button>
              <button onClick={handleWhatsApp} className="btn-ghost flex items-center gap-2">
                <MessageCircle size={16} />
                WhatsApp
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.55 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-100 rounded-lg text-gray-300 hover:text-white hover:bg-dark-200 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-primary" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Contenedor planeta con pulso, sin iconos en la foto */}
              <motion.div
                animate={pulseControls}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] flex items-center justify-center"
              >
                {/* Halo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(11,95,255,0.18), rgba(11,95,255,0.05), transparent 70%)'
                  }}
                />
                {/* Imagen */}
                <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full ring-2 ring-secondary/25 overflow-hidden bg-dark-100 shadow-[0_0_40px_-8px_rgba(11,95,255,0.4)]">
                  <img
                    src={profileImg}
                    alt="Sebastián Jaque"
                    className="w-full h-full object-cover"
                    width={384}
                    height={384}
                    fetchPriority="high"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Botón flotante WhatsApp */}
      <motion.button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.9, type: 'spring' }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} />
      </motion.button>
    </section>
  );
};

export default Hero;
