import { Module } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { InventariosController } from './inventarios.controller';
import { InventariosGateway } from './inventarios.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventario } from './entities/inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inventario])],
  controllers: [InventariosController],
  providers: [InventariosService, InventariosGateway],
  exports: [TypeOrmModule],
})
export class InventariosModule {}
