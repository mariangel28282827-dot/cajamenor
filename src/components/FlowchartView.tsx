import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { 
  GitBranch, 
  Copy, 
  Check, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

export const FlowchartView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showRawMermaid, setShowRawMermaid] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');

  const mermaidChartCode = `flowchart TD
    %% Simbología convencional:
    %% ([Texto]) : Óvalo - Inicio / Fin
    %% [Texto]   : Rectángulo - Actividad / Procedimiento
    %% {Texto}   : Rombo - Decisión
    %% [\\Texto/] : Documento / Soporte físico o digital

    Start([Inicio: Necesidad de Gasto Menor Operativo]) --> Step1[1. Empleado diligencia Solicitud F-CM-01]
    Step1 --> Doc1[/F-CM-01: Solicitud y Vale Provisional/]
    Doc1 --> Step2[2. Verificación de Necesidad y Saldo Disponible]
    
    Step2 --> Dec1{¿Gasto está autorizado y permitido?}
    Dec1 -- No --> AltRechazo[Ruta de Rechazo: Notificación al solicitante / No procede pago]
    AltRechazo --> EndRechazado([Fin de la Solicitud])

    Dec1 -- Sí --> Dec2{¿Fondo tiene disponibilidad física?}
    Dec2 -- No --> AltSinFondo[Ruta de Espera: Programar reposición urgente F-CM-07]
    AltSinFondo --> Step13
    
    Dec2 -- Sí --> Step3[3. Gerencia aprueba solicitud]
    Step3 --> Step4[4. Custodio entrega efectivo y emite comprobante]
    Step4 --> Doc2[/F-CM-02: Comprobante de Egreso / Vale/]
    
    Doc2 --> Step5[5. Empleado realiza el gasto en comercio formal]
    Step5 --> Step6[6. Recepción de Factura Electrónica o Documento Soporte]
    Step6 --> Doc3[/Factura Electrónica con CUFE / Doc. Soporte Electrónico/]
    
    Doc3 --> Step7[7. Presentación de soportes para legalización F-CM-03 en ≤ 48 horas]
    Step7 --> Dec3{¿Soporte cumple requisitos tributarios y formales?}
    
    Dec3 -- No --> AltSoporteIncompleto[Ruta de Corrección: Solicitante subsana factura o asume el gasto]
    AltSoporteIncompleto --> Step7
    
    Dec3 -- Sí --> Step8[8. Custodio sella soporte CANCELADO y valida F-CM-09]
    Step8 --> Step9[9. Actualización inmediata del Libro Auxiliar F-CM-04]
    Step9 --> Step10[10. Contador realiza registro contable en cuenta 110510 y gastos]
    
    Step10 --> Step11[11. Auditoría / Contador efectúa Arqueo y Conciliación]
    Step11 --> Doc4[/F-CM-05 Acta de Arqueo y F-CM-06 Conciliación/]
    
    Doc4 --> Dec4{¿Conciliación presenta diferencias?}
    Dec4 -- Sí: Faltante --> AltFaltante[Ruta F-CM-08: Custodio reintegra el faltante o se autoriza descuento]
    Dec4 -- Sí: Sobrante --> AltSobrante[Ruta F-CM-08: Se consigna a cuenta bancaria y registra ingreso extraordinario]
    AltFaltante --> Dec5
    AltSobrante --> Dec5

    Dec4 -- No: Exacto --> Dec5{¿Se alcanzó nivel de reorden: consumo ≥ 70% o saldo ≤ $600.000?}
    Dec5 -- No --> Espera[Continuar operación ordinaria de caja menor]
    Espera --> Step1

    Dec5 -- Sí --> Step13[12. Custodio radica Solicitud de Reposición F-CM-07]
    Step13 --> Doc5[/F-CM-07: Planilla y Soportes Originales/]
    
    Doc5 --> Dec6{¿Reposición es aprobada por Gerencia y Contador?}
    Dec6 -- No --> AltObjecion[Ruta de Ajuste: Contador solicita aclaración o excluye soporte no conforme]
    AltObjecion --> Step13

    Dec6 -- Sí --> Step14[13. Tesorería gira transferencia bancaria a nombre del custodio]
    Step14 --> Step15[14. Custodio cobra o efectúa retiro para restablecer fondo a $2.000.000]
    Step15 --> Step16[15. Archivo digital y físico de legajo cancelado por 10 años]
    Step16 --> Fin([Fin del Ciclo de Caja Menor])`;

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: 12,
      flowchart: {
        curve: 'basis',
        htmlLabels: true,
        useMaxWidth: false
      }
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      const uniqueId = 'mermaid-' + Math.floor(Math.random() * 10000);
      mermaid.render(uniqueId, mermaidChartCode).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      }).catch(err => {
        console.error('Error rendering mermaid:', err);
      });
    }
  }, [mermaidChartCode]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(mermaidChartCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-sky-600" />
              Flujograma Profesional del Procedimiento (Mermaid & Explicación)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Diagrama integral con simbología convencional estandarizada: <strong>Óvalos</strong> (Inicio/Fin), <strong>Rectángulos</strong> (Actividades), <strong>Rombos</strong> (Puntos de Decisión con alternativas Sí/No) y <strong>Documentos</strong> (Soportes F-CM y Facturas Electrónicas).
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRawMermaid(!showRawMermaid)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {showRawMermaid ? 'Ocultar Código' : 'Ver Código Mermaid'}
            </button>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Mermaid'}</span>
            </button>
          </div>
        </div>

        {/* Legend strip */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <span className="font-semibold text-slate-800">Convención de Formas:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-3 rounded-full border border-sky-400 bg-sky-50 inline-block"></span>
            <span>Óvalo: Inicio / Término</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-3 rounded-xs border border-slate-400 bg-slate-100 inline-block"></span>
            <span>Rectángulo: Actividad u Operación</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rotate-45 border border-amber-500 bg-amber-50 inline-block"></span>
            <span>Rombo: Decisión y Validación</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-3 skew-x-6 border border-indigo-400 bg-indigo-50 inline-block"></span>
            <span>Documento: Soporte / Formato F-CM</span>
          </div>
        </div>
      </div>

      {/* Raw mermaid code collapsible */}
      {showRawMermaid && (
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto shadow-inner relative">
          <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800 text-slate-400">
            <span>Código Fuente Mermaid (Compatible con GitHub, Notion, Draw.io)</span>
            <button onClick={handleCopyCode} className="hover:text-white transition-colors cursor-pointer">
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
          <pre>{mermaidChartCode}</pre>
        </div>
      )}

      {/* Interactive Diagram Canvas */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs relative">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Visor Interactivo del Diagrama:</span>
            <span className="text-xs text-slate-400">Zoom actual: {Math.round(zoomLevel * 100)}%</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 2))}
              className="p-1 hover:bg-white rounded transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
              title="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.6))}
              className="p-1 hover:bg-white rounded transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
              title="Disminuir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1 hover:bg-white rounded transition-colors text-slate-600 hover:text-slate-900 cursor-pointer"
              title="Restablecer tamaño"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[700px] border border-slate-100 rounded-lg p-4 bg-slate-50/30 flex justify-center">
          <div
            ref={containerRef}
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center', transition: 'transform 0.15s ease' }}
            className="w-full flex justify-center"
          />
        </div>
      </div>

      {/* Textual Step-by-Step Explanation for Employees & Management */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-lg font-bold text-slate-900">
            Explicación Operativa del Flujograma (Guía para Empleados y Directivos)
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Lectura clara y secuencial de cada etapa y sus bifurcaciones de control interno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Phase 1 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0">1</span>
              <strong className="text-slate-900 text-sm">Solicitud y Verificación Previa</strong>
            </div>
            <p className="text-slate-600 leading-relaxed">
              El colaborador identifica la necesidad del gasto menor (ej. envío de pasaportes, papelería) y diligencia el formato <strong>F-CM-01</strong>. El custodio y la gerencia verifican:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>¿El concepto está en la lista de permitidos? (No tiquetes, no hoteles).</li>
              <li>¿No excede el límite de $200.000 COP por operación?</li>
              <li>¿Hay efectivo disponible en la caja física?</li>
            </ul>
            <p className="text-amber-800 bg-amber-50 p-2 rounded text-[11px]">
              <strong>Si se rechaza:</strong> Se devuelve la solicitud con la causal motivada. No se desembolsa dinero.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0">2</span>
              <strong className="text-slate-900 text-sm">Desembolso y Ejecución del Gasto</strong>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Con la firma previa de Gerencia en F-CM-01, el custodio entrega el efectivo contra firma del Comprobante de Egreso / Vale <strong>F-CM-02</strong>.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>El solicitante acude a un establecimiento formal.</li>
              <li>Exige Factura Electrónica a nombre de la empresa con NIT, o en compras a no obligados, solicita RUT para emitir Documento Soporte Electrónico.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0">3</span>
              <strong className="text-slate-900 text-sm">Legalización y Validación Tributaria (≤ 48h)</strong>
            </div>
            <p className="text-slate-600 leading-relaxed">
              El solicitante presenta la Planilla de Legalización <strong>F-CM-03</strong> y devuelve el efectivo sobrante si hubo anticipo.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>El custodio aplica la lista de chequeo tributario <strong>F-CM-09</strong> (validación DIAN, CUFE, QR, fechas, valor).</li>
              <li>Estampa sello indeleble <em>CANCELADO CON CAJA MENOR</em> en el original para evitar duplicidades.</li>
            </ul>
            <p className="text-rose-800 bg-rose-50 p-2 rounded text-[11px]">
              <strong>Si el soporte no cumple:</strong> El solicitante tiene 24h para corregirlo con el proveedor. Si no es subsanable, el solicitante asume el valor de su peculio.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center shrink-0">4</span>
              <strong className="text-slate-900 text-sm">Registro, Arqueo y Reposición</strong>
            </div>
            <p className="text-slate-600 leading-relaxed">
              El custodio actualiza el Libro Auxiliar <strong>F-CM-04</strong> y el Contador registra el comprobante en la cuenta contable 110510.
            </p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li><strong>Arqueo (F-CM-05/06):</strong> Efectivo + Facturas = $2.000.000. Si hay faltante, el custodio lo reintegra de inmediato.</li>
              <li><strong>Reposición (F-CM-07):</strong> Al consumir el 70% o quedar $600.000 en efectivo, se solicita a Tesorería el reintegro bancario para devolver el saldo a $2.000.000.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
