import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./userEntity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  productName: string;

  @Column()
  productPrice: string;

  @Column()
  productDescription: boolean;

  @ManyToOne(() => User, (user) => user.product)
  user: User;
}
