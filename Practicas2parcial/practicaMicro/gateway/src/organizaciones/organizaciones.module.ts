import { Module } from '@nestjs/common';
import { OrganizacionesController } from './organizaciones.controller';
import { OrganizacionesService } from './organizaciones.service';
import {NatsModule} from '../transports/nats.module';

@Module({
  imports: [NatsModule],
  controllers: [OrganizacionesController],
  providers: [OrganizacionesService],
})
export class OrganizacionesModule {}

