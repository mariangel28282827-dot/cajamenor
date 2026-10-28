import React, { useState } from 'react';
import { AgencyConfig } from '../types';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  FileCheck2, 
  CheckCircle, 
  AlertTriangle, 
  Copy, 
  Check, 
  Printer, 
  Layers, 
  Clock, 
  Users, 
  Building2,
  ChevronRight,
  Bookmark
} from 'lucide-react';

interface ManualViewProps {
  config: AgencyConfig;
}

export const ManualView: React.FC<ManualViewProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('portada');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyFullManualText = () => {
    const el = document.getElementById('manual-full-content');
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sticky Table of Contents Sidebar (3 cols on desktop) */}
      <aside className="hidden lg:block lg:col-span-3 sticky top-24 bg-white p-4 rounded-xl border border-slate-200 shadow-xs max-h-[calc(100vh-8rem)] overflow-y-auto no-print text-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
          <Bookmark className="w-4 h-4 text-sky-600" />
          <span className="font-bold text-slate-900 tracking-tight">Índice del Manual</span>
        </div>
        <nav className="space-y-1">
          {[
            { id: 'sec-portada', label: '1. Portada Institucional' },
            { id: 'sec-objetivo', label: '2. Objetivo y Alcance' },
            { id: 'sec-marco', label: '3. Marco Normativo y Legal' },
            { id: 'sec-politica', label: '4. Política Integral de Caja Menor' },
            { id: 'sec-gastos-turismo', label: '5. Régimen de Gastos (Turismo)' },
            { id: 'sec-responsabilidades', label: '6. Matriz de Responsabilidades (RACI)' },
            { id: 'sec-procedimiento', label: '7. Procedimiento Operativo (16 Etapas)' },
            { id: 'sec-contingencias', label: '8. Procedimientos Alternativos' },
            { id: 'sec-flujograma', label: '9. Flujograma del Proceso' },
            { id: 'sec-formatos', label: '10. Formatos Oficiales (F-CM)' },
            { id: 'sec-riesgos', label: '11. Matriz de Riesgos COSO' },
            { id: 'sec-kpis', label: '12. Indicadores de Gestión (KPIs)' },
            { id: 'sec-auditoria', label: '13. Auditoría y Control DIAN' },
            { id: 'sec-capacitacion', label: '14. Plan de Implementación' },
            { id: 'sec-firmas', label: '15. Aprobación y Firmas' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left py-1.5 px-2 rounded-md transition-colors flex items-center justify-between cursor-pointer ${
                activeSection === item.id
                  ? 'bg-sky-50 text-sky-900 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="truncate">{item.label}</span>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            </button>
          ))}
        </nav>

        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
          <button
            onClick={copyFullManualText}
            className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? '¡Texto Copiado!' : 'Copiar Texto Completo'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-[11px] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3 h-3" />
            <span>Imprimir Manual</span>
          </button>
        </div>
      </aside>

      {/* Main Document Content Area (9 cols on desktop) */}
      <main id="manual-full-content" className="lg:col-span-9 space-y-10 bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        
        {/* ========================================================= */}
        {/* 1. PORTADA INSTITUCIONAL */}
        {/* ========================================================= */}
        <section id="sec-portada" className="border-b border-slate-200 pb-12">
          <div className="border-2 border-slate-900 p-8 rounded-xl bg-slate-50/40 text-center space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-sky-800 font-bold">
                REPÚBLICA DE COLOMBIA · SISTEMA DE GESTIÓN ADMINISTRATIVO Y FINANCIERO
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                {config.razonSocial}
              </h1>
              <p className="text-sm font-mono text-slate-600">
                NIT: {config.nit} | Registro Nacional de Turismo (RNT): {config.rnt}
              </p>
            </div>

            <div className="py-6 border-y border-slate-300 max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                MANUAL OFICIAL DE PROCEDIMIENTO INTERNO
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                ADMINISTRACIÓN, CONTROL, LEGALIZACIÓN, ARQUEO Y REPOSICIÓN DE CAJA MENOR
              </h2>
              <p className="text-xs text-slate-600">
                Diseño Interdisciplinario Integral: Contable, Jurídico Empresarial, Auditoría Interna, Tesorería y Operación Turística
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-left max-w-2xl mx-auto bg-white p-4 rounded-lg border border-slate-200 font-mono">
              <div>
                <strong className="text-slate-800 block">Código Documental:</strong>
                <span className="text-slate-600">MAN-ADM-CM-001</span>
              </div>
              <div>
                <strong className="text-slate-800 block">Versión Aprobada:</strong>
                <span className="text-slate-600">1.0 (Vigencia 2026)</span>
              </div>
              <div>
                <strong className="text-slate-800 block">Monto Inicial del Fondo:</strong>
                <span className="text-slate-900 font-bold">${config.montoFondo.toLocaleString('es-CO')} COP</span>
              </div>
              <div>
                <strong className="text-slate-800 block">Fecha de Formalización:</strong>
                <span className="text-slate-600">Febrero de 2026</span>
              </div>
            </div>

            <div className="pt-4 text-xs text-slate-500 space-y-1">
              <p className="font-medium text-slate-700">Equipo Técnico Redactor Interdisciplinario:</p>
              <p>Contador Público Titulado (T.P. {config.contadorTP}) · Asesor Jurídico Corporativo y Tributario · Auditor Interno de Control (COSO) · Consultor en Operaciones Turísticas</p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OBJETIVO Y ALCANCE */}
        {/* ========================================================= */}
        <section id="sec-objetivo" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">02</span>
            <h2 className="text-lg font-bold text-slate-900">Objetivo General, Objetivos Específicos y Alcance</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              <strong>2.1. Objetivo General:</strong> Establecer, formalizar y reglamentar el procedimiento integral para la creación, custodia, autorización, desembolso, registro contable, legalización, arqueo, conciliación y reposición oportuna del fondo fijo de caja menor de la <strong>{config.razonSocial}</strong>. El propósito fundamental es dotar a la entidad de un mecanismo ágil, seguro, auditable y jurídicamente blindado para solventar erogaciones menores e imprevistas requeridas en el giro ordinario administrativo, garantizando la trazabilidad de cada peso, la estricta conservación de los soportes tributarios exigidos por la DIAN y la total salvaguarda patrimonial de la sociedad.
            </p>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-semibold">2.2. Objetivos Específicos:</strong>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Definir una estricta <strong>segregación de funciones</strong> entre quien solicita el gasto, quien lo autoriza (Gerencia), quien custodia físicamente el efectivo (Custodio) y quien contabiliza y audita (Contador/Auditor), impidiendo auto-aprobaciones o pagos unilaterales.</li>
                <li>Garantizar que todo gasto desembolsado cumpla con los requisitos del <strong>Estatuto Tributario Nacional (Arts. 616-1, 617 y 771-2)</strong> respecto a Facturación Electrónica de Venta con CUFE/QR y Documento Soporte Electrónico para costos y deducciones fiscales procedentes en el Impuesto sobre la Renta.</li>
                <li>Establecer barreras operativas infranqueables que <strong>impidan destinar fondos de caja menor a rubros propios de la operación turística mayor</strong> (tiquetes aéreos, reservas hoteleras, anticipos de paquetes o reembolsos de clientes) o a conceptos laborales/personales no permitidos.</li>
                <li>Prohibir taxativamente la mezcla de recursos propios de la empresa con dineros recibidos de viajeros por venta de viajes y servicios turísticos (<strong>cero co-mingling</strong>).</li>
                <li>Estandarizar los formatos documentales (F-CM-01 a F-CM-10), fijar los plazos perentorios de legalización (máximo 48 horas hábiles) y protocolizar los arqueos periódicos y sorpresivos.</li>
              </ul>
            </div>

            <p>
              <strong>2.3. Alcance Institucional:</strong> Este manual rige con carácter obligatorio para todas las áreas, dependencias, directivos, empleados de nómina, contratistas y personal de la agencia de viajes <strong>{config.razonSocial}</strong> en su sede principal y sucursales operativas. Ningún funcionario tiene facultades para exonerar el cumplimiento de los controles aquí previstos.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. MARCO NORMATIVO Y LEGAL COLOMBIANO */}
        {/* ========================================================= */}
        <section id="sec-marco" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">03</span>
            <h2 className="text-lg font-bold text-slate-900">Marco Normativo y Legal Colombiano Aplicable</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              El presente procedimiento se sustenta en la legislación colombiana vigente, consultada en fuentes oficiales de la <strong>Dirección de Impuestos y Aduanas Nacionales (DIAN)</strong>, el <strong>Ministerio de Comercio, Industria y Turismo (MinCIT)</strong>, el <strong>Departamento Administrativo de la Función Pública</strong> y la <strong>Superintendencia de Sociedades</strong>.
            </p>

            {/* Normas Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1">
                <div className="flex items-center gap-1.5 text-sky-900 font-bold">
                  <Scale className="w-3.5 h-3.5 text-sky-700" />
                  <span>Estatuto Tributario Nacional (E.T.)</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                  <li><strong>Art. 615:</strong> Obligación general de exigir y expedir factura o documento equivalente en toda operación mercantil.</li>
                  <li><strong>Art. 616-1:</strong> Sistema de facturación electrónica y validación previa de la DIAN. Los tiquetes de máquina registradora POS no otorgan derecho a costo ni deducción si no se identifican con los requisitos de documento equivalente electrónico.</li>
                  <li><strong>Art. 617 y 618:</strong> Requisitos formales de la factura y deber del adquirente de exigir la factura legal correspondiente.</li>
                  <li><strong>Art. 771-2:</strong> Procedencia de costos y deducciones. Exige factura de venta con validación o documento soporte electrónico para personas no obligadas a expedir factura.</li>
                  <li><strong>Art. 771-5:</strong> Medios de pago aceptados para efectos fiscales (bancarización obligatoria de operaciones mayores).</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1">
                <div className="flex items-center gap-1.5 text-sky-900 font-bold">
                  <FileCheck2 className="w-3.5 h-3.5 text-sky-700" />
                  <span>Resoluciones DIAN Vigentes</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                  <li><strong>Resolución DIAN 000042 de 2020:</strong> Reglamentación del sistema de facturación electrónica y validación previa.</li>
                  <li><strong>Resolución DIAN 000167 de 2021:</strong> Implementación del Documento Soporte Electrónico en adquisiciones efectuadas a sujetos no obligados a facturar, transmitido telemáticamente a la DIAN.</li>
                  <li><strong>Resolución DIAN 000165 de 2023:</strong> Regulación integral de los documentos equivalentes electrónicos y límites operativos de la factura electrónica.</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1">
                <div className="flex items-center gap-1.5 text-sky-900 font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-sky-700" />
                  <span>Normativa Contable y Comercial</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                  <li><strong>Ley 1314 de 2009 y DUR 2420 de 2015:</strong> Marco técnico de normas de información financiera NIIF (Grupo 2 para Pymes, Sección 7 Estado de Flujos de Efectivo y Sección 11 Instrumentos Financieros Básicos).</li>
                  <li><strong>Código de Comercio (Decreto 410 de 1971):</strong> Arts. 19 (deberes del comerciante), Arts. 48 a 60 (libros de comercio, correspondencia y registros auxiliares) y Art. 128 (conservación documental de libros y papeles por mínimo 10 años).</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 space-y-1">
                <div className="flex items-center gap-1.5 text-sky-900 font-bold">
                  <Building2 className="w-3.5 h-3.5 text-sky-700" />
                  <span>Régimen Turístico y Otras Disposiciones</span>
                </div>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600 text-[11px]">
                  <li><strong>Ley 300 de 1996 y Ley 2068 de 2020:</strong> Ley General de Turismo y Reforma Turística (protección de los derechos del viajero, formalización y transparencia en la intermediación).</li>
                  <li><strong>Decreto 1074 de 2015:</strong> Decreto Único del Sector Comercio, Industria y Turismo (Registro Nacional de Turismo - RNT y custodia fiduciaria de fondos de usuarios).</li>
                  <li><strong>Ley 1581 de 2012 y Dec. 1377 de 2013:</strong> Protección de datos personales (Habeas Data) en el tratamiento de datos de transportistas, mensajeros y proveedores.</li>
                  <li><strong>Código Sustantivo del Trabajo:</strong> Arts. 149 a 151 (regulación de retenciones y deducciones salariales bajo autorización expresa del trabajador).</li>
                </ul>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px] leading-relaxed">
              <strong>ADVERTENCIA LEGAL Y FECHA DE CORTE:</strong> Las normas fueron consultadas con corte a 2026 en las fuentes oficiales del Estado Colombiano. Se advierte que las disposiciones tributarias expedidas por la DIAN en resoluciones operativas pueden modificarse periódicamente; por consiguiente, el Contador Público y el Asesor Jurídico deberán validar periódicamente las resoluciones reglamentarias aplicables.
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. POLÍTICA DE CAJA MENOR */}
        {/* ========================================================= */}
        <section id="sec-politica" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">04</span>
            <h2 className="text-lg font-bold text-slate-900">Política Integral de Administración de Caja Menor</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              La política interna de caja menor constituye el marco normativo de observancia ineludible en <strong>{config.razonSocial}</strong>.
            </p>

            {/* Policy Parameters Table */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 font-semibold border-b border-slate-200 text-slate-700">
                    <th className="p-2.5">Parámetro de la Política</th>
                    <th className="p-2.5">Valor Interno / Asignación</th>
                    <th className="p-2.5">Fundamento Técnico y Operativo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-900">Monto Inicial del Fondo Fijo</td>
                    <td className="p-2.5 text-sky-800 font-bold">${config.montoFondo.toLocaleString('es-CO')} COP</td>
                    <td className="p-2.5 font-sans text-slate-600">Fijado por Acta de Apertura F-CM-10 según necesidades del flujo operativo menor de la agencia.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-900">Límite Máximo por Operación</td>
                    <td className="p-2.5 text-slate-900 font-semibold">${config.limiteOperacion.toLocaleString('es-CO')} COP</td>
                    <td className="p-2.5 font-sans text-slate-600">Ningún gasto individual puede superar esta suma. Gastos mayores deben tramitarse por compras ordinarias.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-900">Límite Diario Acumulado</td>
                    <td className="p-2.5 text-slate-900 font-semibold">${config.limiteDiario.toLocaleString('es-CO')} COP</td>
                    <td className="p-2.5 font-sans text-slate-600">Tope de salidas en un mismo día para preservar la liquidez de contingencia del fondo.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-900">Punto de Reorden / Saldo Mínimo</td>
                    <td className="p-2.5 text-slate-900 font-semibold">70% Consumido / $600.000 COP</td>
                    <td className="p-2.5 font-sans text-slate-600">Cuando el saldo físico desciende a $600.000 COP, se gatilla la solicitud obligatoria de reposición (F-CM-07).</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-900">Plazo Máximo de Legalización</td>
                    <td className="p-2.5 text-rose-800 font-bold">48 Horas Hábiles</td>
                    <td className="p-2.5 font-sans text-slate-600">Tiempo improrrogable para presentar soportes y reintegrar sobrantes tras recibir un vale provisional.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-900">Periodicidad de Arqueos</td>
                    <td className="p-2.5 text-slate-900 font-semibold">Mensual Ordinario + Sorpresivos</td>
                    <td className="p-2.5 font-sans text-slate-600">Ejecutados sin previo aviso por Auditoría Interna o Contador mediante Acta F-CM-05.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-2 pt-2">
              <strong className="text-slate-900 block font-semibold">4.1. Responsables Formales del Proceso:</strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Custodio del Dinero:</span>
                  <span className="font-semibold text-slate-900 text-xs block">{config.custodioNombre}</span>
                  <span className="text-[10px] text-slate-500">{config.custodioCargo}</span>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Autorizador de Gastos:</span>
                  <span className="font-semibold text-slate-900 text-xs block">{config.autorizadorNombre}</span>
                  <span className="text-[10px] text-slate-500">{config.autorizadorCargo}</span>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Registro Contable:</span>
                  <span className="font-semibold text-slate-900 text-xs block">{config.contadorNombre}</span>
                  <span className="text-[10px] text-slate-500">T.P. {config.contadorTP}</span>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Aprobación Reposición:</span>
                  <span className="font-semibold text-slate-900 text-xs block">Gerencia & Tesorería</span>
                  <span className="text-[10px] text-slate-500">Revisión previa Auditor/Contador</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <strong className="text-slate-900 block font-semibold">4.2. Tratamiento de Faltantes, Sobrantes y Pérdidas:</strong>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Faltantes de Efectivo:</strong> Cualquier faltante detectado en un arqueo es de responsabilidad civil directa del custodio del fondo. Salvo causa de fuerza mayor o caso fortuito debidamente acreditado (e.g. hurto con denuncia penal inmediata), el custodio deberá reintegrar de su propio peculio el valor faltante en un plazo no mayor a 24 horas hábiles o autorizar su deducción de la nómina mensual mediante la cláusula incorporada en el Acta F-CM-10, de conformidad con los Arts. 149 y 150 del Código Sustantivo del Trabajo.</li>
                <li><strong>Sobrantes de Efectivo:</strong> Ningún excedente de dinero en caja menor es atribuible al custodio. El sobrante se registrará de inmediato mediante el Informe F-CM-08, se consignará en la cuenta bancaria de la empresa y se reconocerá contablemente como un ingreso extraordinario (cuenta 4295 - Ingresos Diversos), iniciando la respectiva investigación para esclarecer si provino de un comprobante omitido o un error de cambio.</li>
                <li><strong>Gastos No Autorizados o No Soportados:</strong> Si un empleado ejecuta un gasto sin aprobación previa en F-CM-01 o no presenta factura electrónica con CUFE/QR dentro de las 48 horas, el dinero anticipado se considerará anticipo salarial no justificado y será descontado de su respectiva remuneración mensual.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <strong className="text-slate-900 block font-semibold">4.3. Medidas de Seguridad Física y Conservación Documental:</strong>
              <p>
                El dinero en efectivo debe permanecer permanentemente bajo llave en una <strong>caja metálica de seguridad</strong>, resguardada al interior de un archivador con llave exclusiva en la oficina de administración. Queda terminantemente prohibido dejar efectivo visible en escritorios, mostradores comerciales de atención a pasajeros o permitir la manipulación por parte de personas distintas al custodio titular.
              </p>
              <p>
                Los comprobantes originales cancelados con sello de tinta indeleble y los archivos digitales (XML, CUFE y PDF) se archivarán cronológicamente en carpetas identificadas por mes y consecutivo de reposición, conservándose por un período mínimo de <strong>diez (10) años</strong>, conforme lo ordena el artículo 128 del Código de Comercio y el Estatuto Tributario para efectos de inspecciones de la DIAN.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. GASTOS DE AGENCIA DE VIAJES */}
        {/* ========================================================= */}
        <section id="sec-gastos-turismo" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">05</span>
            <h2 className="text-lg font-bold text-slate-900">Régimen Especial de Gastos para la Agencia de Viajes (Viaja con Adri)</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              Dada la naturaleza del negocio de agencias de viajes e intermediación turística sujeta a la <strong>Ley 300 de 1996, Ley 2068 de 2020 y Decreto 1074 de 2015</strong>, se establece una línea divisoria rigurosa e infranqueable entre los gastos menores de oficina y las transacciones operativas centrales del turismo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-2">
                <span className="text-emerald-900 font-bold text-xs uppercase flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Gastos Permitidos (Erogaciones Menores de Oficina)
                </span>
                <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                  <li><strong>Papelería y Suministros:</strong> Carpetas institucionales para vouchers de viajeros, resmas de papel para itinerarios, sobres membreteados, bolígrafos y grapas.</li>
                  <li><strong>Mensajería y Envíos:</strong> Despacho de pasaportes con visado consular o contratos turísticos a clientes vía transportadoras autorizadas por MinTIC (Servientrega, DHL, Interrapidísimo).</li>
                  <li><strong>Transporte Local:</strong> Taxis urbanos autorizados para funcionarios que realizan trámites en consulados, notarías, DIAN, MinCIT o Fontur.</li>
                  <li><strong>Hospitalidad y Aseo:</strong> Café, azúcar y agua para clientes presenciales en sala de ventas e insumos menores de limpieza del local.</li>
                  <li><strong>Fotocopias e Impresiones Urgentes:</strong> Copias de documentos de identidad, permisos de salida de menores o visados ante emergencias.</li>
                  <li><strong>Reparaciones Menores:</strong> Cerrajería urgente, plomería o arreglo menor de cableado de red de datos.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-2">
                <span className="text-rose-900 font-bold text-xs uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Prohibiciones Absolutas (No Tramitables por Caja Menor)
                </span>
                <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                  <li><strong>Tiquetes Aéreos:</strong> Prohibido pagar boletos a aerolíneas o GDS (Amadeus, Sabre) por caja menor. Deben emitirse vía BSP IATA o tarjeta corporativa bancarizada.</li>
                  <li><strong>Reservas Hoteleras:</strong> Prohibido pagar noches de hotel o depósitos a cadenas de hospedaje. Se pagan por transferencia bancaria central.</li>
                  <li><strong>Anticipos a Mayoristas Turísticos:</strong> La liquidación de paquetes turísticos debe cumplir con el Art. 771-5 E.T. (Bancarización).</li>
                  <li><strong>Reembolsos a Pasajeros:</strong> Las devoluciones de dinero por retracto o cancelación deben seguir el procedimiento formal ante la SIC y Tesorería mediante nota crédito electrónica y consignación a cuenta del titular.</li>
                  <li><strong>Comisiones a Asesores:</strong> Prohibido pagar comisiones en efectivo. Exigen PILA verificada y retención en la fuente (Art. 108 E.T.).</li>
                  <li><strong>Mezcla de Recursos (Co-mingling):</strong> Terminantemente prohibido guardar en caja menor dineros recibidos de clientes para viajes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. MATRIZ DE RESPONSABILIDADES */}
        {/* ========================================================= */}
        <section id="sec-responsabilidades" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">06</span>
            <h2 className="text-lg font-bold text-slate-900">Matriz de Responsabilidades y Segregación de Funciones (RACI)</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              Para garantizar que ninguna persona concentre el poder unilateral de solicitar, autorizar, pagar y contabilizar fondos, se implementa la matriz de roles según el estándar RACI: <strong>R</strong> (Responsable de ejecutar), <strong>A</strong> (Aprobador final con autoridad), <strong>C</strong> (Consultado / revisor técnico), <strong>I</strong> (Informado).
            </p>

            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 font-semibold border-b border-slate-200 text-slate-700">
                    <th className="p-2.5">Actividad del Proceso de Caja Menor</th>
                    <th className="p-2 text-center">Solicitante</th>
                    <th className="p-2 text-center">Custodio</th>
                    <th className="p-2 text-center">Gerente</th>
                    <th className="p-2 text-center">Contador</th>
                    <th className="p-2 text-center">Auditor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                  <tr>
                    <td className="p-2 font-sans">Solicitud y justificación del gasto menor (F-CM-01)</td>
                    <td className="p-2 text-center font-bold text-sky-800">R</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                    <td className="p-2 text-center font-bold text-emerald-800">A</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Autorización previa de desembolso</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                    <td className="p-2 text-center font-bold text-emerald-800">R / A</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Desembolso de efectivo y emisión de vale/egreso (F-CM-02)</td>
                    <td className="p-2 text-center font-bold text-sky-800">R (recibe)</td>
                    <td className="p-2 text-center font-bold text-emerald-800">R (entrega)</td>
                    <td className="p-2 text-center text-slate-400">I</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Ejecución del gasto y obtención de factura con CUFE</td>
                    <td className="p-2 text-center font-bold text-sky-800">R</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Rendición de cuentas y legalización en ≤ 48h (F-CM-03)</td>
                    <td className="p-2 text-center font-bold text-sky-800">R</td>
                    <td className="p-2 text-center font-bold text-emerald-800">A</td>
                    <td className="p-2 text-center text-slate-400">I</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Verificación tributaria DIAN y sellado CANCELADO (F-CM-09)</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center font-bold text-sky-800">R</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center font-bold text-emerald-800">A</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Actualización del Libro Auxiliar de Caja Menor (F-CM-04)</td>
                    <td className="p-2 text-center text-slate-300">-</td>
                    <td className="p-2 text-center font-bold text-sky-800">R</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Registro contable en software financiero (PUC 110510)</td>
                    <td className="p-2 text-center text-slate-300">-</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center font-bold text-sky-800">R / A</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Arqueo físico periódico y sorpresivo (F-CM-05)</td>
                    <td className="p-2 text-center text-slate-300">-</td>
                    <td className="p-2 text-center font-bold text-sky-800">R (presenta)</td>
                    <td className="p-2 text-center text-slate-300">I</td>
                    <td className="p-2 text-center font-bold text-emerald-800">R / A</td>
                    <td className="p-2 text-center font-bold text-emerald-800">R / A</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-sans">Solicitud y aprobación de reposición del fondo (F-CM-07)</td>
                    <td className="p-2 text-center text-slate-300">-</td>
                    <td className="p-2 text-center font-bold text-sky-800">R (radica)</td>
                    <td className="p-2 text-center font-bold text-emerald-800">A</td>
                    <td className="p-2 text-center font-bold text-emerald-800">R (revisa)</td>
                    <td className="p-2 text-center text-slate-400">C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. PROCEDIMIENTO OPERATIVO DETALLADO (16 ETAPAS) */}
        {/* ========================================================= */}
        <section id="sec-procedimiento" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">07</span>
            <h2 className="text-lg font-bold text-slate-900">Procedimiento Operativo Paso a Paso (16 Etapas Estandarizadas)</h2>
          </div>

          <div className="space-y-4 text-xs leading-relaxed text-slate-700">
            <p>
              Cada etapa contempla responsable, documento requerido, controles específicos, tiempo estándar de ejecución y resultado medible esperado.
            </p>

            <div className="space-y-3">
              {[
                {
                  num: '01',
                  etapa: 'Solicitud formal del gasto menor por el colaborador',
                  resp: 'Empleado Solicitante',
                  doc: 'Formato de Solicitud de Gasto y Vale Provisional (F-CM-01)',
                  ctrl: 'Verificación de que el gasto corresponda a la lista de permitidos y no exceda $200.000 COP.',
                  tiempo: '15 a 30 minutos',
                  res: 'F-CM-01 diligenciado y radicado ante la Gerencia.'
                },
                {
                  num: '02',
                  etapa: 'Verificación de la necesidad y disponibilidad presupuestal',
                  resp: 'Gerente General / Dirección Administrativa',
                  doc: 'Presupuesto mensual de gastos menores y saldo de caja',
                  ctrl: 'Confirmar que no se trate de una compra fraccionada para eludir compras ordinarias.',
                  tiempo: '1 hora',
                  res: 'Constatación de viabilidad y pertinencia del gasto.'
                },
                {
                  num: '03',
                  etapa: 'Revisión del límite autorizado y de la liquidez física',
                  resp: 'Custodio de Caja Menor',
                  doc: 'Libro Auxiliar F-CM-04 y conteo rápido de caja física',
                  ctrl: 'Validar que el monto no supere $200.000 COP individual ni $300.000 COP diario y que haya saldo.',
                  tiempo: '10 minutos',
                  res: 'Visto bueno de disponibilidad de efectivo en caja.'
                },
                {
                  num: '04',
                  etapa: 'Aprobación o rechazo formal por la persona competente',
                  resp: 'Gerente General',
                  doc: 'F-CM-01 con firma de aprobación o constancia de rechazo',
                  ctrl: 'Firma física o electrónica no delegable en el custodio.',
                  tiempo: 'Inmediato / máximo 2 horas',
                  res: 'Autorización vinculante del gasto.'
                },
                {
                  num: '05',
                  etapa: 'Entrega del dinero y expedición del comprobante/vale',
                  resp: 'Custodio de Caja Menor',
                  doc: 'Comprobante de Egreso F-CM-02 o Vale Provisional F-CM-01',
                  ctrl: 'Firma de recibido por el solicitante en el comprobante antes de retirarse con el dinero.',
                  tiempo: '5 minutos',
                  res: 'Efectivo entregado y vale provisional activo con reloj de 48 horas.'
                },
                {
                  num: '06',
                  etapa: 'Realización efectiva del gasto por el solicitante',
                  resp: 'Empleado Solicitante',
                  doc: 'Cotización previa o listado de suministros autorizados',
                  ctrl: 'Adquisición exclusiva en comercios formalmente constituidos con capacidad de facturar.',
                  tiempo: 'Dentro de la jornada laboral',
                  res: 'Bienes o servicios recibidos a satisfacción.'
                },
                {
                  num: '07',
                  etapa: 'Recepción y validación de Factura Electrónica o Documento Soporte',
                  resp: 'Empleado Solicitante / Proveedor',
                  doc: 'Factura Electrónica con CUFE/QR a nombre de la agencia o RUT del prestador',
                  ctrl: 'Exigir que la factura salga a nombre exacto de la agencia con NIT y fecha actual.',
                  tiempo: 'Momento de la compra',
                  res: 'Soporte fiscal físico y digital (XML/PDF) en mano.'
                },
                {
                  num: '08',
                  etapa: 'Presentación de soportes y legalización del gasto',
                  resp: 'Empleado Solicitante',
                  doc: 'Planilla de Legalización F-CM-03 y efectivo sobrante',
                  ctrl: 'Plazo perentorio de máximo 48 horas hábiles desde el desembolso.',
                  tiempo: '≤ 48 horas hábiles',
                  res: 'Cuentas rendidas y dinero sobrante devuelto a la caja física.'
                },
                {
                  num: '09',
                  etapa: 'Revisión administrativa, tributaria y sellado de anulación',
                  resp: 'Custodio de Caja Menor / Contador',
                  doc: 'Checklist Tributario F-CM-09 y sello de tinta indeleble',
                  ctrl: 'Validación previa DIAN del CUFE en portal web. Estampado de sello CANCELADO en soporte.',
                  tiempo: '1 hora',
                  res: 'Soporte validado, inutilizado para doble cobro y legalización aprobada.'
                },
                {
                  num: '10',
                  etapa: 'Registro contable en el software de la empresa',
                  resp: 'Contador Público / Auxiliar Contable',
                  doc: 'Comprobante de diario contable (PUC)',
                  ctrl: 'Débito a cuentas de gasto (51) y crédito a caja menor (110510) con terceros idóneos.',
                  tiempo: 'Mismo día de la legalización',
                  res: 'Asiento contable fidedigno en el balance financiero.'
                },
                {
                  num: '11',
                  etapa: 'Actualización del Libro Auxiliar o control diario de caja menor',
                  resp: 'Custodio de Caja Menor',
                  doc: 'Libro Auxiliar Diario F-CM-04',
                  ctrl: 'Recálculo matemático del saldo final disponible tras cada egreso.',
                  tiempo: 'Inmediato tras la legalización',
                  res: 'Libro auxiliar cuadrado en tiempo real.'
                },
                {
                  num: '12',
                  etapa: 'Arqueo físico y conciliación matemática del fondo fijo',
                  resp: 'Auditor Interno / Contador Público',
                  doc: 'Acta de Arqueo F-CM-05 y Hoja de Conciliación F-CM-06',
                  ctrl: 'Conteo físico de billetes y comprobantes: Efectivo + Facturas + Vales = $2.000.000.',
                  tiempo: 'Mensual o sorpresivo (1 hora)',
                  res: 'Constancia de balance cuadrado o detección temprana de diferencias.'
                },
                {
                  num: '13',
                  etapa: 'Elaboración de la solicitud formal de reposición',
                  resp: 'Custodio de Caja Menor',
                  doc: 'Solicitud de Reposición F-CM-07 con legajo de soportes originales',
                  ctrl: 'Disparador al alcanzar el 70% de consumo ($1.400.000 en gastos / $600.000 en efectivo).',
                  tiempo: 'Al alcanzar el nivel de reorden',
                  res: 'Radicación del paquete de reposición ante Tesorería.'
                },
                {
                  num: '14',
                  etapa: 'Aprobación de la reposición por Contador y Gerencia',
                  resp: 'Contador Público y Gerente General',
                  doc: 'F-CM-07 firmado por los revisores competentes',
                  ctrl: 'Verificación de que el 100% de los comprobantes adjuntos tengan soporte DIAN deducible.',
                  tiempo: '24 horas hábiles',
                  res: 'Orden formal de giro bancario de reposición.'
                },
                {
                  num: '15',
                  etapa: 'Desembolso bancario para restablecer el fondo fijo',
                  resp: 'Tesorería / Pagaduría Bancaria',
                  doc: 'Comprobante de transferencia bancaria a la cuenta del custodio',
                  ctrl: 'Giro bancario con concepto estricto "Reposición Fondo Fijo Caja Menor".',
                  tiempo: '24 horas hábiles',
                  res: 'Fondo físico de caja menor restituido exactamente a $2.000.000 COP.'
                },
                {
                  num: '16',
                  etapa: 'Archivo físico y digital y cierre del ciclo',
                  resp: 'Custodio de Caja Menor / Archivo Central',
                  doc: 'Legajo mensual cancelado con índice documental',
                  ctrl: 'Custodia por 10 años conforme al Art. 128 del Código de Comercio.',
                  tiempo: 'Fin de mes',
                  res: 'Expediente cerrado, foliado y listo para auditorías externas o de la DIAN.'
                }
              ].map(step => (
                <div key={step.num} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/40 space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-slate-900 text-xs flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[10px] font-mono shrink-0">
                        {step.num}
                      </span>
                      {step.etapa}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">Tiempo: {step.tiempo}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1 text-[11px] text-slate-600">
                    <div><strong className="text-slate-800">Responsable:</strong> {step.resp}</div>
                    <div><strong className="text-slate-800">Documento:</strong> {step.doc}</div>
                    <div><strong className="text-slate-800">Control Clave:</strong> {step.ctrl}</div>
                    <div><strong className="text-slate-800">Resultado:</strong> {step.res}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. PROCEDIMIENTOS ALTERNATIVOS Y DE CONTINGENCIA */}
        {/* ========================================================= */}
        <section id="sec-contingencias" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">08</span>
            <h2 className="text-lg font-bold text-slate-900">Procedimientos Alternativos y Rutas de Contingencia</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1">
              <strong className="text-slate-900 block font-semibold">A. Gastos Rechazados por Gerencia</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                El custodio archiva la solicitud F-CM-01 con la constancia motivada de rechazo. No se desembolsa dinero bajo ningún pretexto. Si el empleado ya ejecutó el gasto sin visto bueno previo, la agencia no lo asumirá.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1">
              <strong className="text-slate-900 block font-semibold">B. Soportes Incompletos o Sin CUFE</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Se concede al solicitante un plazo de gracia improrrogable de 24 horas para acudir al proveedor y obtener la Factura Electrónica con validación previa. Si no la subsana, el importe se deduce de su nómina.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1">
              <strong className="text-slate-900 block font-semibold">C. Gastos Urgentes Fuera de Horario</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                En caso fortuito de fin de semana o noche (ej. entrega urgente de visado a viajero en aeropuerto), el funcionario puede cubrir el gasto de su dinero y radicar la solicitud de reembolso el primer día hábil siguiente con la factura electrónica a nombre de la agencia.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1">
              <strong className="text-slate-900 block font-semibold">D. Faltantes de Efectivo en Arqueo</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Se levanta de inmediato el Informe F-CM-08 suscrito por el Auditor y el Custodio. El custodio debe reponer el valor en un término de 24 horas. De no hacerlo, se activa la autorización de descuento salarial del Acta F-CM-10.
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1 sm:col-span-2">
              <strong className="text-slate-900 block font-semibold">E. Corrección de Errores Contables de Imputación</strong>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Si el Contador detecta un gasto registrado en una cuenta PUC errónea (ej. papelería imputada en aseo), se emitirá una Nota de Contabilidad de reclasificación interna antes del cierre mensual, sin alterar el saldo matemático de caja menor.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 14. PLAN DE IMPLEMENTACIÓN Y CAPACITACIÓN */}
        {/* ========================================================= */}
        <section id="sec-capacitacion" className="space-y-4 pt-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">14</span>
            <h2 className="text-lg font-bold text-slate-900">Plan de Implementación y Capacitación del Personal</h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-slate-700">
            <p>
              Para garantizar que el procedimiento sea asimilado con éxito por todo el equipo de <strong>{config.razonSocial}</strong>, se establece un plan de despliegue estructurado en 4 fases:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 block">Fase 1: Formalización</span>
                <span className="text-[10px] text-slate-500 font-mono">Semana 1</span>
                <p className="text-slate-600 text-[11px]">
                  Firma de las actas de constitución (F-CM-10), entrega formal de la caja fuerte al custodio y expedición de la resolución interna de Gerencia.
                </p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 block">Fase 2: Socialización</span>
                <span className="text-[10px] text-slate-500 font-mono">Semana 2</span>
                <p className="text-slate-600 text-[11px]">
                  Taller de 2 horas con asesores turísticos y administrativos sobre gastos prohibidos (tiquetes, hoteles), plazos de 48h y solicitud de facturas con CUFE.
                </p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 block">Fase 3: Marcha Blanca</span>
                <span className="text-[10px] text-slate-500 font-mono">Semanas 3 a 4</span>
                <p className="text-slate-600 text-[11px]">
                  Puesta en funcionamiento con acompañamiento directo del Contador y primer arqueo de prueba con checklist tributario F-CM-09.
                </p>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 block">Fase 4: Auditoría</span>
                <span className="text-[10px] text-slate-500 font-mono">Día 45 en adelante</span>
                <p className="text-slate-600 text-[11px]">
                  Primer arqueo sorpresivo oficial de control interno, evaluación de los KPIs y reporte formal a la Gerencia General.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 15. APROBACIÓN Y FIRMAS */}
        {/* ========================================================= */}
        <section id="sec-firmas" className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2 pb-2">
            <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded">15</span>
            <h2 className="text-lg font-bold text-slate-900">Formalización, Recomendaciones Finales y Bloque de Firmas</h2>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-700 space-y-2">
            <strong className="text-slate-900 block">Recomendaciones del Equipo Interdisciplinario:</strong>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-[11px]">
              <li>Se recomienda someter este manual a revisión anual ordinaria o inmediata ante reformas tributarias de la DIAN que alteren el régimen de facturación electrónica.</li>
              <li>El Representante Legal, el Contador y el Asesor Jurídico deben suscribir el acta de aprobación en señal de conformidad técnica y jurídica.</li>
              <li>El presente documento constituye un borrador formal institucional listo para su adopción formal por la junta o asamblea de la empresa.</li>
            </ul>
          </div>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-xs">
            <div className="space-y-1">
              <div className="h-14 flex items-end justify-center border-b border-slate-400 pb-2">
                <span className="font-serif italic text-slate-400">[Firma Aprobado Gerencia]</span>
              </div>
              <strong className="text-slate-900 block mt-1">{config.autorizadorNombre}</strong>
              <span className="text-slate-500 text-[11px] block">{config.autorizadorCargo} / Representante Legal</span>
              <span className="text-slate-400 text-[10px] block">{config.razonSocial}</span>
            </div>

            <div className="space-y-1">
              <div className="h-14 flex items-end justify-center border-b border-slate-400 pb-2">
                <span className="font-serif italic text-slate-400">[Firma Contador Titulado]</span>
              </div>
              <strong className="text-slate-900 block mt-1">{config.contadorNombre}</strong>
              <span className="text-slate-500 text-[11px] block">Contador Público Titulado</span>
              <span className="text-slate-400 text-[10px] block">Tarjeta Profesional N° {config.contadorTP}</span>
            </div>

            <div className="space-y-1">
              <div className="h-14 flex items-end justify-center border-b border-slate-400 pb-2">
                <span className="font-serif italic text-slate-400">[Firma Asesor Jurídico]</span>
              </div>
              <strong className="text-slate-900 block mt-1">[NOMBRE ASESOR JURÍDICO]</strong>
              <span className="text-slate-500 text-[11px] block">Asesor Jurídico Empresarial y Tributario</span>
              <span className="text-slate-400 text-[10px] block">Tarjeta Profesional Consejo Superior Judicatura</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
