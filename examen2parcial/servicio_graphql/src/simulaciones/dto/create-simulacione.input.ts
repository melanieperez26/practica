import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateSimulacioneInput {
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
