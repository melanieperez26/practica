import { Module } from '@nestjs/common';
import { OrganizacionesModule } from './organizaciones/organizaciones.module';
import { DistribucionesModule } from './distribuciones/distribuciones.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'prueba_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  OrganizacionesModule, 
  DistribucionesModule, 
  InventariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
