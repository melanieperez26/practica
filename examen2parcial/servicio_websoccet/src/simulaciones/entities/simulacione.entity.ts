import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsISO8601 } from 'class-validator';

@ObjectType()
export class Simulacione {
    @Field(() => ID)
    @IsString()
    @IsNotEmpty()
    id: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    prestamoId: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    clienteId: string;

    @Field(() => String)
    @IsISO8601()
    fechaSimulacion: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    montoSimulacion: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    tasaInteres: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    plazo: string;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    estado: string;
}
