import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import {PrestamosGateway} from './prestamos.gateway';

@Module({
  imports: [PrestamosGateway],
  controllers: [PrestamosController],
  providers: [PrestamosService],
})
export class PrestamosModule {}
