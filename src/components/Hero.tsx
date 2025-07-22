import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Briefcase,
  Code,
  Camera,
  Palette
} from 'lucide-react';
import profileImg from '../../images/iconperso.jpg';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://instagram.com/sjaquer_', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube' }
  ];

  const specialties = [
    { icon: Briefcase, label: 'Administración de Negocios', color: 'from-blue-400 to-cyan-400' },
    { icon: Code, label: 'Desarrollo de Software', color: 'from-purple-400 to-pink-400' },
    { icon: Camera, label: 'Fotografía Profesional', color: 'from-green-400 to-emerald-400' },
    { icon: Palette, label: 'Diseño 3D', color: 'from-red-400 to-orange-400' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/946978919?text=Hola, te eh contactado a través de tu pagina', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'pdf/cv-sj-2025.pdf';
    link.download = 'Sebastián Jaque-CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Professional Title */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#F2A900]/10 to-[#0072C6]/10 rounded-full border border-[#F2A900]/20 mb-6"
            >
              <div className="w-2 h-2 bg-[#F2A900] rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-300">Disponible para trabajar</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-[#F2A900] via-[#0072C6] to-white bg-clip-text text-transparent">
               Sebastián Jaque
              </span>
            </motion.h1>

            {/* Titulo animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-6"
            >
              <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
                Creative Business Designer
              </span>
              <span className="text-gray-400"> & </span>
              <span className="bg-gradient-to-r from-[#0072C6] to-[#F2A900] bg-clip-text text-transparent">
                Solutions Developer
              </span>
            </motion.div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              Impulsando la mejora empresarial mediante programación, 
              soluciones creativas y tecnología aplicada; optimizando 
              procesos y mejorando la experiencia del cliente y la empresa.
            </motion.p>

            {/* Especialidades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-[#0072C6]/30 transition-all duration-300"
                >
                  <div className={`p-2 bg-gradient-to-r ${specialty.color} bg-opacity-20 rounded-lg`}>
                    <specialty.icon size={16} className={`bg-gradient-to-r ${specialty.color} bg-clip-text text-transparent`} />
                  </div>
                  <span className="text-xs text-gray-300 font-medium">{specialty.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Location & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Perú, Lima.</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>sjaquer@outlook.es</span>
              </div>
            </motion.div>

            {/* Botones Accionares */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F2A900] to-[#0072C6] text-white rounded-lg font-medium hover:from-[#d99900] hover:to-[#0060a3] transition-all duration-300 transform hover:scale-105"
              >
                <Download size={18} />
                Descargar CV
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="group flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </motion.div>

            {/* Enlaces Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Fondo Animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2A900]/20 via-[#0072C6]/20 to-[#F2A900]/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Imagen de Perfil */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F2A900] via-[#0072C6] to-[#F2A900] p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImg}
                      alt="Sebastián Jaque"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Indicadores de Especialidad Flotantes */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="absolute -top-4 -right-4 p-3 bg-[#0072C6] rounded-full shadow-lg"
              >
                <Briefcase size={20} className="text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: 'spring' }}
                className="absolute -bottom-4 -left-4 p-3 bg-[#F2A900] rounded-full shadow-lg"
              >
                <Code size={20} className="text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, type: 'spring' }}
                className="absolute top-1/2 -left-6 p-3 bg-green-500 rounded-full shadow-lg"
              >
                <Camera size={20} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Boton Flotante de Whatsapp */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;
