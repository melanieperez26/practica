import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePrestamoInput {
  @Field(() => String)
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
