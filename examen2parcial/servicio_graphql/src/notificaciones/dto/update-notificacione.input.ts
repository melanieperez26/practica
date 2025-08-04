import { CreateNotificacioneInput } from './create-notificacione.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNotificacioneInput extends PartialType(CreateNotificacioneInput) {
  @Field(() => ID)
  id: string;
}
