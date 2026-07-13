import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle, Clock, ShoppingBag, Database, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const BigJackSim = React.memo(() => {
  const [orders, setOrders] = useState<Array<{ id: string; time: string; status: 'pending' | 'cooking' | 'ready' }>>([]);
  const [stock, setStock] = useState({ Carne: 35, Pan: 35, Queso: 70 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'idle' | 'ordered' | 'cooking' | 'ready'>('idle');

  const [activeTab, setActiveTab] = useState<'left' | 'right'>('left');

  const maxStock = { Carne: 45, Pan: 45, Queso: 90 };

  const simulateOrder = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setStep('ordered');

    const newOrderId = `BJ-${Math.floor(100 + Math.random() * 900)}`;
    const newOrder = {
      id: newOrderId,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      status: 'pending' as const
    };

    setOrders((prev) => [newOrder, ...prev].slice(0, 2));

    setTimeout(() => {
      setStep('cooking');
      setOrders((prev) =>
        prev.map((o) => (o.id === newOrderId ? { ...o, status: 'cooking' } : o))
      );

      setStock((prev) => ({
        Carne: Math.max(0, prev.Carne - 1),
        Pan: Math.max(0, prev.Pan - 1),
        Queso: Math.max(0, prev.Queso - 2)
      }));
    }, 1500);

    setTimeout(() => {
      setStep('ready');
      setOrders((prev) =>
        prev.map((o) => (o.id === newOrderId ? { ...o, status: 'ready' } : o))
      );
      setIsProcessing(false);
    }, 3500);
  };

  const resetSimulator = () => {
    setOrders([]);
    setStock({ Carne: 35, Pan: 35, Queso: 70 });
    setIsProcessing(false);
    setStep('idle');
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-1 lg:p-4 bg-transparent text-zinc-100 font-sans select-none">
      {/* Top action controls (minimal, floating) */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-900/60">
        <span className="text-[8px] font-mono font-bold tracking-wider text-amber-500">SIMULACIÓN ERP</span>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: isProcessing ? 1 : 0.98 }}
            onClick={simulateOrder}
            disabled={isProcessing}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-30 disabled:pointer-events-none text-zinc-950 text-[10px] font-bold transition-all shadow-md cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> Ordenar
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

      {/* Tabs for mobile layout */}
      <div className="flex sm:hidden w-full rounded-lg bg-zinc-900/60 p-0.5 border border-zinc-900 mb-2">
        <button 
          onClick={() => setActiveTab('left')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'left' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          PEDIDO
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1 text-[9px] font-bold rounded-md font-mono transition-all", 
            activeTab === 'right' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'
          )}
        >
          INVENTARIO
        </button>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-grow overflow-hidden">
        {/* Left Panel: Recipe Assembly */}
        <div className={cn(
          "flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 justify-between relative overflow-hidden",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
            <span>MONITOR APP</span>
            <span className="text-amber-500 font-mono">1x Clásica</span>
          </div>

          {/* Interactive Stack Burger Visualization */}
          <div className="flex-grow flex flex-col justify-center items-center py-2 h-[100px] relative">
            <AnimatePresence mode="popLayout">
              {/* Top Bun */}
              {(step === 'idle' || step === 'ready' || step === 'cooking' || step === 'ordered') && (
                <motion.div
                  key="top-bun"
                  layout
                  initial={{ y: -60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-14 h-3.5 bg-amber-600 rounded-t-full shadow-md border-b border-amber-700/40"
                />
              )}

              {/* Lettuce */}
              {(step === 'cooking' || step === 'ready') && (
                <motion.div
                  key="lettuce"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.05 }}
                  className="w-[60px] h-1.5 bg-emerald-500 rounded-full mt-0.5 shadow-sm"
                />
              )}

              {/* Cheese 1 */}
              {(step === 'cooking' || step === 'ready') && (
                <motion.div
                  key="cheese-1"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 13, delay: 0.1 }}
                  className="w-[56px] h-0.5 bg-yellow-400 rounded mt-0.5"
                />
              )}

              {/* Meat Patty */}
              {(step === 'cooking' || step === 'ready') && (
                <motion.div
                  key="meat"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 12, delay: 0.15 }}
                  className="w-14 h-2.5 bg-amber-950 rounded-md mt-0.5 border border-amber-900/60"
                />
              )}

              {/* Cheese 2 */}
              {step === 'ready' && (
                <motion.div
                  key="cheese-2"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 13, delay: 0.2 }}
                  className="w-[56px] h-0.5 bg-yellow-400 rounded mt-0.5"
                />
              )}

              {/* Bottom Bun */}
              {(step === 'idle' || step === 'ready' || step === 'cooking' || step === 'ordered') && (
                <motion.div
                  key="bottom-bun"
                  layout
                  initial={{ y: 0, opacity: 1 }}
                  className="w-14 h-2.5 bg-amber-600 rounded-b-md mt-0.5 shadow border-t border-amber-500/20"
                />
              )}
            </AnimatePresence>

            <span className="text-[7px] font-mono text-zinc-500 absolute bottom-0">
              {step === 'idle' && "Disponible"}
              {step === 'ordered' && "Procesando..."}
              {step === 'cooking' && "Preparando..."}
              {step === 'ready' && "¡Sándwich Listo!"}
            </span>
          </div>
        </div>

        {/* Right Panel: Inventory progress + active queue */}
        <div className={cn(
          "flex flex-col p-3 rounded-2xl bg-zinc-950/20 border border-zinc-900/30 justify-between",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          {/* Inventory Progress Bars */}
          <div>
            <div className="flex items-center justify-between text-[8px] font-bold text-zinc-500 font-mono tracking-wider mb-2">
              <span>STOCK EN TIEMPO REAL</span>
              <span className="text-emerald-500 font-mono">OK</span>
            </div>
            
            <div className="space-y-1.5 font-mono text-[7.5px] text-zinc-400">
              {/* Carne */}
              <div>
                <div className="flex justify-between mb-0.5">
                  <span>Carne Angus</span>
                  <span className="font-bold text-zinc-200">{stock.Carne}/{maxStock.Carne}</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${(stock.Carne / maxStock.Carne) * 100}%` }}
                    className="h-full bg-amber-500/80 rounded-full" 
                  />
                </div>
              </div>
              
              {/* Pan */}
              <div>
                <div className="flex justify-between mb-0.5">
                  <span>Pan Brioche</span>
                  <span className="font-bold text-zinc-200">{stock.Pan}/{maxStock.Pan}</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${(stock.Pan / maxStock.Pan) * 100}%` }}
                    className="h-full bg-amber-500/80 rounded-full" 
                  />
                </div>
              </div>

              {/* Queso */}
              <div>
                <div className="flex justify-between mb-0.5">
                  <span>Queso Cheddar</span>
                  <span className="font-bold text-zinc-200">{stock.Queso}/{maxStock.Queso}</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${(stock.Queso / maxStock.Queso) * 100}%` }}
                    className="h-full bg-amber-500/80 rounded-full" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Active Orders Queue */}
          <div className="mt-2.5 pt-2 border-t border-zinc-900/60">
            <span className="text-[7.5px] font-bold text-zinc-500 font-mono tracking-wider block mb-1">COLA DE COCINA</span>
            <div className="flex flex-col gap-1 min-h-[42px] justify-center">
              <AnimatePresence mode="popLayout">
                {orders.length === 0 ? (
                  <span className="text-[8px] font-mono text-zinc-600 italic text-center py-1">
                    Sin órdenes activas
                  </span>
                ) : (
                  orders.map((order, idx) => (
                    <motion.div
                      key={order.id}
                      layoutId={order.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={`flex items-center justify-between p-1 px-1.5 rounded-lg border text-[8px] font-mono ${
                        idx === 0 ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-950/40 border-zinc-900 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 font-bold">{order.id}</span>
                        <ArrowRight size={8} className="text-zinc-600" />
                        <span className="text-zinc-500 text-[7px]">{order.time}</span>
                      </div>
                      
                      <span className="flex items-center gap-1">
                        {order.status === 'pending' && <span className="text-yellow-500 font-bold uppercase tracking-wider">Pendiente</span>}
                        {order.status === 'cooking' && <span className="text-orange-400 font-bold uppercase tracking-wider animate-pulse">Cocinando</span>}
                        {order.status === 'ready' && <span className="text-emerald-400 font-bold uppercase tracking-wider"><CheckCircle size={8} className="inline mr-0.5" /> Listo</span>}
                      </span>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Webhook Status Banner */}
      <div className="border-t border-zinc-900/60 pt-2 mt-2 flex items-center justify-between text-[7.5px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${isProcessing ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-700'}`} />
          {isProcessing ? "POST /webhook ➔ 202 ACCEPTED" : "Webhook: Listo"}
        </span>
        <span className="text-zinc-600">Webhooks API</span>
      </div>
    </div>
  );
});

BigJackSim.displayName = 'BigJackSim';
