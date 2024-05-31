import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToMany,
} from 'typeorm';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  titulo: string;

  @ManyToMany(() => Author, (author) => author.libros)
  autores: Author[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
