import { RiskControlItem, KpiMetric } from '../types';

export const manualSections = [
  {
    id: 'portada',
    titulo: '1. Portada Institucional y Ficha Técnica',
    resumen: 'Identificación oficial del documento, autoría interdisciplinaria y firmas de control.'
  },
  {
    id: 'objetivo-alcance',
    titulo: '2. Objetivo General, Específicos y Alcance',
    resumen: 'Propósito institucional, campo de aplicación y cobertura dentro de Viaja con Adri.'
  },
  {
    id: 'marco-normativo',
    titulo: '3. Marco Normativo y Legal Colombiano Vigente',
    resumen: 'Estatuto Tributario, Resoluciones DIAN de Facturación y Documento Soporte, NIIF, Ley de Turismo y Habeas Data.'
  },
  {
    id: 'politica-caja-menor',
    titulo: '4. Política Integral de Caja Menor',
    resumen: 'Monto del fondo, límites, plazos de legalización, gastos autorizados, custodia y segregación de funciones.'
  },
  {
    id: 'gastos-turismo',
    titulo: '5. Régimen de Gastos para Agencias de Viajes',
    resumen: 'Gastos operativos menores permitidos vs. prohibiciones absolutas (tiquetes, hoteles, reembolsos y clientes).'
  },
  {
    id: 'matriz-responsabilidades',
    titulo: '6. Matriz de Responsabilidades (Modelo RACI)',
    resumen: 'Definición de roles para Gerencia, Custodio, Empleado Solicitante, Contador y Auditor.'
  },
  {
    id: 'procedimiento-16-etapas',
    titulo: '7. Procedimiento Operativo Detallado (16 Etapas)',
    resumen: 'Flujo paso a paso con responsables, tiempos, controles, documentos y procedimientos de contingencia.'
  },
  {
    id: 'flujograma-proceso',
    titulo: '8. Flujograma Profesional del Proceso (Mermaid)',
    resumen: 'Diagrama con simbología ISO/ANSI y explicación operativa para empleados y directivos.'
  },
  {
    id: 'formatos-control',
    titulo: '9. Formatos y Documentos de Control Estandarizados',
    resumen: 'F-CM-01 al F-CM-10 con codificación documental, campos obligatorios y reglas de diligenciamiento.'
  },
  {
    id: 'matriz-riesgos',
    titulo: '10. Matriz de Riesgos y Controles (Marco COSO)',
    resumen: 'Prevención de fraude, colusión, pérdida de beneficios tributarios y mezcla de fondos.'
  },
  {
    id: 'indicadores-kpis',
    titulo: '11. Indicadores de Gestión y Desempeño (KPIs)',
    resumen: 'Fórmulas, periodicidad, metas sugeridas y responsables de monitoreo continuo.'
  },
  {
    id: 'auditoria-checklist',
    titulo: '12. Lista de Verificación para Auditoría Interna',
    resumen: 'Checklist de arqueo sorpresivo y validación tributaria DIAN de soportes contables.'
  },
  {
    id: 'implementacion-capacitacion',
    titulo: '13. Plan de Implementación, Capacitación y Firmas',
    resumen: 'Cronograma de despliegue, socialización al equipo de viajes y actas de formalización.'
  }
];

