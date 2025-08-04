import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { DatabaseService } from '../shared/database/database.service';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(private readonly db: DatabaseService) {}

  create(createClienteDto: CreateClienteDto): Cliente {
    const cliente: Cliente = {
      id: "",
      ...createClienteDto,
    };
    
    const data = this.db.getData();
    data.clientes.push(cliente);
    this.db.saveData({ clientes: data.clientes });
    
    return cliente;
  }

  findAll(): Cliente [] {
    return this.db.getData().clientes;
  }

  findOne(id: string): Cliente {
    const cliente = this.db.getData().clientes.find(c => c.id === id);
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return cliente;
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    const cliente = this.findOne(id);
    const data = this.db.getData();
    const index = data.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    data.clientes[index] = { ...cliente, ...updateClienteDto };
    this.db.saveData({ clientes: data.clientes });
    return data.clientes[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    data.clientes.splice(index, 1);
    this.db.saveData({ clientes: data.clientes });
    return `Cliente con ID ${id} eliminado`;
  }
}
