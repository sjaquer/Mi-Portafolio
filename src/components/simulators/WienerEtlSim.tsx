import React, { useState, useRef } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { Play, RotateCcw, Database, Send, CheckCircle2, ShieldCheck, Mail, MessageSquare, Sparkles, Filter } from 'lucide-react';
import { cn } from '../../utils/cn';

interface StudentRecord {
  id: string;
  name: string;
  phoneRaw: string;
  phoneNormalized: string;
  status: 'dirty' | 'valid' | 'dispatched';
}

const INITIAL_RECORDS: StudentRecord[] = [
  { id: 'STU-101', name: 'JUAN CARLOS PEREZ', phoneRaw: '987123456', phoneNormalized: '+51 987 123 456', status: 'dirty' },
  { id: 'STU-102', name: 'ana maría soto', phoneRaw: '992-334-112', phoneNormalized: '+51 992 334 112', status: 'dirty' },
  { id: 'STU-103', name: 'CARLOS DIAZ (DUPLICADO)', phoneRaw: '912883344', phoneNormalized: '+51 912 883 344', status: 'dirty' },
];

export const WienerEtlSim = React.memo(() => {
  const [stage, setStage] = useState<'idle' | 'extracting' | 'transforming' | 'loading' | 'dispatched'>('idle');
  const [records, setRecords] = useState<StudentRecord[]>(INITIAL_RECORDS);
  const [processedCount, setProcessedCount] = useState(10420);
  const [activeTab, setActiveTab] = useState<'etl' | 'campaign'>('etl');
  const [channelSelected, setChannelSelected] = useState<'both' | 'whatsapp' | 'smtp'>('both');

  const scanLaserRef = useRef<HTMLDivElement>(null);
  const dbIconRef = useRef<HTMLDivElement>(null);
  const dispatchBoxRef = useRef<HTMLDivElement>(null);

  const runEtlPipeline = () => {
    if (stage !== 'idle') return;
    setStage('extracting');

    const tl = createTimeline({
      onComplete: () => {
        setStage('dispatched');
        setProcessedCount((prev) => prev + 3);
        setRecords((prev) =>
          prev.map((r) => ({
            ...r,
            name: r.name.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()).replace('(DUPLICADO)', '[Deduplicado]'),
            status: 'dispatched',
          }))
        );
      },
    });

    // 1. Extraction: Laser scan pass
    if (scanLaserRef.current) {
      tl.add({
        targets: scanLaserRef.current,
        translateY: [0, 80],
        opacity: [0, 1, 1, 0],
        duration: 800,
        ease: 'inOutQuad',
        onBegin: () => setStage('transforming'),
      });
    }

    // 2. Normalization & Load to PostgreSQL
    tl.add({
      duration: 700,
      onBegin: () => setStage('loading'),
    });

    // 3. PostgreSQL pulse
    if (dbIconRef.current) {
      tl.add({
        targets: dbIconRef.current,
        scale: [1, 1.2, 1],
        boxShadow: ['0 0 0px rgba(6,182,212,0)', '0 0 16px rgba(6,182,212,0.6)', '0 0 0px rgba(6,182,212,0)'],
        duration: 500,
        ease: 'outBack',
      });
    }

    // 4. Omnichannel Dispatch Burst
    if (dispatchBoxRef.current) {
      const items = dispatchBoxRef.current.querySelectorAll('.dispatch-bubble');
      tl.add({
        targets: items,
        scale: [0.7, 1.05, 1],
        opacity: [0, 1],
        delay: stagger(120),
        duration: 500,
        ease: 'outBack',
      });
    }
  };

  const resetPipeline = () => {
    setStage('idle');
    setRecords(INITIAL_RECORDS);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header & Execution Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
            INFRAESTRUCTURA DE DATOS ETL
          </span>
          <span className="text-[7px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            PostgreSQL + WhatsApp API + SMTP
          </span>
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={runEtlPipeline}
            disabled={stage !== 'idle'}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-zinc-950 text-[9px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> {stage === 'idle' ? 'Ejecutar ETL' : 'Procesando...'}
          </button>
          <button
            onClick={resetPipeline}
            className="p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <RotateCcw size={10} />
          </button>
        </div>
      </div>

      {/* Mobile Tab Toggle */}
      <div className="flex sm:hidden w-full rounded-lg bg-zinc-900/60 p-0.5 border border-zinc-900 my-1.5">
        <button
          onClick={() => setActiveTab('etl')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'etl' ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          PIPELINE ETL
        </button>
        <button
          onClick={() => setActiveTab('campaign')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'campaign' ? 'bg-cyan-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          DESPACHO OMNICANAL
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-grow my-1 overflow-hidden">
        {/* Left Column: Data Ingestion & Transformation Table */}
        <div
          className={cn(
            'sm:col-span-7 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70 relative overflow-hidden',
            activeTab === 'etl' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
            <span>Validación & Normalización de Registros</span>
            <span className="text-cyan-400 font-bold">PostgreSQL v16</span>
          </div>

          {/* Laser scanning beam */}
          <div
            ref={scanLaserRef}
            className="absolute top-8 left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#06b6d4] opacity-0 pointer-events-none z-20"
          />

          {/* Table Data Rows */}
          <div className="space-y-1.5 my-1 flex-grow justify-center flex flex-col">
            {records.map((rec) => {
              const isClean = stage === 'dispatched';
              return (
                <div
                  key={rec.id}
                  className={cn(
                    'p-1.5 rounded-lg border text-[7.5px] font-mono transition-all duration-300 flex items-center justify-between',
                    isClean
                      ? 'bg-cyan-950/20 border-cyan-500/40 text-cyan-200 shadow-sm'
                      : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400'
                  )}
                >
                  <div>
                    <span className="text-[6px] text-zinc-500 block">{rec.id}</span>
                    <span className="font-bold">{rec.name}</span>
                  </div>
                  <div className="text-right">
                    <span className={cn('block font-mono', isClean ? 'text-emerald-400 font-bold' : 'text-zinc-500')}>
                      {isClean ? rec.phoneNormalized : rec.phoneRaw}
                    </span>
                    <span className="text-[6px] text-zinc-500">
                      {isClean ? '✓ Estandarizado' : '⚠ Sin Normalizar'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Database Architecture Banner */}
          <div className="pt-1.5 border-t border-zinc-900/60 flex items-center justify-between text-[7px] font-mono">
            <div ref={dbIconRef} className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Database size={11} />
              <span>Migración SQLite ➔ PostgreSQL Completada</span>
            </div>
            <span className="text-zinc-500 flex items-center gap-1">
              <ShieldCheck size={10} className="text-emerald-400" /> RBAC Activo
            </span>
          </div>
        </div>

        {/* Right Column: Omnichannel Campaign Dispatcher */}
        <div
          className={cn(
            'sm:col-span-5 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70',
            activeTab === 'campaign' ? 'flex' : 'hidden sm:flex'
          )}
        >
          {/* Campaign Metrics */}
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Métricas de Automatización</span>
              <Send size={10} className="text-cyan-400" />
            </div>

            <div className="grid grid-cols-2 gap-1.5 p-2 bg-zinc-900/50 rounded-xl border border-zinc-900 font-mono text-center">
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Procesados</span>
                <span className="text-xs sm:text-sm font-bold text-cyan-300 inline-block">
                  {processedCount.toLocaleString()}+
                </span>
              </div>
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Automatización</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 inline-block">90%</span>
              </div>
            </div>
          </div>

          {/* Omnichannel Dispatch Status */}
          <div ref={dispatchBoxRef} className="mt-2 flex-grow flex flex-col justify-end space-y-1.5">
            <span className="text-[6.5px] font-mono text-zinc-500 uppercase tracking-wider block">
              Canales de Salida Institucional
            </span>

            {/* WhatsApp API card */}
            <div className="dispatch-bubble flex items-center justify-between p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[7px] font-mono">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <MessageSquare size={10} className="text-emerald-400" />
                <span>WhatsApp Cloud API</span>
              </div>
              <span className={cn('text-[6.5px] font-bold', stage === 'dispatched' ? 'text-emerald-400' : 'text-zinc-600')}>
                {stage === 'dispatched' ? '✓ Enviado 100%' : 'En Espera'}
              </span>
            </div>

            {/* Email SMTP card */}
            <div className="dispatch-bubble flex items-center justify-between p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[7px] font-mono">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <Mail size={10} className="text-cyan-400" />
                <span>SMTP Institucional</span>
              </div>
              <span className={cn('text-[6.5px] font-bold', stage === 'dispatched' ? 'text-cyan-400' : 'text-zinc-600')}>
                {stage === 'dispatched' ? '✓ Enviado 100%' : 'En Espera'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Servidor Local con Auditoría y Backups
        </span>
        <span className="text-zinc-600">ETL Pipelines + Anime.js</span>
      </div>
    </div>
  );
});

WienerEtlSim.displayName = 'WienerEtlSim';
