import React, { useState } from 'react';
import { ActiveTab, AgencyConfig } from './types';
import { Header } from './components/Header';
import { ManualView } from './components/ManualView';
import { FlowchartView } from './components/FlowchartView';
import { CashArqueoSimulator } from './components/CashArqueoSimulator';
import { FormatsManager } from './components/FormatsManager';
import { ExpenseValidator } from './components/ExpenseValidator';
import { RiskMatrixView } from './components/RiskMatrixView';
import { AuditChecklistView } from './components/AuditChecklistView';
import { KpiDashboard } from './components/KpiDashboard';
import { UserManualView } from './components/UserManualView';
import { InstallUninstallView } from './components/InstallUninstallView';
import { 
  BookOpen, 
  GitBranch, 
  Calculator, 
  FileSpreadsheet, 
  HelpCircle, 
  ShieldCheck, 
  ClipboardCheck, 
  BarChart3,
  Building,
  CheckCircle2,
  DollarSign,
  Download,
  BookText
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('manual');
  
  // Parametric Agency Configuration (pre-filled with Viaja con Adri and editable)
  const [config, setConfig] = useState<AgencyConfig>({
    razonSocial: 'Agencia de Viajes con Adri SAS',
    nit: '901.458.723-5',
    rnt: '54892',
    custodioNombre: 'Mayerly Torres Cárdenas',
    custodioCargo: 'Auxiliar Administrativa y Tesorería',
    autorizadorNombre: 'Adriana Silva Romero',
    autorizadorCargo: 'Gerente General y Representante Legal',
    contadorNombre: 'Guillermo Rodríguez Peña',
    contadorTP: '142859-T',
    montoFondo: 2000000,
    limiteOperacion: 200000,
    limiteDiario: 300000,
    umbralReposicionPct: 70,
    plazoLegalizacionHoras: 48
  });

  const updateConfig = (key: keyof AgencyConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        agencyName={config.razonSocial}
      />

      {/* Hero Strip & Functional Sub-Toolbar */}
      <section className="bg-white border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>Colombia</span>
                <span aria-hidden="true">·</span>
                <span>Resolución DIAN & Estatuto Tributario</span>
                <span aria-hidden="true">·</span>
                <span>Ley 300 de 1996 & Ley 2068 de 2020</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-sky-700">Fondo: ${config.montoFondo.toLocaleString('es-CO')} COP</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                Procedimiento Administrativo, Contable y Legal de Caja Menor
              </h1>
            </div>

            {/* Segmented Control / Tab Switcher (Functional buttons) */}
            <div className="hidden lg:flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'manual'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                <span>Manual Maestro</span>
              </button>

              <button
                onClick={() => setActiveTab('user-manual')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'user-manual'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookText className="w-3.5 h-3.5 text-sky-600" />
                <span>Guía de Usuario</span>
              </button>

              <button
                onClick={() => setActiveTab('install-uninstall')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'install-uninstall'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Download className="w-3.5 h-3.5 text-sky-600" />
                <span>Instalar / Desinstalar</span>
              </button>

              <button
                onClick={() => setActiveTab('flowchart')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'flowchart'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GitBranch className="w-3.5 h-3.5 text-sky-600" />
                <span>Flujograma</span>
              </button>

              <button
                onClick={() => setActiveTab('arqueo-simulator')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'arqueo-simulator'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-sky-600" />
                <span>Simulador Arqueo</span>
              </button>

              <button
                onClick={() => setActiveTab('formats')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'formats'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-sky-600" />
                <span>Formatos (F-01 a F-10)</span>
              </button>

              <button
                onClick={() => setActiveTab('expense-guide')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'expense-guide'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                <span>Guía Gastos</span>
              </button>

              <button
                onClick={() => setActiveTab('risk-matrix')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'risk-matrix'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Riesgos</span>
              </button>

              <button
                onClick={() => setActiveTab('audit-checklist')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'audit-checklist'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ClipboardCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Checklist</span>
              </button>

              <button
                onClick={() => setActiveTab('kpis')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'kpis'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-sky-600" />
                <span>KPIs</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'manual' && <ManualView config={config} />}
        {activeTab === 'user-manual' && <UserManualView />}
        {activeTab === 'install-uninstall' && <InstallUninstallView />}
        {activeTab === 'flowchart' && <FlowchartView />}
        {activeTab === 'arqueo-simulator' && (
          <CashArqueoSimulator
            fondoAutorizado={config.montoFondo}
            custodioNombre={config.custodioNombre}
            autorizadorNombre={config.autorizadorNombre}
          />
        )}
        {activeTab === 'formats' && (
          <FormatsManager config={config} updateConfig={updateConfig} />
        )}
        {activeTab === 'expense-guide' && <ExpenseValidator />}
        {activeTab === 'risk-matrix' && <RiskMatrixView />}
        {activeTab === 'audit-checklist' && <AuditChecklistView />}
        {activeTab === 'kpis' && <KpiDashboard />}
      </div>

      {/* Clean Editorial Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-6 no-print text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">{config.razonSocial}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">NIT {config.nit}</span>
            <span aria-hidden="true">·</span>
            <span>RNT {config.rnt}</span>
          </div>
          <div>
            <span>Manual Técnico y Procedimiento de Caja Menor (Vigencia 2026) · República de Colombia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
