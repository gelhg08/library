import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Author } from 'src/author/entities/author.entity';
import { Sale } from 'src/sales/entities/sales.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Author, (author) => author.book)
  author: Author[];

  @OneToMany(() => Sale, (sale) => sale.book)
  sales: Sale[];

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
