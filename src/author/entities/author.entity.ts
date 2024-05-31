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
  name: string;

  @Column()
  biografhy: string;

  @ManyToMany(() => Book, (book) => book.author)
  @JoinTable()
  book: Book[];

  @DeleteDateColumn()
  deletedAt: Date;
}
