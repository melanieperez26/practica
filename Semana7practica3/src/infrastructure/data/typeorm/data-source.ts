import { DataSource } from "typeorm";
import { RecetaEntity } from "./entities/RecetaEntity";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5433"),
  username: process.env.DB_USER ?? "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME ?? "recetas_db",
  synchronize: false,
  migrationsRun: false,
  logging: true,
  entities: [RecetaEntity],
  migrations: ["src/infrastructure/data/typeorm/migrations/*.ts"]
});

