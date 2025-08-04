import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePrestamoInput } from './dto/create-prestamo.input';
import { UpdatePrestamoInput } from './dto/update-prestamo.input';
import { DatabaseService } from '../../shared/database/database.service';
import { Prestamo } from './entities/prestamo.entity';

@Injectable()
export class PrestamosService {
  constructor(private readonly db: DatabaseService) {}
  create(createPrestamoInput: CreatePrestamoInput) {
    const prestamo: Prestamo = {
      prestamoId: "",
      ...createPrestamoInput,
    };
    
    const data = this.db.getData();
    data.prestamos.push(prestamo);
    this.db.saveData({ prestamos: data.prestamos });
    
    return prestamo;
  }

  findAll(): Prestamo[] {
    return this.db.getData().prestamos;
  }

  findOne(id: string) {
    return this.db.getData().prestamos.find(p => p.id === id);
  }

  update(id: string, updatePrestamoInput: UpdatePrestamoInput) {
    const data = this.db.getData();
    const index = data.prestamos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Prestamo con ID ${id} no encontrado`);
    }
    data.prestamos[index] = { ...data.prestamos[index], ...updatePrestamoInput };
    this.db.saveData({ prestamos: data.prestamos });
    return data.prestamos[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.prestamos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Prestamo con ID ${id} no encontrado`);
    }
    data.prestamos.splice(index, 1);
    this.db.saveData({ prestamos: data.prestamos });
    return `Prestamo con ID ${id} eliminado`;
  }
}
