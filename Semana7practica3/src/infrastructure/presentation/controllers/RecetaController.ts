import { Request, Response } from "express";
import { RecetaService } from "../../../application/services/RecetaService";


export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

    async crear(req: Request, res: Response) {
    try {
      const { nombre, tiempo, ingredientes } = req.body;
      let ingredientesArray: string[];

      if (Array.isArray(ingredientes)) {
        ingredientesArray = ingredientes;
      } else if (typeof ingredientes === "string") {
        ingredientesArray = ingredientes.includes(",")
          ? ingredientes.split(",").map(i => i.trim())
          : [ingredientes.trim()];
      } else {
        ingredientesArray = [];
      }

      const nuevaReceta = await this.recetaService.crearReceta(nombre, tiempo, ingredientesArray);
      res.status(201).json(nuevaReceta);
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const recetas = await this.recetaService.listarRecetas();
      res.json(recetas);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}