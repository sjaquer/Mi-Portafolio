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
      className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden bg-gray-900/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent"
          >
            SJ
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-[#F2A900]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors"
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
            className="md:hidden py-4 border-t border-gray-800/50"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-[#F2A900] bg-gray-800/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                {section.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;