import { Module } from '@nestjs/common';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { ClientesModule } from './clientes/clientes.module';
import { PagosModule } from './pagos/pagos.module';
import { DatabaseModule } from '../shared/database/database.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { SimulacionesModule } from './simulaciones/simulaciones.module';
@Module({
  imports: [SolicitudesModule, ClientesModule, DatabaseModule, PagosModule, PrestamosModule, NotificacionesModule, SimulacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
