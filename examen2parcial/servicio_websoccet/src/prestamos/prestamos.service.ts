import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Inject } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { ClientesGateway } from '../clientes/clientes.gateway';
import { Prestamo } from './entities/prestamo.entity';

@Injectable()
export class PrestamosService {
  private prestamos: Prestamo[] = [];
  private idCounter = 1;
  
  constructor(
    @Inject(forwardRef(() => ClientesGateway))
    private clientesGateway: ClientesGateway,
  ) {}
  
  create(createPrestamoDto: CreatePrestamoDto) {
    const newPrestamo: Prestamo = {
      id: (this.idCounter++).toString(),
      clienteId: createPrestamoDto.clienteId,
      monto: createPrestamoDto.monto,
      tasaInteres: createPrestamoDto.tasaInteres,
      plazo: createPrestamoDto.plazo,
      estado: 'pendiente',
    };
    
    this.prestamos.push(newPrestamo);
    
    // Emit event to all connected clients
    this.clientesGateway.emitClienteCreated(newPrestamo);
    
    return newPrestamo;
  }

  findAll() {
    return [...this.prestamos];
  }

  findOne(id: string) {
    const prestamo = this.prestamos.find(prestamo => prestamo.id === id);
    if (!prestamo) {
      throw new Error('Prestamo no encontrado');
    }
    return prestamo;
  }

  update(id: string, updatePrestamoDto: UpdatePrestamoDto) {
    const index = this.prestamos.findIndex(prestamo => prestamo.id === id);
    if (index === -1) {
      throw new Error(`Prestamo con ID ${id} no encontrado`);
    }
    
    const updatedPrestamo = {
      ...this.prestamos[index],
      ...updatePrestamoDto,
    };
    
    this.prestamos[index] = updatedPrestamo;
    
    // Emit update event
    this.clientesGateway.emitClienteUpdated(updatedPrestamo);
    
    return updatedPrestamo;
  }

  remove(id: string) {
    const index = this.prestamos.findIndex(prestamo => prestamo.id === id);
    if (index === -1) {
      throw new Error('Prestamo no encontrado');
    }
    
    this.prestamos.splice(index, 1);
    
    // Emit update after removal
    this.clientesGateway.emitClienteDeleted(id);
  }
}
