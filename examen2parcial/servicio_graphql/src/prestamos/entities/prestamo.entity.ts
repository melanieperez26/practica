import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Prestamo {
  @Field(() => ID)
  @IsString()
  prestamoId: string;

  @Field(() => ID)
  @IsString()
  clienteId: string;

  @Field(() => String)
  @IsString()
  fechaPrestamo: string;

  @Field(() => String)
  @IsString()
  montoPrestamo: string;

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
