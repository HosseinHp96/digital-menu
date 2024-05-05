import { Entity, Column, OneToMany } from "typeorm";

@Entity({ name: "Shops" })
export default class Shop {
  @Column({ primary: true, generated: true })
  id!: number;

  @Column("text")
  title!: string;

  @Column("text")
  description!: string;

  @Column("text")
  currency!: string;

  @Column("json")
  logo!: Express.Multer.File;
}
