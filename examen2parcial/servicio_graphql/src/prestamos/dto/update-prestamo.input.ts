import { CreatePrestamoInput } from './create-prestamo.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrestamoInput extends PartialType(CreatePrestamoInput) {
  @Field(() => ID)
  id: string;
}
