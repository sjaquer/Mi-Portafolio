import React, { useState, useRef } from 'react';
import { createTimeline } from 'animejs';
import { IconPlayerPlay, IconReload, IconCpu, IconCloud, IconBrandWhatsapp } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

const CHAT_PRESETS = [
  'Hola, quiero pedir 2 combos Big Jack con papas y gaseosa helada para llevar porfa',
  'Buenas tardes, ¿tienen hamburguesa doble queso con entrega a domicilio?',
  'Quiero 1 combo clásico sin cebolla y nuggets extras',
];

export const WhatsappBotSim = React.memo(() => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [pipelineState, setPipelineState] = useState<'idle' | 'classifying' | 'extracting' | 'dispatched'>('idle');

  const localGpuRef = useRef<HTMLDivElement>(null);
  const cloudGeminiRef = useRef<HTMLDivElement>(null);

  const processChatMessage = () => {
    if (pipelineState !== 'idle') return;
    setPipelineState('classifying');

    const tl = createTimeline({
      onComplete: () => {
        setPipelineState('dispatched');
      },
    });

    if (localGpuRef.current) {
      tl.add({
        targets: localGpuRef.current,
        scale: [1, 1.12, 1],
        duration: 500,
        ease: 'outBack',
        onComplete: () => setPipelineState('extracting'),
      });
    }

    if (cloudGeminiRef.current) {
      tl.add({
        targets: cloudGeminiRef.current,
        scale: [1, 1.12, 1],
        duration: 600,
        ease: 'outBack',
      });
    }
  };

  const resetSimulator = () => {
    setPipelineState('idle');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 font-mono text-xs">
        <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">
          IA Híbrida Llama-3 Local + Gemini Nube
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={processChatMessage}
            disabled={pipelineState !== 'idle'}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-40 text-zinc-950 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
          >
            <IconPlayerPlay size={10} /> {pipelineState === 'idle' ? 'Procesar Chat' : 'Extrayendo'}
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

      {/* Main Interactive Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow my-2 items-center font-mono">
        {/* Left: WhatsApp Chat Bubble */}
        <div className="flex flex-col justify-center space-y-2">
          <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 text-[8px] text-zinc-300 leading-snug">
            <span className="text-[6.5px] text-zinc-500 font-bold block mb-1">WhatsApp de Cliente:</span>
            "{CHAT_PRESETS[selectedPreset]}"
          </div>

          {pipelineState === 'dispatched' && (
            <div className="p-2.5 rounded-2xl bg-green-950/30 border border-green-500/30 text-[8px] text-green-300">
              ✓ Pedido extraído y despachado al ERP vía webhook.
            </div>
          )}
        </div>

        {/* Right: Neural Pipeline Nodes & JSON Preview */}
        <div className="flex flex-col justify-center space-y-2">
          <div className="grid grid-cols-2 gap-2 text-center text-[7.5px]">
            <div
              ref={localGpuRef}
              className={cn(
                'p-2 rounded-xl border transition-all',
                pipelineState === 'classifying'
                  ? 'bg-green-950/40 border-green-500 text-green-300'
                  : 'bg-zinc-900/40 border-zinc-800 text-zinc-400'
              )}
            >
              <IconCpu size={14} className="mx-auto mb-1 text-green-400" />
              <span className="font-bold block">Llama-3 GPU</span>
              <span className="text-[6px] text-zinc-500">Privacidad Local</span>
            </div>

            <div
              ref={cloudGeminiRef}
              className={cn(
                'p-2 rounded-xl border transition-all',
                pipelineState === 'extracting'
                  ? 'bg-blue-950/40 border-blue-500 text-blue-300'
                  : 'bg-zinc-900/40 border-zinc-800 text-zinc-400'
              )}
            >
              <IconCloud size={14} className="mx-auto mb-1 text-blue-400" />
              <span className="font-bold block">Gemini Cloud</span>
              <span className="text-[6px] text-zinc-500">JSON Schema</span>
            </div>
          </div>

          {pipelineState === 'dispatched' && (
            <div className="p-2 rounded-xl bg-zinc-950 border border-green-500/20 text-[6.5px] text-green-400 font-mono">
              <pre className="whitespace-pre">{`{
  "order": "${selectedPreset === 0 ? 'Big Jack Combo' : selectedPreset === 1 ? 'Doble Queso' : 'Clásico'}",
  "qty": ${selectedPreset === 0 ? 2 : 1},
  "channel": "WhatsApp Web API"
}`}</pre>
            </div>
          )}
        </div>
      </div>

      {/* Footer controls */}
      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500">Mensaje:</span>
          {CHAT_PRESETS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedPreset(idx);
                setPipelineState('idle');
              }}
              className={cn(
                'px-2 py-0.5 rounded-lg border transition-all cursor-pointer',
                selectedPreset === idx
                  ? 'bg-green-500/20 text-green-300 border-green-500/40'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              )}
            >
              #{idx + 1}
            </button>
          ))}
        </div>
        <span className="text-green-400/80">-65% costo de token</span>
      </div>
    </div>
  );
});

WhatsappBotSim.displayName = 'WhatsappBotSim';
