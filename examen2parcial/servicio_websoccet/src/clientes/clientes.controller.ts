import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller()
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @MessagePattern('createCliente')
  create(@Payload() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @MessagePattern('findAllClientes')
  findAll() {
    return this.clientesService.findAll();
  }

  @MessagePattern('findOneCliente')
  findOne(@Payload() id: string) {
    return this.clientesService.findOne(id);
  }

  @MessagePattern('updateCliente')
  update(@Payload() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(updateClienteDto.id, updateClienteDto);
  }

  @MessagePattern('removeCliente')
  remove(@Payload() id: string) {
    return this.clientesService.remove(id);
  }
}
