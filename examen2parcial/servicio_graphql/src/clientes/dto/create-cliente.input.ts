import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  apellido: string;

  @Field(() => String)
  cedula: string;

  @Field(() => String)
  telefono: string;

  @Field(() => String)
  correo: string;
}
