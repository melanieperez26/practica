import { IRecetaRepository } from "../../domain/repositories/IRecetaRepository";
import { Receta } from "../../domain/entities/Receta";

export class RecetaService {
  constructor(private readonly repository: IRecetaRepository) {}

  async crearReceta(nombre: string, tiempo: number, ingredientes: string[]) {
    const receta = new Receta(
      crypto.randomUUID(),
      nombre,
      tiempo,
      ingredientes
    );
    return this.repository.crear(receta);
  }

  async listarRecetas() {
    return this.repository.obtenerTodas();
  }
}

