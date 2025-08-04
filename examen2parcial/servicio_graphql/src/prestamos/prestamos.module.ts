import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosResolver } from './prestamos.resolver';
import { DatabaseModule } from '../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PrestamosResolver, PrestamosService],
  exports: [PrestamosService],
})
export class PrestamosModule {}
