import { PartialType } from '@nestjs/mapped-types';
import { CreateDistribucioneDto } from './create-distribucione.dto';

export class UpdateDistribucioneDto extends PartialType(CreateDistribucioneDto) {
    id: number;
}
