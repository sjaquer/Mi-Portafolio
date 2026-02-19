import { BarChart3, Workflow, Puzzle } from 'lucide-react';

const ProfessionalFocus = () => {
  return (
    <section id="professional-focus" className="py-12 sm:py-16 bg-[#0a0a0a] border-t border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
            Enfoque Profesional
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Actividades principales orientadas a mejorar control, eficiencia e indicadores del negocio.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl bg-[#171717] border border-slate-800 px-4 py-3">
            <div className="mt-1 text-primary">
              <BarChart3 size={20} />
            </div>
            <div className="text-sm text-slate-200">
              <p className="font-semibold">Análisis y visualización de datos</p>
              <p className="text-xs text-slate-400 mt-1">Modelos de reporte y dashboards con KPIs para seguimiento operativo y financiero.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-[#171717] border border-slate-800 px-4 py-3">
            <div className="mt-1 text-primary">
              <Workflow size={20} />
            </div>
            <div className="text-sm text-slate-200">
              <p className="font-semibold">Automatización de procesos</p>
              <p className="text-xs text-slate-400 mt-1">Scripts, modelos y flujos que reducen carga manual y estandarizan procedimientos.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-[#171717] border border-slate-800 px-4 py-3">
            <div className="mt-1 text-primary">
              <Puzzle size={20} />
            </div>
            <div className="text-sm text-slate-200">
              <p className="font-semibold">Diseño de sistemas orientados a negocio</p>
              <p className="text-xs text-slate-400 mt-1">Arquitectura de herramientas que conectan operación, datos y toma de decisiones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalFocus;
