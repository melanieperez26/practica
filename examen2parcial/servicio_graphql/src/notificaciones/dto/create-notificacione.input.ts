import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateNotificacioneInput {
  @Field(() => ID)
  clienteId: string;

  @Field(() => String)
  @IsString()
  fechaNotificacion: string;

  @Field(() => String)
  @IsString()
  tipoNotificacion: string;

}
