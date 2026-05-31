import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Play, Pause, RotateCcw, Shield, Layers } from 'lucide-react';

export const TaskZenithSim = React.memo(() => {
  const [role, setRole] = useState<'admin' | 'operator'>('admin');
  const [isLargeWidget, setIsLargeWidget] = useState(false);
  
  // Pomodoro states
  const [timeLeft, setTimeLeft] = useState(1500); // 25:00
  const [timerRunning, setTimerRunning] = useState(false);

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

  const resetSimulator = () => {
    setRole('admin');
    setIsLargeWidget(false);
    resetTimer();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 lg:p-6 relative overflow-hidden font-sans select-none">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 z-10">
        <div>
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">Precision Console</span>
          <h4 className="text-sm font-extrabold text-slate-100 flex items-center gap-2 mt-0.5 tracking-tight font-display">
            <LayoutGrid size={15} className="text-emerald-400" /> Dashboard TaskZenith
          </h4>
        </div>
        <div className="flex gap-1.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLargeWidget(!isLargeWidget)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            <Layers size={10} /> Escalar Layout
          </motion.button>
          <button
            onClick={resetSimulator}
            className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            aria-label="Reiniciar simulador"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Core Simulation Panels */}
      <div className="grid grid-cols-1 gap-3 my-3 flex-grow z-10">
        
        {/* Role Bar Selector */}
        <div className="flex items-center justify-between p-2 bg-slate-900/40 rounded-xl border border-slate-900 text-xs">
          <span className="flex items-center gap-1.5 text-[9px] text-slate-500 font-mono font-bold uppercase tracking-wider">
            <Shield size={12} className="text-emerald-400" /> Privilegios de Acceso:
          </span>
          <div className="flex gap-1 font-mono text-[8px]">
            <button
              onClick={() => setRole('admin')}
              className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                role === 'admin' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' 
                  : 'bg-transparent text-slate-500 border border-transparent hover:text-slate-350'
              }`}
            >
              ADMIN
            </button>
            <button
              onClick={() => setRole('operator')}
              className={`px-2 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                role === 'operator' 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' 
                  : 'bg-transparent text-slate-500 border border-transparent hover:text-slate-350'
              }`}
            >
              OPERARIO
            </button>
          </div>
        </div>

        {/* Dashboard Grid Workspace */}
        <div className="grid grid-cols-2 gap-2.5 text-left font-mono">
          
          {/* Widget 1: Focus Module (Pomodoro) */}
          <div className={`p-3 bg-slate-900/40 border border-slate-800/60 shadow-bento-dark rounded-[1.5rem] transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
            isLargeWidget ? 'col-span-2' : 'col-span-1'
          }`}>
            {timerRunning && (
              <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent animate-pulse pointer-events-none" />
            )}
            
            <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-widest block">Módulo Enfoque</span>
            <div className="my-2.5 text-center">
              <span className={`text-xl font-extrabold block font-mono tracking-tighter ${
                timerRunning ? "text-emerald-400 animate-pulse" : "text-slate-100"
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <div className="flex justify-center gap-1.5 z-10">
              <button 
                onClick={toggleTimer} 
                className="p-1 px-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-emerald-400 transition-all cursor-pointer flex items-center justify-center"
                aria-label={timerRunning ? "Pausar Pomodoro" : "Iniciar Pomodoro"}
              >
                {timerRunning ? <Pause size={10} /> : <Play size={10} fill="currentColor" />}
              </button>
              <button 
                onClick={resetTimer} 
                className="p-1 px-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-slate-100 transition-all cursor-pointer flex items-center justify-center"
                aria-label="Reiniciar Pomodoro"
              >
                <RotateCcw size={10} />
              </button>
            </div>
          </div>

          {/* Widget 2: Metrics/Task Feed (Admin vs. Operator) */}
          <div className={`p-3 bg-slate-900/40 border border-slate-800/60 shadow-bento-dark rounded-[1.5rem] flex flex-col justify-between transition-all duration-300 ${
            isLargeWidget ? 'hidden' : 'col-span-1'
          }`}>
            {role === 'admin' ? (
              <>
                <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-widest block">Monitoreo Ventas</span>
                <div className="mt-2 flex flex-col gap-1">
                  <div className="flex justify-between text-[8px] text-slate-400 font-bold">
                    <span>Ventas</span>
                    <span className="text-emerald-400 font-bold">$12,478.20</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                    <div className="h-full bg-emerald-500 w-[78%]" />
                  </div>
                </div>
                <div className="text-[6.5px] text-slate-500 mt-2 italic leading-snug">
                  78.2% de la meta diaria
                </div>
              </>
            ) : (
              <>
                <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-widest block">Mis Tareas</span>
                <div className="mt-2 flex flex-col gap-1.5 text-[7px] text-slate-400 leading-none">
                  <div className="flex items-center gap-1.5">
                    <input type="checkbox" defaultChecked className="accent-emerald-500 scale-75 cursor-not-allowed" disabled />
                    <span className="line-through text-slate-600">Reunión diaria</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <input type="checkbox" className="accent-emerald-500 scale-75 cursor-not-allowed" disabled />
                    <span>Despachar ERP</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Symmetrical Grid Indicator Panel */}
          <div className="col-span-2 p-2 bg-slate-950/70 border border-slate-900 rounded-xl text-[7.5px] text-slate-500 flex justify-between items-center">
            <span className="font-bold">GRID MULTIPROPÓSITO (48 COLUMNAS)</span>
            <span className="text-emerald-400 animate-pulse font-bold tracking-widest">AUTOSYNC ON</span>
          </div>

        </div>

      </div>

      {/* Footer Banner */}
      <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] text-slate-500 font-mono z-10">
        <span>Colisiones en tiempo real</span>
        <span className="text-slate-600 font-bold">Tailwind CSS Grid v3</span>
      </div>
    </div>
  );
});

TaskZenithSim.displayName = 'TaskZenithSim';
