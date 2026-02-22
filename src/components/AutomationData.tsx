// src/components/AutomationData.tsx
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, 
  Terminal, 
  BarChart3, 
  Workflow,
  ArrowRight,
  Zap,
  Database,
  TrendingUp
} from 'lucide-react';

const automationItems = [
  {
    icon: FileSpreadsheet,
    title: 'Reportes financieros automatizados en Excel',
    description: 'Construí modelos en Excel y Power BI que consolidan información financiera desde múltiples fuentes, reduciendo carga manual y errores en el cierre mensual.',
    tags: ['Excel VBA', 'Python', 'Power Query'],
    color: '#10B981',
    metric: '~70% menos tiempo en reportes'
  },
  {
    icon: Terminal,
    title: 'Scripts de consolidación de datos en Python',
    description: 'Desarrollé scripts en Python para limpiar y consolidar datos operativos, alimentando dashboards de KPIs y eliminando reprocesos manuales.',
    tags: ['Python', 'Pandas', 'ETL'],
    color: '#8B5CF6',
    metric: 'Eliminación de reprocesos manuales'
  },
  {
    icon: BarChart3,
    title: 'Dashboards de KPIs operativos',
    description: 'Construí tableros en Power BI con indicadores financieros y operativos actualizados automáticamente para seguimiento diario.',
    tags: ['Power BI', 'DAX', 'SQL'],
    color: '#3861d7',
    metric: 'Seguimiento diario de indicadores'
  },
  {
    icon: Workflow,
    title: 'Modelos financieros de proyección',
    description: 'Construí modelos en Excel para proyección de flujo de caja y rentabilidad, integrados a indicadores de control operativo.',
    tags: ['Excel Avanzado', 'Análisis Financiero', 'Proyecciones'],
    color: '#F59E0B',
    metric: 'Apoyo a decisiones de compra e inversión'
  }
];

const AutomationData = () => {
  return (
    <section id="automation" className="py-24 bg-[#1e1e1e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6 border border-secondary/20">
            <Database size={16} />
            <span>Automatización & Análisis</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
            Proyectos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Automatización y Análisis
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Herramientas que construí para optimizar control financiero y operativo en proyectos reales.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {automationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-[#171717] border border-slate-800 rounded-2xl p-8 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(217,229,18,0.05)] transition-all duration-300 relative overflow-hidden">
                  {/* Corner glow */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: `radial-gradient(circle at top right, ${item.color}, transparent)` }}
                  />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          backgroundColor: `${item.color}15`, 
                          color: item.color,
                          boxShadow: `0 4px 20px ${item.color}15`
                        }}
                      >
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white font-display group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <TrendingUp size={12} className="text-primary" />
                          <span className="text-xs font-semibold text-primary">{item.metric}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-slate-900/60 text-slate-300 text-xs font-medium rounded-lg border border-slate-800 hover:border-slate-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-5 bg-[#171717] border border-slate-800 rounded-2xl">
            <div className="flex items-center gap-3">
              <Zap className="text-primary" size={24} />
              <div className="text-left">
                <p className="text-white font-bold text-sm">Orientado a resultados concretos</p>
                <p className="text-slate-400 text-xs">Control de Costos · Datos · Operaciones · Automatización</p>
              </div>
            </div>
            <a 
              href="#experience" 
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-primary hover:text-black text-white text-sm font-semibold rounded-xl transition-all duration-300 group/btn shrink-0"
            >
              Ver Trayectoria
              <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationData;
