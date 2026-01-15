// src/components/BusinessImpact.tsx
import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Users, ArrowUpRight, 
  Bell, PieChart, Activity, ShoppingCart, 
  Truck, MapPin, DollarSign
} from 'lucide-react';

const BusinessImpact: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-slate-50 dark:bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300 text-sm font-semibold mb-6 border border-secondary-200 dark:border-secondary-800"
          >
            <TrendingUp size={16} />
            <span>Resultados Comprobables</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-6 font-display tracking-tight"
          >
            Simulando el <span className="text-secondary-600 dark:text-secondary-400">Éxito Real</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            Mis soluciones transforman datos confusos en decisiones claras.
            <br />
            <span className="font-semibold text-primary-600 dark:text-primary-400">Interactúa con este demo</span> y visualiza el control que podrías tener sobre tu negocio.
          </motion.p>
        </div>

        {/* Dashboard Demo Container */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-surface ring-1 ring-slate-900/5"
        >
            {/* Fake Browser Toolbar */}
            <div className="bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-3 flex items-center justify-between select-none">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors" />
                </div>
                <div className="bg-white dark:bg-slate-900 px-4 py-1.5 rounded-md text-xs text-slate-500 font-mono w-2/3 md:w-1/3 text-center border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 transition-all hover:border-primary-500/50">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    admin.sebastianjaque.dev/dashboard/analytics
                </div>
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800/50" />
                </div>
            </div>

            {/* Dashboard App */}
            <DashboardApp />
        </motion.div>
      </div>
    </section>
  );
};

// --- Interactive Dashboard Sub-components ---

const DashboardApp = () => {
    const [view, setView] = useState('general');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex flex-col md:flex-row h-auto md:h-[700px] overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
            <DashboardSidebar 
                currentView={view} 
                setView={setView} 
                isOpen={sidebarOpen} 
                toggle={() => setSidebarOpen(!sidebarOpen)}
            />
            <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-900/30 h-[600px] md:h-auto">
                <DashboardHeader title={view} />
                <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth custom-scrollbar">
                    <AnimatePresence mode="wait">
                        {view === 'general' && <GeneralView key="general" />}
                        {view === 'ventas' && <SalesView key="sales" />}
                        {view === 'inventario' && <InventoryView key="inventory" />}
                        {view === 'usuarios' && <UsersView key="users" />}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

const DashboardSidebar = ({ currentView, setView, isOpen, toggle }: any) => {
    const menuItems = [
        { id: 'general', label: 'Resumen', icon: PieChart },
        { id: 'ventas', label: 'Ventas', icon: ShoppingCart },
        { id: 'inventario', label: 'Logística', icon: Truck },
        { id: 'usuarios', label: 'Clientes', icon: Users },
    ];

    return (
        <div className={`
            bg-white dark:bg-dark-surface 
            border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 
            flex flex-row md:flex-col
            w-full md:w-auto
            md:transition-all md:duration-300
            ${isOpen ? 'md:w-64' : 'md:w-20'} 
            z-20 relative shrink-0
        `}>
           {/* Desktop Logo Header */}
           <div className="hidden md:flex p-6 items-center gap-3 overflow-hidden whitespace-nowrap border-b border-slate-100 dark:border-slate-800/50 h-20">
                <div className="w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-primary-500/30 shrink-0">
                    <img 
                        src="/images/iconoweb.webp" 
                        alt="Logo" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className={`font-display font-bold text-lg text-slate-800 dark:text-white transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0'}`}>
                    Admin Panel
                </span>
            </div>

            {/* Navigation Items (Scrollable on mobile) */}
            <div className="flex-1 flex md:flex-col flex-row overflow-x-auto md:overflow-visible p-2 md:p-4 gap-2 md:gap-1 no-scrollbar">
                {menuItems.map((item) => {
                    const isActive = currentView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setView(item.id)}
                            className={`
                                flex items-center gap-3 px-4 md:px-3 py-2 md:py-3 rounded-xl transition-all duration-200 group shrink-0
                                ${isActive 
                                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium shadow-sm' 
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                                }
                            `}
                        >
                            <item.icon size={20} className={isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'} />
                            <span className={`
                                whitespace-nowrap text-sm md:text-base
                                ${isOpen ? 'md:block' : 'md:hidden'}
                                block
                            `}>
                                {item.label}
                            </span>
                             {isActive && isOpen && (
                                <motion.div layoutId="active-indicator" className="hidden md:block ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />
                            )}
                        </button>
                    );
                })}
            </div>
            
            {/* Desktop Footer Profile */}
            <div className="hidden md:block p-4 border-t border-slate-200 dark:border-slate-800">
                 {isOpen && (
                    <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">AD</div>
                         <div className="min-w-0">
                             <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">Administrador</div>
                             <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Lima, PE</div>
                         </div>
                    </div>
                 )}
            </div>
        </div>
    )
}

