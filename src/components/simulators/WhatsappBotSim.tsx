import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Play, RotateCcw, Brain, Terminal, ShieldAlert } from 'lucide-react';
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

    setConsoleText(['[Ollama] Cargando Llama-3 en GPU local...', '[Ollama] Mensaje capturado por webhook.']);
    
    await new Promise(r => setTimeout(r, 700));
    setConsoleText(prev => [...prev, '[Ollama] Intent: Pedido (98.7% conf)', '[Gemini] Solicitando estructuración...']);
    
    await new Promise(r => setTimeout(r, 750));
    setConsoleText(prev => [...prev, '[Gemini] Entidades mapeadas correctamente.', '[System] Generando payload JSON...']);
    
    await new Promise(r => setTimeout(r, 450));
    setShowJson(true);
    setConsoleText(prev => [...prev, '[System] Despachando webhook a ERP...']);
    
    await new Promise(r => setTimeout(r, 550));
    setConsoleText(prev => [...prev, '➔ POST /api/orders (200 OK) - Completo.']);
    setPipelineState('completed');
  };

  const resetSimulator = () => {
    setPipelineState('idle');
    setConsoleText([]);
    setShowJson(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-1 lg:p-4 bg-transparent text-zinc-100 font-sans select-none">
      {/* Top action controls */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-900/60">
        <span className="text-[8px] font-mono font-bold tracking-wider text-green-500">SIMULACIÓN DUAL-IA</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: pipelineState !== 'idle' ? 1 : 1.02 }}
            whileTap={{ scale: pipelineState !== 'idle' ? 1 : 0.98 }}
            onClick={simulateProcessing}
            disabled={pipelineState !== 'idle'}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-30 disabled:pointer-events-none text-zinc-950 text-[10px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> Procesar
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
            activeTab === 'left' ? 'bg-green-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          CHAT
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'right' ? 'bg-green-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          JSON
        </button>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-grow overflow-hidden">
        {/* Left Panel: WhatsApp chat simulation */}
        <div className={cn(
          "flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 justify-between",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
            <span>CHAT DE CLIENTE</span>
            <span className="text-green-500">WHATSAPP UI</span>
          </div>

          <div className="flex-grow flex flex-col justify-end gap-2 bg-zinc-950/50 p-2.5 rounded-xl border border-zinc-900/60 min-h-[90px] relative">
            <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-[8px] font-mono text-zinc-300 leading-normal max-w-[90%] rounded-tl-none relative">
              <span className="text-[6.5px] text-zinc-500 font-bold block mb-0.5">Cliente</span>
              Hola, quiero pedir 2 combos de hamburguesa Big Jack, con papas y una Coca-Cola helada para llevar, gracias!
            </div>

            {pipelineState === 'processing' && (
              <div className="flex items-center gap-1 p-1 px-1.5 bg-green-950/10 border border-green-900/20 text-[6.5px] font-mono text-green-400 rounded-lg self-end">
                <span>Procesando</span>
                <span className="flex gap-0.5 items-center ml-0.5">
                  <span className="w-0.5 h-0.5 bg-green-400 rounded-full animate-ping" />
                </span>
              </div>
            )}

            {pipelineState === 'completed' && (
              <motion.div
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2 rounded-xl bg-green-950/30 border border-green-900/50 text-[8px] font-mono text-green-400 self-end max-w-[85%] rounded-tr-none"
              >
                ¡Hola! Entendido. 2 combos Big Jack con papas fritas y Coca-Cola listos para llevar 🍔⚡.
              </motion.div>
            )}
          </div>
        </div>

        {/* Right Panel: JSON / Logs */}
        <div className={cn(
          "flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 justify-between",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
            <span>EXTRACTOR JSON</span>
            <span className="text-green-500">AI CONSOLE</span>
          </div>

          <div className="flex-grow flex flex-col gap-1.5 bg-zinc-950/50 p-2.5 rounded-xl border border-zinc-900/60 font-mono text-[7px] leading-relaxed text-zinc-400 overflow-y-auto min-h-[90px] justify-center">
            {showJson ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-400 bg-green-950/5 p-1.5 rounded-lg border border-green-900/10 font-bold font-mono"
              >
                <pre className="whitespace-pre">{`{
  "order": "Big Jack Combo",
  "qty": 2,
  "sides": ["papas"],
  "beverage": "Coca-Cola",
  "method": "takeaway"
}`}</pre>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-0.5">
                <AnimatePresence>
                  {consoleText.length === 0 ? (
                    <span className="text-zinc-700 italic text-center py-2">Esperando chat...</span>
                  ) : (
                    consoleText.map((log, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -2 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={idx === consoleText.length - 1 ? "text-green-400 font-bold" : ""}
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

      {/* Webhook Status Banner */}
      <div className="border-t border-zinc-900/60 pt-2 mt-2 flex items-center justify-between text-[7.5px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <ShieldAlert size={10} className="text-green-500" /> Híbrido: Ollama + Gemini
        </span>
        <span className="text-zinc-650">Agente Virtual Eva</span>
      </div>
    </div>
  );
});

WhatsappBotSim.displayName = 'WhatsappBotSim';
