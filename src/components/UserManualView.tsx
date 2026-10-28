import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Calculator, 
  FileSpreadsheet, 
  Search, 
  GitBranch, 
  ShieldCheck, 
  BarChart3, 
  Download, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp,
  Lightbulb,
  FileCheck2,
  Users
} from 'lucide-react';

export const UserManualView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: '¿Qué sucede si un empleado pierde la factura física de un gasto menor?',
      a: 'Si la factura fue electrónica de venta validada por la DIAN, el solicitante puede pedir al comercio emisor el reenvío del archivo XML y la representación gráfica en PDF a su correo institucional. Si el comercio era no obligado a facturar y no se cuenta con documento soporte debidamente firmado, el gasto no será aceptado contablemente y el colaborador deberá reintegrar el valor de su peculio personal en un término de 24 horas hábiles.'
    },
    {
      q: '¿Un colaborador puede solicitar un nuevo vale provisional si tiene uno pendiente de legalizar?',
      a: 'No. El sistema y la política interna establecen un bloqueo estricto e insubsanable: ningún empleado puede recibir un nuevo anticipo de caja menor mientras tenga un vale provisional abierto o vencido (plazo superior a 48 horas hábiles).'
    },
    {
      q: '¿Por qué no se pueden pagar tiquetes aéreos o noches de hotel desde la caja menor?',
      a: 'Por dos razones críticas: 1) Normativa tributaria: el Art. 771-5 del Estatuto Tributario exige bancarización para deducir costos de servicios mayores. 2) Control operativo y turismo: las reservas aéreas y hoteleras deben tramitarse mediante BSP IATA, GDS, convenios mayoristas o tarjeta de crédito corporativa para garantizar vouchers con número de localizador y trazabilidad fiduciaria ante la SIC y el RNT.'
    },
    {
      q: '¿Quién asume los faltantes de dinero detectados en un arqueo sorpresivo?',
      a: 'El custodio titular del fondo de caja menor es civil y laboralmente responsable de los recursos entregados en custodia según el Acta F-CM-10. Salvo comprobación irrefutable de fuerza mayor o caso fortuito (ej. hurto con denuncia penal inmediata), el custodio debe reponer el valor en un término de 24 horas hábiles o se procederá al descuento por nómina de acuerdo con los Arts. 149 y 150 del Código Sustantivo del Trabajo.'
    },
    {
      q: '¿Qué se debe hacer con los sobrantes de dinero detectados en un arqueo?',
      a: 'Bajo ninguna circunstancia el dinero sobrante pertenece al custodio ni al auditor. Se elabora de inmediato el Informe de Novedades F-CM-08, se consigna el efectivo en la cuenta bancaria de la empresa y se registra contablemente como un ingreso extraordinario (cuenta 4295), aperturando una indagación para verificar si existió omisión de egreso o error en el vuelto.'
    },
    {
      q: '¿Cuándo se debe solicitar la reposición del fondo de caja menor?',
      a: 'La reposición debe tramitarse obligatoriamente al alcanzar el punto de reorden: cuando se haya consumido el 70% del fondo fijo ($1.400.000 COP en comprobantes) o cuando el saldo físico en efectivo sea igual o menor a $600.000 COP. No debe esperarse a agotar el dinero para evitar la paralización de diligencias operativas.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-sky-700 font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Guía Práctica de Usuario · Plataforma Digital</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-1">
              Manual de Usuario del Sistema de Caja Menor (Viaja con Adri)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Instrucciones detalladas y amigables para operar cada módulo del software, gestionar gastos, realizar arqueos, generar formatos oficiales y resolver dudas cotidianas.
            </p>
          </div>
        </div>
      </div>

      {/* Guide by Role (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Role 1: Solicitante */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs">
              01
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Rol: Empleado Solicitante</h3>
              <span className="text-[11px] text-slate-500">Asesores de viaje, operaciones y mensajería</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-sky-600 font-bold">1.</span>
              <span><strong>Verifique la lista de gastos:</strong> Ingrese a la pestaña <em>Guía de Gastos</em> y corrobore que su erogación esté marcada como "Permitido" (papelería, envíos, transportes).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-sky-600 font-bold">2.</span>
              <span><strong>Diligencie el Formato F-CM-01:</strong> Imprima o descargue la solicitud en la pestaña <em>Formatos</em> y llévela a la Gerencia para su visto bueno.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-sky-600 font-bold">3.</span>
              <span><strong>Exija Factura Electrónica:</strong> Al comprar, solicite que la factura salga con NIT y razón social exacta de la agencia con CUFE y código QR activo.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-sky-600 font-bold">4.</span>
              <span><strong>Legalice en ≤ 48 horas:</strong> Presente la factura y devuelva el cambio sobrante en la planilla F-CM-03 antes de que expire el plazo.</span>
            </li>
          </ul>
        </div>

        {/* Role 2: Custodio */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
              02
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Rol: Custodio de Caja</h3>
              <span className="text-[11px] text-slate-500">Administrador responsable del dinero físico</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-indigo-600 font-bold">1.</span>
              <span><strong>Nunca entregue dinero sin firma:</strong> Exija la aprobación de Gerencia en F-CM-01 y haga firmar el comprobante F-CM-02 al entregar el efectivo.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-indigo-600 font-bold">2.</span>
              <span><strong>Aplique el Checklist F-CM-09:</strong> Verifique CUFE, QR, fecha y datos de la empresa antes de aceptar un comprobante.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-indigo-600 font-bold">3.</span>
              <span><strong>Estampe el sello CANCELADO:</strong> Inutilice físicamente la factura original con tinta indeleble para evitar cobros dobles.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-indigo-600 font-bold">4.</span>
              <span><strong>Actualice el Libro Auxiliar F-CM-04:</strong> Anote cada entrada y salida el mismo día y controle el punto de reorden ($600.000 COP).</span>
            </li>
          </ul>
        </div>

        {/* Role 3: Contador y Auditor */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
              03
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Rol: Contador y Auditor</h3>
              <span className="text-[11px] text-slate-500">Control interno, fiscal y contabilidad</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold">1.</span>
              <span><strong>Simulador de Arqueo:</strong> Use la pestaña <em>Simulador de Arqueo</em> para contar billetes y comprobar la fórmula: Efectivo + Facturas = $2.000.000.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold">2.</span>
              <span><strong>Arqueos Sorpresivos:</strong> Ejecute actas F-CM-05 sin previo aviso al custodio para verificar la inexistencia de dineros de clientes (co-mingling).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold">3.</span>
              <span><strong>Validación de Reposición:</strong> Revise que cada partida de la solicitud F-CM-07 cumpla con el Art. 771-2 E.T. antes de autorizar el giro bancario.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-emerald-600 font-bold">4.</span>
              <span><strong>Monitoreo de KPIs:</strong> Revise mensualmente el tablero de indicadores (plazo de legalización mayor o igual a 95%, conformidad DIAN 100%).</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Module by Module Tutorial */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-6">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
          Guía de Operación por Módulos del Sistema
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>Módulo: Simulador de Arqueo y Conciliación</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              En este módulo usted puede realizar arqueos físicos en tiempo real:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li><strong>Tabla de Billetes y Monedas:</strong> Ingrese la cantidad contada de billetes ($100k, $50k, $20k, $10k, $5k, $2k) y monedas en pesos colombianos. El subtotal se recalcula al instante.</li>
              <li><strong>Comprobantes Pagados:</strong> Puede registrar nuevos comprobantes físicos con su número de factura y valor, o eliminarlos.</li>
              <li><strong>Resultado Matemático:</strong> La tarjeta superior calcula si el fondo está <em>Exacto / Cuadrado ($0)</em>, si existe <em>Faltante</em> (rojo) o <em>Sobrante</em> (ámbar), y genera alertas automáticas si el saldo desciende a $600.000 COP o menos.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <FileSpreadsheet className="w-4 h-4 text-sky-600" />
              <span>Módulo: Banco de Formatos (F-CM-01 a F-CM-10)</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Contiene las 10 plantillas normalizadas con codificación y firmas:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li><strong>Personalización de Variables:</strong> Al pulsar <em>Personalizar Variables</em>, puede editar la Razón Social, NIT, RNT, Custodio o Monto del fondo, y todos los 10 formatos se actualizarán en vivo.</li>
              <li><strong>Impresión Limpia:</strong> Con el botón <em>Imprimir Formato</em>, se despliega una vista optimizada en papel blanco sin barras de navegación lista para radicar.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <Search className="w-4 h-4 text-sky-600" />
              <span>Módulo: Guía de Gastos de la Agencia</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Es el buscador inteligente para resolver la pregunta: <em>"¿Se puede pagar esto por caja menor?"</em>:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>Escriba cualquier término (ej. <em>tiquete, hotel, mensajería, taxi, café</em>).</li>
              <li>Cada tarjeta le informa con semáforo (Verde: Permitido / Amarillo: Restringido / Rojo: Prohibido), el soporte fiscal exigido y el artículo legal del Estatuto Tributario o Ley de Turismo.</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
              <GitBranch className="w-4 h-4 text-sky-600" />
              <span>Módulo: Flujograma del Procedimiento</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Visualiza el flujo de principio a fin según simbología convencional:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>Permite hacer zoom, reiniciar tamaño y visualizar rutas de rechazo o aprobación.</li>
              <li>Ofrece el código Mermaid puro para copiar con un clic a informes en Word o GitHub.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <HelpCircle className="w-5 h-5 text-sky-600" />
          <div>
            <h3 className="text-base font-bold text-slate-900">Preguntas Frecuentes Operativas (FAQ)</h3>
            <p className="text-xs text-slate-500">Respuestas directas a las situaciones administrativas más usuales.</p>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-3.5 text-left bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-3 cursor-pointer text-xs font-semibold text-slate-900"
                >
                  <span className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-sky-600 shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
