import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Play, RotateCcw, Brain, Terminal, ShieldAlert } from 'lucide-react';
import { BigJackSim } from './BigJackSim';
import { TaskMeSim } from './TaskMeSim';
import { OrdevSim } from './OrdevSim';
import { TaskZenithSim } from './TaskZenithSim';
import { cn } from '../../utils/cn';

export const WhatsappBotSim = React.memo(() => {
  const [pipelineState, setPipelineState] = useState<'idle' | 'processing' | 'completed'>('idle');
  const [consoleText, setConsoleText] = useState<string[]>([]);
  const [showJson, setShowJson] = useState(false);
  const [activeTab, setActiveTab] = useState<'left' | 'right'>('left');

  const simulateProcessing = async () => {
    if (pipelineState !== 'idle') return;
    setPipelineState('processing');
    setShowJson(false);

    setConsoleText(['[Ollama] Cargando Llama-3 local en GPU...', '[Ollama] Mensaje entrante capturado por webhook.']);
    
    await new Promise(r => setTimeout(r, 700));
    setConsoleText(prev => [...prev, '[Ollama] Intent: Pedido Gastronómico (98.7% conf.)', '[Gemini API] Solicitando estructuración Dual-IA...']);
    
    await new Promise(r => setTimeout(r, 750));
    setConsoleText(prev => [...prev, '[Gemini API] Entidades mapeadas correctamente.', '[System] Generando payload estructurado...']);
    
    await new Promise(r => setTimeout(r, 450));
    setShowJson(true);
    setConsoleText(prev => [...prev, '[System] Despachando webhook a ERP...']);
    
    await new Promise(r => setTimeout(r, 550));
    setConsoleText(prev => [...prev, '➔ POST /api/orders (200 OK) - Transacción completa.']);
    setPipelineState('completed');
  };

  const resetSimulator = () => {
    setPipelineState('idle');
    setConsoleText([]);
    setShowJson(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 lg:p-6 relative overflow-hidden font-sans select-none">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 z-10">
        <div>
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">Console</span>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 flex items-center gap-2 mt-0.5 tracking-tight font-display">
            <Brain size={13} className="text-emerald-400" /> WhatsApp Dual-IA
          </h4>
        </div>
        <div className="flex gap-1.5">
          <motion.button
            whileHover={{ scale: pipelineState !== 'idle' ? 1 : 1.02 }}
            whileTap={{ scale: pipelineState !== 'idle' ? 1 : 0.98 }}
            onClick={simulateProcessing}
            disabled={pipelineState !== 'idle'}
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-slate-950 text-[10px] font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> Procesar Chat
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
          CHAT CLIENTE
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1.5 text-[9px] font-bold rounded-lg font-mono tracking-wider transition-all", 
            activeTab === 'right' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/5' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          CONSOLA JSON
        </button>
      </div>

      {/* Core Simulation Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 my-3 sm:my-5 flex-grow z-10 overflow-hidden">
        
        {/* Panel Izquierdo: Mock WhatsApp Chat Bubbles */}
        <div className={cn(
          "flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark justify-between",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1"><MessageSquare size={11} /> Chat del Cliente</span>
            <span className="text-emerald-400 font-mono">WHATSAPP UI</span>
          </div>

          <div className="flex-grow flex flex-col justify-end gap-2.5 bg-slate-950/80 p-3 rounded-2xl border border-slate-900 min-h-[110px] relative">
            {/* WhatsApp message bubble */}
            <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800/80 text-[8.5px] font-mono text-slate-300 leading-relaxed max-w-[90%] rounded-tl-none relative">
              <span className="text-[7px] text-slate-500 font-bold block mb-1">Cliente (+51 984 712 ***)</span>
              Hola, quiero pedir 2 combos de hamburguesa Big Jack, con papas fritas y una Coca-Cola helada para llevar, gracias!
            </div>

            {/* Simulated typing status */}
            {pipelineState === 'processing' && (
              <div className="flex items-center gap-1 p-1 px-2 bg-emerald-950/10 border border-emerald-900/20 text-[7px] font-mono text-emerald-400 rounded-xl self-end">
                <span>Eva está escribiendo</span>
                <span className="flex gap-0.5 items-center ml-1">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </div>
            )}

            {/* Confirmed response bubble */}
            {pipelineState === 'completed' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2.5 rounded-2xl bg-emerald-950/30 border border-emerald-900/50 text-[8.5px] font-mono text-emerald-400 self-end max-w-[85%] rounded-tr-none"
              >
                ¡Hola! Entendido. 2 combos Big Jack con papas fritas y una Coca-Cola listos para llevar. Tu pedido ya está en cocina 🍔⚡.
              </motion.div>
            )}
          </div>
        </div>

        {/* Panel Derecho: Dual-AI Parser Console */}
        <div className={cn(
          "flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark justify-between",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1"><Terminal size={11} /> Extractor Semántico JSON</span>
            <span className="text-emerald-400 font-mono">AI CONSOLE</span>
          </div>

          <div className="flex-grow flex flex-col gap-2 bg-slate-950/80 p-3 rounded-2xl border border-slate-900 font-mono text-[7px] leading-relaxed text-slate-400 overflow-y-auto min-h-[110px] justify-center">
            {showJson ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-emerald-400 leading-relaxed bg-emerald-950/5 p-2 rounded-xl border border-emerald-900/20 font-bold font-mono"
              >
                <pre className="whitespace-pre">{`{
  "order": "Big Jack Combo",
  "qty": 2,
  "sides": ["papas fritas"],
  "beverage": "Coca-Cola",
  "method": "takeaway"
}`}</pre>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-1">
                <AnimatePresence>
                  {consoleText.length === 0 ? (
                    <span className="text-slate-700 italic text-center py-4">Esperando disparo del chat...</span>
                  ) : (
                    consoleText.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={idx === consoleText.length - 1 ? "text-emerald-400" : ""}
                      >
                        {log}
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Webhook / Footer */}
      <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] text-slate-500 font-mono z-10">
        <span className="flex items-center gap-1.5"><ShieldAlert size={12} className="text-emerald-500" /> Híbrido: Ollama + Gemini 2.5</span>
        <span className="text-slate-600 font-bold">VIRTUAL AGENT EVA</span>
      </div>
    </div>
  );
});

export const SimulatorSelector: React.FC<{ simulatorId: string }> = ({ simulatorId }) => {
  switch (simulatorId) {
    case 'bigjack':
      return <BigJackSim />;
    case 'taskme':
      return <TaskMeSim />;
    case 'ordev':
      return <OrdevSim />;
    case 'taskzenith':
      return <TaskZenithSim />;
    case 'whatsappbot':
      return <WhatsappBotSim />;
    default:
      return null;
  }
};

WhatsappBotSim.displayName = 'WhatsappBotSim';
