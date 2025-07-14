import { Injectable } from '@nestjs/common';
import { CreateDistribucioneDto } from './dto/create-distribucione.dto';
import { UpdateDistribucioneDto } from './dto/update-distribucione.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Distribucione} from './entities/distribucione.entity';
import {Repository} from 'typeorm';

@Injectable()
export class DistribucionesService {
  constructor(
    @InjectRepository(Distribucione)
    private readonly distribucionesRepository: Repository<Distribucione>,
  ) {}
  async create(createDistribucioneDto: CreateDistribucioneDto) {
    const distribucione = this.distribucionesRepository.create(createDistribucioneDto);
    return this.distribucionesRepository.save(distribucione);
  }

  async findAll() {
    return this.distribucionesRepository.find();
  }

  async findOne(id: number) {
    return this.distribucionesRepository.findOne({where: {id}});
  }

  async update(id: number, updateDistribucioneDto: UpdateDistribucioneDto) {
    await this.distribucionesRepository.update(id, updateDistribucioneDto);
    return this.distribucionesRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return this.distribucionesRepository.delete(id);
  }
}
