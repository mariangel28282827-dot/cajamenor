import React from 'react';
import { ActiveTab } from '../types';
import { Printer, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  agencyName: string;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, agencyName }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
            <span className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
              VA
            </span>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 leading-none">
                {agencyName || 'Viaja con Adri'}
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                Procedimiento Oficial de Caja Menor
              </span>
            </div>
          </div>

          {/* Zone 2: concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('manual')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'manual' ? 'text-sky-700 font-semibold border-b-2 border-sky-600' : ''
              }`}
            >
              Manual Maestro
            </button>
            <button
              onClick={() => setActiveTab('user-manual')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'user-manual' ? 'text-sky-700 font-semibold border-b-2 border-sky-600' : ''
              }`}
            >
              Guía de Usuario
            </button>
            <button
              onClick={() => setActiveTab('install-uninstall')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'install-uninstall' ? 'text-sky-700 font-semibold border-b-2 border-sky-600' : ''
              }`}
            >
              Instalar / Desinstalar
            </button>
            <button
              onClick={() => setActiveTab('flowchart')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'flowchart' ? 'text-sky-700 font-semibold border-b-2 border-sky-600' : ''
              }`}
            >
              Flujograma
            </button>
            <button
              onClick={() => setActiveTab('arqueo-simulator')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'arqueo-simulator' ? 'text-sky-700 font-semibold border-b-2 border-sky-600' : ''
              }`}
            >
              Simulador Arqueo
            </button>
            <button
              onClick={() => setActiveTab('formats')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-1 ${
                activeTab === 'formats' ? 'text-sky-700 font-semibold border-b-2 border-sky-600' : ''
              }`}
            >
              Formatos F-CM
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap shrink-0 print:hidden cursor-pointer"
              title="Imprimir documento formal para radicación o archivo"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Exportar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Secondary workspace navigation on small/medium screens or subtabs */}
      <div className="lg:hidden border-t border-slate-100 bg-slate-50/70 overflow-x-auto px-4 py-2 flex items-center gap-2">
        {(['manual', 'user-manual', 'install-uninstall', 'flowchart', 'arqueo-simulator', 'formats', 'expense-guide', 'risk-matrix', 'audit-checklist', 'kpis'] as ActiveTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
              activeTab === tab ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            {tab === 'manual' && 'Manual Maestro'}
            {tab === 'user-manual' && 'Guía Usuario'}
            {tab === 'install-uninstall' && 'Instalar / Desinstalar'}
            {tab === 'flowchart' && 'Flujograma'}
            {tab === 'arqueo-simulator' && 'Arqueo & Conciliación'}
            {tab === 'formats' && 'Formatos (F-01 a F-10)'}
            {tab === 'expense-guide' && 'Guía Gastos'}
            {tab === 'risk-matrix' && 'Riesgos COSO'}
            {tab === 'audit-checklist' && 'Checklist DIAN'}
            {tab === 'kpis' && 'KPIs'}
          </button>
        ))}
      </div>
    </header>
  );
};