export const riskMatrixData: RiskControlItem[] = [
  {
    id: 'R1',
    proceso: 'Recepción y Custodia',
    riesgo: 'Mezcla indebida de fondos propios de la agencia con dineros recibidos de clientes para paquetes turísticos (co-mingling).',
    impacto: 'Alto',
    probabilidad: 'Media',
    control: 'Prohibición explícita de recibir pagos de clientes en la caja física de caja menor. Todo recaudo comercial exige Recibo Oficial de Caja y consignación bancaria inmediata en cuentas de la empresa.',
    tipoControl: 'Preventivo',
    responsable: 'Gerencia y Custodio de Caja Menor',
    evidencia: 'Arqueos sorpresivos sin excedentes inexplicados y auditoría de recibos de caja vs extractos bancarios.'
  },
  {
    id: 'R2',
    proceso: 'Soporte y Legalización',
    riesgo: 'Soportes fiscales no deducibles según Art. 771-2 E.T. (recibos informales sin CUFE ni Documento Soporte Electrónico).',
    impacto: 'Alto',
    probabilidad: 'Alta',
    control: 'Checklist previo obligatorio (F-CM-09). Solo se aceptan Facturas Electrónicas de Venta validadas por la DIAN a nombre de [RAZÓN SOCIAL] con NIT o emisión de Documento Soporte Electrónico a personas no obligadas a facturar con RUT vigente.',
    tipoControl: 'Preventivo',
    responsable: 'Contador Público y Custodio',
    evidencia: 'Planilla de legalización F-CM-03 con validación previa de XML y CUFE en portal DIAN.'
  },
  {
    id: 'R3',
    proceso: 'Autorización y Desembolso',
    riesgo: 'Auto-aprobación o colusión en gastos personales o no relacionados con la actividad de la agencia de viajes.',
    impacto: 'Alto',
    probabilidad: 'Baja',
    control: 'Segregación estricta de funciones: Quien custodia el dinero (Custodio) jamás puede autorizar gastos ni registrar la contabilidad. Toda salida de dinero exige firma de Gerencia en F-CM-01 previa al desembolso.',
    tipoControl: 'Preventivo',
    responsable: 'Gerencia General',
    evidencia: 'Formato F-CM-01 firmado por Gerencia antes de entrega de fondos.'
  },
  {
    id: 'R4',
    proceso: 'Soporte y Legalización',
    riesgo: 'Duplicidad en el reembolso de un mismo soporte o adulteración del valor del comprobante.',
    impacto: 'Medio',
    probabilidad: 'Media',
    control: 'Anulación física inmediata de cada soporte original con sello de tinta indeleble "CANCELADO / PAGADO POR CAJA MENOR - FECHA - COMPROBANTE N°" y archivo digital indexado.',
    tipoControl: 'Detectivo',
    responsable: 'Custodio de Caja Menor y Revisor',
    evidencia: 'Facturas físicas con sello de cancelación y archivo correlativo.'
  },
  {
    id: 'R5',
    proceso: 'Custodia Física',
    riesgo: 'Faltante de dinero por sustracción, descuido o robo en el local de la agencia de viajes.',
    impacto: 'Alto',
    probabilidad: 'Baja',
    control: 'Caja de seguridad metálica con clave/llave única bajo llave en archivador de seguridad. Prohibido acceso a terceros. Arqueos sorpresivos mensuales ejecutados por el Auditor o Contador.',
    tipoControl: 'Preventivo',
    responsable: 'Custodio y Auditor Interno',
    evidencia: 'Acta de entrega de llaves y Actas de Arqueo F-CM-05.'
  },
  {
    id: 'R6',
    proceso: 'Legalización de Anticipos',
    riesgo: 'Uso de anticipos provisionales como préstamos encubiertos a colaboradores por vencimiento de plazos.',
    impacto: 'Medio',
    probabilidad: 'Media',
    control: 'Plazo estricto perentorio de 48 horas hábiles para legalizar vales provisionales. Bloqueo automático para solicitar nuevos fondos a quien tenga un vale vencido. Descuento salarial autorizado en contrato ante no legalización.',
    tipoControl: 'Correctivo',
    responsable: 'Custodio y Gestión Humana',
    evidencia: 'Registro auxiliar diario F-CM-04 con semáforo de antigüedad de vales.'
  },
  {
    id: 'R7',
    proceso: 'Reposición del Fondo',
    riesgo: 'Desabastecimiento operativo de la caja menor o paralización de diligencias por demora en el reembolso.',
    impacto: 'Medio',
    probabilidad: 'Media',
    control: 'Punto de reorden automático al alcanzar el 70% de consumo del fondo (saldo disponible de $600.000 COP). Solicitud de reposición F-CM-07 tramitada con tiempo estándar de 24 horas.',
    tipoControl: 'Preventivo',
    responsable: 'Custodio y Tesorería',
    evidencia: 'Histórico de reposiciones oportunas en F-CM-07.'
  },
  {
    id: 'R8',
    proceso: 'Operación Turística Central',
    riesgo: 'Intento de tramitar tiquetes aéreos, reservas hoteleras o devoluciones de pasajeros por la caja menor.',
    impacto: 'Alto',
    probabilidad: 'Baja',
    control: 'Restricción sistemática en el catálogo de cuentas de caja menor. Rechazo de plano sin excepciones. Remisión inmediata al departamento de reservas/tesorería central bancaria.',
    tipoControl: 'Preventivo',
    responsable: 'Custodio, Contador y Gerente',
    evidencia: 'Cero asientos de servicios turísticos centrales en la cuenta contable 110510 (Caja Menor).'
  }
];

