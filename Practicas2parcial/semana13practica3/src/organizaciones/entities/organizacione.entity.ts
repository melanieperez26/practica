import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('organizacione')
export class Organizacione {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column({nullable: true})
    lat: number;

    @Column({nullable: true})
    lng: number;

    @Column()
    capacidad: number;

    @Column()
    usuarioId: number;
}
