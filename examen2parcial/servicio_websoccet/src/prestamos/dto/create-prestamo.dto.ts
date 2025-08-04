import { IsNotEmpty, IsString } from "class-validator";

export class CreatePrestamoDto {
    @IsString()
    @IsNotEmpty()
    clienteId: string;
    
    @IsNotEmpty()
    monto: number;
    
    @IsNotEmpty()
    tasaInteres: number;
    
    @IsNotEmpty()
    plazo: number;
    
    @IsNotEmpty()
    estado: string;
}
