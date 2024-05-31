import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Book } from 'src/books/entities/books.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  biografia: string;

  @ManyToMany(() => Book, (book) => book.autores)
  @JoinTable()
  libros: Book[];

  @DeleteDateColumn()
  deletedAt: Date;
}
