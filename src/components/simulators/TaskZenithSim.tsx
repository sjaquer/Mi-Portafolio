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
    <div className="w-full h-full flex flex-col justify-between p-1 lg:p-4 bg-transparent text-zinc-100 font-sans select-none">
      {/* Top action controls */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-900/60">
        <span className="text-[8px] font-mono font-bold tracking-wider text-blue-500">MÓDULO DE REJILLA</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsLargeWidget(!isLargeWidget)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500 hover:bg-blue-400 text-zinc-950 text-[10px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Layers size={9} /> Escalar
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

      {/* Panels */}
      <div className="grid grid-cols-1 gap-2.5 my-2.5 flex-grow">
        {/* Role Bar Selector */}
        <div className="flex items-center justify-between p-2 bg-zinc-950/40 rounded-xl border border-zinc-900/50 text-[9px]">
          <span className="flex items-center gap-1.5 text-[7.5px] text-zinc-500 font-mono font-bold uppercase tracking-wider">
            <Shield size={10} className="text-blue-400" /> Permisos:
          </span>
          <div className="flex gap-1 font-mono text-[7px]">
            <button
              onClick={() => setRole('admin')}
              className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
                role === 'admin' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                  : 'bg-transparent text-zinc-500 border border-transparent hover:text-zinc-300'
              }`}
            >
              ADMIN
            </button>
            <button
              onClick={() => setRole('operator')}
              className={`px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${
                role === 'operator' 
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                  : 'bg-transparent text-zinc-500 border border-transparent hover:text-zinc-300'
              }`}
            >
              OPERARIO
            </button>
          </div>
        </div>

        {/* Dashboard Grid Workspace */}
        <div className="grid grid-cols-2 gap-2 text-left font-mono">
          {/* Widget 1: Focus Module (Pomodoro) */}
          <div className={`p-2.5 bg-zinc-950/20 border border-zinc-900/40 shadow-inner rounded-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
            isLargeWidget ? 'col-span-2' : 'col-span-1'
          }`}>
            {timerRunning && (
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent animate-pulse pointer-events-none" />
            )}
            
            <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest block">Pomodoro</span>
            <div className="my-1.5 text-center">
              <span className={`text-lg font-extrabold block font-mono tracking-tighter ${
                timerRunning ? "text-blue-400 animate-pulse" : "text-zinc-200"
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            
            <div className="flex justify-center gap-1.5 z-10">
              <button 
                onClick={toggleTimer} 
                className="p-1 px-1.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-blue-400 transition-all cursor-pointer flex items-center justify-center"
                aria-label={timerRunning ? "Pausar" : "Iniciar"}
              >
                {timerRunning ? <Pause size={8} /> : <Play size={8} fill="currentColor" />}
              </button>
              <button 
                onClick={resetTimer} 
                className="p-1 px-1.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-zinc-100 transition-all cursor-pointer flex items-center justify-center"
                aria-label="Reiniciar"
              >
                <RotateCcw size={8} />
              </button>
            </div>
          </div>

          {/* Widget 2: Metrics/Task Feed */}
          <div className={`p-2.5 bg-zinc-950/20 border border-zinc-900/40 shadow-inner rounded-2xl flex flex-col justify-between transition-all duration-300 ${
            isLargeWidget ? 'hidden' : 'col-span-1'
          }`}>
            {role === 'admin' ? (
              <>
                <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest block">Ventas</span>
                <div className="mt-1 flex flex-col gap-1">
                  <div className="flex justify-between text-[7px] text-zinc-400 font-bold">
                    <span>Meta</span>
                    <span className="text-blue-400 font-bold">$12,478</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[78%]" />
                  </div>
                </div>
                <div className="text-[6px] text-zinc-550 mt-1 italic leading-snug">
                  78.2% completado
                </div>
              </>
            ) : (
              <>
                <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest block">Tareas</span>
                <div className="mt-1 flex flex-col gap-1 text-[6.5px] text-zinc-400 leading-none">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" defaultChecked className="accent-blue-500 scale-75 cursor-not-allowed" disabled />
                    <span className="line-through text-zinc-600">Reunión</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" className="accent-blue-500 scale-75 cursor-not-allowed" disabled />
                    <span>Despachar ERP</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Grid Metadata Footer */}
          <div className="col-span-2 p-1.5 bg-zinc-950/50 border border-zinc-900/60 rounded-xl text-[7px] text-zinc-550 flex justify-between items-center">
            <span className="font-bold">REJILLA DE 48 COLUMNAS</span>
            <span className="text-blue-400 font-bold">AUTOSYNC</span>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="border-t border-zinc-900/60 pt-2 mt-2 flex items-center justify-between text-[7.5px] text-zinc-500 font-mono">
        <span>Persistencia Local</span>
        <span className="text-zinc-650 font-bold">CSS Grid</span>
      </div>
    </div>
  );
});

TaskZenithSim.displayName = 'TaskZenithSim';
