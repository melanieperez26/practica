import { IsNumber, IsString } from "class-validator";

export class Pago {
    @IsString()
    id: string;
    @IsString()
    prestamoId: string;
    @IsString()
    fechaPago: string;
    @IsNumber()
    monto: number;
}

