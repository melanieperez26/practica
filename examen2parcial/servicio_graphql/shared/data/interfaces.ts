import { Cliente } from '../../clientes/entities/cliente.entity';
import { Prestamo } from '../../prestamos/entities/prestamo.entity';
import { Simulacion } from '../../simulacion/entities/simulacion.entity';
import { Solicitude } from '../../solicitudes/entities/solicitude.entity';
import { Pago } from '../../pagos/entities/pago.entity';
import { Notificacione } from '../../notificaciones/entities/notificacione.entity';

export interface Database {
  clientes: Cliente[];
  prestamos: Prestamo[];
  simulaciones: Simulacion[];
  solicitudes: Solicitude[];
  pagos: Pago[];
  notificaciones: Notificacione[];
}

export const initialData: Database = {
  clientes: [],
  prestamos: [],
  simulaciones: [],
  solicitudes: [],
  pagos: [],
  notificaciones: [],
};

export class DatabaseService {
  private static instance: DatabaseService;
  private data: Database;

  private constructor() {
    this.data = JSON.parse(JSON.stringify(initialData)); 
  }

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  getData(): Database {
    return this.data;
  }

  saveData(newData: Partial<Database>): void {
    this.data = { ...this.data, ...newData };
  }
}