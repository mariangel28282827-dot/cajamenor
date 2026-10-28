import { FormatTemplate } from '../types';

export const formatsCatalog: FormatTemplate[] = [
  {
    codigo: 'F-CM-01',
    nombre: 'Formato de Solicitud de Gasto y Vale Provisional de Caja Menor',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Empleado Solicitante / Custodio de Caja Menor',
    descripcion: 'Instrumento para requerir desembolsos previos a la compra o vales provisionales para diligencias autorizadas, fijando el plazo de legalización improrrogable de 48 horas.',
    camposObligatorios: ['Fecha de solicitud', 'Nombre y cédula del solicitante', 'Cargo y departamento', 'Concepto y justificación detallada', 'Valor estimado solicitado en letras y números', 'Firma del solicitante', 'Firma de aprobación de Gerencia']
  },
  {
    codigo: 'F-CM-02',
    nombre: 'Comprobante de Egreso de Caja Menor',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Custodio de Caja Menor',
    descripcion: 'Soporte oficial de salida física de dinero en efectivo donde el beneficiario suscribe el recibido a satisfacción.',
    camposObligatorios: ['Consecutivo de egreso', 'Fecha y hora', 'Pagado a (Nombre/Razón Social y NIT/C.C.)', 'Valor pagado en números y letras', 'Concepto del gasto', 'Código contable sugerido (PUC)', 'Firma de quien elabora (Custodio)', 'Firma de quien recibe (Beneficiario)']
  },
  {
    codigo: 'F-CM-03',
    nombre: 'Relación de Gastos y Planilla de Legalización',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Empleado Solicitante / Custodio',
    descripcion: 'Planilla consolidada donde se relacionan cronológicamente las facturas, tiquetes o documentos equivalentes que liquidan un anticipo otorgado.',
    camposObligatorios: ['N° de vale provisional origen', 'Fecha de legalización', 'Tabla de soportes (Fecha, Proveedor, NIT, N° Factura/Doc. Soporte, Concepto, Valor)', 'Total gastado', 'Valor anticipado', 'Diferencia (Efectivo reintegrado o saldo a favor)', 'Firmas de legalización y revisión']
  },
  {
    codigo: 'F-CM-04',
    nombre: 'Registro Auxiliar de Caja Menor (Libro de Control Diario)',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Custodio de Caja Menor',
    descripcion: 'Libro auxiliar cronológico de control donde se anota cada ingreso por constitución/reposición y cada egreso o vale provisional, manteniendo el saldo matemático exacto.',
    camposObligatorios: ['Fecha', 'Tipo de movimiento (Ingreso / Egreso / Vale)', 'Comprobante N°', 'Beneficiario', 'Concepto', 'Entradas ($)', 'Salidas ($)', 'Saldo disponible ($)', 'Firma del custodio']
  },
  {
    codigo: 'F-CM-05',
    nombre: 'Acta de Arqueo Periódico y Sorpresivo de Caja Menor',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Auditor Interno / Contador Público',
    descripcion: 'Acta de comprobación física en presencia del custodio, detallando el recuento de billetes colombianos, monedas, vales pendientes y facturas físicas.',
    camposObligatorios: ['Fecha y hora del arqueo', 'Tipo de arqueo (Ordinario mensual / Sorpresivo)', 'Desglose de billetes por denominación ($100k, $50k, $20k, $10k, $5k, $2k)', 'Desglose de monedas', 'Total efectivo contado', 'Total comprobantes válidos', 'Total vales vigentes', 'Suma total vs Fondo autorizado', 'Determinación de diferencia (Exacto / Sobrante / Faltante)', 'Firmas del auditor y del custodio']
  },
  {
    codigo: 'F-CM-06',
    nombre: 'Hoja de Conciliación Matemática y Contable del Fondo Fijo',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Contador Público / Tesorería',
    descripcion: 'Validación de la ecuación de balance del fondo: Efectivo en caja + Gastos legalizados pendientes de reposición + Anticipos/vales vigentes = Fondo Autorizado ($2.000.000).',
    camposObligatorios: ['Período de corte', 'Monto fijado por resolución/acta', 'Efectivo según arqueo', 'Total facturas en poder del custodio', 'Total vales en trámite de legalización', 'Total partidas conciliadas', 'Saldo contable en libro mayor (Cuenta 110510)', 'Partidas conciliatorias justificadas', 'Firma del contador y visto bueno']
  },
  {
    codigo: 'F-CM-07',
    nombre: 'Solicitud Formal de Reposición y Reembolso de Caja Menor',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Custodio de Caja Menor / Contador',
    descripcion: 'Documento oficial dirigido a Tesorería y Gerencia para solicitar el giro del cheque o transferencia bancaria que restituye el fondo fijo al alcanzar el nivel de reorden.',
    camposObligatorios: ['Consecutivo de reposición', 'Fecha de solicitud', 'Período que cubre', 'Resumen por centros de costo / cuentas contables (Papelería, Transporte, Aseo, etc.)', 'Monto total a reponer en números y letras', 'Relación de anexos físicos adjuntos (Originales sellados)', 'Aprobación del contador', 'Autorización de desembolso por Gerencia']
  },
  {
    codigo: 'F-CM-08',
    nombre: 'Informe de Novedades, Faltantes, Sobrantes e Inconsistencias',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Auditor Interno / Contador / Custodio',
    descripcion: 'Reporte formal para registrar y tipificar cualquier anomalía detectada en arqueos, soportes adulterados, vales vencidos o pérdida de efectivo.',
    camposObligatorios: ['Fecha de detección', 'Tipo de novedad (Faltante / Sobrante / Soporte no conforme / Vale vencido / Pérdida)', 'Monto involucrado ($)', 'Descripción circunstanciada de los hechos', 'Descargo o explicación del custodio/involucrado', 'Plan de acción correctivo y plazo de reintegro', 'Firmas y escalamiento a Gerencia']
  },
  {
    codigo: 'F-CM-09',
    nombre: 'Lista de Chequeo / Verificación Tributaria y Documental (Checklist DIAN)',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Custodio de Caja Menor / Auxiliar Contable',
    descripcion: 'Herramienta de control previo para garantizar que ningún soporte sea recibido ni pagado si no cumple los requisitos del Estatuto Tributario Arts. 616-1, 617 y 771-2.',
    camposObligatorios: ['N° Comprobante evaluado', 'Validación Factura Electrónica (CUFE, QR, Razón social, NIT, fecha)', 'Validación Documento Soporte Electrónico (RUT proveedor, consecutivo autorizado)', 'Validación de Retenciones en la fuente aplicables', 'Sello de cancelado estampado', 'Resultado: ACEPTADO / RECHAZADO', 'Firma del revisor']
  },
  {
    codigo: 'F-CM-10',
    nombre: 'Acta Oficial de Apertura, Asignación de Responsabilidad, Entrega y Cierre',
    version: '1.0',
    fechaEmision: '2026-02-01',
    responsable: 'Gerencia General / Representante Legal / Contador',
    descripcion: 'Instrumento legal solemne que formaliza la creación del fondo fijo, delega la custodia a un funcionario determinado, fija las pólizas o garantías y establece las condiciones de entrega o cierre definitivo.',
    camposObligatorios: ['Ciudad y fecha', 'Razón social y NIT de la agencia', 'Identificación del funcionario custodio designado', 'Monto del fondo autorizado ($)', 'Límites operativos fijados', 'Declaración expresa de responsabilidad civil y laboral por la custodia', 'Autorización expresa de descuento de nómina por faltantes no justificados', 'Firmas del Representante Legal, Custodio y Contador']
  }
];

