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
    skills: ['Prompt Engineering', 'LLMs', 'OpenAI API', 'Embeddings', 'AWS Bedrock'],
    featured: true
  },
  {
    id: 'devops', title: 'DevOps', icon: CloudCog,
    skills: ['Git', 'Vercel', 'Docker', 'GCP', 'CI/CD']
  }
];

const Skills = () => (
  <section id="skills" className="py-24 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.fadeUp.viewport} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              variants={MOTION.staggerChild}
              className={`group bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 flex flex-col transition-all duration-500 hover:bg-zinc-900/50 ${cat.featured ? 'ring-1 ring-violet-500/10 hover:border-violet-500/30' : 'hover:border-zinc-700'}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-950/50 border border-zinc-800/50 ${cat.featured ? 'text-violet-400' : 'text-zinc-400'}`}>
                  <Icon size={24} strokeWidth={1} />
                </div>
                <h3 className="text-lg font-medium text-zinc-100">{cat.title}</h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {cat.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className={`w-1 h-1 rounded-full ${cat.featured ? 'bg-violet-500/50' : 'bg-zinc-600'}`} />
                    <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-300 transition-colors">
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
