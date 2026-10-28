import React, { useState, useMemo } from 'react';
import { travelExpensesData } from '../data/travelExpensesData';
import { ExpenseItemRule } from '../types';
import { 
  ShieldAlert, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Search, 
  FileText, 
  Scale, 
  HelpCircle,
  Plane,
  Building,
  UserX,
  CreditCard
} from 'lucide-react';

export const ExpenseValidator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos');

  const categories = useMemo(() => {
    const set = new Set(travelExpensesData.map(e => e.categoria));
    return ['Todos', ...Array.from(set)];
  }, []);

  const filteredExpenses = useMemo(() => {
    return travelExpensesData.filter(item => {
      const matchSearch = 
        item.concepto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.justificacionLegal.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchCategory = selectedCategory === 'Todos' || item.categoria === selectedCategory;
      const matchStatus = selectedStatus === 'Todos' || item.estado === selectedStatus;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  return (
    <div className="space-y-6">
      {/* Top Warning Banner: Strict Travel Industry Boundaries */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-xs border border-slate-800">
        <div className="flex items-start gap-3.5">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-tight text-white">
              Régimen Especial de Gastos de la Agencia de Viajes (Viaja con Adri)
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
              La caja menor es un <strong>fondo fijo de egreso de cuantía menor</strong> destinado exclusivamente a resolver imprevistos operativos inmediatos. <strong>Bajo ninguna circunstancia</strong> debe utilizarse para eludir los procedimientos ordinarios de compras, tesorería central o contratación, ni para suplir canales bancarizados obligatorios.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2">
                <Plane className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-[11px]">Prohibido Tiquetes Aéreos:</strong>
                  <span className="text-slate-400 text-[10px]">Exclusivo por BSP IATA o tarjeta corporativa bancarizada.</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2">
                <Building className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-[11px]">Prohibido Hoteles y Paquetes:</strong>
                  <span className="text-slate-400 text-[10px]">Reservas y mayoristas van por transferencias de tesorería.</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2">
                <UserX className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-[11px]">Prohibido Reembolsos a Clientes:</strong>
                  <span className="text-slate-400 text-[10px]">Requieren nota crédito DIAN y pago bancario por SIC.</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-start gap-2">
                <CreditCard className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-[11px]">Cero Co-mingling (Mezcla):</strong>
                  <span className="text-slate-400 text-[10px]">Prohibido meter dinero recibido de pasajeros a la caja menor.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Consultar gasto (ej. taxi, mensajería, tiquete, hotel, papel)..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Status buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start sm:self-auto overflow-x-auto max-w-full">
            {(['Todos', 'Permitido', 'Restringido', 'Prohibido'] as const).map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedStatus === status
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {status === 'Permitido' && '✓ Permitidos'}
                {status === 'Restringido' && '⚠ Restringidos'}
                {status === 'Prohibido' && '✕ Prohibidos'}
                {status === 'Todos' && 'Todos los Gastos'}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-slate-600">
          <span className="font-semibold text-slate-700 whitespace-nowrap">Filtrar por rubro:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-[11px] whitespace-nowrap border transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-50 border-sky-300 text-sky-800 font-semibold'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExpenses.map(item => (
          <div
            key={item.id}
            className={`p-5 rounded-xl border bg-white shadow-xs space-y-3 flex flex-col justify-between ${
              item.estado === 'Permitido'
                ? 'border-emerald-200/80 hover:border-emerald-400'
                : item.estado === 'Restringido'
                ? 'border-amber-200/80 hover:border-amber-400'
                : 'border-rose-200/80 hover:border-rose-400 bg-rose-50/20'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  {item.categoria}
                </span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                    item.estado === 'Permitido'
                      ? 'bg-emerald-100 text-emerald-800'
                      : item.estado === 'Restringido'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {item.estado === 'Permitido' && <CheckCircle className="w-3 h-3" />}
                  {item.estado === 'Restringido' && <AlertTriangle className="w-3 h-3" />}
                  {item.estado === 'Prohibido' && <XCircle className="w-3 h-3" />}
                  {item.estado}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {item.concepto}
              </h3>

              <div className="space-y-1.5 pt-1 text-xs">
                <div className="flex items-start gap-1.5 text-slate-600">
                  <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-[11px]">
                    <strong className="text-slate-700">Soporte exigido:</strong> {item.soporteExigido}
                  </span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-600">
                  <Scale className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-[11px]">
                    <strong className="text-slate-700">Normativa:</strong> {item.justificacionLegal}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
              <strong className="text-slate-800">Directriz:</strong> {item.recomendacionOperativa}
            </div>
          </div>
        ))}
      </div>

      {filteredExpenses.length === 0 && (
        <div className="bg-white p-12 text-center rounded-xl border border-slate-200">
          <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-700">No se encontraron gastos coincidentes con su búsqueda.</p>
          <p className="text-xs text-slate-400 mt-1">Pruebe con otros términos o revise los filtros de categoría.</p>
        </div>
      )}
    </div>
  );
};
