import React, { useState, useRef, useEffect } from 'react';
import { animate, createTimeline } from 'animejs';
import { Play, RotateCcw, Plane, CloudRain, Gauge, Fuel, Clock, Navigation, CheckCircle2, ShieldAlert } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Waypoint {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'base' | 'destination';
}

const DEFAULT_WAYPOINTS: Waypoint[] = [
  { id: 'callao', name: 'Base Callao (SPJC)', x: 30, y: 100, type: 'base' },
  { id: 'san_isidro', name: 'Helipuerto San Isidro', x: 100, y: 55, type: 'destination' },
  { id: 'chorrillos', name: 'Base Chorrillos', x: 140, y: 110, type: 'destination' },
  { id: 'la_molina', name: 'Destino La Molina', x: 210, y: 40, type: 'destination' },
];

export const OrdevSim = React.memo(() => {
  const [flightState, setFlightState] = useState<'idle' | 'solving' | 'flying' | 'completed'>('idle');
  const [avoidStorm, setAvoidStorm] = useState(false);
  const [cargoWeight, setCargoWeight] = useState(320); // kg
  const [activeTab, setActiveTab] = useState<'map' | 'telemetry'>('map');
  const [logs, setLogs] = useState<string[]>([
    '[CP-SAT] Motor combinatorio listo.',
    '[Restricciones] Capacidad máx: 450kg.',
    '[Clima] Visibilidad VFR estándar.',
  ]);

  const pathRef = useRef<SVGPathElement>(null);
  const aircraftRef = useRef<SVGGElement>(null);

  // Path SVG definitions: standard vs storm detour
  const standardPath = 'M 30,100 Q 100,55 140,110 T 210,40';
  const detourPath = 'M 30,100 Q 80,130 140,110 T 210,40';
  const activePathD = avoidStorm ? detourPath : standardPath;

  const runCpSatOptimizer = () => {
    if (flightState !== 'idle') return;
    setFlightState('solving');

    setLogs([
      `[CP-SAT] Optimizando ruta para ${cargoWeight}kg...`,
      avoidStorm ? '[Alerta] Desvío meteorológico aplicado.' : '[Ruta] Trayectoria directa calculada en 11.2ms.',
    ]);

    const tl = createTimeline({
      onComplete: () => {
        setFlightState('completed');
        setLogs((prev) => [
          '[Llegada] Aterrizaje confirmado en La Molina.',
          '[Métricas] Ahorro de combustible: -12.4%.',
          ...prev,
        ]);
      },
    });

    // 1. Solving phase (pulse route)
    tl.add({
      duration: 600,
      onComplete: () => setFlightState('flying'),
    });

    // 2. Draw SVG Route Line with Anime.js strokeDashoffset
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;

      tl.add({
        targets: pathRef.current,
        strokeDashoffset: [length, 0],
        duration: 1600,
        ease: 'inOutSine',
      });
    }

    // 3. Move Aircraft Icon along key coordinates
    if (aircraftRef.current) {
      tl.add(
        {
          targets: aircraftRef.current,
          translateX: [30, avoidStorm ? 80 : 100, 140, 210],
          translateY: [100, avoidStorm ? 130 : 55, 110, 40],
          duration: 1600,
          ease: 'inOutSine',
        },
        '-=1600'
      );
    }
  };

  const resetFlight = () => {
    setFlightState('idle');
    setLogs([
      '[CP-SAT] Motor combinatorio listo.',
      '[Restricciones] Capacidad máx: 450kg.',
      '[Clima] Visibilidad VFR estándar.',
    ]);
    if (pathRef.current) {
      pathRef.current.style.strokeDashoffset = '0';
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-orange-400 uppercase">
            ORDEV · CP-SAT SOLVER
          </span>
          <span className="text-[7px] font-mono px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/20">
            Google OR-Tools Logística
          </span>
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={runCpSatOptimizer}
            disabled={flightState !== 'idle'}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-40 text-zinc-950 text-[9px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> {flightState === 'flying' ? 'En Vuelo...' : 'Resolver CP-SAT'}
          </button>
          <button
            onClick={resetFlight}
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
          onClick={() => setActiveTab('map')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'map' ? 'bg-orange-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          MAPA DE VUELO
        </button>
        <button
          onClick={() => setActiveTab('telemetry')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'telemetry' ? 'bg-orange-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          TELEMETRÍA & RESTRICCIONES
        </button>
      </div>

      {/* Main Interactive Workspace */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-grow my-1 overflow-hidden">
        {/* Left Column: Interactive Vector Flight Map */}
        <div
          className={cn(
            'sm:col-span-7 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70 relative overflow-hidden',
            activeTab === 'map' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
            <span>Rutas Bézier Multidestino (Lima / Callao)</span>
            <span className="text-orange-400 font-bold">11.8ms Cálculo</span>
          </div>

          {/* SVG Flight Space (240 x 140) */}
          <div className="flex-grow flex items-center justify-center relative my-1 min-h-[110px]">
            <svg viewBox="0 0 240 140" className="w-full h-full max-h-[130px] overflow-visible">
              {/* Radar Grid circles */}
              <circle cx="120" cy="70" r="60" fill="none" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2,2" />
              <circle cx="120" cy="70" r="30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2,2" />

              {/* Storm Cell Obstacle */}
              {avoidStorm && (
                <g transform="translate(90, 45)">
                  <circle cx="12" cy="12" r="16" fill="rgba(239, 68, 68, 0.15)" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" strokeDasharray="2,2" />
                  <text x="5" y="16" fill="#ef4444" fontSize="8" fontFamily="monospace">⛈</text>
                </g>
              )}

              {/* Flight Route Path */}
              <path
                ref={pathRef}
                d={activePathD}
                fill="none"
                stroke={flightState === 'flying' ? '#f97316' : '#52525b'}
                strokeWidth={flightState === 'flying' ? '2.5' : '1.5'}
                strokeLinecap="round"
                strokeDasharray={flightState === 'flying' ? 'none' : '3,3'}
              />

              {/* Waypoints */}
              {DEFAULT_WAYPOINTS.map((wp) => (
                <g key={wp.id} transform={`translate(${wp.x}, ${wp.y})`}>
                  <circle
                    cx="0"
                    cy="0"
                    r={wp.type === 'base' ? '4' : '3'}
                    fill={wp.type === 'base' ? '#f97316' : '#e4e4e7'}
                    stroke="#18181b"
                    strokeWidth="1"
                  />
                  <text
                    x="5"
                    y="3"
                    fill="#a1a1aa"
                    fontSize="6"
                    fontFamily="monospace"
                    className="select-none pointer-events-none"
                  >
                    {wp.name.split(' ')[1] || wp.name}
                  </text>
                </g>
              ))}

              {/* Animated Aircraft */}
              <g ref={aircraftRef} transform="translate(30, 100)">
                <circle cx="0" cy="0" r="6" fill="#f97316" className="shadow-lg" />
                <path d="M -3,-3 L 3,0 L -3,3 Z" fill="#ffffff" />
              </g>
            </svg>
          </div>

          {/* Quick Scenario Toggles */}
          <div className="pt-1.5 border-t border-zinc-900/60 flex items-center justify-between">
            <button
              onClick={() => setAvoidStorm(!avoidStorm)}
              className={cn(
                'flex items-center gap-1 px-2 py-0.5 rounded text-[7px] font-mono border transition-all cursor-pointer',
                avoidStorm
                  ? 'bg-red-500/20 text-red-300 border-red-500/40'
                  : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:text-zinc-300'
              )}
            >
              <CloudRain size={8} /> {avoidStorm ? 'Tormenta: Activa (Desvío)' : 'Simular Tormenta'}
            </button>
            <span className="text-[6.5px] font-mono text-zinc-500">Curvas Bézier Adaptativas</span>
          </div>
        </div>

        {/* Right Column: Telemetry & CP-SAT Constraints */}
        <div
          className={cn(
            'sm:col-span-5 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70',
            activeTab === 'telemetry' ? 'flex' : 'hidden sm:flex'
          )}
        >
          {/* Telemetry Metrics */}
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Telemetría de Vuelo</span>
              <Gauge size={10} className="text-orange-400" />
            </div>

            <div className="grid grid-cols-2 gap-1.5 p-2 bg-zinc-900/50 rounded-xl border border-zinc-900 font-mono text-center">
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Combustible</span>
                <span className="text-xs sm:text-sm font-bold text-orange-300 inline-block">
                  {flightState === 'completed' ? '54L (-12%)' : '100%'}
                </span>
              </div>
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Carga Útil</span>
                <span className="text-xs sm:text-sm font-bold text-zinc-200 inline-block">{cargoWeight} kg</span>
              </div>
            </div>
          </div>

          {/* Cargo Weight Slider Constraint */}
          <div className="my-1.5">
            <div className="flex justify-between items-center text-[7px] font-mono text-zinc-400 mb-1">
              <span>Ajustar Carga:</span>
              <span className="text-orange-400 font-bold">{cargoWeight} / 450 kg</span>
            </div>
            <input
              type="range"
              min="100"
              max="450"
              step="25"
              value={cargoWeight}
              onChange={(e) => setCargoWeight(Number(e.target.value))}
              disabled={flightState === 'flying'}
              className="w-full accent-orange-500 h-1 bg-zinc-900 rounded-lg cursor-pointer"
            />
          </div>

          {/* CP-SAT Logs Console */}
          <div className="flex-grow flex flex-col justify-end">
            <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-900 font-mono text-[6.5px] text-zinc-400 space-y-0.5 overflow-hidden min-h-[45px]">
              {logs.map((log, idx) => (
                <div key={idx} className={idx === 0 ? 'text-orange-300 font-bold truncate' : 'text-zinc-500 truncate'}>
                  &gt; {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" /> Algoritmo Combinatorio Google OR-Tools
        </span>
        <span className="text-zinc-600">Anime.js Path Draw + Motion</span>
      </div>
    </div>
  );
});

OrdevSim.displayName = 'OrdevSim';
