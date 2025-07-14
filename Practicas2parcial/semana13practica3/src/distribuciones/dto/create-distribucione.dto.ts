import { IsArray, IsNumber, IsString, IsDateString } from "class-validator";

export class CreateDistribucioneDto {
    @IsNumber()
    organizacionId: number;

    @IsNumber()
    donanteId: number;

    @IsNumber()
    cantidad: number;

    @IsDateString()
    fecha: string;

    @IsArray()
    @IsString({ each: true })
    productos: string[];
}
