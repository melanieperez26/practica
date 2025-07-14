import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistribucionesService } from './distribuciones.service';
import { CreateDistribucioneDto } from './dto/create-distribucione.dto';
import { UpdateDistribucioneDto } from './dto/update-distribucione.dto';

@Controller('distribuciones')
export class DistribucionesController {
  constructor(private readonly distribucionesService: DistribucionesService) {}

  @Post()
  create(@Body() createDistribucioneDto: CreateDistribucioneDto) {
    return this.distribucionesService.create(createDistribucioneDto);
  }

  @Get()
  findAll() {
    return this.distribucionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distribucionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistribucioneDto: UpdateDistribucioneDto) {
    return this.distribucionesService.update(+id, updateDistribucioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distribucionesService.remove(+id);
  }
}
