import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosResolver } from './pagos.resolver';
import { DatabaseModule } from '../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PagosResolver, PagosService],
  exports: [PagosService],
})
export class PagosModule {}
