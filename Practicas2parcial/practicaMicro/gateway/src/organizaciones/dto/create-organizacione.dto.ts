import { IsNumber, IsString } from "class-validator";

export class CreateOrganizacioneDto {
    @IsString()
    nombre: string;

    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;

    @IsNumber()
    capacidad: number;

    @IsNumber()
    usuarioId: number;
}
