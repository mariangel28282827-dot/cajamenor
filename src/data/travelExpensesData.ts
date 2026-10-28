import { ExpenseItemRule } from '../types';

export const travelExpensesData: ExpenseItemRule[] = [
  // PERMITIDOS
  {
    id: 'exp-1',
    categoria: 'Operación Administrativa',
    concepto: 'Papelería y útiles de oficina (resmas de papel para itinerarios, carpetas para vouchers, bolígrafos, grapas)',
    estado: 'Permitido',
    soporteExigido: 'Factura Electrónica de Venta con CUFE y QR a nombre de la agencia o Documento Soporte Electrónico.',
    justificacionLegal: 'Art. 771-2 E.T. Gasto indispensable para la operatividad administrativa y entrega documental a viajeros.',
    recomendacionOperativa: 'Compras puntuales que no superen el límite por operación ($200.000 COP). Para volúmenes mayores, cotizar por compras ordinarias.'
  },
  {
    id: 'exp-2',
    categoria: 'Mensajería y Envíos',
    concepto: 'Envío de documentos físicos de viaje, pasaportes con visado o vouchers a clientes corporativos/proveedores vía Servientrega, Interrapidísimo o DHL',
    estado: 'Permitido',
    soporteExigido: 'Factura Electrónica de la empresa transportadora autorizada por MinTIC y guía oficial de despacho.',
    justificacionLegal: 'Art. 616-1 E.T. Gasto conexo al cumplimiento del contrato de intermediación turística.',
    recomendacionOperativa: 'Anotar en la guía y en el comprobante el número de reserva o nombre del pasajero para trazabilidad.'
  },
  {
    id: 'exp-3',
    categoria: 'Transporte Local',
    concepto: 'Transporte urbano en taxi/bus para trámites de visado ante consulados, entrega de documentos en aeropuertos o diligencias bancarias/notariales',
    estado: 'Permitido',
    soporteExigido: 'Planilla de transporte urbano debidamente firmada con fecha, motivo exacto, origen, destino, nombre del funcionario y valor pactado.',
    justificacionLegal: 'Art. 616-1 E.T. y Documento Soporte en adquisiciones a no obligados. Decreto 1074 de 2015.',
    recomendacionOperativa: 'Solo se autoriza si la diligencia es oficial y no existe ruta institucional programada. Máximo un recorrido razonable.'
  },
  {
    id: 'exp-4',
    categoria: 'Aseo y Cafetería',
    concepto: 'Insumos básicos de hospitalidad para clientes de la agencia (café, azúcar, agua embotellada, servilletas) e insumos de aseo local',
    estado: 'Permitido',
    soporteExigido: 'Factura electrónica del supermercado o comercio formal a nombre de la agencia.',
    justificacionLegal: 'Art. 107 E.T. (Expensas necesarias con relación de causalidad en la atención comercial presencial).',
    recomendacionOperativa: 'Mantener provisión para el mes; si se requiere dotación trimestral completa, tramitar por tesorería ordinaria.'
  },
  {
    id: 'exp-5',
    categoria: 'Impresiones y Copiado',
    concepto: 'Fotocopias y plastificado urgente de mapas, vouchers turísticos, formatos migratorios o permisos de salida de menores',
    estado: 'Permitido',
    soporteExigido: 'Factura electrónica o Documento Soporte Electrónico con datos completos del centro de copiado (RUT).',
    justificacionLegal: 'Art. 771-2 E.T. Conexión directa con la facilitación migratoria y turística (Ley 300 de 1996).',
    recomendacionOperativa: 'Adquirir prioritariamente tóner por compras ordinarias; usar caja menor solo ante agotamiento imprevisto.'
  },
  {
    id: 'exp-6',
    categoria: 'Mantenimiento Urgente',
    concepto: 'Reparación imprevista menor de cerrajería, plomería o arreglo de cableado de red de computadores en el local comercial',
    estado: 'Permitido',
    soporteExigido: 'Documento soporte electrónico en adquisiciones a sujetos no obligados a facturar (con RUT del técnico) o factura electrónica.',
    justificacionLegal: 'Art. 107 E.T. y Resolución DIAN 000167 de 2021 para emisión de documento soporte.',
    recomendacionOperativa: 'El técnico debe entregar copia de su RUT y cuenta de cobro detallada. Límite máximo establecido.'
  },

  // RESTRINGIDOS
  {
    id: 'exp-7',
    categoria: 'Atención a Guías o Pasajeros',
    concepto: 'Refrigerio de bienvenida o atención de emergencia a clientes en sala de espera ante retrasos de itinerario externo',
    estado: 'Restringido',
    soporteExigido: 'Factura electrónica detallada + Visto Bueno previo por escrito de la Gerencia.',
    justificacionLegal: 'Estatuto Tributario Art. 107-1 (Limitación de gastos de representación y relaciones públicas).',
    recomendacionOperativa: 'Requiere autorización previa de Gerencia. No puede exceder $50.000 COP por evento.'
  },
  {
    id: 'exp-8',
    categoria: 'Trámites Notariales y Tasas Menores',
    concepto: 'Autenticación notarial urgente de autorizaciones de viaje de menores o copias de escrituras de la sociedad',
    estado: 'Restringido',
    soporteExigido: 'Recibo oficial expedido por la Notaría Pública con desglose de derechos notariales y recaudos de ley.',
    justificacionLegal: 'Decreto 960 de 1970 y estatuto notarial colombiano.',
    recomendacionOperativa: 'Solo aplica cuando el costo no sea trasladable al cliente o corresponda a trámites institucionales de la agencia.'
  },
  {
    id: 'exp-9',
    categoria: 'Comunicaciones y Datos Móviles de Emergencia',
    concepto: 'Recarga menor de datos móviles para teléfono corporativo de soporte a pasajeros en destino durante el fin de semana',
    estado: 'Restringido',
    soporteExigido: 'Comprobante de recarga con NIT del operador de telecomunicaciones a nombre de la línea empresarial.',
    justificacionLegal: 'Art. 107 E.T.',
    recomendacionOperativa: 'La agencia debe contar con planes postpago corporativos; esto solo es contingente.'
  },

  // PROHIBIDOS (Riesgo Crítico y de Control Interno)
  {
    id: 'exp-10',
    categoria: 'Emisión Turística Central',
    concepto: 'Pago de tiquetes aéreos a aerolíneas (Avianca, LATAM, Wingo, etc.) o a través de GDS (Amadeus, Sabre)',
    estado: 'Prohibido',
    soporteExigido: 'NO PROCEDE POR CAJA MENOR. Vía BSP IATA, portal corporativo o tarjeta de crédito corporativa con factura electrónica IATA.',
    justificacionLegal: 'Resolución DIAN 000165 de 2023 (Tiquete aéreo documento equivalente) y Ley 2068 de 2020. Prohibición de elusión de canales bancarios.',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO. El monto y naturaleza supera la caja menor. Destruye la trazabilidad contable y tributaria.'
  },
  {
    id: 'exp-11',
    categoria: 'Alojamiento y Operación Receptiva',
    concepto: 'Pago de reservas hoteleras o anticipos a hoteles, resorts o cadenas de hospedaje',
    estado: 'Prohibido',
    soporteExigido: 'NO PROCEDE POR CAJA MENOR. Pago vía transferencia bancaria con factura electrónica del hotel y voucher de reserva.',
    justificacionLegal: 'Ley 300 de 1996, Ley 2068 de 2020 y Art. 771-5 E.T. (Bancarización obligatoria para deducciones fiscales).',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO. Las reservas hoteleras deben tramitarse por tesorería central y contratos de intermediación.'
  },
  {
    id: 'exp-12',
    categoria: 'Mayoristas y Proveedores de Paquetes',
    concepto: 'Anticipos o liquidación de paquetes turísticos internacionales o nacionales a agencias mayoristas u operadores de receptivo',
    estado: 'Prohibido',
    soporteExigido: 'NO PROCEDE POR CAJA MENOR. Vía transferencias bancarias institucionales.',
    justificacionLegal: 'Estatuto Tributario Art. 771-5 (Medios de pago para aceptación de costos y deducciones). Registro Nacional de Turismo (RNT).',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO. Riesgo severo de desvío de fondos y no deducibilidad fiscal.'
  },
  {
    id: 'exp-13',
    categoria: 'Protección al Consumidor y Devoluciones',
    concepto: 'Reembolsos a pasajeros, devoluciones de depósitos o pagos por desistimiento/retracto de viajes',
    estado: 'Prohibido',
    soporteExigido: 'NO PROCEDE POR CAJA MENOR. Trámite formal ante Tesorería con liquidación de penalidades, nota crédito electrónica y transferencia bancaria.',
    justificacionLegal: 'Estatuto del Consumidor (Ley 1480 de 2011), Ley 2068 de 2020 Art. 63 y Decreto 1074 de 2015. Circular Única SIC.',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO pagar devoluciones en efectivo desde caja menor. Genera pérdida de trazabilidad ante la SIC y auditorías.'
  },
  {
    id: 'exp-14',
    categoria: 'Custodia de Fondos de Pasajeros',
    concepto: 'Recibir o mezclar dineros entregados por clientes para viajes dentro de la caja menor de la empresa',
    estado: 'Prohibido',
    soporteExigido: 'NO APLICA. Todo ingreso de cliente debe expedir Recibo Oficial de Caja e ingresarse a la cuenta recaudadora bancaria.',
    justificacionLegal: 'Código de Comercio Art. 19 y 2074 de 2015. Prohibición de co-mingling (mezcla indebida de fondos fiduciarios de terceros).',
    recomendacionOperativa: 'VIOLACIÓN GRAVE DE CONTROL INTERNO. El dinero de caja menor es fondo fijo egreso, jamás fondo receptor de pagos de clientes.'
  },
  {
    id: 'exp-15',
    categoria: 'Nómina y Beneficios Personales',
    concepto: 'Préstamos a empleados, adelantos de quincena, viáticos no autorizados o gastos personales de los socios o gerencia',
    estado: 'Prohibido',
    soporteExigido: 'NO PROCEDE. La nómina y anticipos tienen su conducto regular por gestión humana y tesorería.',
    justificacionLegal: 'Código Sustantivo del Trabajo (Art. 149 a 151) y NIIF para Pymes (No mezclar gastos de entidad con patrimonio de socios).',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO. Constituye causal de despido por justa causa y hallazgo grave de auditoría interna.'
  },
  {
    id: 'exp-16',
    categoria: 'Comisiones a Vendedores / Freelance',
    concepto: 'Pago en efectivo de comisiones sobre ventas turísticas a asesores o agentes comerciales independientes',
    estado: 'Prohibido',
    soporteExigido: 'NO PROCEDE POR CAJA MENOR. Cuenta de cobro con planilla de seguridad social PILA verificada y retención en la fuente aplicable.',
    justificacionLegal: 'Ley 100 de 1993, Art. 108 E.T. (Obligación de verificar aportes a seguridad social para deducibilidad del gasto) y retención en la fuente.',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO. Pagar comisiones por caja menor elude la retención en la fuente y la verificación de PILA, exponiendo a sanciones de la UGPP y DIAN.'
  },
  {
    id: 'exp-17',
    categoria: 'Activos Fijos y Mobiliario',
    concepto: 'Compra de computadores, impresoras, sillas de oficina, televisores o teléfonos celulares',
    estado: 'Prohibido',
    soporteExigido: 'Trámite de compra de activo fijo por Gerencia con factura electrónica y orden de compra central.',
    justificacionLegal: 'NIIF para Pymes Sección 17 (Propiedades, Planta y Equipo). No es gasto operativo inmediato.',
    recomendacionOperativa: 'ESTRICTAMENTE PROHIBIDO. Debe inventariarse y depreciarse conforme a la política contable de la agencia.'
  }
];
