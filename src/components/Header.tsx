import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
          {/* Logo: usar favicon como imagen */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="/"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3"
          >
            <img
              src="/favicon.ico"
              alt="Logo del sitio"
              className="w-10 h-10 rounded-md object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-secondary'
                    : 'text-gray-300 hover:text-primary'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 btn-primary"
              aria-label="Contacto"
            >
              Contacto
            </button>
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