export const kpiMetricsData: KpiMetric[] = [
  {
    id: 'kpi-1',
    nombre: 'Porcentaje de Gastos Legalizados en Plazo (≤ 48 Horas)',
    formula: '(N° de gastos legalizados dentro de 48h hábiles / N° total de vales o anticipos emitidos) × 100',
    periodicidad: 'Mensual',
    meta: '≥ 95% (Meta Interna Recomendada)',
    tipoMeta: 'Recomendación Interna',
    responsable: 'Custodio de Caja Menor',
    valorActual: 96.5,
    unidad: '%'
  },
  {
    id: 'kpi-2',
    nombre: 'Conformidad Tributaria DIAN de Soportes (Art. 771-2 E.T.)',
    formula: '(Monto $ de soportes con Factura Electrónica/Doc. Soporte válido / Monto total legalizado) × 100',
    periodicidad: 'Por reposición',
    meta: '100% (Exigencia Legal Estatuto Tributario)',
    tipoMeta: 'Exigencia Normativa',
    responsable: 'Contador Público',
    valorActual: 100,
    unidad: '%'
  },
  {
    id: 'kpi-3',
    nombre: 'Efectividad en Arqueos (Cero Diferencias Injustificadas)',
    formula: 'N° de arqueos con diferencia = $0 / N° total de arqueos efectuados (periódicos + sorpresivos) × 100',
    periodicidad: 'Mensual',
    meta: '100% (Meta de Control Interno)',
    tipoMeta: 'Recomendación Interna',
    responsable: 'Auditor Interno / Contador',
    valorActual: 100,
    unidad: '%'
  },
  {
    id: 'kpi-4',
    nombre: 'Tiempo Promedio de Reposición del Fondo Fijo',
    formula: 'Suma de días hábiles entre la radicación del F-CM-07 y el desembolso bancario / N° de reposiciones',
    periodicidad: 'Trimestral',
    meta: '≤ 2.0 días hábiles (Meta Operativa)',
    tipoMeta: 'Recomendación Interna',
    responsable: 'Tesorería y Gerencia',
    valorActual: 1.5,
    unidad: 'días'
  },
  {
    id: 'kpi-5',
    nombre: 'Tasa de Gastos Rechazados en Revisión Contable',
    formula: '(Monto de comprobantes rechazados por incumplimiento de requisitos / Monto total presentado) × 100',
    periodicidad: 'Mensual',
    meta: '≤ 2% (Meta de Calidad)',
    tipoMeta: 'Recomendación Interna',
    responsable: 'Custodio de Caja Menor',
    valorActual: 1.2,
    unidad: '%'
  },
  {
    id: 'kpi-6',
    nombre: 'Operaciones Debidamente Autorizadas Previamente',
    formula: '(N° de desembolsos con visto bueno y firma previa de Gerencia / N° total de desembolsos) × 100',
    periodicidad: 'Mensual',
    meta: '100% (Exigencia de Control Interno)',
    tipoMeta: 'Recomendación Interna',
    responsable: 'Gerente General y Custodio',
    valorActual: 100,
    unidad: '%'
  }
];

