import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {

  @PrimaryGeneratedColumn()
  public ID: number;

  @Column({ length: 50 })
  public Name: string;

  @Column('int')
  public Age: number;
}
