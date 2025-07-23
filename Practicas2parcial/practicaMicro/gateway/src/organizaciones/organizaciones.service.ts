import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrganizacioneDto } from './dto/create-organizacione.dto';
import { UpdateOrganizacioneDto } from './dto/update-organizacione.dto';

@Injectable()
export class OrganizacionesService {
  constructor(
    @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
  ) {}

  create(createOrganizacioneDto: CreateOrganizacioneDto) {
    return this.natsClient.send('createOrganizacione', createOrganizacioneDto);
  }

  findAll() {
    return this.natsClient.send('findAllOrganizaciones', {});
  }

  findOne(id: number) {
    return this.natsClient.send('findOneOrganizacione', id);
  }

  update(id: number, updateOrganizacioneDto: UpdateOrganizacioneDto) {
    return this.natsClient.send('updateOrganizacione', { id, updateOrganizacioneDto });
  }

  remove(id: number) {
    return this.natsClient.send('removeOrganizacione', id);
  }
}