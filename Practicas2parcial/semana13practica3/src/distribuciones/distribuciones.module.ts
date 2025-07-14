import { Module } from '@nestjs/common';
import { DistribucionesService } from './distribuciones.service';
import { DistribucionesController } from './distribuciones.controller';
import { DistribucionesGateway } from './distribuciones.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distribucione } from './entities/distribucione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Distribucione])],
  controllers: [DistribucionesController],
  providers: [DistribucionesService, DistribucionesGateway],
  exports: [TypeOrmModule],
})
export class DistribucionesModule {}
