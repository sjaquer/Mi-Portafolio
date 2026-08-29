import React, { useState, useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { LayoutGrid, Play, Pause, RotateCcw, Shield, Layers, CheckSquare, BarChart2, Lock, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

export const TaskZenithSim = React.memo(() => {
  const [role, setRole] = useState<'admin' | 'operator'>('admin');
  const [layoutMode, setLayoutMode] = useState<'split' | 'focus' | 'dashboard'>('split');
  const [timeLeft, setTimeLeft] = useState(1500); // 25 min
  const [timerRunning, setTimerRunning] = useState(false);

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const ringProgressRef = useRef<SVGCircleElement>(null);

  // Timer logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timeLeft]);

  // Animate Layout Change with Anime.js
  const changeLayout = (mode: 'split' | 'focus' | 'dashboard') => {
    setLayoutMode(mode);
    if (gridContainerRef.current) {
      const widgets = gridContainerRef.current.querySelectorAll('.modular-widget');
      animate(widgets, {
        scale: [0.92, 1.03, 1],
        opacity: [0.5, 1],
        delay: stagger(80),
        duration: 400,
        ease: 'outBack',
      });
    }
  };

  const toggleTimer = () => setTimerRunning(!timerRunning);
  const resetTimer = () => {
    setTimerRunning(false);
    setTimeLeft(1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((1500 - timeLeft) / 1500) * 100;
  const strokeDash = (progressPercent / 100) * 125.6; // 2 * pi * r (r=20)

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-blue-400 uppercase">
            WORKSPACE MODULAR TASKZENITH
          </span>
          <span className="text-[7px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
            Grid de 48 Columnas
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Role selector */}
          <div className="flex gap-0.5 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[6.5px] font-mono">
            <button
              onClick={() => setRole('admin')}
              className={cn(
                'px-1.5 py-0.5 rounded transition-all cursor-pointer',
                role === 'admin' ? 'bg-blue-500 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              ADMIN
            </button>
            <button
              onClick={() => setRole('operator')}
              className={cn(
                'px-1.5 py-0.5 rounded transition-all cursor-pointer',
                role === 'operator' ? 'bg-blue-500 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              OPERARIO
            </button>
          </div>

          <button
            onClick={() => changeLayout(layoutMode === 'split' ? 'focus' : layoutMode === 'focus' ? 'dashboard' : 'split')}
            className="p-1 px-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-zinc-950 text-[8px] font-mono font-bold transition-all shadow-md cursor-pointer flex items-center gap-1"
          >
            <Layers size={8} /> Layout
          </button>
        </div>
      </div>

      {/* Grid Canvas Workspace */}
      <div ref={gridContainerRef} className="grid grid-cols-1 sm:grid-cols-12 gap-2 flex-grow my-1.5 overflow-hidden">
        {/* Widget 1: Focus Module / Pomodoro Timer */}
        <div
          className={cn(
            'modular-widget p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900 flex flex-col justify-between transition-all duration-300 relative',
            layoutMode === 'focus' ? 'sm:col-span-12' : layoutMode === 'dashboard' ? 'sm:col-span-4' : 'sm:col-span-6'
          )}
        >
          <div className="flex items-center justify-between text-[7px] font-mono text-zinc-500 uppercase tracking-wider">
            <span>Módulo de Enfoque</span>
            <Clock size={9} className="text-blue-400" />
          </div>

          <div className="flex items-center justify-center gap-3 py-1">
            {/* SVG Circular Ring */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" stroke="#27272a" strokeWidth="2.5" />
                <circle
                  ref={ringProgressRef}
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeDasharray="125.6"
                  strokeDashoffset={125.6 - strokeDash}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute text-[9px] font-mono font-bold text-zinc-200">
                {formatTime(timeLeft)}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <button
                onClick={toggleTimer}
                className="p-1 px-2 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 text-[7px] font-mono font-bold flex items-center gap-1 cursor-pointer transition-all"
              >
                {timerRunning ? <Pause size={7} /> : <Play size={7} fill="currentColor" />}
                {timerRunning ? 'Pausar' : 'Iniciar'}
              </button>
              <button
                onClick={resetTimer}
                className="p-0.5 rounded bg-zinc-900 text-zinc-500 hover:text-zinc-300 text-[6.5px] font-mono cursor-pointer"
              >
                Reiniciar
              </button>
            </div>
          </div>

          <span className="text-[6.5px] font-mono text-zinc-600 text-center">
            Persistencia Local en Firestore
          </span>
        </div>

        {/* Widget 2: Sales Metrics / KPI (Locked for Operator) */}
        <div
          className={cn(
            'modular-widget p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900 flex flex-col justify-between transition-all duration-300 relative overflow-hidden',
            layoutMode === 'focus' ? 'hidden' : layoutMode === 'dashboard' ? 'sm:col-span-4' : 'sm:col-span-6'
          )}
        >
          {/* Security Overlay for Operator */}
          {role === 'operator' && (
            <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-[2px] flex flex-col items-center justify-center text-zinc-500 z-20">
              <Lock size={14} className="text-zinc-600 mb-1" />
              <span className="text-[7px] font-mono uppercase tracking-wider">Restringido por Rol RBAC</span>
            </div>
          )}

          <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
            <span>Control de Ventas</span>
            <BarChart2 size={10} className="text-blue-400" />
          </div>

          <div className="p-1.5 bg-zinc-900/50 rounded-lg border border-zinc-900 text-center font-mono">
            <span className="text-[6.5px] text-zinc-500 block">Facturación Diaria</span>
            <span className="text-sm font-bold text-blue-400">$12,478.00</span>
            <div className="w-full h-1 bg-zinc-900 rounded-full mt-1 overflow-hidden">
              <div className="h-full bg-blue-500 w-[78%]" />
            </div>
          </div>

          <span className="text-[6.5px] font-mono text-emerald-400 text-right">+18.4% vs meta diaria</span>
        </div>

        {/* Widget 3: Quick Action Tasks */}
        <div
          className={cn(
            'modular-widget p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-900 flex flex-col justify-between transition-all duration-300',
            layoutMode === 'dashboard' ? 'sm:col-span-4' : 'hidden'
          )}
        >
          <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
            <span>Cola de Tareas</span>
            <CheckSquare size={10} className="text-blue-400" />
          </div>

          <div className="space-y-1 font-mono text-[7px] text-zinc-300">
            <div className="flex items-center gap-1.5 p-1 rounded bg-zinc-900/40">
              <input type="checkbox" defaultChecked className="accent-blue-500 scale-75" readOnly />
              <span className="line-through text-zinc-600">Revisión de inventario</span>
            </div>
            <div className="flex items-center gap-1.5 p-1 rounded bg-zinc-900/40">
              <input type="checkbox" className="accent-blue-500 scale-75" readOnly />
              <span>Despachar orden #409</span>
            </div>
          </div>

          <span className="text-[6px] font-mono text-zinc-600">2 de 3 completadas</span>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Detección de Colisiones & Redimensionamiento
        </span>
        <span className="text-zinc-600">Anime.js Layout Stagger</span>
      </div>
    </div>
  );
});

TaskZenithSim.displayName = 'TaskZenithSim';
