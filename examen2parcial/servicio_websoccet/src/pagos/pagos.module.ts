import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosGateway } from './pagos.gateway';

@Module({
  providers: [PagosGateway, PagosService],
})
export class PagosModule {}
