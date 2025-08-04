import { Module } from '@nestjs/common';
import { SimulacionesService } from './simulaciones.service';
import { SimulacionesController } from './simulaciones.controller';
import { SimulacionesGateway } from './simulaciones.gateway';

@Module({
  controllers: [SimulacionesController],
  providers: [SimulacionesService, SimulacionesGateway],
  exports: [SimulacionesGateway]
})
export class SimulacionesModule {}
