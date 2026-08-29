import React, { useState, useRef } from 'react';
import { createTimeline, stagger } from 'animejs';
import { IconSparkles, IconReload, IconCheck, IconCalendar } from '@tabler/icons-react';
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

  const scanBeamRef = useRef<HTMLDivElement>(null);
  const taskCardRef = useRef<HTMLDivElement>(null);

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

    if (scanBeamRef.current) {
      tl.add({
        targets: scanBeamRef.current,
        translateY: [0, 55],
        opacity: [0, 1, 1, 0],
        duration: 650,
        ease: 'inOutQuad',
      });
    }

    if (taskCardRef.current) {
      tl.add({
        targets: taskCardRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 450,
        ease: 'outElastic(1, .6)',
      });
    }
  };

  const resetSimulator = () => {
    setIsProcessing(false);
    setIsStructured(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 font-mono text-xs">
        <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
          Genkit IA Semántica & Kanban
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={runAIExtraction}
            disabled={isProcessing}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-zinc-950 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
          >
            <IconSparkles size={10} /> {isProcessing ? 'Analizando' : 'Estructurar IA'}
          </button>
          <button
            onClick={resetSimulator}
            className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <IconReload size={12} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow my-2 items-center">
        {/* Raw text input */}
        <div className="flex flex-col justify-center">
          <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1 block">
            Entrada Coloquial (Lenguaje Natural)
          </span>
          <div className="relative p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-[8.5px] font-mono text-zinc-300 min-h-[60px] flex items-center leading-relaxed">
            <div
              ref={scanBeamRef}
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] opacity-0 pointer-events-none"
            />
            "{SAMPLE_RAW_PROMPTS[selectedPrompt]}"
          </div>
        </div>

        {/* Structured task result */}
        <div className="flex flex-col justify-center">
          <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1 block">
            Tarjeta Estructurada Focus
          </span>
          <div className="p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 min-h-[60px] flex flex-col justify-center font-mono">
            {isStructured ? (
              <div ref={taskCardRef} className="space-y-1">
                <div className="flex items-center justify-between text-[7.5px]">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <IconCheck size={11} /> Tarea Estructurada
                  </span>
                  <span className="text-zinc-500">Mañana 16:00</span>
                </div>
                <p className="text-[8.5px] text-zinc-200 leading-snug">
                  {selectedPrompt === 0
                    ? 'Reunión de coordinación con equipo de sistemas'
                    : selectedPrompt === 1
                    ? 'Despliegue de pipeline ETL PostgreSQL'
                    : 'Auditoría integral de seguridad y RBAC'}
                </p>
              </div>
            ) : (
              <span className="text-[8px] text-zinc-600 italic">
                Presiona "Estructurar IA" para clasificar.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer controls & Calendar sync */}
      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500">Ejemplo:</span>
          {SAMPLE_RAW_PROMPTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedPrompt(idx);
                setIsStructured(false);
              }}
              className={cn(
                'px-2 py-0.5 rounded-lg border transition-all cursor-pointer',
                selectedPrompt === idx
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              )}
            >
              #{idx + 1}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 text-emerald-400/80">
          <IconCalendar size={11} />
          <span>Google Calendar Live Sync</span>
        </div>
      </div>
    </div>
  );
});

TaskMeSim.displayName = 'TaskMeSim';
