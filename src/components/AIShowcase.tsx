import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Terminal, Cpu, Braces, Sparkles, Database } from 'lucide-react';
import { MOTION } from '../utils/animations';
import React from 'react';

const capabilities = [
  { icon: Cpu, label: 'LLMs', desc: 'GPT-4o, Claude 3.5' },
  { icon: Database, label: 'Vector Data', desc: 'Embeddings & RAG' },
  { icon: Braces, label: 'Integration', desc: 'API & Webhooks' },
];

const AIShowcase = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section id="ai-showcase" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Interactive code snippet */}
          <motion.div 
            variants={MOTION.fadeUp} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={MOTION.fadeUp.viewport}
            className="w-full lg:w-7/12 relative perspective-1000"
            onMouseMove={handleMouse} 
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          >
            <motion.div 
              style={{ rotateX, rotateY }} 
              className="relative bg-zinc-950/80 backdrop-blur-2xl rounded-2xl border border-zinc-800/60 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center px-4 py-3 border-b border-zinc-800/40 bg-zinc-900/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-red-500/80 transition-colors duration-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-yellow-500/80 transition-colors duration-500 delay-75" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-green-500/80 transition-colors duration-500 delay-150" />
                </div>
                <div className="mx-auto text-[11px] text-zinc-500 font-mono flex items-center gap-2">
                  <Terminal size={12} /> ai-service.ts
                </div>
                <div className="w-10" />
              </div>
              
              <div className="p-6 md:p-8 font-mono text-[13px] md:text-[14px] leading-relaxed overflow-x-auto text-zinc-300">
                <div><span className="text-zinc-500 italic">{'// Generative Search Implementation'}</span></div>
                <div className="mt-2"><span className="text-violet-400">import</span> {'{ '}OpenAI{' }'} <span className="text-violet-400">from</span> <span className="text-cyan-300">'openai'</span>;</div>
                <div className="mt-4"><span className="text-fuchsia-400">const</span> ai = <span className="text-violet-400">new</span> OpenAI();</div>
                <div className="mt-4"><span className="text-fuchsia-400">export async function</span> <span className="text-emerald-400">semanticSearch</span>(query: <span className="text-cyan-300">string</span>) {'{'}</div>
                <div className="pl-4 mt-1"><span className="text-zinc-500 italic">{'// 1. Create embedding for user query'}</span></div>
                <div className="pl-4"><span className="text-fuchsia-400">const</span> emb = <span className="text-violet-400">await</span> ai.embeddings.create({'{'}</div>
                <div className="pl-8">model: <span className="text-cyan-300">'text-embedding-3-small'</span>,</div>
                <div className="pl-8">input: query,</div>
                <div className="pl-4">{'}'});</div>
                <div className="pl-4 mt-3"><span className="text-zinc-500 italic">{'// 2. Query vector database'}</span></div>
                <div className="pl-4"><span className="text-fuchsia-400">const</span> results = <span className="text-violet-400">await</span> vectorDB.query(emb.data[0].embedding);</div>
                <div className="pl-4 mt-3"><span className="text-fuchsia-400">return</span> results;</div>
                <div>{'}'}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            variants={MOTION.stagger} 
            initial="hidden" 
            whileInView="visible" 
            viewport={MOTION.fadeUp.viewport}
            className="w-full lg:w-5/12 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-mono border border-violet-500/20 mb-6">
                <Sparkles size={14} /> AI Integration
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-50 font-display tracking-tight leading-tight mb-4">
                Software con <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Capacidades Cognitivas</span>
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                No solo construyo interfaces. Integro motores de IA para dotar a las aplicaciones de entendimiento semántico, automatización avanzada y personalización en tiempo real.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-800/50">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div key={i} variants={MOTION.staggerChild} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-center justify-center text-zinc-400">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-100">{cap.label}</h4>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">{cap.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
