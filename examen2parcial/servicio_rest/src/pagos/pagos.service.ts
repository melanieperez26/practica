import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { DatabaseService } from 'src/shared/data/interfaces';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagosService {
  private readonly db= DatabaseService.getInstance(); 


  create(createPagoDto: CreatePagoDto) {
    const pago: Pago = {
      id: "",
      ...createPagoDto,
    };
    
    const data = this.db.getData();
    data.pagos.push(pago);
    this.db.saveData({ pagos: data.pagos });
    
    return pago;
  }

  findAll(): Pago[] {
    return this.db.getData().pagos;
  }

  findOne(id: string): Pago {
      const pago = this.db.getData().pagos.find(p => p.id === id);
      if (!pago) {
        throw new NotFoundException(`Pago con ID ${id} no encontrado`);
      }
      return pago;
    }

  update(id: string, updatePagoDto: UpdatePagoDto) {
    const data = this.db.getData();
    const index = data.pagos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
    data.pagos[index] = { ...data.pagos[index], ...updatePagoDto };
    this.db.saveData({ pagos: data.pagos });
    return data.pagos[index];
  }

  remove(id: string) {
    const data = this.db.getData();
    const index = data.pagos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
    data.pagos.splice(index, 1);
    this.db.saveData({ pagos: data.pagos });
    return `Pago con ID ${id} eliminado`;
  }
}
