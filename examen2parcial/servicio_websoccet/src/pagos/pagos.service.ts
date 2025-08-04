import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { Inject, forwardRef } from '@nestjs/common';
import { ClientesGateway } from '../clientes/clientes.gateway';
import { PagosGateway } from './pagos.gateway';

@Injectable()
export class PagosService {
  private pagos: Pago[] = [];
  private idCounter = 1;

  constructor(
    @Inject(forwardRef(() => ClientesGateway))
    private pagosGateway: PagosGateway,
  ) {}

  create(createPagoDto: CreatePagoDto) {
    const newPago: Pago = {
      id: (this.idCounter++).toString(),
      prestamoId: createPagoDto.prestamoId,
      fechaPago: createPagoDto.fechaPago,
      monto: createPagoDto.monto,
      estado: 'pendiente',
    };
    
    this.pagos.push(newPago);
    
    // Emit event to all connected clients
    this.pagosGateway.emitPagoCreated(newPago);
    
    return newPago;
  }

  findAll() {
    return [...this.pagos];
  }

  findOne(id: string) {
    return this.pagos.find(pago => pago.id === id);
  }

  update(id: string, updatePagoDto: UpdatePagoDto) {
    const index = this.pagos.findIndex(pago => pago.id === id);
    if (index === -1) {
      throw new Error(`Pago con ID ${id} no encontrado`);
    }
    
    const updatedPago = {
      ...this.pagos[index],
      ...updatePagoDto,
    };
    
    this.pagos[index] = updatedPago;
    
    // Emit update event
    this.pagosGateway.emitPagoUpdated(updatedPago);
    
    return updatedPago;
  }

  remove(id: string) {
    const index = this.pagos.findIndex(pago => pago.id === id);
    if (index === -1) {
      throw new Error(`Pago con ID ${id} no encontrado`);
    }
    
    this.pagos.splice(index, 1);
    
    // Emit update after removal
    this.pagosGateway.emitPagoDeleted(id);
  }
}
