import { Injectable } from '@nestjs/common';
import { CreateSolicitudeDto } from './dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from './dto/update-solicitude.dto';
import { DatabaseService } from 'src/shared/data/interfaces';
import { Solicitude } from './entities/solicitude.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class SolicitudesService {
  private readonly db= DatabaseService.getInstance(); 
  create(createSolicitudeDto: CreateSolicitudeDto) {
    const solicitude: Solicitude = {
      id: "",
      ...createSolicitudeDto,
    };
    
    const data = this.db.getData();
    data.solicitudes.push(solicitude);
    this.db.saveData({ solicitudes: data.solicitudes });
    
    return solicitude;
  }

  findAll(): Solicitude[] {
    return this.db.getData().solicitudes;
  }

  findOne(id: string): Solicitude {
    const solicitude = this.db.getData().solicitudes.find(s => s.id === id);
    if (!solicitude) {
      throw new NotFoundException(`Solicitude con ID ${id} no encontrado`);
    }
    return solicitude;
  }

  update(id: string, updateSolicitudeDto: UpdateSolicitudeDto) {
    const solicitude = this.findOne(id);
    const data = this.db.getData();
    const index = data.solicitudes.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Solicitude con ID ${id} no encontrado`);
    }
    data.solicitudes[index] = { ...solicitude, ...updateSolicitudeDto };
    this.db.saveData({ solicitudes: data.solicitudes });
    return data.solicitudes[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.solicitudes.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Solicitude con ID ${id} no encontrado`);
    }
    data.solicitudes.splice(index, 1);
    this.db.saveData({ solicitudes: data.solicitudes });
    return `Solicitude con ID ${id} eliminado`;
  }
}
