import { Receta } from "../entities/Receta";

export interface IRecetaRepository {
  crear(receta: Receta): Promise<Receta>;
  obtenerTodas(): Promise<Receta[]>;
  obtenerPorId(id: string): Promise<Receta | null>;
}