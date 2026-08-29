import React, { useState, useRef } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { MessageSquare, Play, RotateCcw, Cpu, Cloud, Send, CheckCircle2, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { cn } from '../../utils/cn';

const CHAT_PRESETS = [
  'Hola, quiero pedir 2 combos Big Jack con papas grandes y una Coca-Cola helada para llevar porfa',
  'Buenas tardes, ¿tienen opción de hamburguesa doble queso con salsa especial y entrega a domicilio?',
  'Quiero 1 combo clásico sin cebolla y 1 porción extra de nuggets',
];

export const WhatsappBotSim = React.memo(() => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [pipelineState, setPipelineState] = useState<'idle' | 'classifying' | 'extracting' | 'dispatched'>('idle');
  const [activeTab, setActiveTab] = useState<'chat' | 'json'>('chat');
  const [logs, setLogs] = useState<string[]>([
    '[Ollama] Llama-3 8B cuantizado listo en GPU local.',
    '[Gemini API] Canal seguro TLS 1.3 autenticado.',
    '[Webhook] Endpoint ERP /api/orders escuchando...',
  ]);

  const typingBubbleRef = useRef<HTMLDivElement>(null);
  const jsonBoxRef = useRef<HTMLDivElement>(null);
  const localGpuRef = useRef<HTMLDivElement>(null);
  const cloudGeminiRef = useRef<HTMLDivElement>(null);

  const processChatMessage = () => {
    if (pipelineState !== 'idle') return;
    setPipelineState('classifying');

    setLogs([
      '[WhatsApp] Mensaje entrante capturado por webhook.',
      '[Ollama Llama-3] Clasificando intención localmente...',
    ]);

    const tl = createTimeline({
      onComplete: () => {
        setPipelineState('dispatched');
        setLogs((prev) => [
          '[Webhook ERP] POST 200 OK — Pedido insertado en cocina.',
          '[Gemini API] Entidades estructuradas con éxito.',
          ...prev,
        ]);
      },
    });

    // 1. Local GPU Pulse (Llama-3 Intent Detection)
    if (localGpuRef.current) {
      tl.add({
        targets: localGpuRef.current,
        scale: [1, 1.15, 1],
        boxShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 16px rgba(34,197,94,0.6)', '0 0 0px rgba(34,197,94,0)'],
        duration: 600,
        ease: 'outBack',
        onComplete: () => {
          setPipelineState('extracting');
          setLogs((prev) => [
            '[Ollama] Intención detectada: Pedido Gastronómico (99.4% conf).',
            '[Gemini Cloud] Generando esquema JSON estricto...',
            ...prev,
          ]);
        },
      });
    }

    // 2. Cloud Gemini Extraction & Typing Wave
    if (cloudGeminiRef.current) {
      tl.add({
        targets: cloudGeminiRef.current,
        scale: [1, 1.15, 1],
        boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 16px rgba(59,130,246,0.6)', '0 0 0px rgba(59,130,246,0)'],
        duration: 700,
        ease: 'outBack',
      });
    }

    // 3. JSON schema box expansion
    if (jsonBoxRef.current) {
      tl.add({
        targets: jsonBoxRef.current,
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 400,
        ease: 'outQuad',
      });
    }
  };

  const resetSimulator = () => {
    setPipelineState('idle');
    setLogs([
      '[Ollama] Llama-3 8B cuantizado listo en GPU local.',
      '[Gemini API] Canal seguro TLS 1.3 autenticado.',
      '[Webhook] Endpoint ERP /api/orders escuchando...',
    ]);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-green-400 uppercase">
            BIG JACK BOT · IA HÍBRIDA
          </span>
          <span className="text-[7px] font-mono px-1.5 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-500/20">
            Llama-3 Local + Gemini Nube
          </span>
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={processChatMessage}
            disabled={pipelineState !== 'idle'}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-40 text-zinc-950 text-[9px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> {pipelineState === 'idle' ? 'Procesar Chat' : 'Extrayendo...'}
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

      {/* Mobile Tab Selector */}
      <div className="flex sm:hidden w-full rounded-lg bg-zinc-900/60 p-0.5 border border-zinc-900 my-1.5">
        <button
          onClick={() => setActiveTab('chat')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'chat' ? 'bg-green-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          CHAT WHATSAPP
        </button>
        <button
          onClick={() => setActiveTab('json')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'json' ? 'bg-green-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          PIPELINE IA & JSON
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-grow my-1 overflow-hidden">
        {/* Left Column: WhatsApp Chat Simulator */}
        <div
          className={cn(
            'sm:col-span-6 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70 relative overflow-hidden',
            activeTab === 'chat' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Chat de Cliente (WhatsApp Web API)</span>
              <span className="text-green-400 font-bold">En Línea</span>
            </div>

            {/* Chat Bubble Area */}
            <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-900 space-y-2 min-h-[85px] flex flex-col justify-center">
              {/* Customer message */}
              <div className="p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[8px] font-mono text-zinc-300 leading-snug rounded-tl-none self-start max-w-[90%]">
                <span className="text-[6.5px] text-zinc-500 font-bold block mb-0.5">Cliente:</span>
                "{CHAT_PRESETS[selectedPreset]}"
              </div>

              {/* Bot response */}
              {pipelineState === 'dispatched' && (
                <div className="p-2 rounded-xl bg-green-950/30 border border-green-500/40 text-[8px] font-mono text-green-300 leading-snug rounded-tr-none self-end max-w-[90%]">
                  <span className="text-[6.5px] text-green-400 font-bold block mb-0.5">Agente Big Jack Bot:</span>
                  ¡Entendido! Pedido procesado y enviado a cocina 🍔⚡.
                </div>
              )}
            </div>
          </div>

          {/* Presets Selector */}
          <div className="pt-1.5 border-t border-zinc-900/60">
            <span className="block text-[6.5px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">
              Seleccionar Mensaje de Prueba
            </span>
            <div className="flex gap-1">
              {CHAT_PRESETS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPreset(idx);
                    setPipelineState('idle');
                  }}
                  className={cn(
                    'flex-1 py-1 rounded text-[7px] font-mono border transition-all cursor-pointer truncate',
                    selectedPreset === idx
                      ? 'bg-green-500/20 text-green-300 border-green-500/40'
                      : 'bg-zinc-900/60 text-zinc-500 border-zinc-900 hover:text-zinc-300'
                  )}
                >
                  Mensaje #{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dual-Brain Neural Pipeline & JSON Payload */}
        <div
          className={cn(
            'sm:col-span-6 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70',
            activeTab === 'json' ? 'flex' : 'hidden sm:flex'
          )}
        >
          {/* Neural Nodes (Llama-3 Local + Gemini Cloud) */}
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Arquitectura Dual-Brain</span>
              <ShieldCheck size={10} className="text-green-400" />
            </div>

            <div className="grid grid-cols-2 gap-1.5 font-mono text-center">
              {/* Local GPU Node */}
              <div
                ref={localGpuRef}
                className={cn(
                  'p-1.5 rounded-xl border text-[7px] transition-all',
                  pipelineState === 'classifying'
                    ? 'bg-green-950/40 border-green-500 text-green-300 shadow-md'
                    : 'bg-zinc-900/50 border-zinc-900 text-zinc-400'
                )}
              >
                <Cpu size={11} className="mx-auto mb-0.5 text-green-400" />
                <span className="font-bold block">Ollama (Llama-3)</span>
                <span className="text-[6px] text-zinc-500">Privacidad Local GPU</span>
              </div>

              {/* Gemini Cloud Node */}
              <div
                ref={cloudGeminiRef}
                className={cn(
                  'p-1.5 rounded-xl border text-[7px] transition-all',
                  pipelineState === 'extracting'
                    ? 'bg-blue-950/40 border-blue-500 text-blue-300 shadow-md'
                    : 'bg-zinc-900/50 border-zinc-900 text-zinc-400'
                )}
              >
                <Cloud size={11} className="mx-auto mb-0.5 text-blue-400" />
                <span className="font-bold block">Gemini API</span>
                <span className="text-[6px] text-zinc-500">Estructuración JSON</span>
              </div>
            </div>
          </div>

          {/* JSON Payload Output */}
          <div className="my-1 flex-grow flex flex-col justify-center">
            {pipelineState === 'dispatched' ? (
              <div
                ref={jsonBoxRef}
                className="p-2 rounded-xl bg-zinc-950 border border-green-500/30 text-[7px] font-mono text-green-400 shadow-inner"
              >
                <span className="text-[6px] text-zinc-500 block mb-0.5 uppercase tracking-wider">Payload ERP Webhook:</span>
                <pre className="overflow-x-auto whitespace-pre font-mono leading-tight">{`{
  "order": "${selectedPreset === 0 ? 'Big Jack Combo' : selectedPreset === 1 ? 'Doble Queso' : 'Clásico'}",
  "qty": ${selectedPreset === 0 ? 2 : 1},
  "sides": ["papas"],
  "beverage": "${selectedPreset === 0 ? 'Coca-Cola' : 'None'}",
  "channel": "WhatsApp"
}`}</pre>
              </div>
            ) : (
              <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-900 font-mono text-[6.5px] text-zinc-500 space-y-0.5 min-h-[60px] flex flex-col justify-center">
                {logs.slice(0, 3).map((log, idx) => (
                  <div key={idx} className={idx === 0 ? 'text-green-400 font-bold truncate' : 'truncate'}>
                    &gt; {log}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-1 border-t border-zinc-900/60 flex items-center justify-between text-[7px] font-mono">
            <span className="text-zinc-500">-65% Costo de API</span>
            <span className="text-green-400 font-bold">90% Reducción Tiempo</span>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Webhook Automático a ERP Gastronómico
        </span>
        <span className="text-zinc-600">Anime.js Neural Flow</span>
      </div>
    </div>
  );
});

WhatsappBotSim.displayName = 'WhatsappBotSim';
