import { Injectable } from '@nestjs/common';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { DatabaseService } from '../../shared/database/database.service';
import { Cliente } from './entities/cliente.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientesService {
  constructor(private readonly db: DatabaseService) {}
  create(createClienteInput: CreateClienteInput) {
    const cliente: Cliente = {
      id: "",
      ...createClienteInput,
    };
    
    const data = this.db.getData();
    data.clientes.push(cliente);
    this.db.saveData({ clientes: data.clientes });
    
    return cliente;
  }

  findAll(): Cliente[] {
    return this.db.getData().clientes;
  }

  findOne(id: string): Cliente {
    const cliente = this.db.getData().clientes.find(c => c.id === id);
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return cliente;
  }

  update(id: string, updateClienteInput: UpdateClienteInput) {
    const cliente = this.findOne(id);
    const data = this.db.getData();
    const index = data.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    data.clientes[index] = { ...cliente, ...updateClienteInput };
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
