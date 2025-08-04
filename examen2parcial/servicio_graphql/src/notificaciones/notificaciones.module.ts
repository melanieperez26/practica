import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesResolver } from './notificaciones.resolver';
import { DatabaseModule } from '../../shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [NotificacionesResolver, NotificacionesService],
  exports: [NotificacionesService],
})
export class NotificacionesModule {}
