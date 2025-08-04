import { InputType, ID, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateSolicitudeInput {

  @Field(() => ID)
  @IsString()
  prestamoId: string;

  @Field(() => ID)
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
