// src/components/Footer.tsx
import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, MapPin, Briefcase, Code, FileText } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import SocialShare from './SocialShare';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram' },
    // { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" role="contentinfo" className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-surface z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <a href="/" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="inline-block group">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                        <img 
                            src="/images/iconoweb.webp" 
                            alt="Sebastián Jaque - Consultor Transformación Digital Lima"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <span className="text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                        {siteContent.brand.name}
                    </span>
                </div>
            </a>
            
            <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm leading-relaxed">
                Consultor especializado en <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('#portfolio'); }} className="text-primary-600 hover:underline">transformación digital</a>, desarrollo de <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('#skills'); }} className="text-primary-600 hover:underline">software</a> y <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('#experience'); }} className="text-primary-600 hover:underline">automatización de operaciones</a> para empresas.
            </p>
            
            <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                <a href={`mailto:${siteContent.footer.contactEmail}`} className="flex items-center gap-2 hover:text-primary-600 transition-colors w-fit">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                        <Mail size={14} />
                    </div>
                    {siteContent.footer.contactEmail}
                </a>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                        <MapPin size={14} />
                    </div>
                    <span>Lima, Perú</span>
                </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all shadow-sm">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column - Mejorado con más enlaces internos */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('#skills'); }} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-500"></span>
                  Áreas de Impacto
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('#experience'); }} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Trayectoria Profesional
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('#portfolio'); }} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('#reviews'); }} className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column - Nuevo */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Briefcase size={14} className="text-primary-500" />
                <span>Consultoría BizOps</span>
              </li>
              <li className="flex items-center gap-2">
                <Code size={14} className="text-secondary-500" />
                <span>Desarrollo de Software</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={14} className="text-green-500" />
                <span>Automatización de Procesos</span>
              </li>
            </ul>
            
            {/* Share buttons inline para móvil */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <SocialShare variant="inline" />
            </div>
          </div>

          {/* Contact / CTA Column */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contáctame</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                ¿Listo para escalar tu negocio con tecnología?
            </p>
            <a 
                href={`mailto:${siteContent.footer.contactEmail}`}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-primary-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
                Iniciar Conversación
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <div className="flex items-center gap-2">
              © {currentYear} {siteContent.brand.name} — Lima, Perú.
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <ArrowUp size={14} /> Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;