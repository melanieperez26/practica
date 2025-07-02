import { Injectable } from '@nestjs/common';
import { CreateDistribucioneInput } from './dto/create-distribucione.input';
import { UpdateDistribucioneInput } from './dto/update-distribucione.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Distribucione } from './entities/distribucione.entity';

@Injectable()
export class DistribucionesService {
  constructor(
    @InjectRepository(Distribucione)
    private readonly distribucioneRepository: Repository<Distribucione>,
  ) {}

  async create(createDistribucioneInput: CreateDistribucioneInput): Promise<Distribucione> {
    const distribucione = this.distribucioneRepository.create(createDistribucioneInput);
    return this.distribucioneRepository.save(distribucione);
  }

  async findAll(): Promise<Distribucione[]> {
    return this.distribucioneRepository.find();
  }

  async findOne(id: string): Promise<Distribucione | null> {
    return await this.distribucioneRepository.findOneBy({id});
  }

  async update(id: string, updateDistribucioneInput: UpdateDistribucioneInput): Promise<Distribucione> {
    const distribucione = await this.distribucioneRepository.preload(updateDistribucioneInput);
    if (!distribucione) {
      throw new Error('Distribucion no encontrada');
    }
    return this.distribucioneRepository.save(distribucione);
  }

  async remove(id: string): Promise<Distribucione> {
    const distribucione = await this.distribucioneRepository.findOne({where:{id}});
    if (!distribucione) {
      throw new Error('Distribucion no encontrada');
    }
    this.distribucioneRepository.remove(distribucione);
    return {...distribucione, id};
  }
}
