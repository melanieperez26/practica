import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('distribucione')
export class Distribucione {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organizacionId: number;

    @Column()
    donanteId: number;

    @Column({ type: 'date' })
    fecha: Date;

    @Column()
    cantidad: number;

    @Column("text", { array: true })
    productos: string[];
}
