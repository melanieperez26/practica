import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePagoInput {
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
