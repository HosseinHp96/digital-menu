import { Entity, Column } from "typeorm";

@Entity({ name: "products" })
export default class Product {
  @Column({ primary: true, generated: true })
  id!: number;

  @Column()
  title!: string;

  @Column()
  price!: number;

  @Column("json")
  images!: Express.Multer.File[];

  @Column()
  position!: string;

  @Column()
  description!: string;

  @Column()
  status!: string;
}
