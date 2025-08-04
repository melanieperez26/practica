import { Module } from '@nestjs/common';
import { SimulacionService } from './simulacion.service';
import { SimulacionController } from './simulacion.controller';
import { DatabaseModule } from '../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SimulacionController],
  providers: [SimulacionService],
  exports: [SimulacionService]
})
export class SimulacionModule {}
