import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Youtube, Mail, ArrowUp } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/sjaquer_', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" role="contentinfo" className="relative border-t border-dark-100/30 bg-gradient-to-t from-dark-100/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="space-y-3">
            <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-white">{siteContent.brand.name}</motion.h3>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="text-gray-300 max-w-md">{siteContent.footer.about}</motion.div>
            <div className="mt-4 flex items-center gap-3">
              <a href={`mailto:${siteContent.footer.contactEmail}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(255,255,255,0.03)] text-white text-sm"><Mail size={14} />{siteContent.footer.contactEmail}</a>
            </div>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-dark-100 text-gray-300 hover:text-white hover:bg-dark-200 transition-transform transform hover:scale-105">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h4 className="text-white font-semibold mb-3">Servicios</h4>
              <ul className="text-gray-300 space-y-2">
                <li><a href="#portfolio" onClick={() => scrollToSection('#portfolio')} className="hover:text-white">Proyectos web</a></li>
                <li><a href="#skills" onClick={() => scrollToSection('#skills')} className="hover:text-white">Tecnologías</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('#contact')} className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-white font-semibold mb-3">Libro de reclamaciones</h4>
            <p className="text-gray-300 mb-3">Si tienes un reclamo o comentario formal, envíanos los detalles aquí y lo atenderemos en el menor tiempo posible.</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
              const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
              const subject = encodeURIComponent('Libro de Reclamaciones - ' + ((form.elements.namedItem('subject') as HTMLInputElement)?.value || 'Sin asunto'));
              const message = encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0AMensaje:%0A${(form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''}`);
              // Open user's mail client with prefilled values (simplest, reliable approach without backend)
              window.location.href = `mailto:${siteContent.footer.contactEmail}?subject=${subject}&body=${message}`;
            }} className="flex flex-col items-end gap-2 max-w-sm ml-auto">
              <input name="name" aria-label="Nombre" placeholder="Nombre completo" className="w-full px-3 py-2 rounded-md bg-dark-100 border border-dark-200/30 text-white" />
              <input name="email" aria-label="Correo" type="email" placeholder="tu@correo.com" className="w-full px-3 py-2 rounded-md bg-dark-100 border border-dark-200/30 text-white" />
              <input name="subject" aria-label="Asunto" placeholder="Asunto" className="w-full px-3 py-2 rounded-md bg-dark-100 border border-dark-200/30 text-white" />
              <textarea name="message" aria-label="Mensaje" placeholder="Describe tu reclamo" rows={4} className="w-full px-3 py-2 rounded-md bg-dark-100 border border-dark-200/30 text-white" />
              <div className="flex items-center gap-2">
                <button type="submit" className="px-4 py-2 rounded-md bg-primary text-white">Enviar reclamo</button>
                <button type="button" onClick={() => window.location.href = `mailto:${siteContent.footer.contactEmail}`} className="px-3 py-2 rounded-md bg-[rgba(255,255,255,0.02)] text-white">Contactar</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-100/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">© {currentYear} {siteContent.brand.name} — Hecho con <Heart className="text-secondary" size={14} /> React & TypeScript</div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white">Política de privacidad</a>
            <a href="/terms" className="hover:text-white">Términos</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)]">
              <ArrowUp size={14} /> Volver arriba
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;