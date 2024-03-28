import { Entity, Column } from "typeorm";

@Entity("products")
export default class Product {
  @Column({ primary: true, generated: true })
  id!: number;

  @Column()
  title!: string;

  @Column()
  price!: number;

  @Column()
  image!: string;

  @Column()
  postion!: string;

  @Column()
  description!: string;

  @Column()
  status!: string;
}