const DashboardHeader = ({ title }: { title: string }) => (
    <div className="h-20 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 md:px-8 z-10 sticky top-0">
        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white capitalize flex items-center gap-2">
            {title === 'general' ? 'Resumen Ejecutivo' : title}
            {title === 'ventas' && <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium ml-2">En vivo</span>}
        </h3>
        <div className="flex items-center gap-3">
             <button className="p-2 text-slate-400 hover:text-primary-600 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-dark-surface"></span>
             </button>
             <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
             <div className="text-right hidden sm:block">
                 <div className="text-xs font-medium text-slate-500">Sesión Actual</div>
                 <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">10:42 AM</div>
             </div>
        </div>
    </div>
);

// --- VIEWS ---

const GeneralView = () => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
        className="space-y-6"
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Ingresos Totales (Mes)" value="S/. 42,500" trend="+12.5%" trendUp={true} icon={DollarSign} />
            <StatCard title="Margen Operativo" value="32.1%" trend="+4.2%" trendUp={true} icon={Activity} />
            <StatCard title="Nuevos Clientes" value="145" trend="+28%" trendUp={true} icon={Users} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-6">Proyección de Crecimiento</h4>
                 <AnimatedChart mode="growth" />
            </div>
            <div className="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Actividad Reciente</h4>
                <div className="flex-1 overflow-auto pr-2 custom-scrollbar">
                    <div className="space-y-4">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${i % 2 === 0 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {i % 2 === 0 ? <DollarSign size={18} /> : <Users size={18} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                                        {i % 2 === 0 ? 'Pago procesado #INV-2024' : 'Nuevo registro de usuario'}
                                    </p>
                                    <p className="text-xs text-slate-500">Hace {i * 12} minutos • Lima, PE</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const SalesView = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}
        className="space-y-6"
    >
        <div className="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                 <div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">Ventas por Región</h4>
                    <p className="text-sm text-slate-500">Comparativa trimestral 2024-2025</p>
                 </div>
                 <div className="flex gap-2">
                     <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                         <span className="w-2 h-2 rounded-full bg-blue-500"/> Lima Norte
                     </span>
                     <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 bg-purple-100 text-purple-700 rounded">
                         <span className="w-2 h-2 rounded-full bg-purple-500"/> Lima Sur
                     </span>
                 </div>
             </div>
             <AnimatedBarChart />
        </div>
    </motion.div>
);

const InventoryView = () => (
    <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
        {[
            { zone: 'Almacén Central', status: 'Operativo', load: 85, color: 'bg-green-500' },
            { zone: 'Hub Logístico Norte', status: 'Atención Req.', load: 92, color: 'bg-amber-500' },
            { zone: 'Despacho Express', status: 'Operativo', load: 45, color: 'bg-blue-500' },
            { zone: 'Flota Primaria', status: 'En Ruta', load: 78, color: 'bg-purple-500' },
        ].map((hub, i) => (
            <div key={i} className="bg-white dark:bg-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
                
                <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300">
                             <MapPin size={24} />
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${hub.status === 'Operativo' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                            {hub.status}
                        </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{hub.zone}</h3>
                    <div className="flex items-end gap-2 mb-4">
                        <span className="text-2xl font-bold font-mono text-slate-700 dark:text-slate-200">{hub.load}%</span>
                        <span className="text-xs text-slate-500 mb-1">capacidad ocupada</span>
                    </div>

                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${hub.load}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`h-full rounded-full ${hub.color}`}
                        />
                    </div>
                </div>
            </div>
        ))}
    </motion.div>
);

const UsersView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white dark:bg-dark-surface rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Cliente</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Estado</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white hidden sm:table-cell">Última Actividad</th>
                    <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Facturación</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[1, 2, 3, 4, 5].map((u) => (
                    <tr key={u} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-default">
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
                                <div>
                                    <div className="font-medium text-slate-900 dark:text-white">Empresa Demo S.A.C.</div>
                                    <div className="text-xs text-slate-500">ID: #8823-{u}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 border border-green-100 dark:border-green-800">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Activo
                            </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 hidden sm:table-cell">
                            Hace 2 horas
                        </td>
                        <td className="px-6 py-4 text-right font-mono font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                            S/. {(Math.random() * 5000 + 1000).toFixed(2)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </motion.div>
);

// --- GENERIC COMPONENTS ---

const StatCard = ({ title, value, trend, trendUp, icon: Icon }: any) => {
    return (
        <div className="bg-white dark:bg-dark-surface p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-500 group-hover:text-primary-600 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                     {Icon && <Icon size={20} />}
                </div>
                <div className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${trendUp ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-red-50 text-red-600'}`}>
                    {trend} {trendUp ? <ArrowUpRight size={12} /> : <ArrowUpRight className="rotate-90" size={12} />}
                </div>
            </div>
            <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</p>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</h4>
            </div>
        </div>
    )
}

const AnimatedChart = ({ mode }: { mode: 'growth' | 'other' }) => {
    const data = [35, 50, 45, 70, 60, 85, 95, 75, 90, 80, 100, 110];
    const max = Math.max(...data);

    return (
        <div className="h-64 flex items-end justify-between gap-1 sm:gap-4 px-2 select-none">
            {data.map((h, i) => (
                <div key={i} className="relative flex-1 h-full flex items-end group">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(h / max) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05, type: "spring", bounce: 0 }}
                        className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-sm relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow"
                    >
                         <motion.div 
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 + (i * 0.05) }}
                            className="absolute inset-0 bg-gradient-to-t from-primary-600 to-secondary-400 opacity-80"
                        />
                    </motion.div>
                    
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded shadow-lg pointer-events-none transition-opacity whitespace-nowrap z-50">
                        S/. {(h * 100).toLocaleString()}
                    </div>
                </div>
            ))}
        </div>
    )
}

