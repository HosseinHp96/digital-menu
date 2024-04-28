import { Entity, Column, ManyToOne } from "typeorm";
import Category from "./category.entity";
@Entity({ name: "products" })
export default class Product {
  @Column({ primary: true, generated: true })
  id!: number;

  @Column("text")
  title!: string;

  @Column("int")
  price!: number;

  @Column("json")
  images!: Express.Multer.File[];

  @Column("int")
  position!: number;

  @Column("text")
  description!: string;

  @Column("boolean")
  status!: boolean;

  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;
}
