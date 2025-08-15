import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es obligatorio';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xkgovzvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Correo',
      value: 'sjaquer@outlook.es',
      href: 'mailto:sjaquer@outlook.es'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+51 946978919',
      href: 'tel:+51 946978919'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Perú, Lima',
      href: 'https://maps.app.goo.gl/gSkno6Uh64ESk8cz6'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
              Trabajemos Juntos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Listo para dar vida a tus ideas? Ponte en contacto y creemos algo increíble juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informacion de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Ponte en Contacto</h3>
              <p className="text-gray-400 mb-8">
                Siempre estoy abierto a discutir nuevas oportunidades, proyectos creativos o posibles colaboraciones.
                Ya sea que tengas un proyecto específico en mente o simplemente quieras explorar posibilidades, me encantaría saber de ti.
              </p>
            </div>

            {/* Metodos de contacto */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.label === 'Location' ? '_blank' : undefined}
                  rel={contact.label === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl backdrop-blur-sm hover:border-[#0072C6]/30 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-[#F2A900]/20 to-[#0072C6]/20 rounded-lg group-hover:from-[#F2A900]/30 group-hover:to-[#0072C6]/30 transition-colors">
                    <contact.icon className="text-[#F2A900] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{contact.label}</div>
                    <div className="text-white font-medium group-hover:text-[#F2A900] transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Disponibilidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Disponible para nuevos proyectos</span>
              </div>
              <p className="text-gray-400 text-sm">
                Actualmente acepto nuevos clientes y oportunidades emocionantes. Tiempo medio de respuesta: 24 horas.
              </p>
            </motion.div>
          </motion.div>

          {/* Contacto Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#262626]/50 border border-[#F2A900]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072C6]/50"
                  placeholder="Ingresa tu nombre completo"
                />
                {errors.name && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#262626]/50 border border-[#F2A900]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072C6]/50"
                  placeholder="Ingresa tu correo electrónico"
                />
                {errors.email && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#262626]/50 border border-[#F2A900]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072C6]/50"
                  placeholder="¿De qué se trata?"
                />
                {errors.subject && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    {errors.subject}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#262626]/50 border border-[#F2A900]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0072C6]/50 resize-none"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                />
                {errors.message && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Boton enviar */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F2A900] to-[#0072C6] text-white rounded-lg font-medium hover:from-[#d99900] hover:to-[#0060a3] transition-all duration-300"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>Algo salió mal. Por favor intenta de nuevo o contáctame directamente.</span>
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