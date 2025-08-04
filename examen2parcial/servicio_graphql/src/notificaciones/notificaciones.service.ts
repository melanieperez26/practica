import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificacioneInput } from './dto/create-notificacione.input';
import { UpdateNotificacioneInput } from './dto/update-notificacione.input';
import { DatabaseService } from '../../shared/database/database.service';
import { Notificacione } from './entities/notificacione.entity';

@Injectable()
export class NotificacionesService {
  constructor(private readonly db: DatabaseService) {}
  create(createNotificacioneInput: CreateNotificacioneInput) {
    const notificacione: Notificacione = {
      id: "",
      ...createNotificacioneInput,
    };
    
    const data = this.db.getData();
    data.notificaciones.push(notificacione);
    this.db.saveData({ notificaciones: data.notificaciones });
    
    return notificacione;
  }

  findAll(): Notificacione[] {
    return this.db.getData().notificaciones;
  }

  findOne(id: string) {
    return this.db.getData().notificaciones.find(n => n.id === id);
  }

  update(id: string, updateNotificacioneInput: UpdateNotificacioneInput) {
    const data = this.db.getData();
    const index = data.notificaciones.findIndex(n => n.id === id);
    if (index === -1) {
      throw new NotFoundException(`Notificacione con ID ${id} no encontrado`);
    }
    data.notificaciones[index] = { ...data.notificaciones[index], ...updateNotificacioneInput };
    this.db.saveData({ notificaciones: data.notificaciones });
    return data.notificaciones[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.notificaciones.findIndex(n => n.id === id);
    if (index === -1) {
      throw new NotFoundException(`Notificacione con ID ${id} no encontrado`);
    }
    data.notificaciones.splice(index, 1);
    this.db.saveData({ notificaciones: data.notificaciones });
    return `Notificacione con ID ${id} eliminado`;
  }
}
