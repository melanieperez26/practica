// src/infrastructure/data/sequelize/database.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5433'),
  database: process.env.DB_NAME ?? 'recetas_db',
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD, // Obligatorio desde variables de entorno
  logging: process.env.NODE_ENV === 'development',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: true, 
    freezeTableName: true 
  }
});