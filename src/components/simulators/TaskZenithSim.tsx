import React, { useState, useEffect, useRef } from 'react';
import { IconPlayerPlay, IconPlayerPause, IconReload, IconClock, IconLock, IconLayoutGrid } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

export const TaskZenithSim = React.memo(() => {
  const [role, setRole] = useState<'admin' | 'operator'>('admin');
  const [timeLeft, setTimeLeft] = useState(1500);
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

  const progressPercent = ((1500 - timeLeft) / 1500) * 100;
  const strokeDash = (progressPercent / 100) * 125.6;

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 font-mono text-xs">
        <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">
          Workspace Modular & Pomodoro
        </span>

        <div className="flex items-center gap-1.5">
          {/* Minimal Role Pill */}
          <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800 text-[7px] font-mono">
            <button
              onClick={() => setRole('admin')}
              className={cn(
                'px-2 py-0.5 rounded-md transition-all cursor-pointer',
                role === 'admin' ? 'bg-blue-500 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              ADMIN
            </button>
            <button
              onClick={() => setRole('operator')}
              className={cn(
                'px-2 py-0.5 rounded-md transition-all cursor-pointer',
                role === 'operator' ? 'bg-blue-500 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              )}
            >
              OPERARIO
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace Stage */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow my-2 items-center font-mono">
        {/* Widget 1: Pomodoro */}
        <div className="flex items-center justify-center gap-3 p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle cx="28" cy="28" r="20" fill="none" stroke="#27272a" strokeWidth="2.5" />
              <circle
                cx="28"
                cy="28"
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
            <span className="absolute text-[10px] font-bold text-zinc-200">
              {formatTime(timeLeft)}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <button
              onClick={toggleTimer}
              className="p-1 px-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-zinc-950 text-[7.5px] font-bold flex items-center gap-1 cursor-pointer transition-all shadow-sm"
            >
              {timerRunning ? <IconPlayerPause size={9} /> : <IconPlayerPlay size={9} />}
              {timerRunning ? 'Pausar' : 'Iniciar'}
            </button>
            <button
              onClick={resetTimer}
              className="p-0.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-[7px] cursor-pointer text-center"
            >
              Reiniciar
            </button>
          </div>
        </div>

        {/* Widget 2: Sales Metrics (Restricted for Operator) */}
        <div className="relative p-3 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-center overflow-hidden min-h-[80px]">
          {role === 'operator' && (
            <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-[2px] flex items-center justify-center text-zinc-500 gap-1 z-10 text-[7.5px]">
              <IconLock size={12} className="text-zinc-500" />
              <span>Restringido por RBAC</span>
            </div>
          )}

          <span className="text-[7px] text-zinc-500 uppercase block">Facturación Diaria</span>
          <span className="text-lg font-bold text-blue-400 my-0.5">$12,478.00</span>
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[78%]" />
          </div>
          <span className="text-[6.5px] text-emerald-400 mt-1">+18.4% vs meta</span>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <IconLayoutGrid size={11} className="text-blue-400" /> Rejilla modular persistente
        </span>
        <span className="text-blue-400/80">Firestore Sync</span>
      </div>
    </div>
  );
});

TaskZenithSim.displayName = 'TaskZenithSim';
