import React, { useState, useRef } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { Sparkles, Calendar, RotateCcw, CheckSquare, Zap, Terminal, Clock, Tag, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const SAMPLE_RAW_PROMPTS = [
  'reunión urgente con equipo de sistemas mañana 4pm y sincronizar calendar',
  'desplegar pipeline de datos postgresql para finanzas antes del viernes',
  'auditar permisos rbac y revisar endpoints de api whatsapp',
];

export const TaskMeSim = React.memo(() => {
  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isStructured, setIsStructured] = useState(false);
  const [activeTab, setActiveTab] = useState<'input' | 'kanban'>('input');
  const [column, setColumn] = useState<'urgent' | 'today' | 'done'>('urgent');

  const scanBeamRef = useRef<HTMLDivElement>(null);
  const taskCardRef = useRef<HTMLDivElement>(null);
  const tokensContainerRef = useRef<HTMLDivElement>(null);

  const runAIExtraction = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setIsStructured(false);

    const tl = createTimeline({
      onComplete: () => {
        setIsProcessing(false);
        setIsStructured(true);
      },
    });

    // 1. Cybernetic Laser Scan
    if (scanBeamRef.current) {
      tl.add({
        targets: scanBeamRef.current,
        translateY: [0, 65],
        opacity: [0, 1, 1, 0],
        duration: 750,
        ease: 'inOutQuad',
      });
    }

    // 2. Tokens extraction stagger
    if (tokensContainerRef.current) {
      const tokens = tokensContainerRef.current.querySelectorAll('.ai-token');
      tl.add({
        targets: tokens,
        scale: [0.5, 1.1, 1],
        opacity: [0, 1],
        delay: stagger(100),
        duration: 400,
        ease: 'outBack',
      }, '-=200');
    }

    // 3. Card morph and spring entrance
    if (taskCardRef.current) {
      tl.add({
        targets: taskCardRef.current,
        translateY: [25, 0],
        scale: [0.9, 1.02, 1],
        opacity: [0, 1],
        duration: 500,
        ease: 'outElastic(1, .6)',
      }, '-=100');
    }
  };

  const resetSimulator = () => {
    setIsProcessing(false);
    setIsStructured(false);
    setColumn('urgent');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header & Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-emerald-400 uppercase">
            TASKME · GENKIT IA SEMÁNTICA
          </span>
          <span className="text-[7px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Google Calendar Sync
          </span>
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={runAIExtraction}
            disabled={isProcessing}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-zinc-950 text-[9px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Sparkles size={8} fill="currentColor" /> {isProcessing ? 'Analizando...' : 'Estructurar IA'}
          </button>
          <button
            onClick={resetSimulator}
            className="p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <RotateCcw size={10} />
          </button>
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="flex sm:hidden w-full rounded-lg bg-zinc-900/60 p-0.5 border border-zinc-900 my-1.5">
        <button
          onClick={() => setActiveTab('input')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'input' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          INPUT LENGUAJE NATURAL
        </button>
        <button
          onClick={() => setActiveTab('kanban')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'kanban' ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          TABLERO CYBER-FOCUS
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-grow my-1 overflow-hidden">
        {/* Left Column: Natural Language Raw Input & AI Scan Beam */}
        <div
          className={cn(
            'sm:col-span-6 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70 relative overflow-hidden',
            activeTab === 'input' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Entrada en Lenguaje Natural</span>
              <span className="text-emerald-400 font-bold">Google Genkit</span>
            </div>

            {/* Prompt Container with Laser Beam */}
            <div className="relative p-2.5 rounded-xl bg-zinc-950 border border-zinc-900 text-[8.5px] font-mono text-zinc-300 min-h-[55px] leading-relaxed">
              <div
                ref={scanBeamRef}
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] opacity-0 pointer-events-none"
              />
              <span className="text-zinc-500 text-[7px] block mb-0.5">&gt; Entrada del usuario:</span>
              "{SAMPLE_RAW_PROMPTS[selectedPrompt]}"
            </div>
          </div>

          {/* Tokens extracted by AI */}
          <div ref={tokensContainerRef} className="my-1">
            <span className="text-[6.5px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
              Entidades Semánticas Detectadas
            </span>
            <div className="flex flex-wrap gap-1">
              <span className="ai-token px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[7px] font-mono text-emerald-300 flex items-center gap-1">
                <Tag size={7} /> Prioridad: Alta
              </span>
              <span className="ai-token px-1.5 py-0.5 rounded bg-teal-500/10 border border-teal-500/30 text-[7px] font-mono text-teal-300 flex items-center gap-1">
                <Clock size={7} /> Mañana 16:00
              </span>
              <span className="ai-token px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-[7px] font-mono text-blue-300 flex items-center gap-1">
                <Calendar size={7} /> G-Calendar Sync
              </span>
            </div>
          </div>

          {/* Prompt Selector */}
          <div className="pt-1.5 border-t border-zinc-900/60">
            <span className="block text-[6.5px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">
              Probar Otros Ejemplos de Texto
            </span>
            <div className="flex gap-1">
              {SAMPLE_RAW_PROMPTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPrompt(idx);
                    setIsStructured(false);
                  }}
                  className={cn(
                    'flex-1 py-1 rounded text-[7px] font-mono border transition-all cursor-pointer',
                    selectedPrompt === idx
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-zinc-900/60 text-zinc-500 border-zinc-900 hover:text-zinc-300'
                  )}
                >
                  Ejemplo #{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Cyber-Focus Structured Kanban */}
        <div
          className={cn(
            'sm:col-span-6 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70',
            activeTab === 'kanban' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Tablero Kanban Dinámico</span>
              <div className="flex gap-1 text-[6.5px] font-mono">
                <button
                  onClick={() => setColumn('urgent')}
                  className={cn(
                    'px-1.5 py-0.5 rounded cursor-pointer transition-all',
                    column === 'urgent' ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'text-zinc-600'
                  )}
                >
                  Urgente
                </button>
                <button
                  onClick={() => setColumn('today')}
                  className={cn(
                    'px-1.5 py-0.5 rounded cursor-pointer transition-all',
                    column === 'today' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-zinc-600'
                  )}
                >
                  Hoy
                </button>
                <button
                  onClick={() => setColumn('done')}
                  className={cn(
                    'px-1.5 py-0.5 rounded cursor-pointer transition-all',
                    column === 'done' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-zinc-600'
                  )}
                >
                  Hecho
                </button>
              </div>
            </div>

            {/* Kanban Card Container */}
            <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-900 min-h-[90px] flex flex-col justify-center">
              {isStructured ? (
                <div
                  ref={taskCardRef}
                  className="p-2.5 rounded-xl bg-zinc-900/90 border border-emerald-500/40 text-[8px] font-mono shadow-md shadow-emerald-500/5 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <CheckSquare size={10} /> Tarea Estructurada
                    </span>
                    <span className="text-[6.5px] px-1.5 py-0.2 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/30">
                      URGENTE
                    </span>
                  </div>

                  <p className="text-zinc-200 leading-snug">
                    {selectedPrompt === 0
                      ? 'Reunión de coordinación estratégica con área de sistemas'
                      : selectedPrompt === 1
                      ? 'Despliegue de infraestructura ETL PostgreSQL'
                      : 'Auditoría integral de seguridad y RBAC'}
                  </p>

                  <div className="pt-1 border-t border-zinc-800/80 flex items-center justify-between text-[6.5px] text-zinc-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Sincronizado en Calendar
                    </span>
                    <span>16:00 - 17:00</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 text-zinc-600 text-[8px] font-mono italic">
                  Presiona "Estructurar IA" para transformar la nota desordenada.
                </div>
              )}
            </div>
          </div>

          {/* Calendar Status */}
          <div className="pt-1.5 border-t border-zinc-900/60 flex items-center justify-between text-[7px] font-mono">
            <span className="text-zinc-400 flex items-center gap-1">
              <Calendar size={10} className="text-emerald-400" /> Sincronización Bidireccional
            </span>
            <span className="text-emerald-400 font-bold">100% EN VIVO</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> IA Semántica + Autoorganización Kanban
        </span>
        <span className="text-zinc-600">Anime.js Springs + Timelines</span>
      </div>
    </div>
  );
});

TaskMeSim.displayName = 'TaskMeSim';
