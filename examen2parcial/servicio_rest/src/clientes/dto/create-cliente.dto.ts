import { IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    nombre: string;
    @IsString()
    apellido: string;
    @IsString()
    email: string;
    @IsString()
    telefono: string;
    @IsString()
    direccion: string;
    @IsString()
    fechaNacimiento: Date;
    @IsString()
    cedula: string;
}
