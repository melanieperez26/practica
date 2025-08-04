import { Module } from '@nestjs/common';
import { SimulacionesModule } from './simulaciones/simulaciones.module';
import { ClientesModule } from './clientes/clientes.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports: [
    SimulacionesModule, 
    ClientesModule, PrestamosModule, PagosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
