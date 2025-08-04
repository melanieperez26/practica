export class CreateClienteDto {
  readonly nombre: string;
  readonly apellido: string;
  readonly email: string;
  readonly telefono: string;
  readonly direccion: string;
  readonly fechaNacimiento: Date;
  readonly documentoIdentidad: string;
}

export class UpdateClienteDto extends CreateClienteDto {}

