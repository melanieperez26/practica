import { IsDate, IsNumber, IsString } from "class-validator";

export class Pago {
    @IsString()
    id: string;
    @IsString()
    prestamoId: string;
    @IsDate()
    fechaPago: Date;
    @IsNumber()
    monto: number;
    @IsString()
    estado: string;
}
