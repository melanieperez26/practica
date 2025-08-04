import { CreatePagoInput } from './create-pago.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePagoInput extends PartialType(CreatePagoInput) {
  @Field(() => ID)
  id: string;
}
