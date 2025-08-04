import { Injectable } from '@nestjs/common';
import { Cliente } from '../../clientes/entities/clientes.entity';
import { Prestamo } from '../../prestamos/entities/prestamos.entity';
import { Simulacion } from '../../simulaciones/entities/simulaciones.entity';
import { Solicitude } from '../../solicitudes/entities/solicitudes.entity';
import { Pago } from '../../pagos/entities/pagos.entity';
import { Notificacione } from '../../notificaciones/entities/notificaciones.entity';

export interface Database {
  clientes: Cliente[];
  prestamos: Prestamo[];
  simulaciones: Simulacion[];
  solicitudes: Solicitude[];
  pagos: Pago[];
  notificaciones: Notificacione[];
}

const initialData: Database = {
  clientes: [],
  prestamos: [],
  simulaciones: [],
  solicitudes: [],
  pagos: [],
  notificaciones: [],
};

@Injectable()
export class DatabaseService {
  private data: Database;

  constructor() {
    this.data = JSON.parse(JSON.stringify(initialData));
  }

  getData(): Database {
    return this.data;
  }

  saveData(newData: Partial<Database>): void {
    this.data = { ...this.data, ...newData };
  }
}
