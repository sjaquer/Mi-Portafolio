import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import RotatingText from './RotatingText';

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub', color: 'hover:text-gray-400' },
  { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube', color: 'hover:text-red-400' }
];

/**
 * Hero principal estático - optimizado para carga rápida
 * UX/UI mejorado con grid layout y animaciones fluidas
 */
const Hero = () => {
  const rotatingWords = ['CONVIERTEN', 'POTENCIAN', 'ESCALAN'];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="relative w-full max-w-[1600px] mx-auto">
        {/* Social links - flotantes en mobile, estáticos en desktop para evitar superposición con la imagen */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute top-4 right-4 flex gap-3 z-20 lg:static lg:mb-6 lg:justify-end"
        >
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] backdrop-blur-md text-gray-300 ${s.color} transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]`}
                aria-label={s.label}
              >
                <Icon size={22} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Grid layout: contenido + imagen profesional */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-20 lg:mt-0">
          {/* Columna izquierda: Contenido principal */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-8">
            {/* Badge superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Disponible para proyectos
              </span>
            </motion.div>

            {/* Título principal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold animated-gradient-text leading-[1.1] tracking-tight"
              >
                Soluciones digitales que
              </motion.h1>
              
              {/* Pill amarillo con texto rotativo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
                className="flex justify-center lg:justify-start"
              >
                <span className="rotating-pill">
                  <RotatingText
                    texts={rotatingWords}
                    rotationInterval={2500}
                    mainClassName="font-extrabold rotating-solid"
                    splitBy="words"
                  />
                </span>
              </motion.div>
            </div>

            {/* Subtítulo con iconos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 text-xl md:text-2xl font-semibold"
            >
              <span className="text-gray-400">Estrategia</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-primary">desarrollo</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-secondary">creatividad</span>
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Diseño y desarrollo de productos digitales escalables con enfoque en{' '}
              <span className="text-white font-semibold">resultados medibles</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#portfolio"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              >
                Ver proyectos
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] text-white font-semibold text-lg hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                Contactar
              </a>
            </motion.div>
          </div>

          {/* Columna derecha: Imagen profesional con Bento Glass UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 xl:col-span-6 relative hidden lg:block"
          >
            <div className="relative max-w-[550px] mx-auto">
              {/* Card glass principal con imagen */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl shadow-2xl">
                {/* Borde animado superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
                
                {/* Imagen */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/profile.webp"
                    alt="Sebastián Jaque - Digital Solutions Developer"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge flotante */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-md rounded-2xl p-4 border border-[rgba(255,255,255,0.1)]">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-bold text-lg mb-1">Sebastián Jaque</h3>
                          <p className="text-gray-300 text-sm">Digital Solutions Developer</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-xs text-gray-300">Disponible</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Elementos decorativos flotantes */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/30 blur-sm"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 0.95, 1]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-secondary/20 blur-sm"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;