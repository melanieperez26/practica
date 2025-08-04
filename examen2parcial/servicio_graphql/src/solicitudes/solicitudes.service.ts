import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSolicitudeInput } from './dto/create-solicitude.input';
import { UpdateSolicitudeInput } from './dto/update-solicitude.input';
import { DatabaseService } from '../../shared/database/database.service';
import { Solicitude } from './entities/solicitude.entity';

@Injectable()
export class SolicitudesService {
  constructor(private readonly db: DatabaseService) {} 
  create(createSolicitudeInput: CreateSolicitudeInput) {
    const solicitude: Solicitude = {
      id: "",
      ...createSolicitudeInput,
    };
    
    const data = this.db.getData();
    data.solicitudes.push(solicitude);
    this.db.saveData({ solicitudes: data.solicitudes });
    
    return solicitude;
  }

  findAll(): Solicitude[] {
    return this.db.getData().solicitudes;
  }

  findOne(id: string) {
    return this.db.getData().solicitudes.find(s => s.id === id);
  }

  update(id: string, updateSolicitudeInput: UpdateSolicitudeInput) {
    const data = this.db.getData();
    const index = data.solicitudes.findIndex(s => s.id === id);
    if (index === -1) {
      throw new NotFoundException(`Solicitude con ID ${id} no encontrado`);
    }
    data.solicitudes[index] = { ...data.solicitudes[index], ...updateSolicitudeInput };
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
