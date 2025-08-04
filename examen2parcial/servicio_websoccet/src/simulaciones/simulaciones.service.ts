import { Injectable, Inject, forwardRef, NotFoundException } from '@nestjs/common';
import { CreateSimulacioneDto } from './dto/create-simulacione.dto';
import { UpdateSimulacioneDto } from './dto/update-simulacione.dto';
import { Simulacione } from './entities/simulacione.entity';
import { SimulacionesGateway } from './simulaciones.gateway';

@Injectable()
export class SimulacionesService {
  private simulaciones: Simulacione[] = [];
  private idCounter = 1;

  constructor(
    @Inject(forwardRef(() => SimulacionesGateway))
    private simulacionesGateway: SimulacionesGateway,
  ) {}

  create(createSimulacioneDto: CreateSimulacioneDto): Simulacione {
    const newSimulacion: Simulacione = {
      id: (this.idCounter++).toString(),
      prestamoId: createSimulacioneDto.prestamoId,
      clienteId: createSimulacioneDto.clienteId,
      fechaSimulacion: new Date().toISOString(),
      montoSimulacion: createSimulacioneDto.montoSimulacion,
      tasaInteres: createSimulacioneDto.tasaInteres,
      plazo: createSimulacioneDto.plazo,
      estado: 'pendiente',
    };
    
    this.simulaciones.push(newSimulacion);
    
    // Emit event to all connected clients
    this.simulacionesGateway.emitSimulationCreated(newSimulacion);
    
    return newSimulacion;
  }

  findAll(): Simulacione[] {
    return [...this.simulaciones];
  }

  findOne(id: string): Simulacione {
    const simulacion = this.simulaciones.find(sim => sim.id === id);
    if (!simulacion) {
      throw new Error('Simulación no encontrada');
    }
    return simulacion;
  }

  update(id: string, updateSimulacioneDto: UpdateSimulacioneDto): Simulacione {
    const index = this.simulaciones.findIndex(simulacion => simulacion.id === id);
    if (index === -1) {
      throw new NotFoundException(`Simulación con ID ${id} no encontrada`);
    }
    
    const updatedSimulacion = {
      ...this.simulaciones[index],
      ...updateSimulacioneDto,
    };
    
    this.simulaciones[index] = updatedSimulacion;
    
    // Emit update event
    this.simulacionesGateway.emitSimulationUpdated(updatedSimulacion);
    
    return updatedSimulacion;
  }

  remove(id: string): void {
    const index = this.simulaciones.findIndex(sim => sim.id === id);
    if (index === -1) {
      throw new Error('Simulación no encontrada');
    }
    
    this.simulaciones.splice(index, 1);
    
    // Emit update after removal
    this.simulacionesGateway.emitSimulationUpdated({ id, status: 'deleted' });
  }
}
