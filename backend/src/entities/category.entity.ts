import { Entity, Column, OneToMany } from "typeorm";
import Product from "./products.entity";

@Entity({ name: "categories" })
export default class Category {
  @Column({ primary: true, generated: true })
  id!: number;

  @Column("text")
  title!: string;

  @Column("text")
  faIcon!: string;

  @Column("int")
  position!: number;

  @Column("text")
  description!: string;

  @Column("boolean")
  status!: boolean;

  @OneToMany(() => Product, (product) => product.category)
  products!: Product[];
}
