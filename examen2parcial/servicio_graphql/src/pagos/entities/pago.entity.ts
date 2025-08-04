import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class Pago {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => ID)
  @IsString()
  prestamoId: string;

  @Field(() => ID)
  @IsString()
  clienteId: string;

  @Field(() => String)
  @IsString()
  fechaPago: string;

  @Field(() => String)
  @IsString()
  montoPago: string;

  @Field(() => String)
  @IsString()
  estadoPago: string;
}
