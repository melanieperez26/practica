import { CreateSimulacioneInput } from './create-simulacione.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSimulacioneInput extends PartialType(CreateSimulacioneInput) {
  @Field(() => ID)
  id: string;
}
