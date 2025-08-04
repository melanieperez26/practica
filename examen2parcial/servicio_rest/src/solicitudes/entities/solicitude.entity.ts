import { IsNumber, IsString } from "class-validator";
export class Solicitude {
    @IsString()
    id: string;
    @IsString()
    clienteId: string;
    @IsString()
    fechaSolicitud: string;
    @IsNumber()
    monto: number;
    @IsNumber()
    tasaInteres: number;
    @IsNumber()
    plazo: number;
}
