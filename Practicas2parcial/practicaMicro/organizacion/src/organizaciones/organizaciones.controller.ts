import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrganizacionesService } from './organizaciones.service';
import { CreateOrganizacioneDto } from './dto/create-organizacione.dto';
import { UpdateOrganizacioneDto } from './dto/update-organizacione.dto';

@Controller()
export class OrganizacionesController {
  constructor(private readonly organizacionesService: OrganizacionesService) {}

  @MessagePattern('createOrganizacione')
  create(@Payload() createOrganizacioneDto: CreateOrganizacioneDto) {
    return this.organizacionesService.create(createOrganizacioneDto);
  }

  @MessagePattern('findAllOrganizaciones')
  findAll() {
    return this.organizacionesService.findAll();
  }

  @MessagePattern('findOneOrganizacione')
  findOne(@Payload() id: number) {
    return this.organizacionesService.findOne(id);
  }

  @MessagePattern('updateOrganizacione')
  update(@Payload() payload: {id: number; updateOrganizacioneDto: UpdateOrganizacioneDto} ) {
    return this.organizacionesService.update(payload.id, payload.updateOrganizacioneDto);
  }

  @MessagePattern('removeOrganizacione')
  remove(@Payload() id: number) {
    return this.organizacionesService.remove(id);
  }
}
