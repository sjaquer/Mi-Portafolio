import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/sjaquer_', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Portafolio', href: '#portfolio' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark/90 border-t border-dark-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Sebastian Jaque
                </span>
              </h3>
              <p className="text-gray-300 max-w-md">
                Mejora empresarial mediante programación, soluciones creativas y tecnología,
                optimizando procesos y la experiencia de clientes y empresas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-center gap-4 mt-4 mb-4"
            >
              <a
                href="mailto:sjaquer@outlook.es"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span className="text-sm">sjaquer@outlook.es</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+51 946-978-919</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex gap-3"
            >
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

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h4 className="text-white font-semibold mb-3">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <h4 className="text-white font-semibold mb-3">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Desarrollo Web</li>
                <li>Desarrollo de Apps Móviles</li>
                <li>Visualización 3D</li>
                <li>Diseño UI/UX</li>
                <li>Producción de Video</li>
                <li>Consultoría</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 pt-6 border-t border-dark-100/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span>© {currentYear} sjaquer. Hecho con</span>
            <Heart className="text-secondary" size={14} />
            <span>usando React y TypeScript</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-300">
            <button className="hover:text-white transition-colors">Política de Privacidad</button>
            <button className="hover:text-white transition-colors">Términos de Servicio</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;