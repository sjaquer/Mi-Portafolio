import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Compass, MapPin, Gauge, Terminal } from 'lucide-react';
import { cn } from '../../utils/cn';

export const OrdevSim = React.memo(() => {
  const [flightState, setFlightState] = useState<'idle' | 'solving' | 'flying' | 'completed'>('idle');
  const [solverLogs, setSolverLogs] = useState<string[]>([]);
  const [stats, setStats] = useState({ fuel: 100, cost: 0, time: 0 });

  // Map nodes coordinates (SVG layout space: 240 x 140)
  const baseNode = { x: 40, y: 110, label: 'Base Callao' };
  const nodeA = { x: 120, y: 35, label: 'Destino A (Chorrillos)' };
  const nodeB = { x: 200, y: 85, label: 'Destino B (La Molina)' };

  const [heliPos, setHeliPos] = useState({ x: baseNode.x, y: baseNode.y });

  const runOptimizer = async () => {
    if (flightState !== 'idle') return;
    
    // 1. Solving CP-SAT
    setFlightState('solving');
    setSolverLogs(['[CP-SAT] Iniciando solver de optimización...', '[CP-SAT] Asignando límites de carga (450kg)...']);
    
    await new Promise(r => setTimeout(r, 650));
    setSolverLogs(prev => [...prev, '[CP-SAT] Analizando 4,812 rutas alternativas...', '[CP-SAT] Restricciones de viento y combustible: OK.']);
    
    await new Promise(r => setTimeout(r, 650));
    setSolverLogs(prev => [...prev, '➔ Ruta Óptima calculada (11.8ms).', 'Asignación: Callao ➔ Chorrillos ➔ La Molina.']);
    
    await new Promise(r => setTimeout(r, 400));
    
    // 2. Start flight animation
    setFlightState('flying');
    
    // Volar a Nodo A
    setHeliPos({ x: nodeA.x, y: nodeA.y });
    setStats({ fuel: 82, cost: 120, time: 24 });
    
    await new Promise(r => setTimeout(r, 1400));
    // Volar a Nodo B
    setHeliPos({ x: nodeB.x, y: nodeB.y });
    setStats({ fuel: 54, cost: 240, time: 48 });
    
    await new Promise(r => setTimeout(r, 1400));
    setFlightState('completed');
  };

  const [activeTab, setActiveTab] = useState<'left' | 'right'>('left');

  const resetSimulator = () => {
    setFlightState('idle');
    setSolverLogs([]);
    setStats({ fuel: 100, cost: 0, time: 0 });
    setHeliPos({ x: baseNode.x, y: baseNode.y });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 lg:p-6 relative overflow-hidden font-sans select-none">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 z-10">
        <div>
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">Console</span>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 flex items-center gap-2 mt-0.5 tracking-tight font-display">
            <Compass size={13} className="text-emerald-400" /> ORDEV Solver CP-SAT
          </h4>
        </div>
        <div className="flex gap-1.5">
          <motion.button
            whileHover={{ scale: flightState !== 'idle' ? 1 : 1.02 }}
            whileTap={{ scale: flightState !== 'idle' ? 1 : 0.98 }}
            onClick={runOptimizer}
            disabled={flightState !== 'idle'}
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-slate-950 text-[10px] font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> Simular Ruta
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
          MAPA RADAR
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1.5 text-[9px] font-bold rounded-lg font-mono tracking-wider transition-all", 
            activeTab === 'right' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/5' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          SOLVER LOGS
        </button>
      </div>

      {/* Core Simulation Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-5 my-3 sm:my-5 flex-grow z-10 overflow-hidden">
        
        {/* Panel Izquierdo: SVG Vector Map (columnas 3/5) */}
        <div className={cn(
          "sm:col-span-3 flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark relative overflow-hidden",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1"><MapPin size={11} /> Monitoreo Georeferenciado</span>
            <span className="text-emerald-400 font-mono">RADAR ACTIVE</span>
          </div>

          <div className="flex-grow w-full bg-slate-950/80 rounded-2xl relative overflow-hidden border border-slate-900/60 min-h-[140px]">
            <svg className="w-full h-full" viewBox="0 0 240 140">
              {/* Pattern grid background */}
              <defs>
                <pattern id="radarGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.01)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#radarGrid)" />

              {/* Radar Sweep Effect (Infinite Rotating Laser) */}
              <g transform="translate(120, 70)">
                <circle r="60" fill="none" stroke="rgba(16, 185, 129, 0.03)" strokeWidth="1" />
                <circle r="40" fill="none" stroke="rgba(16, 185, 129, 0.02)" strokeWidth="1" />
                <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(52, 211, 153, 0.15)" strokeWidth="1.5">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </line>
              </g>

              {/* Flight vectors */}
              {flightState !== 'idle' && (
                <>
                  <motion.line
                    x1={baseNode.x} y1={baseNode.y}
                    x2={nodeA.x} y2={nodeA.y}
                    stroke="rgba(52, 211, 153, 0.4)"
                    strokeWidth="1.2"
                    strokeDasharray="4,3"
                  />
                  <motion.line
                    x1={nodeA.x} y1={nodeA.y}
                    x2={nodeB.x} y2={nodeB.y}
                    stroke="rgba(52, 211, 153, 0.4)"
                    strokeWidth="1.2"
                    strokeDasharray="4,3"
                  />
                </>
              )}

              {/* Node Indicators */}
              <circle cx={baseNode.x} cy={baseNode.y} r="4" fill="#475569" />
              <text x={baseNode.x - 15} y={baseNode.y + 13} fill="#64748b" className="text-[6.5px] font-mono font-bold uppercase">Callao</text>

              <circle cx={nodeA.x} cy={nodeA.y} r="4.5" fill="#10b981" className={flightState === 'flying' && stats.fuel <= 82 ? "animate-pulse" : ""} />
              <text x={nodeA.x - 22} y={nodeA.y - 8} fill="#94a3b8" className="text-[6.5px] font-mono font-bold uppercase">Chorrillos</text>

              <circle cx={nodeB.x} cy={nodeB.y} r="4.5" fill="#10b981" />
              <text x={nodeB.x - 20} y={nodeB.y + 13} fill="#94a3b8" className="text-[6.5px] font-mono font-bold uppercase">La Molina</text>

              {/* Draggable Helicopter Icon */}
              <motion.g
                animate={{ x: heliPos.x - 8, y: heliPos.y - 8 }}
                transition={{ type: 'spring', stiffness: 22, damping: 11 }}
              >
                {/* Visual helicopter SVG */}
                <circle cx="8" cy="8" r="4.5" fill="#34d399" className="shadow-md" />
                <line x1="1" y1="8" x2="15" y2="8" stroke="#34d399" strokeWidth="1.5" />
                <line x1="8" y1="2" x2="8" y2="8" stroke="#34d399" strokeWidth="1.5" />
                <path d="M 3 2 L 13 2" stroke="#34d399" strokeWidth="1" />
              </motion.g>
            </svg>
          </div>
        </div>

        {/* Panel Derecho: Logs + Telemetría (columnas 2/5) */}
        <div className={cn(
          "sm:col-span-2 flex flex-col justify-between gap-3 sm:gap-4",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          
          {/* Solver Logging Console */}
          <div className="flex-grow p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-2.5">
              <span className="flex items-center gap-1"><Terminal size={11} /> Logs de CP-SAT</span>
            </div>
            
            <div className="flex-grow bg-slate-950 p-2.5 rounded-xl border border-slate-900 font-mono text-[7px] text-slate-500 overflow-y-auto leading-relaxed min-h-[50px] flex flex-col gap-0.5">
              <AnimatePresence>
                {solverLogs.length === 0 ? (
                  <span className="text-slate-700 italic">Esperando instrucción...</span>
                ) : (
                  solverLogs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={idx === solverLogs.length - 1 ? "text-emerald-400" : ""}
                    >
                      &gt; {log}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Symmetrical telemetry */}
          <div className="p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark">
            <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-2.5">
              <span className="flex items-center gap-1"><Gauge size={11} /> Telemetría</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-center font-mono text-[8px]">
              <div className="p-2 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-slate-500 block mb-0.5">COMBUSTIBLE</span>
                <span className="text-slate-200 font-bold">{stats.fuel}%</span>
              </div>
              <div className="p-2 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-slate-500 block mb-0.5">VALOR DE RUTA</span>
                <span className="text-emerald-400 font-bold">${stats.cost} USD</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Banner */}
      <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] text-slate-500 font-mono z-10">
        <span>Cálculo óptimo: &lt; 15ms</span>
        <span className="text-slate-600 font-bold">Google OR-Tools CP-SAT</span>
      </div>
    </div>
  );
});

OrdevSim.displayName = 'OrdevSim';
