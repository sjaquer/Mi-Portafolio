import React, { useState, useRef } from 'react';
import { createTimeline } from 'animejs';
import { IconPlayerPlay, IconReload, IconCloudRain } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

interface Waypoint {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'base' | 'destination';
}

const DEFAULT_WAYPOINTS: Waypoint[] = [
  { id: 'callao', name: 'SPJC Callao', x: 30, y: 95, type: 'base' },
  { id: 'san_isidro', name: 'San Isidro', x: 105, y: 50, type: 'destination' },
  { id: 'chorrillos', name: 'Chorrillos', x: 145, y: 105, type: 'destination' },
  { id: 'la_molina', name: 'La Molina', x: 215, y: 35, type: 'destination' },
];

export const OrdevSim = React.memo(() => {
  const [flightState, setFlightState] = useState<'idle' | 'flying' | 'completed'>('idle');
  const [avoidStorm, setAvoidStorm] = useState(false);
  const [cargoWeight, setCargoWeight] = useState(320);

  const pathRef = useRef<SVGPathElement>(null);
  const aircraftRef = useRef<SVGGElement>(null);

  const standardPath = 'M 30,95 Q 105,50 145,105 T 215,35';
  const detourPath = 'M 30,95 Q 85,125 145,105 T 215,35';
  const activePathD = avoidStorm ? detourPath : standardPath;

  const runCpSatOptimizer = () => {
    if (flightState !== 'idle') return;
    setFlightState('flying');

    const tl = createTimeline({
      onComplete: () => {
        setFlightState('completed');
      },
    });

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;

      tl.add({
        targets: pathRef.current,
        strokeDashoffset: [length, 0],
        duration: 1500,
        ease: 'inOutSine',
      });
    }

    if (aircraftRef.current) {
      tl.add(
        {
          targets: aircraftRef.current,
          translateX: [30, avoidStorm ? 85 : 105, 145, 215],
          translateY: [95, avoidStorm ? 125 : 50, 105, 35],
          duration: 1500,
          ease: 'inOutSine',
        },
        '-=1500'
      );
    }
  };

  const resetFlight = () => {
    setFlightState('idle');
    if (pathRef.current) {
      pathRef.current.style.strokeDashoffset = '0';
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 font-mono text-xs">
        <span className="text-[9px] text-orange-400 font-bold uppercase tracking-wider">
          Planificador CP-SAT Google OR-Tools
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={runCpSatOptimizer}
            disabled={flightState === 'flying'}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-40 text-zinc-950 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
          >
            <IconPlayerPlay size={10} /> {flightState === 'flying' ? 'Calculando' : 'Resolver Ruta'}
          </button>
          <button
            onClick={resetFlight}
            className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <IconReload size={12} />
          </button>
        </div>
      </div>

      {/* Main SVG Radar Map */}
      <div className="flex-grow flex items-center justify-center relative my-2 min-h-[120px]">
        <svg viewBox="0 0 240 130" className="w-full h-full max-h-[140px] overflow-visible">
          {/* Subtle radar range rings */}
          <circle cx="120" cy="65" r="55" fill="none" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2,2" />
          <circle cx="120" cy="65" r="30" fill="none" stroke="#27272a" strokeWidth="0.5" strokeDasharray="2,2" />

          {/* Storm obstacle */}
          {avoidStorm && (
            <g transform="translate(95, 40)">
              <circle cx="10" cy="10" r="14" fill="rgba(239, 68, 68, 0.12)" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1" strokeDasharray="2,2" />
              <text x="5" y="14" fill="#ef4444" fontSize="8">⛈</text>
            </g>
          )}

          {/* Flight Path */}
          <path
            ref={pathRef}
            d={activePathD}
            fill="none"
            stroke={flightState === 'flying' ? '#f97316' : '#52525b'}
            strokeWidth={flightState === 'flying' ? '2.5' : '1.2'}
            strokeLinecap="round"
            strokeDasharray={flightState === 'flying' ? 'none' : '3,3'}
          />

          {/* Waypoints */}
          {DEFAULT_WAYPOINTS.map((wp) => (
            <g key={wp.id} transform={`translate(${wp.x}, ${wp.y})`}>
              <circle
                cx="0"
                cy="0"
                r={wp.type === 'base' ? '3.5' : '2.5'}
                fill={wp.type === 'base' ? '#f97316' : '#a1a1aa'}
              />
              <text
                x="5"
                y="3"
                fill="#71717a"
                fontSize="6.5"
                fontFamily="monospace"
                className="select-none pointer-events-none"
              >
                {wp.name}
              </text>
            </g>
          ))}

          {/* Aircraft */}
          <g ref={aircraftRef} transform="translate(30, 95)">
            <circle cx="0" cy="0" r="5" fill="#f97316" className="shadow-lg" />
            <path d="M -2.5,-2.5 L 2.5,0 L -2.5,2.5 Z" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* Footer controls: Weight slider & storm toggle */}
      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAvoidStorm(!avoidStorm)}
            className={cn(
              'flex items-center gap-1 px-2 py-0.5 rounded-lg border transition-all cursor-pointer',
              avoidStorm
                ? 'bg-red-500/20 text-red-300 border-red-500/40'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            )}
          >
            <IconCloudRain size={11} /> {avoidStorm ? 'Tormenta: ON' : 'Tormenta'}
          </button>

          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>Carga:</span>
            <input
              type="range"
              min="100"
              max="450"
              step="25"
              value={cargoWeight}
              onChange={(e) => setCargoWeight(Number(e.target.value))}
              className="w-16 accent-orange-500 h-1 bg-zinc-900 rounded-lg cursor-pointer"
            />
            <span className="text-orange-400 font-bold">{cargoWeight}kg</span>
          </div>
        </div>

        <span className="text-orange-400/80">11.8ms resolución</span>
      </div>
    </div>
  );
});

OrdevSim.displayName = 'OrdevSim';
