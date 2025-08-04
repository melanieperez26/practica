import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Cliente {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsString()
  apellido: string;

  @Field(() => String)
  @IsString()
  cedula: string;

  @Field(() => String)
  @IsString()
  telefono: string;

  @Field(() => String)
  @IsString()
  correo: string;
}
