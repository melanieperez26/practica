import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Simulacione {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String)
  @IsString()
  prestamoId: string;

  @Field(() => String)
  @IsString()
  clienteId: string;

  @Field(() => String)
  @IsString()
  fechaSimulacion: string;

  @Field(() => String)
  @IsString()
  montoSimulacion: string;

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
