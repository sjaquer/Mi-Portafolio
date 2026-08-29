import React, { useState, useRef } from 'react';
import { createTimeline, stagger } from 'animejs';
import { IconPlayerPlay, IconReload, IconShoppingCart, IconUsers, IconFileSpreadsheet, IconChartBar, IconCheck } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

interface OrderPayload {
  id: string;
  client: string;
  amount: number;
}

const SAMPLE_ORDERS: OrderPayload[] = [
  { id: 'ORD-902', client: 'Alpha SAC', amount: 340 },
  { id: 'ORD-903', client: 'Comercial Lima', amount: 520 },
  { id: 'ORD-904', client: 'Textiles Sur', amount: 210 },
];

export const DearelSim = React.memo(() => {
  const [pipelineState, setPipelineState] = useState<'idle' | 'routing' | 'synced'>('idle');
  const [totalRevenue, setTotalRevenue] = useState(14850);

  const dataPacketRef = useRef<HTMLDivElement>(null);
  const crmNodeRef = useRef<HTMLDivElement>(null);
  const sheetsNodeRef = useRef<HTMLDivElement>(null);
  const pbiNodeRef = useRef<HTMLDivElement>(null);

  const dispatchOrder = (order: OrderPayload = SAMPLE_ORDERS[0]) => {
    if (pipelineState === 'routing') return;
    setPipelineState('routing');

    const tl = createTimeline({
      onComplete: () => {
        setPipelineState('synced');
        setTotalRevenue((prev) => prev + order.amount);
      },
    });

    if (dataPacketRef.current) {
      tl.add({
        targets: dataPacketRef.current,
        translateX: [0, 140],
        opacity: [0, 1, 1, 0],
        duration: 800,
        ease: 'inOutQuad',
      });
    }

    const targets = [crmNodeRef.current, sheetsNodeRef.current, pbiNodeRef.current].filter(Boolean);
    if (targets.length > 0) {
      tl.add({
        targets,
        scale: [1, 1.12, 1],
        delay: stagger(100),
        duration: 400,
        ease: 'outBack',
      }, '-=250');
    }
  };

  const resetPipeline = () => {
    setPipelineState('idle');
    setTotalRevenue(14850);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 font-mono text-xs">
        <span className="text-[9px] text-purple-400 font-bold uppercase tracking-wider">
          Pipeline Shopify ➔ CRM / Sheets / Power BI
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => dispatchOrder(SAMPLE_ORDERS[Math.floor(Math.random() * SAMPLE_ORDERS.length)])}
            disabled={pipelineState === 'routing'}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-500 hover:bg-purple-400 disabled:opacity-40 text-zinc-950 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
          >
            <IconPlayerPlay size={10} /> {pipelineState === 'routing' ? 'Sincronizando' : 'Disparar Venta'}
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

      {/* Main Flow Stage */}
      <div className="flex-grow flex items-center justify-between px-2 sm:px-6 relative my-3">
        {/* Source: Shopify */}
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-11 h-11 rounded-2xl bg-purple-950/50 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-md">
            <IconShoppingCart size={18} />
          </div>
          <span className="text-[8px] font-mono text-zinc-400">Shopify</span>
        </div>

        {/* Animated Data Line */}
        <div className="flex-grow relative h-6 flex items-center justify-center mx-3">
          <div className="w-full h-0.5 bg-gradient-to-r from-purple-500/30 via-purple-500/80 to-purple-500/30 relative">
            <div
              ref={dataPacketRef}
              className="absolute -top-1 left-0 w-2.5 h-2.5 rounded-full bg-purple-400 border border-white opacity-0 shadow-[0_0_10px_#a855f7]"
            />
          </div>
        </div>

        {/* Destination Nodes */}
        <div className="flex flex-col gap-2 z-10 font-mono text-[8px]">
          <div
            ref={crmNodeRef}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300"
          >
            <IconUsers size={12} className="text-purple-400" />
            <span>CRM Leads</span>
            <IconCheck size={10} className="text-emerald-400 ml-auto" />
          </div>

          <div
            ref={sheetsNodeRef}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300"
          >
            <IconFileSpreadsheet size={12} className="text-emerald-400" />
            <span>Google Sheets</span>
            <IconCheck size={10} className="text-emerald-400 ml-auto" />
          </div>

          <div
            ref={pbiNodeRef}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300"
          >
            <IconChartBar size={12} className="text-amber-400" />
            <span>Power BI Live</span>
            <span className="text-purple-400 font-bold ml-auto">${totalRevenue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Quick Select Buttons */}
      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-zinc-500">Probar:</span>
          {SAMPLE_ORDERS.map((ord) => (
            <button
              key={ord.id}
              onClick={() => dispatchOrder(ord)}
              disabled={pipelineState === 'routing'}
              className="px-2 py-0.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 disabled:opacity-40 transition-all cursor-pointer"
            >
              {ord.client} (${ord.amount})
            </button>
          ))}
        </div>
        <span className="text-purple-400/80">30% menos digitación manual</span>
      </div>
    </div>
  );
});

DearelSim.displayName = 'DearelSim';
