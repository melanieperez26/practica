import express from "express";
import cors from "cors";
import recetaRoutes from "./infrastructure/presentation/routes/recetaRoutes";
import { AppDataSource } from "./infrastructure/data/typeorm/data-source";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Base de datos inicializada correctamente");

    app.get('/', (req, res) => {
      res.status(200).json({
        status: 'API funcionando',
        endpoints: ['/api/recetas']
      });
    });

    app.use('/api', recetaRoutes);

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error al inicializar la base de datos:", error);
  });
