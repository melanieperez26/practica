import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { DatabaseService } from 'src/shared/data/interfaces';
import { Prestamo } from './entities/prestamo.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PrestamosService {
  private readonly db= DatabaseService.getInstance(); 
  create(createPrestamoDto: CreatePrestamoDto) {
    const prestamo: Prestamo = {
      id: "",
      ...createPrestamoDto,
    };
    
    const data = this.db.getData();
    data.prestamos.push(prestamo);
    this.db.saveData({ prestamos: data.prestamos });
    
    return prestamo;
  }

  findAll(): Prestamo[] {
    return this.db.getData().prestamos;
  }

  findOne(id: string): Prestamo {
    const prestamo = this.db.getData().prestamos.find(p => p.id === id);
    if (!prestamo) {
      throw new NotFoundException(`Prestamo con ID ${id} no encontrado`);
    }
    return prestamo;
  }

  update(id: string, updatePrestamoDto: UpdatePrestamoDto) {
    const prestamo = this.findOne(id);
    const data = this.db.getData();
    const index = data.prestamos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Prestamo con ID ${id} no encontrado`);
    }
    data.prestamos[index] = { ...prestamo, ...updatePrestamoDto };
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
