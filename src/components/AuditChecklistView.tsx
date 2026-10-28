import React, { useState } from 'react';
import { auditChecklistItems } from '../data/manualData';
import { ClipboardCheck, CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';

export const AuditChecklistView: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    auditChecklistItems.forEach(i => {
      init[i.id] = true; // default all checked to showcase passing state
    });
    return init;
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const total = auditChecklistItems.length;
  const passed = Object.values(checkedItems).filter(Boolean).length;
  const scorePct = Math.round((passed / total) * 100);

  const resetAll = (value: boolean) => {
    const updated: Record<string, boolean> = {};
    auditChecklistItems.forEach(i => {
      updated[i.id] = value;
    });
    setCheckedItems(updated);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-sky-600" />
              Lista de Chequeo para Auditoría Interna y Cumplimiento DIAN
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Instrumento de verificación obligatoria para arqueos periódicos, sorpresivos y aprobación de reembolsos de caja menor (F-CM-09).
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => resetAll(true)}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Marcar Todo Conforme
            </button>
            <button
              onClick={() => resetAll(false)}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Desmarcar Todo
            </button>
          </div>
        </div>

        {/* Live Score Bar */}
        <div className="mt-6 p-4 rounded-xl border bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg font-mono ${
              scorePct === 100
                ? 'bg-emerald-100 text-emerald-800'
                : scorePct >= 80
                ? 'bg-amber-100 text-amber-800'
                : 'bg-rose-100 text-rose-800'
            }`}>
              {scorePct}%
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                Nivel de Cumplimiento Auditor: {passed} de {total} Puntos
              </span>
              <span className="text-xs text-slate-500">
                {scorePct === 100
                  ? 'Conformidad Total. Procede aprobación de reposición y cierre de arqueo.'
                  : 'Existen inconsistencias o faltas de soporte. No autorizar reposición hasta subsanar.'}
              </span>
            </div>
          </div>

          <div className="w-full sm:w-48 bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-2.5 rounded-full transition-all duration-300 ${
                scorePct === 100 ? 'bg-emerald-600' : scorePct >= 80 ? 'bg-amber-500' : 'bg-rose-500'
              }`}
              style={{ width: `${scorePct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist items */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs divide-y divide-slate-100">
        {auditChecklistItems.map((item, index) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className="p-4 hover:bg-slate-50/60 transition-colors flex items-start gap-3 cursor-pointer"
            >
              <div className="pt-0.5">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}} // handled by parent div
                  className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-sky-800">#{index + 1}</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.categoria}</span>
                </div>
                <p className={`text-xs ${isChecked ? 'text-slate-800' : 'text-slate-500 line-through'}`}>
                  {item.pregunta}
                </p>
                <span className="text-[11px] text-slate-400 block font-mono">
                  Base Jurídica / Control: {item.normativa}
                </span>
              </div>
              <div className="shrink-0 text-right">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                  isChecked ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {isChecked ? 'CONFORME' : 'NO CONFORME'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
