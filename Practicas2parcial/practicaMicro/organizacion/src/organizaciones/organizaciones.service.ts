import { Injectable } from '@nestjs/common';
import { CreateOrganizacioneDto } from './dto/create-organizacione.dto';
import { UpdateOrganizacioneDto } from './dto/update-organizacione.dto';
import { Organizacione } from './entities/organizacione.entity';

@Injectable()
export class OrganizacionesService {
  private organizaciones: Organizacione[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      lat: 25,
      lng: 25,
      capacidad: 25,
      usuarioId: 25,
    },
  ];

  create(createOrganizacioneDto: CreateOrganizacioneDto) {
    const organizacione = {
      id: this.organizaciones.length + 1,
      ...createOrganizacioneDto,
      activo: true,
    };
    this.organizaciones.push(organizacione);
    return organizacione;
  }

  findAll() {
    return this.organizaciones;
  }

  findOne(id: number) {
    return this.organizaciones.find(ciudadano => ciudadano.id === id);
  }

  update(id: number, updateOrganizacioneDto: UpdateOrganizacioneDto) {
    const index = this.organizaciones.findIndex(ciudadano => ciudadano.id === id);
    if (index >= 0) {
      this.organizaciones[index] = { ...this.organizaciones[index], ...updateOrganizacioneDto };
      return this.organizaciones[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.organizaciones.findIndex(ciudadano => ciudadano.id === id);
    if (index >= 0) {
      const ciudadano = this.organizaciones[index];
      this.organizaciones.splice(index, 1);
      return ciudadano;
    }
    return null;
  }
}