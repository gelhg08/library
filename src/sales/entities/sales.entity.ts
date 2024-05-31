import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Book } from 'src/books/entities/books.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: string;

  @ManyToOne(() => Book, (book) => book.sales)
  book: Book;

  @Column({ type: 'date' })
  date_sale: Date;

  @Column({ type: 'float' })
  price: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
