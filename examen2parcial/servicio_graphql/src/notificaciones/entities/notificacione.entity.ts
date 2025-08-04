import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Notificacione {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  clienteId: string;

  @Field(() => String)
  @IsString()
  fechaNotificacion: string;

  @Field(() => String)
  @IsString()
  tipoNotificacion: string;
}
