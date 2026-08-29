import React, { useState, useRef, useEffect } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { Play, RotateCcw, ShoppingCart, Users, FileSpreadsheet, BarChart3, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

interface OrderPayload {
  id: string;
  client: string;
  amount: number;
  channel: string;
}

const SAMPLE_ORDERS: OrderPayload[] = [
  { id: 'ORD-902', client: 'Empresa Alpha SAC', amount: 340, channel: 'Shopify B2B' },
  { id: 'ORD-903', client: 'Comercial Lima', amount: 520, channel: 'Portal Web' },
  { id: 'ORD-904', client: 'Textiles del Sur', amount: 210, channel: 'E-commerce' },
];

export const DearelSim = React.memo(() => {
  const [pipelineState, setPipelineState] = useState<'idle' | 'routing' | 'synced'>('idle');
  const [totalRevenue, setTotalRevenue] = useState(14850);
  const [syncedRows, setSyncedRows] = useState(128);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'analytics'>('pipeline');
  const [logs, setLogs] = useState<string[]>([
    'Shopify Webhook: Escuchando eventos...',
    'Google Sheets API: Conexión activa.',
    'CRM Hub: Token OAuth validado.',
  ]);

  const pipelineSvgRef = useRef<SVGSVGElement>(null);
  const dataPacketRef = useRef<HTMLDivElement>(null);
  const crmBadgeRef = useRef<HTMLDivElement>(null);
  const sheetsBadgeRef = useRef<HTMLDivElement>(null);
  const pbiBadgeRef = useRef<HTMLDivElement>(null);

  const dispatchOrder = (order: OrderPayload = SAMPLE_ORDERS[0]) => {
    if (pipelineState === 'routing') return;
    setPipelineState('routing');

    setLogs((prev) => [
      `[Shopify] Nuevo pedido ${order.id} ($${order.amount}) recibido.`,
      ...prev.slice(0, 3),
    ]);

    const tl = createTimeline({
      onComplete: () => {
        setPipelineState('synced');
        setTotalRevenue((prev) => prev + order.amount);
        setSyncedRows((prev) => prev + 1);
        setLogs((prev) => [
          `[Power BI] Métrica actualizada: +$${order.amount}.`,
          `[Sheets] Fila insertada en Google Drive.`,
          `[CRM] Contacto ${order.client} vinculado.`,
          ...prev.slice(0, 3),
        ]);
      },
    });

    // 1. Animate data packet moving through the pipeline
    if (dataPacketRef.current) {
      tl.add({
        targets: dataPacketRef.current,
        translateX: [0, 160],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.8],
        duration: 900,
        ease: 'inOutQuad',
      });
    }

    // 2. Pulse destination nodes in stagger
    const targets = [crmBadgeRef.current, sheetsBadgeRef.current, pbiBadgeRef.current].filter(Boolean);
    if (targets.length > 0) {
      tl.add({
        targets,
        scale: [1, 1.15, 1],
        boxShadow: ['0 0 0px rgba(168,85,247,0)', '0 0 16px rgba(168,85,247,0.6)', '0 0 0px rgba(168,85,247,0)'],
        delay: stagger(150),
        duration: 500,
        ease: 'outBack',
      }, '-=300');
    }
  };

  const resetPipeline = () => {
    setPipelineState('idle');
    setTotalRevenue(14850);
    setSyncedRows(128);
    setLogs([
      'Shopify Webhook: Escuchando eventos...',
      'Google Sheets API: Conexión activa.',
      'CRM Hub: Token OAuth validado.',
    ]);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-purple-400 uppercase">
            PIPELINE OMNICANAL DEAREL
          </span>
          <span className="text-[7px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
            APIs REST + Webhooks
          </span>
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={() => dispatchOrder(SAMPLE_ORDERS[Math.floor(Math.random() * SAMPLE_ORDERS.length)])}
            disabled={pipelineState === 'routing'}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-500 hover:bg-purple-400 disabled:opacity-40 text-zinc-950 text-[9px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> {pipelineState === 'routing' ? 'Sincronizando...' : 'Disparar Pedido'}
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
          onClick={() => setActiveTab('pipeline')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'pipeline' ? 'bg-purple-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          MAPA DE FLUJO
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'analytics' ? 'bg-purple-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          POWER BI & LOGS
        </button>
      </div>

      {/* Main Visualizer Area */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-grow my-1 overflow-hidden">
        {/* Left Column: Visual Data Pipeline Flow */}
        <div
          className={cn(
            'sm:col-span-7 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70 relative overflow-hidden',
            activeTab === 'pipeline' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
            <span>Arquitectura de Sincronización en Tiempo Real</span>
            <span className="flex items-center gap-1 text-purple-400 font-bold">
              <Zap size={8} /> Cero Tareas Manuales (-30%)
            </span>
          </div>

          {/* Nodes & Connections Grid */}
          <div className="flex-grow flex items-center justify-between gap-2 px-1 relative my-2 min-h-[95px]">
            {/* Source Node: Shopify */}
            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/40 flex flex-col items-center justify-center text-purple-300 shadow-md">
                <ShoppingCart size={14} className="mb-0.5" />
                <span className="text-[6.5px] font-mono font-bold">Shopify</span>
              </div>
              <span className="text-[6.5px] font-mono text-zinc-500">Origen Venta</span>
            </div>

            {/* Middle Pipeline with moving Anime.js packet */}
            <div className="flex-grow relative h-10 flex items-center justify-center">
              {/* Connecting line */}
              <div className="w-full h-0.5 bg-gradient-to-r from-purple-500/40 via-purple-500/80 to-purple-500/40 relative">
                <div
                  ref={dataPacketRef}
                  className="absolute -top-1.5 left-0 w-3.5 h-3.5 rounded-full bg-purple-400 border border-white flex items-center justify-center shadow-[0_0_12px_#a855f7] opacity-0"
                >
                  <span className="w-1 h-1 rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Destination Nodes: CRM, Sheets, Power BI */}
            <div className="flex flex-col gap-1.5 z-10">
              {/* Node 1: CRM */}
              <div
                ref={crmBadgeRef}
                className="flex items-center gap-1.5 p-1 px-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[7px] font-mono text-zinc-300 transition-transform"
              >
                <Users size={10} className="text-purple-400" />
                <span>CRM Leads</span>
                <CheckCircle2 size={8} className="text-emerald-400 ml-auto" />
              </div>

              {/* Node 2: Google Sheets */}
              <div
                ref={sheetsBadgeRef}
                className="flex items-center gap-1.5 p-1 px-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[7px] font-mono text-zinc-300 transition-transform"
              >
                <FileSpreadsheet size={10} className="text-emerald-400" />
                <span>Google Sheets</span>
                <span className="text-[6px] text-zinc-500 ml-auto font-mono">+{syncedRows}</span>
              </div>

              {/* Node 3: Power BI */}
              <div
                ref={pbiBadgeRef}
                className="flex items-center gap-1.5 p-1 px-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[7px] font-mono text-zinc-300 transition-transform"
              >
                <BarChart3 size={10} className="text-amber-400" />
                <span>Power BI Dashboard</span>
                <span className="text-[6px] text-purple-400 ml-auto font-bold">LIVE</span>
              </div>
            </div>
          </div>

          {/* Quick Trigger Buttons */}
          <div className="pt-1.5 border-t border-zinc-900/60">
            <span className="block text-[6.5px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">
              Simular Pedidos de Clientes
            </span>
            <div className="grid grid-cols-3 gap-1">
              {SAMPLE_ORDERS.map((ord) => (
                <button
                  key={ord.id}
                  onClick={() => dispatchOrder(ord)}
                  disabled={pipelineState === 'routing'}
                  className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 text-left font-mono text-[7px] text-zinc-300 disabled:opacity-40 transition-all cursor-pointer"
                >
                  <div className="font-bold text-purple-300 truncate">{ord.client.split(' ')[0]}</div>
                  <div className="text-zinc-500">${ord.amount}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Power BI Live KPIs & Console Logs */}
        <div
          className={cn(
            'sm:col-span-5 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70',
            activeTab === 'analytics' ? 'flex' : 'hidden sm:flex'
          )}
        >
          {/* Real-time KPIs */}
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Métricas Power BI Sincronizadas</span>
              <BarChart3 size={10} className="text-purple-400" />
            </div>

            <div className="grid grid-cols-2 gap-1.5 p-2 bg-zinc-900/50 rounded-xl border border-zinc-900 font-mono text-center">
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Facturación Total</span>
                <span className="text-xs sm:text-sm font-bold text-purple-300 inline-block">
                  ${totalRevenue.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Trazabilidad</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400 inline-block">100%</span>
              </div>
            </div>
          </div>

          {/* API Event Stream / Logs */}
          <div className="mt-2 flex-grow flex flex-col justify-end">
            <span className="text-[6.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1 block">
              Registro de Webhooks y APIs
            </span>
            <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-900/80 font-mono text-[6.5px] text-zinc-400 space-y-1 min-h-[60px] overflow-hidden">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'truncate',
                    idx === 0 ? 'text-purple-300 font-bold' : 'text-zinc-500'
                  )}
                >
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" /> Sincronización Bidireccional Activa
        </span>
        <span className="text-zinc-600">Anime.js Timelines & Data Flow</span>
      </div>
    </div>
  );
});

DearelSim.displayName = 'DearelSim';
