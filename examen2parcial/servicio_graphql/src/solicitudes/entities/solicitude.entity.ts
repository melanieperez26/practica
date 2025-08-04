import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Solicitude {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  @IsString()
  prestamoId: string;

  @Field(() => String)
  @IsString()
  clienteId: string;

  @Field(() => String)
  @IsString()
  fechaSolicitud: string;

  @Field(() => String)
  @IsString()
  montoSolicitado: string;

  @Field(() => String)
  @IsString()
  tasaInteres: string;

  @Field(() => String)
  @IsString()
  plazo: string;

  @Field(() => String)
  @IsString()
  estado: string;
}
