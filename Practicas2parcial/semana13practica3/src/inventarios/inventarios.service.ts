import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Inventario} from './entities/inventario.entity';
import {Repository} from 'typeorm';

@Injectable()
export class InventariosService {
  constructor(
    @InjectRepository(Inventario)
    private readonly inventariosRepository: Repository<Inventario>,
  ) {}
   async create(createInventarioDto: CreateInventarioDto) {
    const inventario = this.inventariosRepository.create(createInventarioDto);
    return this.inventariosRepository.save(inventario);
  }

  async findAll() {
    return this.inventariosRepository.find();
  }

  async findOne(id: number) {
    return this.inventariosRepository.findOne({where: {id}});
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    await this.inventariosRepository.update(id, updateInventarioDto);
    return this.inventariosRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return this.inventariosRepository.delete(id);
  }
}
