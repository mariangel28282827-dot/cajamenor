import React from 'react';
import { kpiMetricsData } from '../data/manualData';
import { BarChart3, TrendingUp, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const KpiDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-sky-600" />
          Indicadores de Gestión y Desempeño (KPIs de Caja Menor)
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl">
          Métricas cuantitativas para evaluar la oportunidad en legalizaciones, la calidad tributaria de los comprobantes, la ausencia de descuadres en arqueos y la velocidad de reposición.
        </p>

        <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center justify-between">
          <span className="font-medium text-slate-700">
            Diferenciación de Metas:
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <strong className="text-slate-800">Exigencia Legal Estatuto Tributario:</strong> 100% de cumplimiento obligatorio
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
              <strong className="text-slate-800">Meta Interna Recomendada:</strong> Parámetro directivo de calidad
            </span>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {kpiMetricsData.map(kpi => (
          <div
            key={kpi.id}
            className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                  {kpi.id}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  kpi.tipoMeta === 'Exigencia Normativa'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-sky-100 text-sky-800'
                }`}>
                  {kpi.tipoMeta}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {kpi.nombre}
              </h3>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 space-y-1 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] uppercase font-semibold block">Fórmula de Cálculo:</span>
                  <span className="font-mono text-slate-700 text-[11px] block">{kpi.formula}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div>
                  <span className="text-slate-400 text-[10px] block">Periodicidad:</span>
                  <span className="font-medium text-slate-800">{kpi.periodicidad}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">Responsable:</span>
                  <span className="font-medium text-slate-800">{kpi.responsable}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Meta Sugerida:</span>
                <span className="text-xs font-bold text-slate-800">{kpi.meta}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Valor Actual:</span>
                <span className="text-lg font-bold font-mono text-emerald-700">
                  {kpi.valorActual} {kpi.unidad}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
