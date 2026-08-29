import React, { useState, useRef, useEffect } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import { Play, RotateCcw, Plus, Flame, CheckCircle2, DollarSign, PackageCheck, AlertCircle } from 'lucide-react';
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
  { id: 'patty', name: 'Carne Smash 150g', cost: 2.2, color: '#78350F', emoji: '🥩', stockType: 'Carne' },
  { id: 'cheese', name: 'Queso Cheddar', cost: 0.6, color: '#F59E0B', emoji: '🧀', stockType: 'Queso' },
  { id: 'sauce', name: 'Salsa Especial', cost: 0.3, color: '#EF4444', emoji: '🥫', stockType: 'Salsa' },
];

export const BigJackSim = React.memo(() => {
  const [burgerStack, setBurgerStack] = useState<Ingredient[]>([
    AVAILABLE_INGREDIENTS[0], // Pan
    AVAILABLE_INGREDIENTS[1], // Carne
    AVAILABLE_INGREDIENTS[2], // Queso
  ]);

  const [stock, setStock] = useState({ Carne: 38, Pan: 42, Queso: 76, Salsa: 50 });
  const [station, setStation] = useState<'comanda' | 'parrilla' | 'despacho'>('comanda');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeTab, setActiveTab] = useState<'build' | 'metrics'>('build');

  const burgerContainerRef = useRef<HTMLDivElement>(null);
  const flameParticlesRef = useRef<HTMLDivElement>(null);
  const costNumberRef = useRef<HTMLSpanElement>(null);
  const marginNumberRef = useRef<HTMLSpanElement>(null);

  // Totals
  const totalCost = burgerStack.reduce((acc, item) => acc + item.cost, 0);
  const suggestedPvp = totalCost > 0 ? (totalCost * 2.8).toFixed(2) : '0.00';
  const marginPercent = totalCost > 0 ? Math.round(((parseFloat(suggestedPvp) - totalCost) / parseFloat(suggestedPvp)) * 100) : 0;

  // Animate cost change with Anime.js
  useEffect(() => {
    if (costNumberRef.current) {
      animate(costNumberRef.current, {
        scale: [1, 1.25, 1],
        duration: 350,
        ease: 'outBack',
      });
    }
  }, [totalCost]);

  // Animate new item in the burger stack
  const addIngredient = (ing: Ingredient) => {
    if (stock[ing.stockType] <= 0) return;

    setBurgerStack((prev) => [...prev, ing]);
    setStock((prev) => ({
      ...prev,
      [ing.stockType]: Math.max(0, prev[ing.stockType] - 1),
    }));

    // Trigger bounce animation on the container
    setTimeout(() => {
      if (burgerContainerRef.current) {
        const layers = burgerContainerRef.current.querySelectorAll('.burger-layer');
        const lastLayer = layers[layers.length - 1];
        if (lastLayer) {
          animate(lastLayer, {
            translateY: [-35, 0],
            scale: [0.7, 1.05, 1],
            opacity: [0, 1],
            duration: 500,
            ease: 'outElastic(1, .5)',
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

    // Step 1: Comanda blink
    tl.add({
      duration: 700,
      onComplete: () => setStation('parrilla')
    });

    // Step 2: Parrilla flame & sizzle
    tl.add({
      duration: 1600,
      onBegin: () => {
        if (flameParticlesRef.current) {
          const sparks = flameParticlesRef.current.querySelectorAll('.sizzle-particle');
          animate(sparks, {
            translateY: () => [0, -30 - Math.random() * 20],
            translateX: () => [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
            opacity: [1, 0],
            scale: [1, 0.2],
            delay: stagger(90),
            duration: 700,
            loop: 2,
            ease: 'outExpo'
          });
        }
      },
      onComplete: () => setStation('despacho')
    });

    // Step 3: Despacho confirmation
    tl.add({
      duration: 1000,
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
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 bg-zinc-950/40 text-zinc-100 font-sans select-none rounded-2xl">
      {/* Top Header & Workflow Status */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-mono font-bold tracking-widest text-amber-400 uppercase">
            ERP BIG JACK
          </span>
          <div className="flex items-center gap-1 text-[7.5px] font-mono">
            <span
              className={cn(
                'px-1.5 py-0.5 rounded transition-all',
                station === 'comanda' ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40' : 'text-zinc-600'
              )}
            >
              1. Comanda
            </span>
            <span className="text-zinc-700">→</span>
            <span
              className={cn(
                'px-1.5 py-0.5 rounded transition-all flex items-center gap-1',
                station === 'parrilla' ? 'bg-orange-500/20 text-orange-400 font-bold border border-orange-500/40' : 'text-zinc-600'
              )}
            >
              <Flame size={9} className={station === 'parrilla' ? 'text-orange-400 animate-pulse' : ''} /> 2. Cocina
            </span>
            <span className="text-zinc-700">→</span>
            <span
              className={cn(
                'px-1.5 py-0.5 rounded transition-all flex items-center gap-0.5',
                station === 'despacho' ? 'bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40' : 'text-zinc-600'
              )}
            >
              <CheckCircle2 size={9} /> 3. Despacho
            </span>
          </div>
        </div>

        <div className="flex gap-1.5">
          <button
            onClick={runFullWorkflow}
            disabled={isSimulating}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-zinc-950 text-[9px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> {isSimulating ? 'Cocinando...' : 'Despachar'}
          </button>
          <button
            onClick={resetAll}
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
          onClick={() => setActiveTab('build')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'build' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          ARMADOR DE RECETA
        </button>
        <button
          onClick={() => setActiveTab('metrics')}
          className={cn(
            'flex-1 py-1 text-[8.5px] font-bold rounded-md font-mono transition-all',
            activeTab === 'metrics' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          COSTOS Y STOCK
        </button>
      </div>

      {/* Main interactive area */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 flex-grow my-1 overflow-hidden">
        {/* Left Col: Interactive Burger Assembly Plate */}
        <div
          className={cn(
            'sm:col-span-6 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70 relative overflow-hidden',
            activeTab === 'build' ? 'flex' : 'hidden sm:flex'
          )}
        >
          <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
            <span>Plancha de Armado ({burgerStack.length} capas)</span>
            <button
              onClick={removeTopIngredient}
              className="text-red-400 hover:underline cursor-pointer"
              title="Quitar última capa"
            >
              Deshacer capa
            </button>
          </div>

          {/* Sizzle particles container */}
          <div ref={flameParticlesRef} className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {station === 'parrilla' && (
              <>
                <span className="sizzle-particle absolute w-1.5 h-1.5 rounded-full bg-orange-500 blur-[0.5px]" />
                <span className="sizzle-particle absolute w-2 h-2 rounded-full bg-amber-400 blur-[0.5px]" />
                <span className="sizzle-particle absolute w-1 h-1 rounded-full bg-red-500 blur-[0.5px]" />
                <span className="sizzle-particle absolute w-1.5 h-1.5 rounded-full bg-yellow-300 blur-[0.5px]" />
              </>
            )}
          </div>

          {/* Interactive Stack Display */}
          <div
            ref={burgerContainerRef}
            className="flex-grow flex flex-col-reverse items-center justify-center gap-1 py-2 min-h-[90px] relative"
          >
            {burgerStack.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{ backgroundColor: item.color }}
                className="burger-layer w-28 sm:w-32 h-3.5 sm:h-4 rounded-full flex items-center justify-center text-[7.5px] font-mono font-bold text-white shadow-sm border border-white/20 transition-transform cursor-pointer hover:scale-105"
              >
                <span className="mr-1">{item.emoji}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Ingredients Palette (Click to add with Anime.js bounce) */}
          <div className="pt-1.5 border-t border-zinc-900/60">
            <span className="block text-[7px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">
              + Agregar Insumo a la Receta
            </span>
            <div className="grid grid-cols-2 gap-1">
              {AVAILABLE_INGREDIENTS.map((ing) => (
                <button
                  key={ing.id}
                  onClick={() => addIngredient(ing)}
                  disabled={stock[ing.stockType] <= 0 || isSimulating}
                  className="flex items-center justify-between p-1 px-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-[8px] font-mono text-zinc-300 disabled:opacity-30 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-1">
                    <span>{ing.emoji}</span> {ing.name.split(' ')[0]}
                  </span>
                  <span className="text-amber-400 font-bold">+${ing.cost}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Real-time Recipe Costing & Stock Matrix */}
        <div
          className={cn(
            'sm:col-span-6 flex flex-col justify-between p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900/70',
            activeTab === 'metrics' ? 'flex' : 'hidden sm:flex'
          )}
        >
          {/* Real-Time Recipe Financials */}
          <div>
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
              <span>Costo & Margen en Tiempo Real</span>
              <DollarSign size={10} className="text-amber-400" />
            </div>

            <div className="grid grid-cols-3 gap-1.5 p-2 bg-zinc-900/50 rounded-xl border border-zinc-900 font-mono text-center">
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Costo Insumos</span>
                <span ref={costNumberRef} className="text-xs sm:text-sm font-bold text-amber-400 inline-block">
                  ${totalCost.toFixed(2)}
                </span>
              </div>
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">PVP Sugerido</span>
                <span className="text-xs sm:text-sm font-bold text-zinc-200">${suggestedPvp}</span>
              </div>
              <div>
                <span className="block text-[6.5px] text-zinc-500 uppercase">Margen Bruto</span>
                <span ref={marginNumberRef} className="text-xs sm:text-sm font-bold text-emerald-400 inline-block">
                  {marginPercent}%
                </span>
              </div>
            </div>
          </div>

          {/* Live Inventory Deductions */}
          <div className="mt-2">
            <div className="flex items-center justify-between text-[7.5px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
              <span>Stock en Cola de Producción</span>
              <PackageCheck size={10} className="text-emerald-400" />
            </div>

            <div className="space-y-1.5 font-mono text-[7.5px]">
              {(Object.keys(stock) as Array<keyof typeof stock>).map((key) => {
                const max = key === 'Queso' ? 90 : 50;
                const pct = Math.round((stock[key] / max) * 100);
                const isLow = stock[key] < 15;
                return (
                  <div key={key} className="p-1 px-1.5 bg-zinc-900/30 rounded-lg border border-zinc-900/50">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-zinc-400">{key}</span>
                      <span className={cn('font-bold', isLow ? 'text-red-400 flex items-center gap-0.5' : 'text-zinc-300')}>
                        {isLow && <AlertCircle size={7} />} {stock[key]} u. ({pct}%)
                      </span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${pct}%` }}
                        className={cn(
                          'h-full transition-all duration-500 rounded-full',
                          isLow ? 'bg-red-500' : 'bg-amber-400'
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="pt-1.5 border-t border-zinc-900/70 flex items-center justify-between text-[7px] font-mono text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" /> Sincronización Webhook Cocina ➔ Inventario
        </span>
        <span className="text-zinc-600">Anime.js Springs + Timeline</span>
      </div>
    </div>
  );
});

BigJackSim.displayName = 'BigJackSim';
