import { Module } from '@nestjs/common';
import { OrganizacionesModule } from './organizaciones/organizaciones.module';


@Module({
  imports: [OrganizacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
