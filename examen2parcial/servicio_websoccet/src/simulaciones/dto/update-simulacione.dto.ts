import { PartialType } from '@nestjs/mapped-types';
import { CreateSimulacioneDto } from './create-simulacione.dto';

export class UpdateSimulacioneDto extends PartialType(CreateSimulacioneDto) {
  id: string;
}
