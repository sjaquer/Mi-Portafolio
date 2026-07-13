import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, RotateCcw, CheckSquare, Zap, Terminal } from 'lucide-react';
import { cn } from '../../utils/cn';

export const TaskMeSim = React.memo(() => {
  const [taskText, setTaskText] = useState('revisar integracion de google calendar y optimizar base de datos');
  const [isOptimized, setIsOptimized] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'left' | 'right'>('left');
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  const runAIOptimizer = async () => {
    if (isOptimizing || isOptimized) return;
    setIsOptimizing(true);
    setConsoleLogs(['[Ollama] Analizando entrada...']);

    await new Promise(r => setTimeout(r, 600));
    setConsoleLogs(prev => [...prev, '[Genkit API] Mapeando intenciones...']);

    await new Promise(r => setTimeout(r, 600));
    setConsoleLogs(prev => [...prev, '[Google Calendar] Verificando conflicto...']);

    await new Promise(r => setTimeout(r, 500));
    setConsoleLogs(prev => [...prev, '➔ Tarea Estructurada OK.']);
    
    setTaskText('Optimizar sincronización Google Calendar API & caché local');
    setIsOptimized(true);
    setIsOptimizing(false);
  };

  const resetSimulator = () => {
    setTaskText('revisar integracion de google calendar y optimizar base de datos');
    setIsOptimized(false);
    setIsOptimizing(false);
    setConsoleLogs([]);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-1 lg:p-4 bg-transparent text-zinc-100 font-sans select-none">
      {/* Top action controls */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-900/60">
        <span className="text-[8px] font-mono font-bold tracking-wider text-emerald-500">SIMULACIÓN GENKIT</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: isOptimizing || isOptimized ? 1 : 1.02 }}
            whileTap={{ scale: isOptimizing || isOptimized ? 1 : 0.98 }}
            onClick={runAIOptimizer}
            disabled={isOptimizing || isOptimized}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-zinc-950 text-[10px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Sparkles size={8} fill="currentColor" /> Optimizar IA
          </motion.button>
          <button
            onClick={resetSimulator}
            className="p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <RotateCcw size={10} />
          </button>
        </div>
      </div>

      {/* Mobile Selector */}
      <div className="flex sm:hidden w-full rounded-lg bg-zinc-900/60 p-0.5 border border-zinc-900 mb-2">
        <button 
          onClick={() => setActiveTab('left')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'left' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          INPUT IA
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'right' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          TABLERO
        </button>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-grow overflow-hidden">
        {/* Left Panel: Raw text input + logs */}
        <div className={cn(
          "flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 justify-between",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div>
            <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
              <span>ENTRADA DE TEXTO</span>
              <span className="text-emerald-500 font-mono">RAW</span>
            </div>
            
            <div className="p-2.5 bg-zinc-950/50 rounded-xl border border-zinc-900/60 text-[9px] font-mono text-zinc-400 leading-normal min-h-[42px]">
              {isOptimized ? (
                <span className="text-zinc-650 line-through">"revisar integracion de google calendar y optimizar base de datos..."</span>
              ) : (
                <span>"revisar integracion de google calendar y optimizar base de datos..."</span>
              )}
            </div>
          </div>

          <div className="mt-2 flex-grow flex flex-col justify-end">
            <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-wider block mb-1 font-mono">LOG DE PARSEO</span>
            <div className="bg-zinc-950 p-2 rounded-xl border border-zinc-900/60 font-mono text-[7px] text-zinc-500 leading-relaxed min-h-[50px] flex flex-col gap-0.5 overflow-hidden">
              <AnimatePresence>
                {consoleLogs.length === 0 ? (
                  <span className="text-zinc-700 italic">Esperando interacción...</span>
                ) : (
                  consoleLogs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -2 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={idx === consoleLogs.length - 1 ? "text-emerald-400" : ""}
                    >
                      &gt; {log}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Panel: Elastic Kanban Board */}
        <div className={cn(
          "flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 justify-between",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
            <span>TABLERO FOCUS</span>
            <span className="text-emerald-500 font-mono">ACTIVO</span>
          </div>

          {/* Draggable Task Box */}
          <div 
            ref={dragConstraintsRef}
            className="flex-grow w-full h-[100px] bg-zinc-950/40 rounded-xl border border-zinc-900/60 p-2 relative overflow-hidden flex flex-col justify-center"
          >
            <motion.div
              drag
              dragConstraints={dragConstraintsRef}
              dragElastic={0.3}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
              whileDrag={{ scale: 1.02, rotate: 0.5, zIndex: 50 }}
              className={`p-2 rounded-lg border text-[8.5px] leading-snug cursor-grab active:cursor-grabbing font-mono transition-colors ${
                isOptimized
                  ? 'bg-zinc-900 border-emerald-500/30 text-zinc-100 shadow-md shadow-emerald-500/5'
                  : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-500'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1 border-b border-zinc-900/60 pb-1 shrink-0">
                <div className="flex items-center gap-1">
                  <CheckSquare size={9} className={isOptimized ? "text-emerald-400" : "text-zinc-650"} />
                  <span className={`text-[7px] font-bold ${isOptimized ? "text-emerald-400 bg-emerald-500/10 px-1 rounded" : "text-zinc-600"}`}>
                    {isOptimized ? "IA DETECTADA" : "DRAFT"}
                  </span>
                </div>
                <span className="text-[6.5px] text-zinc-600">Arrastrar</span>
              </div>
              
              {isOptimizing ? (
                <span className="text-emerald-400/60 animate-pulse block">Procesando...</span>
              ) : (
                <span className="block">{taskText}</span>
              )}
            </motion.div>
          </div>

          {/* Google Calendar API Synchronizer */}
          <div className="mt-2.5 pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[7.5px] font-mono text-zinc-500">
            <span>Sincronización Calendar</span>
            <span className="font-bold">
              {isOptimized ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> SYNCED
                </span>
              ) : (
                "OFFLINE"
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="border-t border-zinc-900/60 pt-2 mt-2 flex items-center justify-between text-[7.5px] text-zinc-500 font-mono">
        <span>Framer Spring Motion</span>
        <span className="text-zinc-600">Google Genkit API</span>
      </div>
    </div>
  );
});

TaskMeSim.displayName = 'TaskMeSim';
