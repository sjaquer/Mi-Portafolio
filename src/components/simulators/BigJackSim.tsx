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

    // 1. Crear nuevo ticket
    const newOrderId = `BJ-${Math.floor(100 + Math.random() * 900)}`;
    const newOrder = {
      id: newOrderId,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      status: 'pending' as const
    };

    setOrders((prev) => [newOrder, ...prev].slice(0, 2));

    // 2. Transición a Cocinar (1.2s)
    setTimeout(() => {
      setStep('cooking');
      setOrders((prev) =>
        prev.map((o) => (o.id === newOrderId ? { ...o, status: 'cooking' } : o))
      );

      // Descuento en inventario
      setStock((prev) => ({
        Carne: Math.max(0, prev.Carne - 1),
        Pan: Math.max(0, prev.Pan - 1),
        Queso: Math.max(0, prev.Queso - 2)
      }));
    }, 1500);

    // 3. Transición a Listo (3.2s)
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
    <div className="w-full h-full flex flex-col justify-between p-2 lg:p-6 relative overflow-hidden font-sans select-none">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3.5 z-10">
        <div>
          <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">Console</span>
          <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 flex items-center gap-2 mt-0.5 tracking-tight font-display">
            <Database size={13} className="text-emerald-400" /> Big Jack RP
          </h4>
        </div>
        <div className="flex gap-1.5">
          <motion.button
            whileHover={{ scale: isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: isProcessing ? 1 : 0.98 }}
            onClick={simulateOrder}
            disabled={isProcessing}
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-slate-950 text-[10px] font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            <Play size={8} fill="currentColor" /> Simular Orden
          </motion.button>
          <button
            onClick={resetSimulator}
            className="p-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
            aria-label="Reiniciar simulador"
          >
            <RotateCcw size={11} />
          </button>
        </div>
      </div>

      {/* Mobile Responsive Tab Selector */}
      <div className="flex sm:hidden w-full rounded-xl bg-slate-950/80 p-1 border border-slate-900/60 mt-4 z-10">
        <button 
          onClick={() => setActiveTab('left')} 
          className={cn(
            "flex-1 py-1.5 text-[9px] font-bold rounded-lg font-mono tracking-wider transition-all", 
            activeTab === 'left' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/5' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          APP CLIENTE
        </button>
        <button 
          onClick={() => setActiveTab('right')} 
          className={cn(
            "flex-1 py-1.5 text-[9px] font-bold rounded-lg font-mono tracking-wider transition-all", 
            activeTab === 'right' ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/5' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          ERP COCINA
        </button>
      </div>

      {/* Core Simulation Panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 my-3 sm:my-5 flex-grow z-10 overflow-hidden">
        
        {/* Panel Izquierdo: Menú App + Hamburguesa Dinámica */}
        <div className={cn(
          "flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark justify-between relative overflow-hidden",
          activeTab === 'left' ? 'flex' : 'hidden sm:flex'
        )}>
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
            <span className="flex items-center gap-1"><ShoppingBag size={11} /> Menú Digital</span>
            <span className="text-emerald-400 font-mono">APP CLIENTE</span>
          </div>

          {/* Interactive Stack Burger Visualization */}
          <div className="flex-grow flex flex-col justify-center items-center py-2 h-[120px] relative">
            <AnimatePresence mode="popLayout">
              {/* Top Bun */}
              {(step === 'idle' || step === 'ready' || step === 'cooking' || step === 'ordered') && (
                <motion.div
                  layout
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-4 bg-amber-600 rounded-t-full shadow-md border-b border-amber-700/40"
                />
              )}

              {/* Lettuce */}
              {(step === 'cooking' || step === 'ready') && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.1 }}
                  className="w-[70px] h-1.5 bg-emerald-500 rounded-full mt-0.5 shadow-sm"
                />
              )}

              {/* Cheese 1 */}
              {(step === 'cooking' || step === 'ready') && (
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 13, delay: 0.2 }}
                  className="w-[66px] h-1 bg-yellow-400 rounded mt-0.5"
                />
              )}

              {/* Meat Patty */}
              {(step === 'cooking' || step === 'ready') && (
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 12, delay: 0.3 }}
                  className="w-16 h-3 bg-amber-950 rounded-md mt-0.5 border border-amber-900/60"
                />
              )}

              {/* Cheese 2 */}
              {step === 'ready' && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 13, delay: 0.4 }}
                  className="w-[66px] h-1 bg-yellow-400 rounded mt-0.5"
                />
              )}

              {/* Bottom Bun */}
              {(step === 'idle' || step === 'ready' || step === 'cooking' || step === 'ordered') && (
                <motion.div
                  layout
                  initial={{ y: 0, opacity: 1 }}
                  className="w-16 h-3 bg-amber-600 rounded-b-md mt-0.5 shadow border-t border-amber-500/20"
                />
              )}
            </AnimatePresence>

            {/* Helper label */}
            <span className="text-[7.5px] font-mono text-slate-600 absolute bottom-0">
              {step === 'idle' && "Listo para ordenar"}
              {step === 'ordered' && "Ordenando..."}
              {step === 'cooking' && "Preparando en cocina..."}
              {step === 'ready' && "¡Sándwich Completo!"}
            </span>
          </div>

          <div className="mt-3 text-center border-t border-slate-950 pt-2.5">
            <span className="text-[10px] font-mono font-bold text-slate-300">1x Big Jack Classic Burger</span>
          </div>
        </div>

        {/* Panel Derecho: ERP + Live Inventory */}
        <div className={cn(
          "flex flex-col p-3 sm:p-4 bg-slate-900/40 rounded-[1.5rem] border border-slate-800/60 shadow-bento-dark justify-between",
          activeTab === 'right' ? 'flex' : 'hidden sm:flex'
        )}>
          
          {/* Inventory Progress Bars */}
          <div>
            <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mb-3">
              <span className="flex items-center gap-1"><Database size={11} className="text-emerald-400" /> Inventario Real (ERP)</span>
              <span className="text-emerald-500/60 font-mono">LIVE STOCK</span>
            </div>
            
            <div className="space-y-2 font-mono text-[8px] text-slate-400">
              {/* Carne */}
              <div>
                <div className="flex justify-between mb-0.5">
                  <span>Carne Angus (Unidades)</span>
                  <span className="font-bold text-slate-200">{stock.Carne}/{maxStock.Carne}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                  <motion.div 
                    initial={{ width: '77%' }}
                    animate={{ width: `${(stock.Carne / maxStock.Carne) * 100}%` }}
                    className="h-full bg-emerald-500/80 rounded-full" 
                  />
                </div>
              </div>
              
              {/* Pan */}
              <div>
                <div className="flex justify-between mb-0.5">
                  <span>Pan Brioche (Unidades)</span>
                  <span className="font-bold text-slate-200">{stock.Pan}/{maxStock.Pan}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                  <motion.div 
                    initial={{ width: '77%' }}
                    animate={{ width: `${(stock.Pan / maxStock.Pan) * 100}%` }}
                    className="h-full bg-emerald-500/80 rounded-full" 
                  />
                </div>
              </div>

              {/* Queso */}
              <div>
                <div className="flex justify-between mb-0.5">
                  <span>Queso Cheddar (Láminas)</span>
                  <span className="font-bold text-slate-200">{stock.Queso}/{maxStock.Queso}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                  <motion.div 
                    initial={{ width: '77%' }}
                    animate={{ width: `${(stock.Queso / maxStock.Queso) * 100}%` }}
                    className="h-full bg-emerald-500/80 rounded-full" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Active Orders Queue */}
          <div className="mt-4 pt-3 border-t border-slate-950">
            <span className="text-[8px] font-bold text-slate-500 font-mono uppercase tracking-widest block mb-2">Cola de Despacho (ERP)</span>
            <div className="flex flex-col gap-1.5 min-h-[52px] justify-center">
              <AnimatePresence mode="popLayout">
                {orders.length === 0 ? (
                  <span className="text-[9px] font-mono text-slate-600 italic text-center py-2">
                    Ninguna orden en tránsito
                  </span>
                ) : (
                  orders.map((order, idx) => (
                    <motion.div
                      key={order.id}
                      layoutId={order.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className={`flex items-center justify-between p-2 rounded-xl border text-[9px] font-mono ${
                        idx === 0 ? 'bg-slate-950 border-slate-800' : 'bg-slate-950/40 border-slate-900 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">{order.id}</span>
                        <ArrowRight size={10} className="text-slate-600" />
                        <span className="text-slate-500 text-[8px]">{order.time}</span>
                      </div>
                      
                      <span className="flex items-center gap-1">
                        {order.status === 'pending' && (
                          <span className="text-yellow-400 flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider">
                            <Clock size={9} /> Recibido
                          </span>
                        )}
                        {order.status === 'cooking' && (
                          <span className="text-orange-400 flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider animate-pulse">
                            <Clock size={9} /> Cocinando
                          </span>
                        )}
                        {order.status === 'ready' && (
                          <span className="text-emerald-400 flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider">
                            <CheckCircle size={9} /> Listo
                          </span>
                        )}
                      </span>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* Webhook Status / Footer */}
      <div className="border-t border-slate-900 pt-3 flex items-center justify-between text-[9px] text-slate-500 font-mono z-10">
        <span className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-emerald-500 animate-ping' : 'bg-slate-700'}`} />
          {isProcessing ? (
            <span className="text-emerald-400 font-bold">POST /webhook ➔ 202 ACCEPTED</span>
          ) : (
            "Webhook: POST /webhook (Listo)"
          )}
        </span>
        <span className="text-slate-600 font-bold">100% COMPOSITOR-ONLY MOTION</span>
      </div>
    </div>
  );
});

BigJackSim.displayName = 'BigJackSim';
