import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
    <section id="contact" ref={ref} className="relative py-20 px-6 lg:px-16 overflow-hidden">
      {/* fondo/efectos removidos para mostrar Background global */}

      <div className="relative max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-white">Trabajemos juntos</h2>
          <div className="w-12 h-1 rounded-full bg-secondary mt-2 mb-4" />
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto o una idea? Cuéntame los objetivos y verás una propuesta práctica, clara y orientada a resultados.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: contacto y highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-dark-100 border border-dark-200/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Ponte en contacto</h3>
              <p className="text-gray-400 mb-4">
                Respondo rápido y propongo alternativas prácticas. Si prefieres, envía un breve resumen del proyecto y te devuelvo un plan.
              </p>

              <div className="space-y-3">
                {contactInfo.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={i}
                      href={c.href}
                      target={c.label === 'Ubicación' ? '_blank' : undefined}
                      rel={c.label === 'Ubicación' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg bg-dark-100/60 border border-dark-200/30 hover:translate-x-1 transition-transform"
                    >
                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">{c.label}</div>
                        <div className="text-sm text-white font-medium">{c.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl bg-dark-100 border border-dark-200/50 p-6 shadow-lg">
              <h4 className="text-sm text-gray-300 mb-2">Disponibilidad</h4>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <div className="text-sm text-white font-medium">Disponible para proyectos freelance</div>
              </div>
              <p className="text-sm text-gray-400">Tiempo medio de respuesta: 24 horas. Tarifas y alcance se discuten según requerimientos.</p>
            </div>
          </motion.div>

          {/* Right: formulario con estilo tipo card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.02))] border border-dark-200/50 p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5" aria-labelledby="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre completo *</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="correo@ejemplo.com"
                />
                {errors.email && <div id="error-email" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.email}</div>}
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Breve descripción del proyecto"
                />
                {errors.subject && <div id="error-subject" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.subject}</div>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className="w-full px-4 py-3 rounded-lg bg-dark-100 border border-dark-200/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Cuéntame sobre tu proyecto, objetivos y presupuesto (opcional)..."
                />
                {errors.message && <div id="error-message" className="mt-2 text-sm text-red-400 flex items-center gap-2"><AlertCircle size={14} />{errors.message}</div>}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-primary to-primary/700 text-white font-semibold hover:brightness-95 transition-all"
                  aria-label="Enviar mensaje"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                <div className="text-sm text-gray-400">O también puedes escribir por WhatsApp o revisar mi perfil en GitHub.</div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;