import React, { useState, useRef, useEffect } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { IconPlayerPlay, IconReload, IconFlame, IconCheck } from '@tabler/icons-react';
import { cn } from '../../utils/cn';

interface Ingredient {
  id: string;
  name: string;
  cost: number;
  color: string;
  emoji: string;
  stockType: 'Carne' | 'Pan' | 'Queso' | 'Salsa';
}

const AVAILABLE_INGREDIENTS: Ingredient[] = [
  { id: 'bun-top', name: 'Pan Brioche', cost: 0.8, color: '#D97706', emoji: '🍞', stockType: 'Pan' },
  { id: 'patty', name: 'Carne 150g', cost: 2.2, color: '#78350F', emoji: '🥩', stockType: 'Carne' },
  { id: 'cheese', name: 'Cheddar', cost: 0.6, color: '#F59E0B', emoji: '🧀', stockType: 'Queso' },
  { id: 'sauce', name: 'Salsa Especial', cost: 0.3, color: '#EF4444', emoji: '🥫', stockType: 'Salsa' },
];

export const BigJackSim = React.memo(() => {
  const [burgerStack, setBurgerStack] = useState<Ingredient[]>([
    AVAILABLE_INGREDIENTS[0],
    AVAILABLE_INGREDIENTS[1],
    AVAILABLE_INGREDIENTS[2],
  ]);

  const [stock, setStock] = useState({ Carne: 38, Pan: 42, Queso: 76, Salsa: 50 });
  const [station, setStation] = useState<'comanda' | 'parrilla' | 'despacho'>('comanda');
  const [isSimulating, setIsSimulating] = useState(false);

  const burgerContainerRef = useRef<HTMLDivElement>(null);
  const flameParticlesRef = useRef<HTMLDivElement>(null);
  const costNumberRef = useRef<HTMLSpanElement>(null);

  const totalCost = burgerStack.reduce((acc, item) => acc + item.cost, 0);
  const suggestedPvp = totalCost > 0 ? (totalCost * 2.8).toFixed(2) : '0.00';
  const marginPercent = totalCost > 0 ? Math.round(((parseFloat(suggestedPvp) - totalCost) / parseFloat(suggestedPvp)) * 100) : 0;

  useEffect(() => {
    if (costNumberRef.current) {
      animate(costNumberRef.current, {
        scale: [1, 1.2, 1],
        duration: 300,
        ease: 'outBack',
      });
    }
  }, [totalCost]);

  const addIngredient = (ing: Ingredient) => {
    if (stock[ing.stockType] <= 0) return;
    setBurgerStack((prev) => [...prev, ing]);
    setStock((prev) => ({
      ...prev,
      [ing.stockType]: Math.max(0, prev[ing.stockType] - 1),
    }));

    setTimeout(() => {
      if (burgerContainerRef.current) {
        const layers = burgerContainerRef.current.querySelectorAll('.burger-layer');
        const lastLayer = layers[layers.length - 1];
        if (lastLayer) {
          animate(lastLayer, {
            translateY: [-30, 0],
            scale: [0.7, 1.05, 1],
            opacity: [0, 1],
            duration: 450,
            ease: 'outElastic(1, .6)',
          });
        }
      }
    }, 20);
  };

  const removeTopIngredient = () => {
    if (burgerStack.length <= 1) return;
    const removed = burgerStack[burgerStack.length - 1];
    setBurgerStack((prev) => prev.slice(0, -1));
    setStock((prev) => ({
      ...prev,
      [removed.stockType]: prev[removed.stockType] + 1,
    }));
  };

  const runFullWorkflow = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setStation('comanda');

    const tl = createTimeline({
      onComplete: () => {
        setIsSimulating(false);
      }
    });

    tl.add({
      duration: 600,
      onComplete: () => setStation('parrilla')
    });

    tl.add({
      duration: 1400,
      onBegin: () => {
        if (flameParticlesRef.current) {
          const sparks = flameParticlesRef.current.querySelectorAll('.sizzle-particle');
          animate(sparks, {
            translateY: () => [0, -25 - Math.random() * 15],
            translateX: () => [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 30],
            opacity: [1, 0],
            scale: [1, 0.2],
            delay: stagger(80),
            duration: 600,
            loop: 2,
            ease: 'outExpo'
          });
        }
      },
      onComplete: () => setStation('despacho')
    });

    tl.add({
      duration: 800,
    });
  };

  const resetAll = () => {
    setBurgerStack([
      AVAILABLE_INGREDIENTS[0],
      AVAILABLE_INGREDIENTS[1],
      AVAILABLE_INGREDIENTS[2],
    ]);
    setStock({ Carne: 38, Pan: 42, Queso: 76, Salsa: 50 });
    setStation('comanda');
    setIsSimulating(false);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between text-zinc-100 font-sans select-none">
      {/* Top minimal control bar */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/60 text-xs font-mono">
        {/* Status pipeline indicator */}
        <div className="flex items-center gap-2 text-[9px]">
          <span className={cn('transition-colors', station === 'comanda' ? 'text-amber-400 font-bold' : 'text-zinc-600')}>
            1. Comanda
          </span>
          <span className="text-zinc-700">/</span>
          <span className={cn('transition-colors flex items-center gap-1', station === 'parrilla' ? 'text-orange-400 font-bold' : 'text-zinc-600')}>
            <IconFlame size={10} className={station === 'parrilla' ? 'animate-pulse' : ''} /> 2. Cocina
          </span>
          <span className="text-zinc-700">/</span>
          <span className={cn('transition-colors flex items-center gap-0.5', station === 'despacho' ? 'text-emerald-400 font-bold' : 'text-zinc-600')}>
            <IconCheck size={10} /> 3. Despacho
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={runFullWorkflow}
            disabled={isSimulating}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-zinc-950 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
          >
            <IconPlayerPlay size={10} /> {isSimulating ? 'Cocinando' : 'Despachar'}
          </button>
          <button
            onClick={resetAll}
            className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
            aria-label="Reiniciar"
          >
            <IconReload size={12} />
          </button>
        </div>
      </div>

      {/* Main interactive plate */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 flex-grow my-2 items-center">
        {/* Burger display */}
        <div className="sm:col-span-7 flex flex-col items-center justify-center relative min-h-[140px]">
          {/* Flame particles */}
          <div ref={flameParticlesRef} className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {station === 'parrilla' && (
              <>
                <span className="sizzle-particle absolute w-1.5 h-1.5 rounded-full bg-orange-500 blur-[0.5px]" />
                <span className="sizzle-particle absolute w-2 h-2 rounded-full bg-amber-400 blur-[0.5px]" />
                <span className="sizzle-particle absolute w-1.5 h-1.5 rounded-full bg-red-500 blur-[0.5px]" />
              </>
            )}
          </div>

          <div
            ref={burgerContainerRef}
            className="flex flex-col-reverse items-center justify-center gap-1.5 py-1"
          >
            {burgerStack.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{ backgroundColor: item.color }}
                onClick={removeTopIngredient}
                className="burger-layer w-32 sm:w-36 h-4 rounded-full flex items-center justify-center text-[8px] font-mono font-bold text-white shadow-sm border border-white/15 cursor-pointer hover:opacity-80 transition-opacity"
                title="Haz clic para quitar"
              >
                <span className="mr-1">{item.emoji}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live cost readout & ingredients */}
        <div className="sm:col-span-5 flex flex-col justify-center space-y-3 font-mono">
          {/* Financial summary */}
          <div className="flex justify-between items-baseline border-b border-zinc-900/60 pb-2">
            <div>
              <span className="text-[8px] text-zinc-500 block uppercase">Costo Insumo</span>
              <span ref={costNumberRef} className="text-lg font-bold text-amber-400 inline-block">
                ${totalCost.toFixed(2)}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[8px] text-zinc-500 block uppercase">Margen</span>
              <span className="text-sm font-bold text-emerald-400">
                {marginPercent}%
              </span>
            </div>
          </div>

          {/* Quick Add Ingredient Chips */}
          <div className="grid grid-cols-2 gap-1.5">
            {AVAILABLE_INGREDIENTS.map((ing) => (
              <button
                key={ing.id}
                onClick={() => addIngredient(ing)}
                disabled={stock[ing.stockType] <= 0 || isSimulating}
                className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800/80 text-[8.5px] text-zinc-300 disabled:opacity-30 transition-all cursor-pointer"
              >
                <span>{ing.emoji} {ing.name.split(' ')[0]}</span>
                <span className="text-amber-400/80 font-bold">+${ing.cost}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Footer Info */}
      <div className="pt-1.5 border-t border-zinc-900/60 flex items-center justify-between text-[8px] font-mono text-zinc-500">
        <span>Sincronización de stock en cola de cocina</span>
        <span className="text-amber-400/80">60 FPS · Anime.js</span>
      </div>
    </div>
  );
});

BigJackSim.displayName = 'BigJackSim';
