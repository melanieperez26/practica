import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { ClientesGateway } from './clientes.gateway';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService, ClientesGateway],
})
export class ClientesModule {}
