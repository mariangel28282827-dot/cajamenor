import React, { useState, useMemo } from 'react';
import { DenominationCount, VoucherItem } from '../types';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  Trash2, 
  FileSpreadsheet, 
  RefreshCw, 
  FileText,
  DollarSign
} from 'lucide-react';

interface CashArqueoSimulatorProps {
  fondoAutorizado: number;
  custodioNombre: string;
  autorizadorNombre: string;
}

const initialDenominations: DenominationCount[] = [
  { value: 100000, label: '$100.000 COP', type: 'billete', count: 10 }, // 1.000.000
  { value: 50000, label: '$50.000 COP', type: 'billete', count: 8 },    // 400.000
  { value: 20000, label: '$20.000 COP', type: 'billete', count: 7 },    // 140.000
  { value: 10000, label: '$10.000 COP', type: 'billete', count: 5 },    // 50.000
  { value: 5000, label: '$5.000 COP', type: 'billete', count: 2 },      // 10.000
  { value: 2000, label: '$2.000 COP', type: 'billete', count: 2 },      // 4.000
  { value: 1000, label: '$1.000 COP', type: 'moneda', count: 1 },       // 1.000
  { value: 500, label: '$500 COP', type: 'moneda', count: 0 },
  { value: 200, label: '$200 COP', type: 'moneda', count: 0 },
  { value: 100, label: '$100 COP', type: 'moneda', count: 0 },
  { value: 50, label: '$50 COP', type: 'moneda', count: 0 },
];

// Matching the real travel agency example from the user's PDF:
// Fund: $2.000.000
// - Papelería: $45.000
// - Mensajería: $100.000
// - Transporte: $250.000
// Cash remaining = $1.605.000 (which exactly matches 10*100k + 8*50k + 7*20k + 5*10k + 2*5k + 2*2k + 1*1k = 1.605.000!)
const initialVouchers: VoucherItem[] = [
  {
    id: 'v-1',
    numero: 'FE-1049',
    fecha: '2026-02-04',
    solicitante: 'Laura Gómez (Asesora de Viajes)',
    concepto: 'Compra de carpetas institucionales para vouchers y resmas de papel para itinerarios',
    valor: 45000,
    soporteTipo: 'Factura Electrónica',
    soporteNumero: 'FE-1049 (Papelería El Turista SAS)',
    estado: 'Pendiente'
  },
  {
    id: 'v-2',
    numero: 'FE-9982',
    fecha: '2026-02-06',
    solicitante: 'Carlos Méndez (Operaciones)',
    concepto: 'Envío urgente de pasaportes con visado estadounidense a cliente en Medellín vía transportadora',
    valor: 100000,
    soporteTipo: 'Factura Electrónica',
    soporteNumero: 'FE-9982 (Servicios Postales)',
    estado: 'Pendiente'
  },
  {
    id: 'v-3',
    numero: 'DS-0012',
    fecha: '2026-02-09',
    solicitante: 'Adriana Silva (Dirección / Diligencias)',
    concepto: 'Transporte urbano autorizado para trámites consulares y entrega de documentación oficial',
    valor: 250000,
    soporteTipo: 'Documento Soporte',
    soporteNumero: 'DS-0012 (Planilla de Transporte Urbano)',
    estado: 'Pendiente'
  }
];

