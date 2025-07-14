import { Module } from '@nestjs/common';
import { OrganizacionesService } from './organizaciones.service';
import { OrganizacionesController } from './organizaciones.controller';
import { OrganizacionesGateway } from './organizaciones.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacione } from './entities/organizacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacione])],
  controllers: [OrganizacionesController],
  providers: [OrganizacionesService, OrganizacionesGateway],
  exports: [TypeOrmModule],
})
export class OrganizacionesModule {}
