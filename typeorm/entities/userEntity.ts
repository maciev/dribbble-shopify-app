import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./productEntity";

@Entity()
export class User {
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

  @Column()
  quantity: number;

  @OneToMany(() => Product, (product) => product.user)
  product: Product;
}
