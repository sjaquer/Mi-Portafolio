import { FileText, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResumeButton = () => (
  <div className="inline-flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-xl p-1 backdrop-blur-sm">
    <motion.a
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(39,39,42,0.8)' }} whileTap={{ scale: 0.97 }}
      href="/resume.txt" target="_blank"
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
    >
      <FileText size={14} strokeWidth={1.5} /> resume.txt
    </motion.a>
    <div className="w-px h-5 bg-zinc-800" />
    <motion.a
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(168,85,247,0.08)' }} whileTap={{ scale: 0.97 }}
      href="/ai.txt" target="_blank"
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-zinc-400 hover:text-violet-400 transition-colors"
    >
      <Bot size={14} strokeWidth={1.5} /> ai.txt
    </motion.a>
  </div>
);
