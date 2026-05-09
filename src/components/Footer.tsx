import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-zinc-950 relative overflow-hidden">
    {/* Top gradient border */}
    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative text-center mb-20 p-12 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(34,211,238,0.06),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-50 font-display tracking-tight mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Hablemos sobre cómo puedo ayudarte a construir tu próxima solución.
          </p>
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${siteContent.footer.contactEmail}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 font-bold text-sm shadow-lg shadow-cyan-500/25"
          >
            <Mail size={16} /> Contactar
          </motion.a>
        </div>
      </motion.div>

      {/* Footer grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <h4 className="text-lg font-bold text-zinc-50 mb-4 font-display">{siteContent.brand.name}</h4>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">{siteContent.footer.about}</p>
          <div className="flex gap-3">
            {[
              { href: 'https://github.com/sjaquer', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sjaquer', icon: Linkedin, label: 'LinkedIn' },
            ].map(social => (
              <motion.a key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={social.href} target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors" aria-label={social.label}>
                <social.icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-zinc-50 mb-4 uppercase tracking-wider">Contacto</h4>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${siteContent.footer.contactEmail}`} className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors">
              <Mail size={14} /> {siteContent.footer.contactEmail}
            </a>
            <a href={`tel:${siteContent.footer.contactPhone}`} className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors">
              <Phone size={14} /> {siteContent.footer.contactPhone}
            </a>
            <div className="flex items-center gap-2 text-zinc-600">
              <MapPin size={14} /> Lima, Perú
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-zinc-50 mb-4 uppercase tracking-wider">Recursos</h4>
          <div className="space-y-3">
            <a href="/resume.txt" target="_blank" className="flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-zinc-300 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> resume.txt
            </a>
            <a href="/ai.txt" target="_blank" className="flex items-center gap-2 text-sm font-mono text-violet-500/60 hover:text-violet-400 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> ai.txt
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-600">
        <p>{siteContent.footer.copyright}</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors group">
          Volver arriba <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;