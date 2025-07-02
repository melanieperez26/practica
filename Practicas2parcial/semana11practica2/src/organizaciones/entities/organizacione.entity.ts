import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@ObjectType()
@Entity({name:'organizacione'})
export class Organizacione {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  nombre: string;

  @Field(() => Float)
  @Column()
  lat: number;

  @Field(() => Float)
  @Column()
  lng: number;

  @Field(() => Int)
  @Column()
  capacidad: number;

  @Field(() => Int)
  @Column()
  usuarioId: number;
}
