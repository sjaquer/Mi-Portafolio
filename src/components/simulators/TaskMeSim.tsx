import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, RotateCcw, CheckSquare, Zap, Terminal, ArrowRight } from 'lucide-react';
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
    setConsoleLogs(['[Ollama] Analizando entrada coloquial...']);

    await new Promise(r => setTimeout(r, 600));
    setConsoleLogs(prev => [...prev, '[Genkit API] Mapeando intenciones y prioridades...']);

    await new Promise(r => setTimeout(r, 600));
    setConsoleLogs(prev => [...prev, '[Google Calendar] Verificando colisiones de horario...']);

    await new Promise(r => setTimeout(r, 500));
    setConsoleLogs(prev => [...prev, '➔ Tarea Estructurada con éxito.']);
    
    setTaskText('Optimizar sincronización Google Calendar API & Configurar caché local (Reducción 40% latencia)');
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
    <div className="w-full h-full flex flex-col justify-between p-2 lg:p-6 relative overflow-hidden font-sans select-none">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 z-10">
        <div>
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">Console</span>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 flex items-center gap-2 mt-0.5 tracking-tight font-display">
            <Zap size={13} className="text-emerald-400" /> TaskMe
          </h4>
        </div>
        <div className="flex gap-1.5">
          <motion.button
            whileHover={{ scale: isOptimizing || isOptimized ? 1 : 1.02 }}
            whileTap={{ scale: isOptimizing || isOptimized ? 1 : 0.98 }}
            onClick={runAIOptimizer}
            disabled={isOptimizing || isOptimized}
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-slate-950 text-[10px] font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            <Sparkles size={8} fill="currentColor" /> Genkit IA
          </motion.button>
          <button
            onClick={resetSimulator}
            className="p-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            aria-label="Reiniciar simulador"
          >
            <RotateCcw size={11} />
          </button>
        </div>
      </div>

      {/* Mobile Responsive Tab Selector */}
      <div className="flex sm:hidden w-full rounded-xl bg-slate-950/80 p-1 border border-slate-900/60 mt-4 z-10">
        <button 
          onClick={() => setActiveTab('left')} 
          className={cn(
            "flex-1 py-1.5 text-[9px] font-bold rounded-lg font-mono tracking-wider transition-all", 
            activeTab === 'left' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/5' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          CONSOLA IA
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1.5 text-[9px] font-bold rounded-lg font-mono tracking-wider transition-all", 
            activeTab === 'right' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/5' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          TABLERO KANBAN
        </button>
      </div>

      {/* Core Simulation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 my-3 sm:my-5 flex-grow z-10 overflow-hidden">
        
        {/* Panel Izquierdo: Entrada de Voz / Texto Desordenado + Consola Genkit */}
        <div className={cn(
          "flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark justify-between",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div>
            <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
              <span className="flex items-center gap-1"><Terminal size={11} /> Consola Genkit</span>
              <span className="text-emerald-500/60 font-mono">NLP RAW</span>
            </div>
            
            {/* Input Draft Panel */}
            <div className="p-3 bg-slate-950/80 rounded-2xl border border-slate-900 text-[10px] font-mono text-slate-400 leading-normal min-h-[50px] relative">
              <span className="text-[7.5px] text-slate-600 block mb-1">DRAFT ENTRANTE (TEXTO COLOQUIAL)</span>
              {isOptimized ? (
                <span className="text-slate-500 line-through">"revisar integracion de google calendar y optimizar base de datos..."</span>
              ) : (
                <span>"revisar integracion de google calendar y optimizar base de datos..."</span>
              )}
            </div>
          </div>

          {/* AI Parser Logging */}
          <div className="mt-3 flex-grow flex flex-col justify-end">
            <span className="text-[7.5px] font-bold text-slate-600 uppercase tracking-widest block mb-1.5 font-mono">Log de Procesamiento</span>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-900 font-mono text-[7.5px] text-slate-500 leading-relaxed min-h-[55px] flex flex-col gap-0.5 overflow-hidden">
              <AnimatePresence>
                {consoleLogs.length === 0 ? (
                  <span className="text-slate-700 italic">Esperando interacción Genkit...</span>
                ) : (
                  consoleLogs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -4 }}
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

        {/* Panel Derecho: Kanban Draggable Board */}
        <div className={cn(
          "flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark justify-between",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1"><Calendar size={11} /> Tablero Cyber-Focus</span>
            <span className="text-emerald-400 font-mono">ACTIVE KANBAN</span>
          </div>

          {/* Draggable Task Box */}
          <div 
            ref={dragConstraintsRef}
            className="flex-grow w-full h-[120px] bg-slate-950/60 rounded-2xl border border-slate-900 p-2.5 relative overflow-hidden flex flex-col justify-center"
          >
            <motion.div
              drag
              dragConstraints={dragConstraintsRef}
              dragElastic={0.3}
              dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
              whileDrag={{ scale: 1.03, rotate: 1, zIndex: 50 }}
              className={`p-2.5 rounded-xl border text-[9.5px] leading-snug cursor-grab active:cursor-grabbing font-mono transition-colors ${
                isOptimized
                  ? 'bg-slate-900 border-emerald-500/30 text-slate-100 shadow-lg shadow-emerald-500/5'
                  : 'bg-slate-900/50 border-slate-800/80 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5 border-b border-slate-800/30 pb-1 shrink-0">
                <div className="flex items-center gap-1">
                  <CheckSquare size={10} className={isOptimized ? "text-emerald-400" : "text-slate-600"} />
                  <span className={`text-[7.5px] font-bold ${isOptimized ? "text-emerald-400 bg-emerald-500/10 px-1 rounded" : "text-slate-600"}`}>
                    {isOptimized ? "IA ESTRUCTURADA" : "PENDIENTE DRAFT"}
                  </span>
                </div>
                <span className="text-[7px] text-slate-600">Drag me</span>
              </div>
              
              {isOptimizing ? (
                <span className="text-emerald-400/60 animate-pulse block">Genkit estructurando payload...</span>
              ) : (
                <span className="block">{taskText}</span>
              )}
            </motion.div>
          </div>

          {/* Google Calendar API Synchronizer Indicator */}
          <div className="mt-3 pt-2.5 border-t border-slate-950 flex items-center justify-between text-[8px] font-mono text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={11} className="text-slate-600" /> Sincronización Calendar</span>
            <span className="font-bold">
              {isOptimized ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> SYNC (200 OK)
                </span>
              ) : (
                "DESCONECTADO"
              )}
            </span>
          </div>

        </div>

      </div>

      {/* Footer Banner */}
      <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] text-slate-500 font-mono z-10">
        <span>Drag elástico amortiguado</span>
        <span className="text-slate-600 font-bold">dnd-kit + Framer spring</span>
      </div>
    </div>
  );
});

TaskMeSim.displayName = 'TaskMeSim';
