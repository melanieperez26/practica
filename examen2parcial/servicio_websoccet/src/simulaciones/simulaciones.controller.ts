import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SimulacionesService } from './simulaciones.service';
import { CreateSimulacioneDto } from './dto/create-simulacione.dto';
import { UpdateSimulacioneDto } from './dto/update-simulacione.dto';
import { Simulacione } from './entities/simulacione.entity';

@Controller()
export class SimulacionesController {
  constructor(private readonly simulacionesService: SimulacionesService) {}

  @MessagePattern('createSimulacione')
  create(@Payload() createSimulacioneDto: CreateSimulacioneDto): Simulacione {
    return this.simulacionesService.create(createSimulacioneDto);
  }

  @MessagePattern('findAllSimulaciones')
  findAll(): Simulacione[] {
    return this.simulacionesService.findAll();
  }

  @MessagePattern('findOneSimulacione')
  findOne(@Payload() id: string): Simulacione {
    const simulacion = this.simulacionesService.findOne(id);
    if (!simulacion) {
      throw new Error('Simulación no encontrada');
    }
    return simulacion;
  }

  @MessagePattern('updateSimulacione')
  update(@Payload() updateSimulacioneDto: UpdateSimulacioneDto): Simulacione {
    return this.simulacionesService.update(updateSimulacioneDto.id, updateSimulacioneDto);
  }

  @MessagePattern('removeSimulacione')
  remove(@Payload() id: string): void {
    this.simulacionesService.remove(id);
  }
}
