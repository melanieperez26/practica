import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSimulacioneInput } from './dto/create-simulacione.input';
import { UpdateSimulacioneInput } from './dto/update-simulacione.input';
import { DatabaseService } from '../../shared/database/database.service';
import { Simulacione } from './entities/simulacione.entity';

@Injectable()
export class SimulacionesService {
  constructor(private readonly db: DatabaseService) {}
  create(createSimulacioneInput: CreateSimulacioneInput) {
    const simulacione: Simulacione = {
      id: "",
      ...createSimulacioneInput,
    };
    
    const data = this.db.getData();
    data.simulaciones.push(simulacione);
    this.db.saveData({ simulaciones: data.simulaciones });
    
    return simulacione;
  }

  findAll(): Simulacione[] {
    return this.db.getData().simulaciones;
  }

  findOne(id: string): Simulacione {
    return this.db.getData().simulaciones.find(s => s.id === id);
  }

  update(id: string, updateSimulacioneInput: UpdateSimulacioneInput) {
    const data = this.db.getData();
    const index = data.simulaciones.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Simulacione con ID ${id} no encontrado`);
    }
    data.simulaciones[index] = { ...data.simulaciones[index], ...updateSimulacioneInput };
    this.db.saveData({ simulaciones: data.simulaciones });
    return data.simulaciones[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.simulaciones.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Simulacione con ID ${id} no encontrado`);
    }
    data.simulaciones.splice(index, 1);
    this.db.saveData({ simulaciones: data.simulaciones });
    return `Simulacione con ID ${id} eliminado`;
  }
}
