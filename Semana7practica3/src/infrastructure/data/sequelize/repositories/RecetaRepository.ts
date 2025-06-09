// infrastructure/data/sequelize/RecetaRepository.ts
import { IRecetaRepository } from "../../../../domain/repositories/IRecetaRepository";
import { Receta } from "../../../../domain/entities/Receta";
import  RecetaModel  from "../models/RecetaModel";


export class RecetaSequelizeRepository implements IRecetaRepository {
  async crear(receta: Receta): Promise<Receta> {
    const nuevaReceta = await RecetaModel.create({
      id: receta.id,
      nombre: receta.nombre,
      tiempoPreparacion: receta.tiempoPreparacion,
      ingredientes: receta.ingredientes
    });
    return nuevaReceta.toJSON() as Receta;
  }

  async obtenerTodas(): Promise<Receta[]> {
    const recetas = await RecetaModel.findAll();
    return recetas.map(receta => receta.toJSON() as Receta);
  }

  async obtenerPorId(id: string): Promise<Receta | null> {
    const receta = await RecetaModel.findByPk(id);
    return receta ? receta.toJSON() as Receta : null;
  }
}