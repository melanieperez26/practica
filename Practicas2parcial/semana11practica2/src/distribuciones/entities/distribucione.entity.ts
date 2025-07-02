import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'distribucione'})
export class Distribucione {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;
  
  @Field(() => Int)
  @Column()
  organizacionId: number;

  @Field(() => Int)
  @Column()
  donanteId: number;

  @Field(() => Int)
  @Column()
  cantidad: number;

  @Field(() => [String])
  @Column({ type: 'json' } )
  productos: string[];
}
