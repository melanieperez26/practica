import { Module } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { SolicitudesResolver } from './solicitudes.resolver';
import { DatabaseModule } from '../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SolicitudesResolver, SolicitudesService],
  exports: [SolicitudesService],
})
export class SolicitudesModule {}
