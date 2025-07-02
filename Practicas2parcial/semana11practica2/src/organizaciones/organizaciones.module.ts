import { Module } from '@nestjs/common';
import { OrganizacionesService } from './organizaciones.service';
import { OrganizacionesResolver } from './organizaciones.resolver';
import { Organizacione } from './entities/organizacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacione])],
  providers: [OrganizacionesResolver, OrganizacionesService],
  exports: [TypeOrmModule],
})
export class OrganizacionesModule {}
