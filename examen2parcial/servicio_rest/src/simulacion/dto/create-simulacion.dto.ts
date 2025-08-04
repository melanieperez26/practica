import { IsNumber, IsString } from "class-validator";
export class CreateSimulacionDto {
    @IsString()
    clienteId: string;
    @IsString()
    fechaSimulacion: string;
    @IsNumber()
    monto: number;
    @IsNumber()
    tasaInteres: number;
    @IsNumber()
    plazo: number;
}
