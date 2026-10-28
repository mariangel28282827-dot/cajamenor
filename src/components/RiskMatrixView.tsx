import React, { useState } from 'react';
import { riskMatrixData } from '../data/manualData';
import { ShieldCheck, AlertOctagon, CheckCircle2, Filter } from 'lucide-react';

export const RiskMatrixView: React.FC = () => {
  const [filterImpacto, setFilterImpacto] = useState<string>('Todos');

  const filtered = riskMatrixData.filter(item => {
    if (filterImpacto === 'Todos') return true;
    return item.impacto === filterImpacto;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-600" />
              Matriz Integral de Riesgos y Controles (Marco COSO / Auditoría Interna)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Identificación y tratamiento de riesgos de fraude, duplicidad de cobros, pérdida de deducibilidad DIAN y mezcla de dineros de clientes en la agencia de viajes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Filtrar impacto:</span>
            <select
              value={filterImpacto}
              onChange={e => setFilterImpacto(e.target.value)}
              className="px-2.5 py-1 text-xs border border-slate-200 rounded-lg bg-white text-slate-700"
            >
              <option value="Todos">Todos los niveles</option>
              <option value="Alto">Impacto Alto</option>
              <option value="Medio">Impacto Medio</option>
            </select>
          </div>
        </div>

        {/* 3 Principles summary */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-4 border-t border-slate-100">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">1. Segregación Estricta de Funciones</strong>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              El Custodio custodia y entrega; la Gerencia autoriza; el Contador registra; el Auditor arquea. Cero auto-aprobaciones.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">2. Blindaje Tributario DIAN</strong>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Cero desembolsos sin Factura Electrónica con CUFE/QR o Documento Soporte Electrónico. Protección del Art. 771-2 E.T.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">3. Inviolabilidad de Recursos de Viajeros</strong>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Prohibición absoluta de ingresar pagos de clientes a la caja menor. Prevención del delito de apropiación indebida de fondos.
            </p>
          </div>
        </div>
      </div>

      {/* Risk Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-semibold border-b border-slate-200">
                <th className="py-3 px-3 w-16">Cód.</th>
                <th className="py-3 px-3 w-32">Proceso</th>
                <th className="py-3 px-3">Riesgo Identificado</th>
                <th className="py-3 px-2 text-center w-20">Impacto</th>
                <th className="py-3 px-4">Control Mitigante Diseñado</th>
                <th className="py-3 px-2 text-center w-24">Tipo Control</th>
                <th className="py-3 px-3 w-32">Responsable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-sky-800">{item.id}</td>
                  <td className="py-3 px-3 font-medium text-slate-900">{item.proceso}</td>
                  <td className="py-3 px-3 text-slate-800 leading-snug">{item.riesgo}</td>
                  <td className="py-3 px-2 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.impacto === 'Alto' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.impacto}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 leading-relaxed text-[11px]">{item.control}</td>
                  <td className="py-3 px-2 text-center">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[10px]">
                      {item.tipoControl}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-medium text-slate-800 text-[11px]">{item.responsable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
