import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Controller()
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}

  @MessagePattern('createPrestamo')
  create(@Payload() createPrestamoDto: CreatePrestamoDto) {
    return this.prestamosService.create(createPrestamoDto);
  }

  @MessagePattern('findAllPrestamos')
  findAll() {
    return this.prestamosService.findAll();
  }

  @MessagePattern('findOnePrestamo')
  findOne(@Payload() id: number) {
    return this.prestamosService.findOne(id);
  }

  @MessagePattern('updatePrestamo')
  update(@Payload() updatePrestamoDto: UpdatePrestamoDto) {
    return this.prestamosService.update(updatePrestamoDto.id, updatePrestamoDto);
  }

  @MessagePattern('removePrestamo')
  remove(@Payload() id: number) {
    return this.prestamosService.remove(id);
  }
}
