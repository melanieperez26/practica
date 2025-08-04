import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSimulacioneDto {
  @IsString()
  @IsNotEmpty()
  prestamoId: string;
    
  @IsString()
  @IsNotEmpty()
  clienteId: string;

  @IsString()
  @IsNotEmpty()
  montoSimulacion: string;

  @IsString()
  @IsNotEmpty()
  tasaInteres: string;

  @IsString()
  @IsNotEmpty()
  plazo: string;
}
