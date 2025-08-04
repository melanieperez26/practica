import { CreateSolicitudeInput } from './create-solicitude.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSolicitudeInput extends PartialType(CreateSolicitudeInput) {
  @Field(() => ID)
  id: string;
}
