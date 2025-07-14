import { Injectable } from '@nestjs/common';
import { CreateOrganizacioneDto } from './dto/create-organizacione.dto';
import { UpdateOrganizacioneDto } from './dto/update-organizacione.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Organizacione} from './entities/organizacione.entity';
import {Repository} from 'typeorm';

@Injectable()
export class OrganizacionesService {
  constructor(
    @InjectRepository(Organizacione)
    private readonly organizacionesRepository: Repository<Organizacione>,
  ) {}
  async create(createOrganizacioneDto: CreateOrganizacioneDto) {
    const organizacione = this.organizacionesRepository.create(createOrganizacioneDto);
    return this.organizacionesRepository.save(organizacione);
  }

  async findAll() {
    return this.organizacionesRepository.find();
  }

  async findOne(id: number) {
    return this.organizacionesRepository.findOne({where: {id}});
  }

  async update(id: number, updateOrganizacioneDto: UpdateOrganizacioneDto) {
    await this.organizacionesRepository.update(id, updateOrganizacioneDto);
    return this.organizacionesRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    return this.organizacionesRepository.delete(id);
  }
}