export const auditChecklistItems = [
  {
    id: 'chk-1',
    categoria: 'Acreditación y Fondo Fijo',
    pregunta: '¿Existe Acta Formal de Apertura y Asignación de Responsabilidad (F-CM-10) debidamente firmada por Gerencia y el Custodio?',
    normativa: 'Código de Comercio Art. 19 / Control Interno',
    obligatorio: true
  },
  {
    id: 'chk-2',
    categoria: 'Acreditación y Fondo Fijo',
    pregunta: '¿El monto en custodia coincide exactamente con la fórmula matemática: Efectivo + Vales provisionales + Facturas pendientes de reposición = $2.000.000?',
    normativa: 'Marco Conceptual NIIF / Conciliación de Efectivo',
    obligatorio: true
  },
  {
    id: 'chk-3',
    categoria: 'Cumplimiento Tributario DIAN',
    pregunta: '¿Todas las facturas presentadas corresponden a Factura Electrónica de Venta con CUFE, código QR y expedidas a nombre de [RAZÓN SOCIAL] con NIT?',
    normativa: 'Estatuto Tributario Arts. 616-1, 617 y 771-2',
    obligatorio: true
  },
  {
    id: 'chk-4',
    categoria: 'Cumplimiento Tributario DIAN',
    pregunta: '¿Para adquisiciones a no obligados a facturar (técnicos, transporte, etc.) se transmitió el Documento Soporte Electrónico a la DIAN dentro de los plazos?',
    normativa: 'Resolución DIAN 000167 de 2021 y Res. 000165 de 2023',
    obligatorio: true
  },
  {
    id: 'chk-5',
    categoria: 'Cumplimiento Tributario DIAN',
    pregunta: '¿Se adjunta copia del RUT actualizado del proveedor cuando se trate de Documento Soporte a personas naturales?',
    normativa: 'Art. 177-2 E.T. y normas complementarias',
    obligatorio: true
  },
  {
    id: 'chk-6',
    categoria: 'Operatividad y Sector Turismo',
    pregunta: '¿Se verificó que no existan tiquetes aéreos, reservas de hotel ni anticipos a operadores turísticos pagados indebidamente por caja menor?',
    normativa: 'Ley 300 de 1996, Ley 2068 de 2020 y Art. 771-5 E.T.',
    obligatorio: true
  },
  {
    id: 'chk-7',
    categoria: 'Operatividad y Sector Turismo',
    pregunta: '¿Se constató la ausencia absoluta de dineros recaudados a clientes o pasajeros en el contenedor de caja menor (cero co-mingling)?',
    normativa: 'Decreto 1074 de 2015 / Código de Comercio',
    obligatorio: true
  },
  {
    id: 'chk-8',
    categoria: 'Límites y Autorizaciones',
    pregunta: '¿Ningún desembolso individual superó el límite establecido por operación ($200.000 COP) sin visto bueno especial?',
    normativa: 'Política Interna de Caja Menor',
    obligatorio: true
  },
  {
    id: 'chk-9',
    categoria: 'Límites y Autorizaciones',
    pregunta: '¿Todos los gastos cuentan con solicitud previa (F-CM-01) y comprobante de egreso (F-CM-02) firmados?',
    normativa: 'Segregación de funciones COSO',
    obligatorio: true
  },
  {
    id: 'chk-10',
    categoria: 'Anulación y Archivo',
    pregunta: '¿Los documentos físicos originales tienen estampado el sello de anulación "PAGADO / CANCELADO CON CAJA MENOR" para impedir doble cobro?',
    normativa: 'Norma de Auditoría NIA 240 / Prevención del Fraude',
    obligatorio: true
  },
  {
    id: 'chk-11',
    categoria: 'Temporalidad de Legalización',
    pregunta: '¿Todos los vales provisionales fueron legalizados dentro del plazo improrrogable de 48 horas hábiles?',
    normativa: 'Política de Tesorería Interna',
    obligatorio: true
  },
  {
    id: 'chk-12',
    categoria: 'Seguridad Física',
    pregunta: '¿El efectivo permanece bajo llave en caja metálica de seguridad en sitio restringido, con tenencia exclusiva del custodio asignado?',
    normativa: 'Control Interno y Salvaguarda de Activos',
    obligatorio: true
  }
];
