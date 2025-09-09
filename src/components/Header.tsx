import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const sections = [
    { id: 'home', label: 'Inicio' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'education', label: 'Educación' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'gallery', label: 'Galería' },
    { id: 'contact', label: 'Contacto' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-dark/90 backdrop-blur-xs border-b border-dark-100/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo con micro-animación mejorada */}
          <motion.a
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}images/iconweb.webp`}
                alt="Logo del sitio"
                className="w-10 h-10 rounded-lg object-contain transition-transform duration-200 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </motion.a>

          {/* Desktop Navigation con indicadores mejorados */}
          <nav className="hidden md:flex space-x-1 items-center">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  activeSection === section.id
                    ? 'text-white bg-primary/10'
                    : 'text-gray-300 hover:text-white hover:bg-surface'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
                    style={{ x: '-50%' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 btn-primary"
              aria-label="Contacto"
            >
              Contacto
            </motion.button>
            <ThemeToggle className="ml-2" />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-100 text-gray-300 hover:text-primary transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-3 border-t border-dark-100/30"
          >
            <div className="flex flex-col px-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-secondary bg-dark-100/60'
                      : 'text-gray-300 hover:text-primary hover:bg-dark-100/30'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-2 btn-primary w-full text-center"
              >
                Contacto
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;