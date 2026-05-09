import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Header: React.FC<{ activeSection: string; setActiveSection: (s: string) => void }> = ({ activeSection, setActiveSection }) => {
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
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center gap-3 group relative z-50">
           <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-white/5 group-hover:shadow-cyan-500/20 transition-shadow flex items-center justify-center bg-slate-800/10">
             <img src="/favicon.svg" alt="Logo" width={40} height={40} className="max-w-full max-h-full object-contain object-center p-1" loading="eager" />
           </div>
             <span className="font-display font-bold text-lg tracking-tight text-zinc-50">{siteContent.brand.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
             <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-300 ${scrolled ? 'bg-zinc-900/50 border-zinc-800' : 'bg-black/20 border-transparent backdrop-blur-sm'}`}>
                {siteContent.nav.filter(i => i.id !== 'contact' && i.id !== 'home').map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'text-cyan-400' : 'text-zinc-400 hover:text-zinc-100'}`}>
                            {isActive && <motion.div layoutId="nav-bg" className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/20 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    )
                })}
             </div>
             <div className="w-px h-8 bg-zinc-800 mx-4" />
             <button onClick={() => scrollToSection('contact')} className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-cyan-500/10 flex items-center gap-2">
                Contactar <ArrowUpRight size={16} />
             </button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden relative z-50 p-2 text-zinc-100">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </motion.header>

    <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 md:hidden">
                <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-zinc-950 shadow-2xl flex flex-col safe-area-inset-bottom">
                    <div className="flex items-center justify-between p-6 border-b border-zinc-800">
                        <span className="text-lg font-bold text-zinc-50">Menú</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-zinc-50">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-4 px-4">
                        <div className="flex flex-col gap-1">
                            {siteContent.nav.map((item) => (
                                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex items-center gap-4 p-4 rounded-xl text-left ${activeSection === item.id ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-zinc-300 hover:bg-zinc-900'}`}>
                                    <span className={`w-2 h-2 rounded-full ${activeSection === item.id ? 'bg-cyan-400' : 'bg-zinc-600'}`} />
                                    <span className="text-lg font-semibold">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
};

export default Header;