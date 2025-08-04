import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { DatabaseService } from 'src/shared/data/interfaces';
import { Notificacione } from './entities/notificacione.entity';

@Injectable()
export class NotificacionesService {
  private readonly db= DatabaseService.getInstance(); 
  create(createNotificacioneDto: CreateNotificacioneDto) {
    const notificacione: Notificacione = {
      id: "",
      ...createNotificacioneDto,
    };
    
    const data = this.db.getData();
    data.notificaciones.push(notificacione);
    this.db.saveData({ notificaciones: data.notificaciones });
    
    return notificacione;
  }

  findAll() {
    return this.db.getData().notificaciones;
  }

  findOne(id: string) {
    return this.db.getData().notificaciones.find(n => n.id === id);
  }

  update(id: string, updateNotificacioneDto: UpdateNotificacioneDto) {
    const data = this.db.getData();
    const index = data.notificaciones.findIndex(n => n.id === id);
    if (index === -1) {
      throw new NotFoundException(`Notificacione con ID ${id} no encontrado`);
    }
    data.notificaciones[index] = { ...data.notificaciones[index], ...updateNotificacioneDto };
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
