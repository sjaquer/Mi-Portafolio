import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, MapPin, Phone, FileText, Bot, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/siteContent';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-zinc-950 relative overflow-hidden">
    {/* Top gradient border */}
    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative text-center mb-20 p-12 md:p-16 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(34,211,238,0.06),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-50 font-display tracking-tight mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Cuéntame sobre tu idea y encontremos juntos la mejor forma de hacerla realidad con datos, automatización y tecnología.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(34,211,238,0.3)' }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${siteContent.footer.contactEmail}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-zinc-950 font-bold text-sm shadow-lg shadow-cyan-500/25"
            >
              <Mail size={16} /> Enviar Correo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/sjaquer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 hover:text-zinc-100 font-semibold text-sm transition-colors"
            >
              <Linkedin size={16} /> Conectar en LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Footer grid */}
      <div className="grid md:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-bold text-zinc-50 mb-3 font-display">Sebastián Jaque</h4>
          <p className="text-zinc-500 text-sm leading-relaxed mb-5 max-w-md">
            {siteContent.footer.about}
          </p>
          <div className="flex gap-3">
            {[
              { href: 'https://github.com/sjaquer', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sjaquer', icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${siteContent.footer.contactEmail}`, icon: Mail, label: 'Email' },
            ].map(social => (
              <motion.a key={social.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} href={social.href} target={social.label !== 'Email' ? '_blank' : undefined} rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all" aria-label={social.label}>
                <social.icon size={18} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-sm font-bold text-zinc-50 mb-4 uppercase tracking-wider">Contacto</h4>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${siteContent.footer.contactEmail}`} className="flex items-center gap-2.5 text-zinc-500 hover:text-cyan-400 transition-colors">
              <Mail size={14} className="shrink-0" /> {siteContent.footer.contactEmail}
            </a>
            <a href={`tel:${siteContent.footer.contactPhone}`} className="flex items-center gap-2.5 text-zinc-500 hover:text-cyan-400 transition-colors">
              <Phone size={14} className="shrink-0" /> {siteContent.footer.contactPhone}
            </a>
            <div className="flex items-center gap-2.5 text-zinc-600">
              <MapPin size={14} className="shrink-0" /> Centro de Lima, Lima - Perú
            </div>
            <a href="https://sjaquer.is-a.dev" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-zinc-500 hover:text-cyan-400 transition-colors">
              <ExternalLink size={14} className="shrink-0" /> sjaquer.is-a.dev
            </a>
          </div>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="text-sm font-bold text-zinc-50 mb-4 uppercase tracking-wider">Recursos</h4>
          <div className="space-y-3">
            <a href="/resume.txt" target="_blank" className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-cyan-400 transition-colors group">
              <FileText size={14} className="shrink-0" />
              <span>CV (Español)</span>
              <span className="ml-auto text-[10px] font-mono text-zinc-700 group-hover:text-cyan-500/50">.txt</span>
            </a>
            <a href="/resume_en.txt" target="_blank" className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-violet-400 transition-colors group">
              <Bot size={14} className="shrink-0" />
              <span>CV (English)</span>
              <span className="ml-auto text-[10px] font-mono text-zinc-700 group-hover:text-violet-500/50">.txt</span>
            </a>
            <a href="/ai.txt" target="_blank" className="flex items-center gap-2.5 text-sm font-mono text-violet-500/60 hover:text-violet-400 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" /> ai.txt
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>{siteContent.footer.copyright}. Todos los derechos reservados.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-zinc-600">Disponible para proyectos</span>
          </span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors group">
            Volver arriba <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;