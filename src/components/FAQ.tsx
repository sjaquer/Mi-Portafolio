import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';
import Reveal from './Reveal';

const faqItems = [
  {
    question: '¿Qué tipos de proyectos puedes desarrollar?',
    answer: 'Me especializo en sistemas internos, automatizaciones, dashboards de BI y soluciones de IA para negocios. Trabajo con React, Python, bases de datos y APIs para crear herramientas que optimizan operaciones reales.',
  },
  {
    question: '¿Cuál es tu proceso de trabajo?',
    answer: 'Primero entiendo el problema de negocio, luego diseño la arquitectura técnica, desarrollo en sprints cortos con entregas frecuentes, y finalmente implemento con monitoreo continuo. Cada proyecto incluye documentación y soporte.',
  },
  {
    question: '¿Trabajas con empresas internacionales?',
    answer: 'Sí, trabajo de forma remota con clientes de cualquier ubicación. Tengo experiencia en proyectos para mercados de América Latina, Estados Unidos y Europa, adaptándome a diferentes zonas horarias y requerimientos.',
  },
  {
    question: '¿Qué tecnologías utilizas principalmentee?',
    answer: 'Mi stack principal incluye React/TypeScript para frontend, Python/Node.js para backend, PostgreSQL/SQL Server para bases de datos, y herramientas de IA como Gemini y modelos locales. Para infraestructura uso Firebase, Vercel y servicios cloud.',
  },
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer: 'Depende de la complejidad. Un dashboard simple puede tomar 2-3 semanas, mientras que un sistema completo con integraciones puede tomar 2-3 meses. Siempre establezco plazos realistas con entregas incrementales.',
  },
  {
    question: '¿Ofreces soporte post-lanzamiento?',
    answer: 'Sí, incluyo soporte técnico y mantenimiento después del lanzamiento. Ofrezco planes de soporte mensual para actualizaciones, monitoreo y resolución de problemas. También puedo capacitar a tu equipo para el mantenimiento interno.',
  },
];

const AccordionItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-zinc-800/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 px-4 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/30 transition-colors"
      >
        <span className="text-lg font-semibold text-zinc-100">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <IconChevronDown size={20} className="text-zinc-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 text-zinc-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 py-24 sm:py-32 border-t border-zinc-900/50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <Reveal className="mb-12 text-center sm:text-left" y={20} stagger={100} selector="[data-reveal]">
          <span
            data-reveal
            className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-4"
          >
            FAQ
          </span>
          <h2
            data-reveal
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-zinc-50 tracking-tight leading-[1.1]"
          >
            Preguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              Frecuentes
            </span>
          </h2>
        </Reveal>

        {/* Accordion */}
        <div className="forest-glass rounded-2xl overflow-hidden">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
