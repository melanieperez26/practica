import { IsString } from "class-validator";

export class CreateNotificacioneDto {
    @IsString()
    prestamoId: string;
    @IsString()
    mensaje: string;
    @IsString()
    fechaNotificacion: Date;
    @IsString()
    tipoNotificacion: string;
    @IsString()
    estado: string;
}
