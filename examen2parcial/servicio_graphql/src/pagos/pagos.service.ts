import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoInput } from './dto/create-pago.input';
import { UpdatePagoInput } from './dto/update-pago.input';
import { DatabaseService } from '../../shared/database/database.service';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagosService {
  constructor(private readonly db: DatabaseService) {}
  create(createPagoInput: CreatePagoInput) {
    const pago: Pago = {
      id: "",
      ...createPagoInput,
    };
    
    const data = this.db.getData();
    data.pagos.push(pago);
    this.db.saveData({ pagos: data.pagos });
    
    return pago;
  }

  findAll(): Pago[] {
    return this.db.getData().pagos;
  }

  findOne(id: string) {
    return this.db.getData().pagos.find(p => p.id === id);
  }

  update(id: string, updatePagoInput: UpdatePagoInput) {
    const data = this.db.getData();
    const index = data.pagos.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
    data.pagos[index] = { ...data.pagos[index], ...updatePagoInput };
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
