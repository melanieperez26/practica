import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('inventario')
export class Inventario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organizacionId: number;

    @Column()
    producto: string;

    @Column()
    cantidad: number;

    @Column({ type: 'date' })
    ultimoAbastecimiento: Date;
}
