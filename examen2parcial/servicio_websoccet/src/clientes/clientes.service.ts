import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Inject } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { ClientesGateway } from './clientes.gateway';
import { Cliente } from './entities/cliente.entity';




@Injectable()
export class ClientesService {
  private clientes: Cliente [] = [];
  private idCounter = 1;

  constructor(
    @Inject(forwardRef(() => ClientesGateway))
    private clientesGateway: ClientesGateway,
  ) {}

  create(createClienteDto: CreateClienteDto): Cliente {
    const newCliente: Cliente = {
      id: (this.idCounter++).toString(),
      nombre: createClienteDto.nombre,
      apellido: createClienteDto.apellido,
      cedula: createClienteDto.cedula,
      estado: 'pendiente',
    };
    
    this.clientes.push(newCliente);
    
    // Emit event to all connected clients
    this.clientesGateway.emitClienteCreated(newCliente);
    
    return newCliente;
  }

  findAll(): Cliente[] {
    return [...this.clientes];
  }

  findOne(id: string): Cliente {
    const cliente = this.clientes.find(c => c.id === id);
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
    return cliente;
  }

  update(id: string, updateClienteDto: UpdateClienteDto): Cliente {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index === -1) {
      throw new Error(`Cliente con ID ${id} no encontrado`);
    }
    
    const updatedCliente = {
      ...this.clientes[index],
      ...updateClienteDto,
    };
    
    this.clientes[index] = updatedCliente;
    
    // Emit update event
    this.clientesGateway.emitClienteUpdated(updatedCliente);
    
    return updatedCliente;
  }

  remove(id: string): void {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error('Cliente no encontrado');
    }
    
    this.clientes.splice(index, 1);
    
    // Emit update after removal
    this.clientesGateway.emitClienteDeleted(id);
  }
}