import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('recetas')
export class RecetaEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string = "";

  @Column()
  nombre: string = "";

  @Column({name: 'tiempo_preparacion'})
  tiempoPreparacion: number = 0;

  @Column("text", { array: true })
  ingredientes: string[] ;
}