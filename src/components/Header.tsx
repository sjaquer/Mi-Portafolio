// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for fixed header
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
      { id: 'home', label: 'Inicio' },
      { id: 'portfolio', label: 'Proyectos' },
      { id: 'automation', label: 'Data' },
      { id: 'skills', label: 'Herramientas' },
      { id: 'experience', label: 'Trayectoria' },
  ];

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${scrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-sm border-b border-slate-800 py-3' 
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3 group relative z-50"
          >
             <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-white/5 group-hover:shadow-primary/20 transition-shadow">
                <img 
                  src="/icon0.svg" 
                  alt="Sebastián Jaque - Datos, Automatización y Sistemas Digitales"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
             </div>
             <span className={`font-display font-bold text-lg tracking-tight text-white`}>
                {siteContent.brand.name}
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
             <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-300 ${scrolled ? 'bg-slate-800/50 border-slate-700/50' : 'bg-black/20 border-transparent has-backdrop-filter'}`}>
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                ${isActive ? 'text-primary' : 'text-slate-400 hover:text-white'}
                            `}
                        >
                            {isActive && (
                                <motion.div 
                                    layoutId="nav-bg"
                                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_10px_rgba(217,229,18,0.2)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    )
                })}
             </div>

             <div className="w-px h-8 bg-slate-800 mx-4" />

             <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-full bg-[#f5fcff] text-[#0a0a0a] font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/10 flex items-center gap-2"
             >
                Contactar <ArrowUpRight size={16} />
             </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>
    </motion.header>

    {/* Mobile Menu Overlay - Mejorado para iOS/Android */}
    <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 md:hidden"
            >
                {/* Backdrop con blur */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Menu Panel */}
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#171717] shadow-2xl flex flex-col safe-area-inset-bottom"
                >
                    {/* Header del menu */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-800">
                        <span className="text-lg font-bold text-white">Menú</span>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-xl bg-slate-900/50 text-slate-400 hover:text-white transition-colors touch-manipulation"
                            aria-label="Cerrar menú"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    
                    {/* Navigation items */}
                    <div className="flex-1 overflow-y-auto py-4 px-4">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`
                                        flex items-center gap-4 p-4 rounded-xl text-left transition-all touch-manipulation
                                        ${activeSection === item.id 
                                            ? 'bg-primary/10 text-primary border border-primary/20' 
                                            : 'text-slate-300 hover:bg-slate-800/50'
                                        }
                                    `}
                                >
                                    <span className={`w-2 h-2 rounded-full ${activeSection === item.id ? 'bg-primary' : 'bg-slate-600'}`} />
                                    <span className="text-lg font-semibold">{item.label}</span>
                                </motion.button>
                            ))}
                        </div>
                        
                        {/* CTA Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => scrollToSection('contact')}
                            className="w-full mt-6 px-6 py-4 rounded-xl bg-primary text-black font-bold text-lg hover:bg-primary-400 transition-all flex items-center justify-center gap-2 touch-manipulation"
                        >
                            Contactar
                            <ArrowUpRight size={20} />
                        </motion.button>
                    </div>
                    
                    {/* Footer */}
                    <div className="p-6 border-t border-slate-800">
                        <p className="text-slate-500 text-sm text-center">
                            © {new Date().getFullYear()} Sebastián Jaque
                        </p>
                        <p className="text-slate-600 text-xs text-center mt-1">
                            Datos · Automatización · Sistemas Digitales
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
};

export default Header;