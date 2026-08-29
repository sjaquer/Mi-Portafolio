import React, { useState, useRef } from 'react';
import { createTimeline, stagger } from 'animejs';
import { IconPlayerPlay, IconReload, IconDatabase, IconBrandWhatsapp, IconMail, IconCheck } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

interface StudentRecord {
  id: string;
  name: string;
  phoneRaw: string;
  phoneNormalized: string;
}

const INITIAL_RECORDS: StudentRecord[] = [
  { id: 'STU-101', name: 'JUAN CARLOS PEREZ', phoneRaw: '987123456', phoneNormalized: '+51 987 123 456' },
  { id: 'STU-102', name: 'ana maría soto', phoneRaw: '992-334-112', phoneNormalized: '+51 992 334 112' },
  { id: 'STU-103', name: 'CARLOS DIAZ (DUPLICADO)', phoneRaw: '912883344', phoneNormalized: '+51 912 883 344' },
];

export const WienerEtlSim = React.memo(() => {
  const [stage, setStage] = useState<'idle' | 'running' | 'completed'>('idle');
  const [records, setRecords] = useState<StudentRecord[]>(INITIAL_RECORDS);

  const scanLaserRef = useRef<HTMLDivElement>(null);
  const dbNodeRef = useRef<HTMLDivElement>(null);

  const runEtlPipeline = () => {
    if (stage !== 'idle') return;
    setStage('running');

    const tl = createTimeline({
      onComplete: () => {
        setStage('completed');
        setRecords((prev) =>
          prev.map((r) => ({
            ...r,
            name: r.name.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()).replace('(DUPLICADO)', '[Deduplicado]'),
          }))
        );
      },
    });

    if (scanLaserRef.current) {
      tl.add({
        targets: scanLaserRef.current,
        translateY: [0, 80],
        opacity: [0, 1, 1, 0],
        duration: 700,
        ease: 'inOutQuad',
      });
    }

    if (dbNodeRef.current) {
      tl.add({
        targets: dbNodeRef.current,
        scale: [1, 1.15, 1],
        duration: 400,
        ease: 'outBack',
      });
    }
  };

  const resetPipeline = () => {
    setStage('idle');
    setRecords(INITIAL_RECORDS);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 font-mono text-xs">
        <span className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">
          Pipeline ETL & Campañas Omnicanal
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={runEtlPipeline}
            disabled={stage !== 'idle'}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-zinc-950 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
          >
            <IconPlayerPlay size={10} /> {stage === 'running' ? 'Procesando' : 'Ejecutar ETL'}
          </button>
          <button
            onClick={resetPipeline}
            className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <IconReload size={12} />
          </button>
        </div>
      </div>

      {/* Main records view */}
      <div className="flex-grow flex flex-col justify-center relative my-2">
        {/* Laser Scanner */}
        <div
          ref={scanLaserRef}
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#06b6d4] opacity-0 pointer-events-none z-20"
        />

        <div className="space-y-1.5 font-mono text-[8px]">
          {records.map((rec) => {
            const isClean = stage === 'completed';
            return (
              <div
                key={rec.id}
                className={cn(
                  'p-2 rounded-xl border transition-all duration-300 flex items-center justify-between',
                  isClean
                    ? 'bg-cyan-950/20 border-cyan-500/30 text-cyan-200'
                    : 'bg-zinc-900/50 border-zinc-900 text-zinc-400'
                )}
              >
                <div>
                  <span className="text-[6.5px] text-zinc-500 block">{rec.id}</span>
                  <span className="font-bold">{rec.name}</span>
                </div>
                <div className="text-right">
                  <span className={cn('block', isClean ? 'text-emerald-400 font-bold' : 'text-zinc-500')}>
                    {isClean ? rec.phoneNormalized : rec.phoneRaw}
                  </span>
                  <span className="text-[6.5px] text-zinc-500">
                    {isClean ? '✓ Estandarizado' : '⚠ Raw'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Omnichannel Dispatch Status Line */}
      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
        <div ref={dbNodeRef} className="flex items-center gap-1.5 text-cyan-400">
          <IconDatabase size={12} />
          <span>PostgreSQL + RBAC</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <IconBrandWhatsapp size={12} className={stage === 'completed' ? 'text-emerald-400' : 'text-zinc-600'} />
            <span className={stage === 'completed' ? 'text-zinc-200' : 'text-zinc-600'}>WhatsApp API</span>
          </span>
          <span className="flex items-center gap-1">
            <IconMail size={12} className={stage === 'completed' ? 'text-cyan-400' : 'text-zinc-600'} />
            <span className={stage === 'completed' ? 'text-zinc-200' : 'text-zinc-600'}>SMTP</span>
          </span>
        </div>
      </div>
    </div>
  );
});

WienerEtlSim.displayName = 'WienerEtlSim';
