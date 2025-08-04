import { Injectable } from '@nestjs/common';
import { CreateSimulacionDto } from './dto/create-simulacion.dto';
import { UpdateSimulacionDto } from './dto/update-simulacion.dto';
import { DatabaseService } from 'src/shared/data/interfaces';
import { Simulacion } from './entities/simulacion.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SimulacionService {
  constructor(private readonly db= DatabaseService.getInstance()) {}

  create(createSimulacionDto: CreateSimulacionDto) {
    const simulacion: Simulacion = {
      id: "",
      ...createSimulacionDto,
    };
    
    const data = this.db.getData();
    data.simulaciones.push(simulacion);
    this.db.saveData({ simulaciones: data.simulaciones });
    
    return simulacion;
  }

  findAll(): Simulacion[] {
    return this.db.getData().simulaciones;
  }

  findOne(id: string) {
    return this.db.getData().simulaciones.find(s => s.id === id);
  }

  update(id: string, updateSimulacionDto: UpdateSimulacionDto) {
    const data = this.db.getData();
    const index = data.simulaciones.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Simulacion con ID ${id} no encontrado`);
    }
    data.simulaciones[index] = { ...data.simulaciones[index], ...updateSimulacionDto };
    this.db.saveData({ simulaciones: data.simulaciones });
    return data.simulaciones[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.simulaciones.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Simulacion con ID ${id} no encontrado`);
    }
    data.simulaciones.splice(index, 1);
    this.db.saveData({ simulaciones: data.simulaciones });
    return `Simulacion con ID ${id} eliminado`;
  }
}
