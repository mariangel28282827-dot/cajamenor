import React, { useState } from 'react';
import { formatsCatalog, sampleMovementRecords } from '../data/formatsData';
import { AgencyConfig } from '../types';
import { 
  FileSpreadsheet, 
  Copy, 
  Printer, 
  Check, 
  Sliders, 
  FileText,
  FileCheck,
  Building,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface FormatsManagerProps {
  config: AgencyConfig;
  updateConfig: (key: keyof AgencyConfig, value: any) => void;
}

export const FormatsManager: React.FC<FormatsManagerProps> = ({ config, updateConfig }) => {
  const [selectedCode, setSelectedCode] = useState<string>('F-CM-01');
  const [copied, setCopied] = useState(false);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);

  const selectedFormat = formatsCatalog.find(f => f.codigo === selectedCode) || formatsCatalog[0];

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const printCurrentFormat = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner and Format Selector */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-sky-600" />
              Banco Oficial de Formatos y Plantillas Administrativas (F-CM-01 a F-CM-10)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              10 plantillas estandarizadas con codificación documental, versión, campos obligatorios, firmas y listas para adaptar e imprimir en Word o Excel.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowConfigDrawer(!showConfigDrawer)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{showConfigDrawer ? 'Ocultar Parámetros' : 'Personalizar Variables'}</span>
            </button>
            <button
              onClick={printCurrentFormat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Formato</span>
            </button>
          </div>
        </div>

        {/* Format Selector Pills */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-2">
          {formatsCatalog.map(fmt => (
            <button
              key={fmt.codigo}
              onClick={() => setSelectedCode(fmt.codigo)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCode === fmt.codigo
                  ? 'bg-sky-600 text-white shadow-xs font-semibold'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="font-mono text-[11px] font-bold">{fmt.codigo}</span>
              <span className="ml-1.5 hidden sm:inline">{fmt.nombre.split(' ')[2] || fmt.nombre.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Config Drawer for Editing Variables */}
      {showConfigDrawer && (
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Personalizar Campos Editables de la Agencia (Se actualizan en vivo en todos los formatos)
            </span>
            <span className="text-xs text-sky-400 font-mono">Variables Globales</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Razón Social [RAZÓN SOCIAL]:</label>
              <input
                type="text"
                value={config.razonSocial}
                onChange={e => updateConfig('razonSocial', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">NIT [NIT]:</label>
              <input
                type="text"
                value={config.nit}
                onChange={e => updateConfig('nit', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Registro Nal. Turismo (RNT):</label>
              <input
                type="text"
                value={config.rnt}
                onChange={e => updateConfig('rnt', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Monto del Fondo ($ COP):</label>
              <input
                type="number"
                value={config.montoFondo}
                onChange={e => updateConfig('montoFondo', parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white font-mono"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Responsable Custodio [CUSTODIO]:</label>
              <input
                type="text"
                value={config.custodioNombre}
                onChange={e => updateConfig('custodioNombre', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Cargo Custodio:</label>
              <input
                type="text"
                value={config.custodioCargo}
                onChange={e => updateConfig('custodioCargo', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Autorizador [GERENCIA]:</label>
              <input
                type="text"
                value={config.autorizadorNombre}
                onChange={e => updateConfig('autorizadorNombre', e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white"
              />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Límite por Operación ($ COP):</label>
              <input
                type="number"
                value={config.limiteOperacion}
                onChange={e => updateConfig('limiteOperacion', parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-800 border border-slate-700 rounded p-1.5 text-white font-mono"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Format Template Render Area */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Institutional Formal Header for Document */}
        <div className="border-2 border-slate-900 rounded-lg p-4 bg-slate-50/50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Logo / Company Identity */}
            <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-slate-300 pb-3 md:pb-0 md:pr-4 flex flex-col justify-center">
              <span className="text-xs uppercase font-bold text-sky-800 tracking-wider">Agencia de Viajes</span>
              <span className="text-lg font-extrabold text-slate-900">{config.razonSocial}</span>
              <span className="text-[11px] font-mono text-slate-600">NIT: {config.nit}</span>
              <span className="text-[10px] text-slate-500 font-mono">RNT N° {config.rnt}</span>
            </div>

            {/* Document Title */}
            <div className="md:col-span-6 text-center px-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                SISTEMA INTEGRAL DE CONTROL INTERNO Y CAJA MENOR
              </span>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 uppercase mt-0.5">
                {selectedFormat.nombre}
              </h1>
            </div>

            {/* Metadata Box */}
            <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-slate-300 pt-3 md:pt-0 md:pl-4 text-xs font-mono space-y-1">
              <div><strong className="text-slate-600">Código:</strong> {selectedFormat.codigo}</div>
              <div><strong className="text-slate-600">Versión:</strong> {selectedFormat.version}</div>
              <div><strong className="text-slate-600">Fecha:</strong> {selectedFormat.fechaEmision}</div>
              <div><strong className="text-slate-600">Pág:</strong> 1 de 1</div>
            </div>
          </div>
        </div>

        {/* Format Specific Body Rendering */}
        <div className="space-y-6">
          {/* F-CM-01: SOLICITUD Y VALE PROVISIONAL */}
          {selectedCode === 'F-CM-01' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div><strong>Consecutivo N°:</strong> <span className="font-mono">VAL-2026-0042</span></div>
                <div><strong>Fecha de Solicitud:</strong> <span className="font-mono">{new Date().toISOString().split('T')[0]}</span></div>
                <div><strong>Plazo Máximo Legalización:</strong> <span className="text-rose-700 font-bold">48 Horas Hábiles</span></div>
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 font-semibold p-2 border-b border-slate-200">1. DATOS DEL FUNCIONARIO SOLICITANTE</div>
                <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><strong>Nombre Completo:</strong> Laura Gómez (o [EMPLEADO SOLICITANTE])</div>
                  <div><strong>Documento de Identidad (C.C.):</strong> [CÉDULA SOLICITANTE]</div>
                  <div><strong>Cargo / Área:</strong> Asesora de Turismo Receptivo y Corporativo</div>
                  <div><strong>Fondo de Caja Menor:</strong> Agencia Principal - Fondo Fijo (${config.montoFondo.toLocaleString('es-CO')})</div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 font-semibold p-2 border-b border-slate-200">2. DESCRIPCIÓN Y JUSTIFICACIÓN DEL GASTO MENOR</div>
                <div className="p-3 space-y-2">
                  <div>
                    <strong>Concepto Específico:</strong> Compra de resmas de papel para impresión de vouchers turísticos y carpetas institucionales para viajeros.
                  </div>
                  <div>
                    <strong>Justificación Operativa:</strong> Agotamiento imprevisto de material para entrega de 15 itinerarios de grupos de semana de receso.
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div><strong>Valor Estimado Solicitado ($):</strong> <span className="font-mono font-bold">$45.000 COP</span></div>
                    <div><strong>Valor en Letras:</strong> Cuarenta y cinco mil pesos m/cte.</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-900">
                <strong>COMPROMISO Y RESPONSABILIDAD:</strong> Me comprometo formalmente a presentar las facturas electrónicas o documentos soporte que cumplan los requisitos de los Arts. 616-1 y 771-2 del Estatuto Tributario, junto con el reintegro de dinero sobrante, dentro de las 48 horas siguientes a la recepción de los recursos. En caso contrario, autorizo expresamente a la agencia a descontar dicho valor de mi salario mensual devengado.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">Laura Gómez</div>
                  <div className="text-slate-500 text-[10px]">Firma Empleado Solicitante</div>
                  <div className="text-slate-400 text-[10px]">C.C. [NÚMERO]</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.custodioNombre}</div>
                  <div className="text-slate-500 text-[10px]">Firma Custodio de Caja Menor</div>
                  <div className="text-slate-400 text-[10px]">{config.custodioCargo}</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.autorizadorNombre}</div>
                  <div className="text-slate-500 text-[10px]">Aprobación Gerencia General</div>
                  <div className="text-slate-400 text-[10px]">{config.autorizadorCargo}</div>
                </div>
              </div>
            </div>
          )}

          {/* F-CM-02: COMPROBANTE DE EGRESO */}
          {selectedCode === 'F-CM-02' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono">
                <div><strong>Egreso N°:</strong> CE-CM-2026-001</div>
                <div><strong>Fecha y Hora:</strong> 2026-02-04 10:15 AM</div>
                <div><strong>Valor Pagado:</strong> $45.000 COP</div>
              </div>

              <div className="border border-slate-200 rounded-lg p-3 space-y-2">
                <div><strong>Pagado a:</strong> Papelería El Turista SAS (NIT 900.876.543-1)</div>
                <div><strong>La suma de (en letras):</strong> Cuarenta y cinco mil pesos m/cte.</div>
                <div><strong>Por concepto de:</strong> Adquisición de útiles y carpetas para entrega de vouchers a clientes de viajes.</div>
                <div><strong>Soporte Anexo:</strong> Factura Electrónica de Venta N° FE-1049 (CUFE Validado por la DIAN)</div>
                <div><strong>Imputación Contable Sugerida:</strong> Cuenta 519530 (Útiles, papelería y fotocopias) / Crédito 110510 (Caja Menor)</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 text-center">
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.custodioNombre}</div>
                  <div className="text-slate-500 text-[10px]">Elaborado y Entregado (Custodio)</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">Recibido a Satisfacción (Beneficiario / Proveedor)</div>
                  <div className="text-slate-500 text-[10px]">Firma y Cédula o Sello Comercial</div>
                </div>
              </div>
            </div>
          )}

          {/* F-CM-03: PLANILLA DE LEGALIZACIÓN */}
          {selectedCode === 'F-CM-03' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div><strong>Planilla de Legalización N°:</strong> LEG-008</div>
                <div><strong>Vale Provisional Origen:</strong> VAL-2026-0042</div>
                <div><strong>Fecha de Rendición:</strong> 2026-02-05</div>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 font-semibold border-b border-slate-200">
                      <th className="p-2">Fecha</th>
                      <th className="p-2">Proveedor / Beneficiario</th>
                      <th className="p-2">NIT / C.C.</th>
                      <th className="p-2">Tipo Soporte</th>
                      <th className="p-2">N° Factura</th>
                      <th className="p-2">Concepto</th>
                      <th className="p-2 text-right">Valor ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    <tr>
                      <td className="p-2">2026-02-04</td>
                      <td className="p-2 font-sans font-medium">Papelería El Turista SAS</td>
                      <td className="p-2">900.876.543-1</td>
                      <td className="p-2 font-sans">Factura Electrónica</td>
                      <td className="p-2">FE-1049</td>
                      <td className="p-2 font-sans">Carpetas y papel para vouchers</td>
                      <td className="p-2 text-right font-bold">$45.000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-50 font-bold border-t border-slate-200">
                      <td colSpan={6} className="p-2 text-right font-sans">TOTAL GASTADO SOPORTADO:</td>
                      <td className="p-2 text-right text-sky-800">$45.000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono">
                <div><strong>Anticipo Recibido:</strong> $50.000</div>
                <div><strong>Total Gastado:</strong> $45.000</div>
                <div><strong>Sobrante Reintegrado a Caja:</strong> <span className="text-emerald-700 font-bold">$5.000</span></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">Laura Gómez</div>
                  <div className="text-slate-500 text-[10px]">Firma Funcionario que Legaliza</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.custodioNombre}</div>
                  <div className="text-slate-500 text-[10px]">Custodio (Verifica F-CM-09 y Recibe)</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.contadorNombre}</div>
                  <div className="text-slate-500 text-[10px]">Revisión y Registro Contable</div>
                </div>
              </div>
            </div>
          )}

          {/* F-CM-04: LIBRO AUXILIAR DIARIO */}
          {selectedCode === 'F-CM-04' && (
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-semibold text-slate-800">Libro Auxiliar Cronológico de Control (Fondo Fijo: ${config.montoFondo.toLocaleString('es-CO')})</span>
                </div>
                <span className="text-slate-500 font-mono">Mes: Febrero 2026</span>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 font-semibold border-b border-slate-200 text-slate-700">
                      <th className="p-2">Fecha</th>
                      <th className="p-2">Tipo</th>
                      <th className="p-2">Comprobante</th>
                      <th className="p-2">Tercero / Beneficiario</th>
                      <th className="p-2">Concepto</th>
                      <th className="p-2 text-right">Entradas ($)</th>
                      <th className="p-2 text-right">Salidas ($)</th>
                      <th className="p-2 text-right">Saldo ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                    {sampleMovementRecords.map((mov, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-2">{mov.fecha}</td>
                        <td className="p-2 font-sans font-medium">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                            mov.tipo === 'Ingreso' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {mov.tipo}
                          </span>
                        </td>
                        <td className="p-2">{mov.comprobante}</td>
                        <td className="p-2 font-sans">{mov.tercero}</td>
                        <td className="p-2 font-sans">{mov.concepto}</td>
                        <td className="p-2 text-right text-emerald-700 font-bold">
                          {mov.entrada > 0 ? `$${mov.entrada.toLocaleString('es-CO')}` : '-'}
                        </td>
                        <td className="p-2 text-right text-rose-700 font-bold">
                          {mov.salida > 0 ? `$${mov.salida.toLocaleString('es-CO')}` : '-'}
                        </td>
                        <td className="p-2 text-right font-bold text-slate-900">
                          ${mov.saldo.toLocaleString('es-CO')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-50 font-bold border-t border-slate-200">
                      <td colSpan={5} className="p-2 text-right font-sans">TOTALES Y SALDO ACTUAL EN LIBRO:</td>
                      <td className="p-2 text-right text-emerald-700">$2.000.000</td>
                      <td className="p-2 text-right text-rose-700">$395.000</td>
                      <td className="p-2 text-right text-sky-900">$1.605.000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {/* F-CM-05: ACTA DE ARQUEO */}
          {selectedCode === 'F-CM-05' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div><strong>Tipo de Arqueo:</strong> Sorpresivo de Control Interno</div>
                <div><strong>Fecha y Hora:</strong> 2026-02-10 03:30 PM</div>
                <div><strong>Lugar:</strong> Local Principal Viaja con Adri</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-lg p-3 space-y-2">
                  <strong className="block border-b pb-1 font-semibold">1. RECUENTO DE EFECTIVO FÍSICO</strong>
                  <div className="font-mono space-y-1">
                    <div className="flex justify-between"><span>10 Billetes de $100.000:</span> <span>$1.000.000</span></div>
                    <div className="flex justify-between"><span>8 Billetes de $50.000:</span> <span>$400.000</span></div>
                    <div className="flex justify-between"><span>7 Billetes de $20.000:</span> <span>$140.000</span></div>
                    <div className="flex justify-between"><span>5 Billetes de $10.000:</span> <span>$50.000</span></div>
                    <div className="flex justify-between"><span>2 Billetes de $5.000:</span> <span>$10.000</span></div>
                    <div className="flex justify-between"><span>2 Billetes de $2.000:</span> <span>$4.000</span></div>
                    <div className="flex justify-between"><span>1 Moneda de $1.000:</span> <span>$1.000</span></div>
                    <div className="flex justify-between border-t pt-1 font-bold text-sky-800">
                      <span>Total Efectivo:</span> <span>$1.605.000</span>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-3 space-y-2">
                  <strong className="block border-b pb-1 font-semibold">2. COMPROBANTES Y VALES EN PODER</strong>
                  <div className="font-mono space-y-1">
                    <div className="flex justify-between"><span>FE-1049 (Papelería):</span> <span>$45.000</span></div>
                    <div className="flex justify-between"><span>FE-9982 (Mensajería):</span> <span>$100.000</span></div>
                    <div className="flex justify-between"><span>DS-0012 (Transporte consular):</span> <span>$250.000</span></div>
                    <div className="flex justify-between border-t pt-1 font-bold text-indigo-800">
                      <span>Total Comprobantes:</span> <span>$395.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg font-mono">
                <div className="flex justify-between font-bold text-emerald-950">
                  <span>TOTAL JUSTIFICADO (Efectivo $1.605.000 + Soportes $395.000):</span>
                  <span>$2.000.000</span>
                </div>
                <div className="flex justify-between text-slate-600 mt-1">
                  <span>FONDO AUTORIZADO:</span>
                  <span>$2.000.000</span>
                </div>
                <div className="flex justify-between font-bold text-emerald-700 border-t border-emerald-200 pt-1 mt-1">
                  <span>DIFERENCIA (FALTANTE / SOBRANTE):</span>
                  <span>$0 (EXACTO / CUADRADO)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 text-center">
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.custodioNombre}</div>
                  <div className="text-slate-500 text-[10px]">Custodio Responsable Presente</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">Auditor Interno / Contador Evaluador</div>
                  <div className="text-slate-500 text-[10px]">Firma y Tarjeta Profesional</div>
                </div>
              </div>
            </div>
          )}

          {/* F-CM-06: HOJA DE CONCILIACIÓN */}
          {selectedCode === 'F-CM-06' && (
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-sans">
                <strong>OBJETIVO:</strong> Validación matemática y contable de la equivalencia patrimonial del fondo fijo de caja menor.
              </div>

              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="p-2 bg-slate-100 font-bold font-sans">ECUACIÓN CONTABLE DE CONCILIACIÓN</div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-sans">(+) Saldo de Efectivo Físico Arqueado:</span>
                    <span>$1.605.000 COP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans">(+) Gastos Legalizados Pendientes de Reposición (Facturas / Doc. Soporte):</span>
                    <span>$395.000 COP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans">(+) Vales Provisionales Vigentes (≤ 48 Horas):</span>
                    <span>$0 COP</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-300 pt-2 font-bold text-slate-900">
                    <span className="font-sans">(=) TOTAL FONDO DETERMINADO POR ARQUEO:</span>
                    <span>$2.000.000 COP</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span className="font-sans">(-) Saldo Contable Autorizado en Balance (Cuenta 110510):</span>
                    <span>$2.000.000 COP</span>
                  </div>
                  <div className="flex justify-between border-t-2 border-slate-400 pt-2 font-bold text-emerald-700 text-sm">
                    <span className="font-sans">DIFERENCIA DE CONCILIACIÓN:</span>
                    <span>$0 COP (SIN DIFERENCIAS)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* F-CM-07: SOLICITUD DE REPOSICIÓN */}
          {selectedCode === 'F-CM-07' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono">
                <div><strong>Reposición N°:</strong> REP-2026-003</div>
                <div><strong>Fecha de Radicación:</strong> 2026-02-10</div>
                <div><strong>Monto Solicitado:</strong> $395.000 COP</div>
              </div>

              <div className="border border-slate-200 rounded-lg p-3 space-y-2">
                <div className="font-semibold text-slate-900">RESUMEN POR CUENTAS CONTABLES PARA REEMBOLSO:</div>
                <table className="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr className="border-b bg-slate-50">
                      <th className="p-1">Cuenta PUC</th>
                      <th className="p-1">Nombre de la Cuenta</th>
                      <th className="p-1 text-right">Valor Reposición ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1">519530</td>
                      <td className="p-1 font-sans">Útiles, papelería y fotocopias</td>
                      <td className="p-1 text-right">$45.000</td>
                    </tr>
                    <tr>
                      <td className="p-1">513510</td>
                      <td className="p-1 font-sans">Transporte, fletes y mensajería urgente</td>
                      <td className="p-1 text-right">$100.000</td>
                    </tr>
                    <tr>
                      <td className="p-1">513540</td>
                      <td className="p-1 font-sans">Transporte urbano y diligencias administrativas</td>
                      <td className="p-1 text-right">$250.000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t font-bold">
                      <td colSpan={2} className="p-1 text-right font-sans">VALOR TOTAL A REINTEGRAR A CAJA MENOR:</td>
                      <td className="p-1 text-right text-sky-800">$395.000</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 text-center">
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.contadorNombre}</div>
                  <div className="text-slate-500 text-[10px]">Revisado y Validado Tributariamente (Contador)</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.autorizadorNombre}</div>
                  <div className="text-slate-500 text-[10px]">Autorizado Desembolso Bancario (Gerente)</div>
                </div>
              </div>
            </div>
          )}

          {/* F-CM-08: INFORME DE NOVEDADES */}
          {selectedCode === 'F-CM-08' && (
            <div className="space-y-4 text-xs">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <strong>INFORME DE NOVEDADES Y DIFERENCIAS:</strong> Diligenciar obligatoriamente ante cualquier faltante, sobrante, rechazo de factura por la DIAN o extravío de soporte.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-slate-200 p-2.5 rounded">
                  <strong>Tipo de Novedad:</strong>
                  <div className="mt-1 space-x-2">
                    <label><input type="radio" name="nov" defaultChecked /> Faltante de Efectivo</label>
                    <label><input type="radio" name="nov" /> Sobrante</label>
                    <label><input type="radio" name="nov" /> Factura no conforme</label>
                  </div>
                </div>
                <div className="border border-slate-200 p-2.5 rounded font-mono">
                  <strong>Monto de la Diferencia ($):</strong> [VALOR EXACTO]
                </div>
              </div>
              <div className="border border-slate-200 rounded p-3">
                <strong>Descripción Circunstanciada:</strong>
                <p className="text-slate-500 text-[11px] mt-1 italic">
                  Detallar fecha, causas aparentes, personas intervinientes y descargo presentado por el custodio.
                </p>
              </div>
            </div>
          )}

          {/* F-CM-09: CHECKLIST DIAN */}
          {selectedCode === 'F-CM-09' && (
            <div className="space-y-4 text-xs">
              <div className="p-3 bg-sky-50 rounded-lg border border-sky-200 text-sky-900">
                <strong>LISTA DE CHEQUEO TRIBUTARIO DIAN (Arts. 616-1, 617 y 771-2 E.T.):</strong> Todo comprobante debe aprobar el 100% de estos criterios para ser reembolsado.
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 font-semibold border-b">
                      <th className="p-2">Requisito Legal / Tributario</th>
                      <th className="p-2">Normativa</th>
                      <th className="p-2 text-center">Cumple</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px]">
                    <tr>
                      <td className="p-2 font-medium">Factura Electrónica con Código CUFE y Código QR activo</td>
                      <td className="p-2 text-slate-500">Art. 616-1 E.T.</td>
                      <td className="p-2 text-center text-emerald-700 font-bold">✓ CUMPLE</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Expedida a nombre exacto de {config.razonSocial} y NIT {config.nit}</td>
                      <td className="p-2 text-slate-500">Art. 617 lit. c E.T.</td>
                      <td className="p-2 text-center text-emerald-700 font-bold">✓ CUMPLE</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Para no obligados: Documento Soporte Electrónico con RUT anexo</td>
                      <td className="p-2 text-slate-500">Res. DIAN 000167/2021</td>
                      <td className="p-2 text-center text-emerald-700 font-bold">✓ CUMPLE</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Sello de tinta indeleble "CANCELADO / PAGADO CON CAJA MENOR" estampado</td>
                      <td className="p-2 text-slate-500">Control Interno / NIA 240</td>
                      <td className="p-2 text-center text-emerald-700 font-bold">✓ CUMPLE</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Gasto no supera el límite de ${config.limiteOperacion.toLocaleString('es-CO')} por operación</td>
                      <td className="p-2 text-slate-500">Política de Caja Menor</td>
                      <td className="p-2 text-center text-emerald-700 font-bold">✓ CUMPLE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* F-CM-10: ACTA DE APERTURA */}
          {selectedCode === 'F-CM-10' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-800">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong>ACTA DE CONSTITUCIÓN, ASIGNACIÓN DE CUSTODIA Y APERTURA DE FONDO FIJO</strong>
              </div>
              <p>
                En la ciudad de Bogotá D.C., a los [DÍA] del mes de [MES] de [AÑO], se reúnen en las instalaciones de la empresa <strong>{config.razonSocial}</strong>, identificada con NIT <strong>{config.nit}</strong> y RNT <strong>{config.rnt}</strong>, el Representante Legal <strong>{config.autorizadorNombre}</strong>, el Contador Público <strong>{config.contadorNombre}</strong> y el funcionario <strong>{config.custodioNombre}</strong>, con el fin de formalizar la apertura del fondo de caja menor.
              </p>
              <div className="p-3 bg-slate-100 rounded-lg space-y-1">
                <div><strong>1. Monto Asignado:</strong> ${config.montoFondo.toLocaleString('es-CO')} COP.</div>
                <div><strong>2. Custodio Designado:</strong> {config.custodioNombre} ({config.custodioCargo}).</div>
                <div><strong>3. Límite por Operación:</strong> ${config.limiteOperacion.toLocaleString('es-CO')} COP.</div>
                <div><strong>4. Umbral de Reorden / Reposición:</strong> Consumo del {config.umbralReposicionPct}% del fondo o saldo inferior a $600.000 COP.</div>
              </div>
              <p className="text-[11px] text-slate-600">
                El custodio manifiesta aceptar el encargo, declara conocer íntegramente la Política de Caja Menor de la agencia de viajes, se compromete a salvaguardar el efectivo en la caja de seguridad metálica y autoriza expresamente a la empresa a realizar descuentos de nómina por faltantes de dinero no justificados fortuitamente.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-center">
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.autorizadorNombre}</div>
                  <div className="text-slate-500 text-[10px]">Representante Legal</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.custodioNombre}</div>
                  <div className="text-slate-500 text-[10px]">Custodio Designado</div>
                </div>
                <div className="border-t border-slate-400 pt-2">
                  <div className="font-semibold">{config.contadorNombre}</div>
                  <div className="text-slate-500 text-[10px]">Contador Público (T.P. {config.contadorTP})</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
