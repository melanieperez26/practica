import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateInventarioInput {
  @Field(() => Int)
  @IsNumber()
  organizacionId: number;

  @Field(() => String)
  @IsString()
  producto: string;

  @Field(() => Int)
  @IsNumber()
  cantidad: number;
}
