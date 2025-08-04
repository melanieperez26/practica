import { IsDate, IsNumber, IsString } from "class-validator";

export class CreatePagoDto {
    @IsString()
    prestamoId: string;
    @IsDate()
    fechaPago: Date;
    @IsNumber()
    monto: number;
    @IsString()
    estado: string;
}
