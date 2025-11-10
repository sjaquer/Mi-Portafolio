import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/sjaquer_', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Tecnologías', href: '#skills' },
    { label: 'Proyectos', href: '#portfolio' },
    { label: 'Reseñas', href: '#reviews' },
    { label: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer role="contentinfo" className="relative border-t border-dark-100/30 overflow-hidden">
      {/* Footer usa sólo contenedores; fondo global visible */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-4">
              <h3 className="text-2xl font-bold mb-2 text-white">{siteContent.brand.name}</h3>
              <div className="w-12 h-1 rounded-full bg-secondary mt-2 mb-2" />
              <p className="text-gray-300 max-w-md">{siteContent.footer.about}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="flex items-center gap-4 mt-4 mb-4">
            <a href={`mailto:${siteContent.footer.contactEmail}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" aria-label="Enviar email">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">{siteContent.footer.contactEmail}</span>
            </a>
            <a href={`tel:${siteContent.footer.contactPhone}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" aria-label="Llamar">
              <Phone size={16} className="text-primary" />
              <span className="text-sm">{siteContent.footer.contactPhone}</span>
            </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }} className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-dark-100 rounded-lg text-gray-300 hover:text-white hover:bg-dark-200 transition-all duration-200 hover:scale-105"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }}>
              <h4 className="text-white font-semibold mb-3">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      aria-label={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.16 }}>
              <h4 className="text-white font-semibold mb-3">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Desarrollo Web</li>
                <li>Visualización 3D</li>
                <li>Diseño UI/UX</li>
                <li>Producción de Video</li>
                <li>Automatización & Soporte</li>
                <li>Consultoría técnica</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.24 }} className="mt-10 pt-6 border-t border-dark-100/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span>© {currentYear} Sebastián Jaque — Hecho con</span>
            <Heart className="text-secondary" size={14} />
            <span>React & TypeScript</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a href="/privacy" className="hover:text-white transition-colors" aria-label="Política de privacidad">Política de privacidad</a>
            <a href="/terms" className="hover:text-white transition-colors" aria-label="Términos de servicio">Términos</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;