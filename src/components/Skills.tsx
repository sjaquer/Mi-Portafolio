import { motion } from 'framer-motion';
import { Code2, Server, BrainCircuit, CloudCog } from 'lucide-react';
import { MOTION } from '../utils/animations';

const skillCategories = [
  {
    id: 'frontend', title: 'Frontend', icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Next.js']
  },
  {
    id: 'backend', title: 'Backend', icon: Server,
    skills: ['Node.js', 'Python', 'Firebase', 'SQL', 'REST APIs', 'ETL']
  },
  {
    id: 'ai', title: 'AI Integration', icon: BrainCircuit,
    skills: ['Prompt Engineering', 'Gemini & OpenAI API', 'Modelos Locales', 'Vector Embeddings', 'RAG Architectures'],
    featured: true
  },
  {
    id: 'devops', title: 'DevOps', icon: CloudCog,
    skills: ['Git', 'Vercel', 'Docker', 'GCP', 'CI/CD']
  }
];

const Skills = () => (
  <section id="skills" className="py-24 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <motion.div 
        variants={MOTION.fadeUp} 
        initial="initial" 
        whileInView="whileInView" 
        viewport={MOTION.viewport}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight mb-6">
          Stack Técnico.
        </h2>
        <p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
          Herramientas y tecnologías que utilizo para construir arquitecturas escalables, 
          integraciones de IA de alto rendimiento y experiencias de usuario premium.
        </p>
      </motion.div>

      <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              variants={MOTION.staggerChild}
              className={`group bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 flex flex-col transition-all duration-500 hover:bg-zinc-900/40 ${cat.featured ? 'ring-1 ring-violet-500/20 hover:border-violet-500/40 shadow-xl shadow-violet-500/5' : 'hover:border-zinc-700'}`}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-950/50 border border-zinc-800/50 ${cat.featured ? 'text-violet-400' : 'text-zinc-400'}`}>
                  <Icon size={24} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 font-display">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <div 
                    key={skill} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors group/skill"
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${skill.toLowerCase().replace(' & ', ',').replace(' / ', ',').replace('.js', 'js').replace(' ', '')}`} 
                      alt={skill}
                      className="w-4 h-4 grayscale group-hover/skill:grayscale-0 transition-all duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-xs font-medium text-zinc-400 group-hover/skill:text-zinc-200 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;
