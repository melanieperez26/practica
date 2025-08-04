import { IsString } from "class-validator";

export class Notificacione {
    @IsString()
    id: string;
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
