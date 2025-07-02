import { CreateInventarioInput } from './create-inventario.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateInventarioInput extends PartialType(CreateInventarioInput) {
  @Field(() => ID)
  @IsUUID() 
  id: string;
}
