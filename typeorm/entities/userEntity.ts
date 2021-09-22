import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Product } from "./productEntity";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @Column("text", { array: true })
  shoppingCart: string[];

  @Column("number")
  quantity: number;

  @OneToMany(() => Product, (product) => product.user)
  product: Product;
}
