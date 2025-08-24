import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
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
  Code2,
  Sparkles,
} from 'lucide-react';
import profileImg from '/images/iconperso.webp';

const ROLES = [
  'Marketing Digital',
  'Fotografía & Edición',
  'Contenido que convierte',
  'Desarrollo Web (soporte)'
];

const STATS = [
  { label: 'Proyectos', value: '18+' },
  { label: 'Campañas', value: '30+' },
  { label: 'Tecnologías', value: '25+' }
];

const PILL_POINTS = [
  { icon: Sparkles, text: 'Creatividad aplicada a objetivos' },
  { icon: Briefcase, text: 'Estrategia comercial y ejecución' },
  { icon: Code2, text: 'Soporte técnico: web & automatización' }
];

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
  { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram' },
  { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
];

const Hero: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const controls = useAnimation(); // Define controls using useAnimation
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setInView(e.isIntersecting);
        if (e.isIntersecting) controls.start('visible');
      },
      { threshold: 0.28 }
    );
    obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, [controls]);

  const handleDownloadCV = () => {
    const a = document.createElement('a');
    a.href = 'pdf/sebastian-jaque-cv2025.pdf';
    a.download = 'Sebastian-Jaque-CV.pdf';
    a.click();
  };

  const handleWhatsApp = () =>
    window.open('https://wa.me/946978919?text=Hola,%20quiero%20conocer%20tus%20servicios', '_blank');

  const onPointerMove = (e: React.PointerEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setParallax({ x, y });
  };

  return (
    <section
      id="home"
      ref={rootRef}
      onPointerMove={onPointerMove}
      className="relative min-h-[80vh] md:min-h-[86vh] lg:min-h-[92vh] flex items-center pt-24 pb-20 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background global maneja el fondo; se eliminaron glows locales */}

      <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto compacto y directo */}
        <div className="z-10">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.02)] border border-dark-200/40 text-xs text-gray-300">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponible · Remoto / Freelance
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-2 text-white">
            Sebastián Jaque
          </h1>
          <div className="w-14 h-1 rounded-full bg-secondary mt-2 mb-4" />

          <div className="h-9 mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-3 text-lg sm:text-xl font-medium text-gray-100"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{ROLES[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-sm sm:text-base text-gray-300 max-w-lg mb-6">
            Combino estrategia, producción visual y desarrollo para crear experiencias que convierten. Trabajo en soluciones prácticas: campañas, automatizaciones y soporte técnico que generan resultados.
          </p>

          {/* puntos compactos (breves, clave) */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {PILL_POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-dark-200/30 text-xs text-gray-300"
                >
                  <span className="p-1 rounded-sm bg-primary/10 text-primary"><Icon size={14} /></span>
                  {p.text}
                </motion.span>
              );
            })}
          </div>

          {/* CTA claros: CV (primary) + Contactar (success) */}
          <div className="flex flex-wrap gap-3 items-center mb-6">
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-white text-sm font-semibold shadow-sm"
            >
               <Download size={14} /> CV
             </motion.button>

            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-secondary text-dark font-medium"
            >
               <MessageCircle size={14} /> Contactar
             </motion.button>

            <div className="ml-2 flex gap-2">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-[rgba(255,255,255,0.02)] border border-dark-200/30 text-gray-300 hover:text-white"
                    aria-label={s.label}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* stats compactos, con primary resaltando valores */}
          <div className="flex gap-3">
            {STATS.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.05 * i }}
                className="px-3 py-2 rounded-md bg-[rgba(255,255,255,0.02)] border border-dark-200/30 text-xs"
              >
                <div className="text-sm font-semibold text-primary">{st.value}</div>
                <div className="text-[11px] text-gray-400">{st.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Imagen con parallax sutil y mayor tamaño en PC */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            animate={{ x: parallax.x, y: parallax.y, scale: inView ? 1 : 0.99 }}
            transition={{ type: 'spring', stiffness: 80, damping: 14 }}
            className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(4,118,217,0.06),transparent_60%)]" />
            <div className="absolute inset-0 rounded-full ring-1 ring-primary/10" />
            <div className="absolute inset-6 sm:inset-8 rounded-full overflow-hidden bg-dark-100 shadow-2xl">
              <img src={profileImg} alt="Foto Sebastián" className="w-full h-full object-cover" />
            </div>

            {/* pequeño acento secondary en rim del anillo (uso puntual) */}
            <div className="absolute -right-6 -top-6 hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-[12px] text-secondary border border-secondary/20">
              <span className="text-xs">Portfolio</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp flotante (success) */}
      <motion.button
        onClick={handleWhatsApp}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-success text-white shadow-lg"
        aria-label="WhatsApp"
      >
        <MessageCircle size={18} />
      </motion.button>

      {/* Info ligera inferior */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-gray-500 flex gap-6">
        <div className="flex items-center gap-1"><MapPin size={12} className="text-primary/80" /> Lima, Perú</div>
        <div className="flex items-center gap-1"><Mail size={12} className="text-primary/80" /> sjaquer@outlook.es</div>
      </div>
    </section>
  );
};

export default Hero;
