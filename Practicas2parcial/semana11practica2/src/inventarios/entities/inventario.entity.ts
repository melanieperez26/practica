import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'inventario'})
export class Inventario {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Int)
  @Column()
  organizacionId: number;

  @Field(() => String)
  @Column()
  producto: string;

  @Field(() => Int)
  @Column()
  cantidad: number;


}