export const CashArqueoSimulator: React.FC<CashArqueoSimulatorProps> = ({
  fondoAutorizado,
  custodioNombre,
  autorizadorNombre
}) => {
  const [denominations, setDenominations] = useState<DenominationCount[]>(initialDenominations);
  const [vouchers, setVouchers] = useState<VoucherItem[]>(initialVouchers);
  const [valesProvisionales, setValesProvisionales] = useState<number>(0);
  const [tipoArqueo, setTipoArqueo] = useState<'Ordinario Mensual' | 'Sorpresivo de Auditoría'>('Ordinario Mensual');
  const [auditorNombre, setAuditorNombre] = useState('Revisor Fiscal / Auditor Interno');

  // New voucher input state
  const [nuevoConcepto, setNuevoConcepto] = useState('');
  const [nuevoValor, setNuevoValor] = useState('');
  const [nuevoSolicitante, setNuevoSolicitante] = useState('');
  const [nuevoTipo, setNuevoTipo] = useState<VoucherItem['soporteTipo']>('Factura Electrónica');
  const [nuevoNumero, setNuevoNumero] = useState('');

  const handleCountChange = (index: number, countStr: string) => {
    const val = parseInt(countStr, 10);
    const validCount = isNaN(val) || val < 0 ? 0 : val;
    setDenominations(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], count: validCount };
      return updated;
    });
  };

  const handleAddVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(nuevoValor);
    if (!nuevoConcepto || isNaN(val) || val <= 0) return;

    const newItem: VoucherItem = {
      id: 'v-' + Date.now(),
      numero: nuevoNumero || 'SOP-' + (vouchers.length + 1),
      fecha: new Date().toISOString().split('T')[0],
      solicitante: nuevoSolicitante || 'Funcionario Solicitante',
      concepto: nuevoConcepto,
      valor: val,
      soporteTipo: nuevoTipo,
      soporteNumero: nuevoNumero || 'DOC-' + Math.floor(Math.random() * 1000),
      estado: 'Pendiente'
    };

    setVouchers([...vouchers, newItem]);
    setNuevoConcepto('');
    setNuevoValor('');
    setNuevoSolicitante('');
    setNuevoNumero('');
  };

  const handleRemoveVoucher = (id: string) => {
    setVouchers(vouchers.filter(v => v.id !== id));
  };

  // Calculations
  const totalBilletes = useMemo(() => {
    return denominations
      .filter(d => d.type === 'billete')
      .reduce((acc, curr) => acc + curr.value * curr.count, 0);
  }, [denominations]);

  const totalMonedas = useMemo(() => {
    return denominations
      .filter(d => d.type === 'moneda')
      .reduce((acc, curr) => acc + curr.value * curr.count, 0);
  }, [denominations]);

  const totalEfectivo = totalBilletes + totalMonedas;

  const totalSoportes = useMemo(() => {
    return vouchers.reduce((acc, curr) => acc + curr.valor, 0);
  }, [vouchers]);

  // General Reconciliation formula from PDF page 3:
  // Total Justificado = Efectivo + Gastos Pagados Pendientes de Reposición + Vales Provisionales
  const totalJustificado = totalEfectivo + totalSoportes + valesProvisionales;
  const diferencia = totalJustificado - fondoAutorizado;

  // Reorder point threshold (PDF suggests 60-70% consumed)
  const porcentajeConsumido = ((totalSoportes + valesProvisionales) / fondoAutorizado) * 100;
  const requiereReposicion = porcentajeConsumido >= 70 || totalEfectivo <= 600000;

  const resetToSample = () => {
    setDenominations(initialDenominations);
    setVouchers(initialVouchers);
    setValesProvisionales(0);
  };

  return (
    <div className="space-y-6">
      {/* Intro card */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Calculator className="w-5 h-5 text-sky-600" />
              Simulador Operativo de Arqueo y Conciliación Matemática
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Aplica la regla de oro contable: <strong className="text-slate-800">Efectivo Disponible + Gastos Pagados Pendientes + Vales Provisionales = Fondo Autorizado (${fondoAutorizado.toLocaleString('es-CO')} COP)</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetToSample}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Restablecer al ejemplo de la Agencia de Viajes con Adri ($45.000 papelería + $100.000 mensajería + $250.000 transporte = $1.605.000 saldo)"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cargar Ejemplo Oficial</span>
            </button>
          </div>
        </div>

        {/* Status Indicators Banner */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Fondo Fijo Asignado</span>
            <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">
              ${fondoAutorizado.toLocaleString('es-CO')}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">Según Acta F-CM-10</span>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Efectivo Físico Contado</span>
            <span className="text-xl font-bold font-mono text-sky-700 mt-1 block">
              ${totalEfectivo.toLocaleString('es-CO')}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">Billetes + Monedas</span>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Soportes & Vales Válidos</span>
            <span className="text-xl font-bold font-mono text-indigo-700 mt-1 block">
              ${(totalSoportes + valesProvisionales).toLocaleString('es-CO')}
            </span>
            <span className="text-xs text-slate-500 mt-0.5 block">{vouchers.length} gastos pendientes</span>
          </div>

          <div className={`p-4 rounded-lg border ${
            diferencia === 0
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : diferencia > 0
              ? 'bg-amber-50 border-amber-200 text-amber-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}>
            <span className="text-xs font-semibold uppercase tracking-wider block">Resultado de Conciliación</span>
            <div className="flex items-center gap-1.5 mt-1">
              {diferencia === 0 ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
              <span className="text-xl font-bold font-mono">
                {diferencia === 0 ? '$0 (Cuadrado)' : `${diferencia > 0 ? '+' : ''}$${diferencia.toLocaleString('es-CO')}`}
              </span>
            </div>
            <span className="text-xs font-medium mt-0.5 block">
              {diferencia === 0 && 'Arqueo perfecto. Fondo balanceado.'}
              {diferencia > 0 && 'Sobrante no justificado (investigar origen).'}
              {diferencia < 0 && 'Faltante a cargo del custodio responsable.'}
            </span>
          </div>
        </div>

        {/* Warning if replenishment threshold reached */}
        {requiereReposicion && (
          <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-2.5 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Umbral de reposición alcanzado:</strong> Se ha consumido el {porcentajeConsumido.toFixed(1)}% del fondo fijo (quedan ${totalEfectivo.toLocaleString('es-CO')} en efectivo). El custodio debe radicar de inmediato la <strong>Solicitud Formal de Reposición F-CM-07</strong> para evitar la interrupción de pagos operativos en la agencia.
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Cash breakdown table (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">1. Desglose de Efectivo Físico (Billetes y Monedas)</h3>
              <p className="text-xs text-slate-500">Conteo en pesos colombianos verificado en presencia del custodio.</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500">Total Billetes:</span>{' '}
              <strong className="text-xs font-mono text-slate-800">${totalBilletes.toLocaleString('es-CO')}</strong>
              <span className="mx-1 text-slate-300">|</span>
              <span className="text-xs text-slate-500">Monedas:</span>{' '}
              <strong className="text-xs font-mono text-slate-800">${totalMonedas.toLocaleString('es-CO')}</strong>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-600 font-semibold">
                  <th className="py-2.5 px-3">Denominación</th>
                  <th className="py-2.5 px-3">Tipo</th>
                  <th className="py-2.5 px-3 text-center">Cantidad Física</th>
                  <th className="py-2.5 px-3 text-right">Subtotal ($ COP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                {denominations.map((denom, idx) => (
                  <tr key={denom.value} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2 px-3 font-medium text-slate-900">
                      {denom.label}
                    </td>
                    <td className="py-2 px-3 font-sans text-slate-500 capitalize">
                      {denom.type}
                    </td>
                    <td className="py-2 px-3 text-center">
                      <input
                        type="number"
                        min="0"
                        value={denom.count}
                        onChange={(e) => handleCountChange(idx, e.target.value)}
                        className="w-20 text-center py-1 px-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 font-mono text-xs bg-slate-50/50"
                      />
                    </td>
                    <td className="py-2 px-3 text-right font-semibold text-slate-900">
                      ${(denom.value * denom.count).toLocaleString('es-CO')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200 bg-slate-50 font-semibold text-slate-900 text-xs">
                  <td colSpan={3} className="py-2.5 px-3 font-sans">
                    TOTAL EFECTIVO EN CAJA DE SEGURIDAD:
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-sm text-sky-800">
                    ${totalEfectivo.toLocaleString('es-CO')}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Additional temporary vouchers input */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-600">Vales provisionales vigentes en tránsito (F-CM-01 pendientes de factura):</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-mono">$</span>
              <input
                type="number"
                min="0"
                value={valesProvisionales}
                onChange={(e) => setValesProvisionales(Math.max(0, parseInt(e.target.value, 10) || 0))}
                className="w-28 text-right py-1 px-2 border border-slate-200 rounded-md font-mono text-xs focus:ring-1 focus:ring-sky-500"
                placeholder="0"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Soportes y comprobantes pagados (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">2. Comprobantes Pendientes de Reposición</h3>
                <p className="text-xs text-slate-500">Facturas electrónicas y documentos soporte formalizados.</p>
              </div>
              <span className="text-xs font-bold font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                ${totalSoportes.toLocaleString('es-CO')}
              </span>
            </div>

            {/* List of vouchers */}
            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {vouchers.map(item => (
                <div key={item.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors text-xs flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900">{item.soporteNumero}</span>
                      <span className="text-[10px] text-slate-400">{item.fecha}</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-tight line-clamp-2">{item.concepto}</p>
                    <span className="text-[10px] text-slate-500 block">Solicitante: {item.solicitante}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className="font-mono font-bold text-slate-900 text-xs">
                      ${item.valor.toLocaleString('es-CO')}
                    </span>
                    <button
                      onClick={() => handleRemoveVoucher(item.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                      title="Eliminar soporte"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Form to add a new expenditure */}
            <form onSubmit={handleAddVoucher} className="mt-4 pt-4 border-t border-slate-100 space-y-2.5">
              <span className="text-xs font-semibold text-slate-700 block">Registrar Nuevo Gasto al Arqueo:</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="N° Factura / Doc"
                  value={nuevoNumero}
                  onChange={e => setNuevoNumero(e.target.value)}
                  className="py-1 px-2 text-xs border border-slate-200 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Valor ($)"
                  value={nuevoValor}
                  onChange={e => setNuevoValor(e.target.value)}
                  className="py-1 px-2 text-xs border border-slate-200 rounded-md font-mono"
                />
              </div>
              <input
                type="text"
                placeholder="Concepto (ej. Envíos guías turísticas)"
                value={nuevoConcepto}
                onChange={e => setNuevoConcepto(e.target.value)}
                className="w-full py-1 px-2 text-xs border border-slate-200 rounded-md"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Solicitante / Funcionario"
                  value={nuevoSolicitante}
                  onChange={e => setNuevoSolicitante(e.target.value)}
                  className="py-1 px-2 text-xs border border-slate-200 rounded-md"
                />
                <select
                  value={nuevoTipo}
                  onChange={e => setNuevoTipo(e.target.value as any)}
                  className="py-1 px-2 text-xs border border-slate-200 rounded-md bg-white text-slate-700"
                >
                  <option value="Factura Electrónica">Factura Electrónica</option>
                  <option value="Documento Soporte">Documento Soporte</option>
                  <option value="Recibo Transporte">Recibo Transporte</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Agregar Gasto al Arqueo</span>
              </button>
            </form>
          </div>

          {/* Quick Act Info & Signatures */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800">Parámetros del Arqueo:</span>
              <span className="text-[11px] text-slate-500 font-mono">F-CM-05 / F-CM-06</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-600">
              <div>
                <span className="text-[10px] text-slate-400 block">Tipo:</span>
                <select 
                  value={tipoArqueo} 
                  onChange={e => setTipoArqueo(e.target.value as any)}
                  className="mt-0.5 w-full bg-white border border-slate-200 rounded px-1.5 py-1 text-xs"
                >
                  <option value="Ordinario Mensual">Ordinario Mensual</option>
                  <option value="Sorpresivo de Auditoría">Sorpresivo de Auditoría</option>
                </select>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Custodio Presente:</span>
                <span className="font-medium text-slate-800 block mt-1">{custodioNombre}</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Auditor / Verificador:</span>
              <input
                type="text"
                value={auditorNombre}
                onChange={e => setAuditorNombre(e.target.value)}
                className="mt-0.5 w-full bg-white border border-slate-200 rounded px-1.5 py-1 text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
