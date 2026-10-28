export type ActiveTab = 
  | 'manual'
  | 'user-manual'
  | 'install-uninstall'
  | 'flowchart'
  | 'arqueo-simulator'
  | 'formats'
  | 'expense-guide'
  | 'risk-matrix'
  | 'audit-checklist'
  | 'kpis';

export interface AgencyConfig {
  razonSocial: string;
  nit: string;
  rnt: string; // Registro Nacional de Turismo
  custodioNombre: string;
  custodioCargo: string;
  autorizadorNombre: string;
  autorizadorCargo: string;
  contadorNombre: string;
  contadorTP: string;
  montoFondo: number;
  limiteOperacion: number;
  limiteDiario: number;
  umbralReposicionPct: number; // e.g. 70% consumido o 30% saldo mínimo
  plazoLegalizacionHoras: number; // 48h
}

export interface DenominationCount {
  value: number;
  label: string;
  type: 'billete' | 'moneda';
  count: number;
}

export interface VoucherItem {
  id: string;
  numero: string;
  fecha: string;
  solicitante: string;
  concepto: string;
  valor: number;
  soporteTipo: 'Factura Electrónica' | 'Documento Soporte' | 'Vale Provisional' | 'Recibo Transporte';
  soporteNumero: string;
  estado: 'Pendiente' | 'Legalizado' | 'Rechazado';
}

export interface FormatTemplate {
  codigo: string;
  nombre: string;
  version: string;
  fechaEmision: string;
  responsable: string;
  descripcion: string;
  camposObligatorios: string[];
}

export interface ExpenseItemRule {
  id: string;
  categoria: string;
  concepto: string;
  estado: 'Permitido' | 'Restringido' | 'Prohibido';
  soporteExigido: string;
  justificacionLegal: string;
  recomendacionOperativa: string;
}

export interface RiskControlItem {
  id: string;
  proceso: string;
  riesgo: string;
  impacto: 'Alto' | 'Medio' | 'Bajo';
  probabilidad: 'Alta' | 'Media' | 'Baja';
  control: string;
  tipoControl: 'Preventivo' | 'Detectivo' | 'Correctivo';
  responsable: string;
  evidencia: string;
}

export interface KpiMetric {
  id: string;
  nombre: string;
  formula: string;
  periodicidad: string;
  meta: string;
  tipoMeta: 'Recomendación Interna' | 'Exigencia Normativa';
  responsable: string;
  valorActual: number;
  unidad: '%' | 'días' | 'diferencias';
}
