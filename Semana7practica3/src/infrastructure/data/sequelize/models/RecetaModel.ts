// src/infrastructure/data/sequelize/models/RecetaModel.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database'; 

interface RecetaAttributes {
  id: string;
  nombre: string;
  tiempoPreparacion: number;
  ingredientes: string[];
}
class RecetaModel extends Model<RecetaAttributes> implements RecetaAttributes {
  public id!: string;
  public nombre!: string;
  public tiempoPreparacion!: number;
  public ingredientes!: string[];

  
  static associate(models: any): void {
    // Asociaciones si las necesitas
  }
}

RecetaModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tiempoPreparacion: {
      type: DataTypes.INTEGER,
    },
    ingredientes: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Para PostgreSQL
    },
  },
  {
    sequelize, // Esta debe ser la instancia configurada
    modelName: 'Receta',
    tableName: 'recetas',
  }
);

export default RecetaModel;