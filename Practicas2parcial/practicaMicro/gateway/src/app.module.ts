import { Module } from '@nestjs/common';
import { OrganizacionesModule } from './organizaciones/organizaciones.module';
import {NatsModule} from './transports/nats.module';


@Module({
  imports: [OrganizacionesModule,NatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
