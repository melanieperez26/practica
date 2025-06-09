import { IRecetaRepository } from "../../../../domain/repositories/IRecetaRepository";
import { Receta } from "../../../../domain/entities/Receta";
import { AppDataSource } from "../data-source";
import { RecetaEntity } from "../entities/RecetaEntity";

export class RecetaTypeORMRepository implements IRecetaRepository {
  async crear(receta: Receta): Promise<Receta> {
    const repository = AppDataSource.getRepository(RecetaEntity);
    const nuevaReceta = repository.create(receta);
    await repository.save(nuevaReceta);
    return nuevaReceta;
  }

  async obtenerTodas(): Promise<Receta[]> {
    const repository = AppDataSource.getRepository(RecetaEntity);
    return await repository.find();
  }

  async obtenerPorId(id: string): Promise<Receta | null> {
    const repository = AppDataSource.getRepository(RecetaEntity);
    return await repository.findOneBy({ id });
  }
}