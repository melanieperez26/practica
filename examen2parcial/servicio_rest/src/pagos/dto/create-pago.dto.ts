import { IsNumber, IsString } from "class-validator";
export class CreatePagoDto {
    @IsString()
    prestamoId: string;
    @IsString()
    fechaPago: string;
    @IsNumber()
    monto: number;
}
