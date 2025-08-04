import { IsNumber, IsString } from "class-validator";
export class CreatePrestamoDto {
    @IsString()
    clienteId: string;
    @IsString()
    fechaPrestamo: string;
    @IsNumber()
    monto: number;
    @IsNumber()
    tasaInteres: number;
    @IsNumber()
    plazo: number;
}
