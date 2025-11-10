import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Shield, Zap } from 'lucide-react';
import { ContactForm } from '../types';
import { BentoGrid, BentoCard } from './BentoGrid';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Ingresa un correo válido';
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';
    else if (formData.message.length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('https://formspree.io/f/xkgovzvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Correo', value: 'sjaquer@outlook.es', href: 'mailto:sjaquer@outlook.es' },
    { icon: Phone, label: 'Teléfono', value: '+51 946978919', href: 'tel:+51946978919' },
    { icon: MapPin, label: 'Ubicación', value: 'Lima, Perú', href: 'https://maps.app.goo.gl/gSkno6Uh64ESk8cz6' }
  ];

  return (
    <section id="contact" className="relative py-20 px-6 lg:px-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Trabajemos juntos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto o una idea? Cuéntame los objetivos y verás una propuesta práctica, clara y orientada a resultados
          </p>
        </motion.header>

        <BentoGrid columns={3}>
          {/* Info de contacto cards */}
          {contactInfo.map((c, i) => {
            const Icon = c.icon;
            return (
              <BentoCard key={i} span="small" delay={i * 0.1}>
                <a
                  href={c.href}
                  target={c.label === 'Ubicación' ? '_blank' : undefined}
                  rel={c.label === 'Ubicación' ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center h-full justify-center gap-4 group"
                >
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{c.label}</div>
                    <div className="text-base font-semibold text-white">{c.value}</div>
                  </div>
                </a>
              </BentoCard>
            );
          })}

          {/* Disponibilidad card */}
          <BentoCard span="medium" delay={0.3}>
            <div className="flex flex-col h-full justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-success animate-pulse" />
                <h3 className="text-xl font-bold text-white">Disponible para proyectos</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Tiempo medio de respuesta: <span className="font-semibold text-white">24 horas</span>
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[rgba(255,255,255,0.03)]">
                <div className="text-center">
                  <Clock size={24} className="text-primary mx-auto mb-2" />
                  <div className="text-xs text-gray-400">Respuesta rápida</div>
                </div>
                <div className="text-center">
                  <Shield size={24} className="text-secondary mx-auto mb-2" />
                  <div className="text-xs text-gray-400">Entrega segura</div>
                </div>
                <div className="text-center">
                  <Zap size={24} className="text-success mx-auto mb-2" />
                  <div className="text-xs text-gray-400">Soluciones ágiles</div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Formulario card - wide */}
          <BentoCard span="wide" delay={0.4}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Cuéntame tu proyecto</h3>
              <p className="text-gray-400">Respondo en menos de 24 horas con una propuesta clara y orientada a resultados</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5" aria-labelledby="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre completo *</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                    placeholder="Tu nombre"
                  />
                  {errors.name && <div id="error-name" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.name}</div>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <div id="error-email" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.email}</div>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Asunto *</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 text-base"
                  placeholder="Breve descripción del proyecto"
                />
                {errors.subject && <div id="error-subject" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.subject}</div>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none text-base"
                  placeholder="Cuéntame sobre tu proyecto, objetivos y presupuesto (opcional)..."
                />
                {errors.message && <div id="error-message" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.message}</div>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white text-lg font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Enviar mensaje"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-3 rounded-md bg-green-500/10 border border-green-500/20 text-green-400">
                  <CheckCircle size={18} /> ¡Mensaje enviado! Responderé pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle size={18} /> Ocurrió un error. Intenta de nuevo o contáctame por correo.
                </motion.div>
              )}
            </form>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
};

export default Contact;