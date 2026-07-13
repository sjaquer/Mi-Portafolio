import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, MapPin, Gauge, Terminal } from 'lucide-react';
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
    
    setFlightState('solving');
    setSolverLogs(['[CP-SAT] Iniciando solver...', '[CP-SAT] Asignando límites de carga (450kg)...']);
    
    await new Promise(r => setTimeout(r, 650));
    setSolverLogs(prev => [...prev, '[CP-SAT] Analizando 4,812 rutas...', '[CP-SAT] Restricciones clima: OK.']);
    
    await new Promise(r => setTimeout(r, 650));
    setSolverLogs(prev => [...prev, '➔ Ruta calculada en 11.8ms.', 'Ruta: Callao ➔ Chorrillos ➔ La Molina.']);
    
    await new Promise(r => setTimeout(r, 400));
    
    setFlightState('flying');
    
    // Fly to Node A
    setHeliPos({ x: nodeA.x, y: nodeA.y });
    setStats({ fuel: 82, cost: 120, time: 24 });
    
    await new Promise(r => setTimeout(r, 1400));
    // Fly to Node B
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
    <div className="w-full h-full flex flex-col justify-between p-1 lg:p-4 bg-transparent text-zinc-100 font-sans select-none">
      {/* Top action controls */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-900/60">
        <span className="text-[8px] font-mono font-bold tracking-wider text-orange-500">SIMULACIÓN CP-SAT</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: flightState !== 'idle' ? 1 : 1.02 }}
            whileTap={{ scale: flightState !== 'idle' ? 1 : 0.98 }}
            onClick={runOptimizer}
            disabled={flightState !== 'idle'}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-30 disabled:pointer-events-none text-zinc-950 text-[10px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> Resolver
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

      {/* Mobile Tab Selector */}
      <div className="flex sm:hidden w-full rounded-lg bg-zinc-900/60 p-0.5 border border-zinc-900 mb-2">
        <button 
          onClick={() => setActiveTab('left')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'left' ? 'bg-orange-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          MAPA
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'right' ? 'bg-orange-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          LOGS
        </button>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 flex-grow overflow-hidden">
        {/* Radar Map (cols 3/5) */}
        <div className={cn(
          "sm:col-span-3 flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 relative overflow-hidden",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
            <span>MONITOREO RADAR</span>
            <span className="text-orange-500">ACTIVO</span>
          </div>

          <div className="flex-grow w-full bg-zinc-950/50 rounded-xl relative overflow-hidden border border-zinc-900/40 min-h-[120px]">
            <svg className="w-full h-full" viewBox="0 0 240 140">
              <defs>
                <pattern id="radarGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#radarGrid)" />

              {/* Radar Sweep Effect */}
              <g transform="translate(120, 70)">
                <circle r="55" fill="none" stroke="rgba(249, 115, 22, 0.04)" strokeWidth="1" />
                <circle r="35" fill="none" stroke="rgba(249, 115, 22, 0.02)" strokeWidth="1" />
                <line x1="0" y1="0" x2="75" y2="0" stroke="rgba(249, 115, 22, 0.15)" strokeWidth="1.5">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0"
                    to="360"
                    dur="6s"
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
                    stroke="rgba(249, 115, 22, 0.4)"
                    strokeWidth="1.2"
                    strokeDasharray="3,3"
                  />
                  <motion.line
                    x1={nodeA.x} y1={nodeA.y}
                    x2={nodeB.x} y2={nodeB.y}
                    stroke="rgba(249, 115, 22, 0.4)"
                    strokeWidth="1.2"
                    strokeDasharray="3,3"
                  />
                </>
              )}

              {/* Node Indicators */}
              <circle cx={baseNode.x} cy={baseNode.y} r="3.5" fill="#475569" />
              <text x={baseNode.x - 12} y={baseNode.y + 10} fill="#64748b" className="text-[6px] font-mono font-bold">Callao</text>

              <circle cx={nodeA.x} cy={nodeA.y} r="4" fill="#f97316" className={flightState === 'flying' && stats.fuel <= 82 ? "animate-pulse" : ""} />
              <text x={nodeA.x - 18} y={nodeA.y - 6} fill="#94a3b8" className="text-[6px] font-mono font-bold">Chorrillos</text>

              <circle cx={nodeB.x} cy={nodeB.y} r="4" fill="#f97316" />
              <text x={nodeB.x - 18} y={nodeB.y + 10} fill="#94a3b8" className="text-[6px] font-mono font-bold">La Molina</text>

              {/* Draggable Helicopter Icon */}
              <motion.g
                animate={{ x: heliPos.x - 6, y: heliPos.y - 6 }}
                transition={{ type: 'spring', stiffness: 22, damping: 11 }}
              >
                <circle cx="6" cy="6" r="3.5" fill="#fdba74" className="shadow-md" />
                <line x1="1" y1="6" x2="11" y2="6" stroke="#fdba74" strokeWidth="1" />
                <line x1="6" y1="2" x2="6" y2="6" stroke="#fdba74" strokeWidth="1" />
                <path d="M 3 2 L 9 2" stroke="#fdba74" strokeWidth="0.8" />
              </motion.g>
            </svg>
          </div>
        </div>

        {/* Panel Derecho: Logs + Telemetría (columnas 2/5) */}
        <div className={cn(
          "sm:col-span-2 flex flex-col justify-between gap-3",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          {/* Solver Logging Console */}
          <div className="flex-grow p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
              <span>SOLVER LOGS</span>
            </div>
            
            <div className="flex-grow bg-zinc-950/60 p-2 rounded-xl border border-zinc-900/60 font-mono text-[7px] text-zinc-550 overflow-y-auto leading-relaxed min-h-[45px] flex flex-col gap-0.5">
              <AnimatePresence>
                {solverLogs.length === 0 ? (
                  <span className="text-zinc-700 italic">Esperando...</span>
                ) : (
                  solverLogs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -2 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={idx === solverLogs.length - 1 ? "text-orange-400 font-bold" : ""}
                    >
                      &gt; {log}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Symmetrical telemetry */}
          <div className="p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30">
            <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
              <span>TELEMETRÍA</span>
            </div>
            
            <div className="grid grid-cols-2 gap-1.5 text-center font-mono text-[7.5px]">
              <div className="p-1.5 bg-zinc-950/50 rounded-lg border border-zinc-900/50">
                <span className="text-zinc-500 block mb-0.5">COMBUSTIBLE</span>
                <span className="text-zinc-200 font-bold">{stats.fuel}%</span>
              </div>
              <div className="p-1.5 bg-zinc-950/50 rounded-lg border border-zinc-900/50">
                <span className="text-zinc-500 block mb-0.5">COSTO</span>
                <span className="text-orange-400 font-bold">${stats.cost} USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="border-t border-zinc-900/60 pt-2 mt-2 flex items-center justify-between text-[7.5px] text-zinc-500 font-mono">
        <span>Cálculo: &lt; 15ms</span>
        <span className="text-zinc-650 font-bold">Google OR-Tools</span>
      </div>
    </div>
  );
});

OrdevSim.displayName = 'OrdevSim';