const AnimatedBarChart = () => {
    return (
        <div className="h-64 flex flex-col justify-end">
             <div className="flex border-l border-slate-200 dark:border-slate-800 flex-1 relative">
                 {/* Grid lines */}
                 {[0, 1, 2, 3].map(i => (
                     <div key={i} className="absolute w-full border-t border-slate-100 dark:border-slate-800/50" style={{ bottom: `${i * 33}%` }}></div>
                 ))}

                 {/* Bars pairs */}
                 {[1,2,3,4,5,6].map(i => (
                     <div key={i} className="flex-1 flex items-end justify-center gap-1 sm:gap-2 px-1 sm:px-4 z-10 relative">
                         <motion.div 
                            initial={{ height: 0 }} 
                            whileInView={{ height: `${30 + Math.random() * 40}%` }}
                            className="w-full max-w-[20px] bg-blue-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
                         />
                         <motion.div 
                            initial={{ height: 0 }} 
                            whileInView={{ height: `${40 + Math.random() * 50}%` }}
                            transition={{ delay: 0.1 }}
                            className="w-full max-w-[20px] bg-purple-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
                         />
                     </div>
                 ))}
             </div>
             <div className="flex justify-between px-4 mt-2 text-xs text-slate-400">
                 <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
             </div>
        </div>
    )
}

export default BusinessImpact;