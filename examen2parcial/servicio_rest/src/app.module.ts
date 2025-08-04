import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { PagosModule } from './pagos/pagos.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { SimulacionModule } from './simulacion/simulacion.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  
  imports: [ClientesModule, NotificacionesModule, PagosModule, PrestamosModule, SimulacionModule, SolicitudesModule,DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
