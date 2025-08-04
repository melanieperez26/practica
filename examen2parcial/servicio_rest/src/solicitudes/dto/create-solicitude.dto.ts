import { IsNumber, IsString } from "class-validator";

export class CreateSolicitudeDto {
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