export const sampleMovementRecords = [
  {
    fecha: '2026-02-02',
    tipo: 'Ingreso',
    comprobante: 'ING-001',
    tercero: 'Agencia de Viajes con Adri (Banco Bancolombia)',
    concepto: 'Constitución inicial del fondo fijo de caja menor según Acta F-CM-10',
    entrada: 2000000,
    salida: 0,
    saldo: 2000000
  },
  {
    fecha: '2026-02-04',
    tipo: 'Egreso',
    comprobante: 'EGR-001',
    tercero: 'Papelería El Turista SAS (NIT 900.876.543-1)',
    concepto: 'Compra de carpetas institucionales para vouchers de viajeros y resmas de papel para itinerarios (Factura FE-1049)',
    entrada: 0,
    salida: 45000,
    saldo: 1955000
  },
  {
    fecha: '2026-02-06',
    tipo: 'Egreso',
    comprobante: 'EGR-002',
    tercero: 'Servicios Postales y Envíos Nacionales SAS (NIT 860.032.444-9)',
    concepto: 'Envío urgente de pasaportes con visado estadounidense a cliente corporativo en Medellín (Factura FE-9982)',
    entrada: 0,
    salida: 100000,
    saldo: 1855000
  },
  {
    fecha: '2026-02-09',
    tipo: 'Egreso',
    comprobante: 'EGR-003',
    tercero: 'Transportes Urbanos Autorizados (C.C. 1.020.345.678)',
    concepto: 'Ruta de taxis autorizados para entrega de documentación consular y radicación ante MinCIT/Fontur (Planilla F-CM-03 / Doc. Soporte DS-012)',
    entrada: 0,
    salida: 250000,
    saldo: 1605000
  }
];
