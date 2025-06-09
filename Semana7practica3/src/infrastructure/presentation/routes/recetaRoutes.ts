import express from "express";
import { RecetaController } from "../controllers/RecetaController";
import { RecetaService } from "../../../application/services/RecetaService";
import { RecetaTypeORMRepository } from "../../data/typeorm/repositories/RecetaRepository";

const router = express.Router();
const repository = new RecetaTypeORMRepository();
const service = new RecetaService(repository);
const controller = new RecetaController(service);

router.post("/recetas", controller.crear.bind(controller));
router.get("/recetas", controller.listar.bind(controller));



export default router;