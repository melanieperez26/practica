// src/infrastructure/data/sequelize/init.ts
import { sequelize } from './database';
import './models/RecetaModel';

export async function initDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true }); // Usa { alter: true } en producción
    console.log('Conexión establecida correctamente');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}