import { Module } from '@nestjs/common';
import { SimulacionesService } from './simulaciones.service';
import { SimulacionesResolver } from './simulaciones.resolver';
import { DatabaseModule } from '../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SimulacionesResolver, SimulacionesService],
  exports: [SimulacionesService],
})
export class SimulacionesModule {}
