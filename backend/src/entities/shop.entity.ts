import { json } from "stream/consumers";
import { Entity, Column, OneToMany } from "typeorm";

@Entity({ name: "Shops" })
export default class Shop {
  @Column({ primary: true, default: 1 })
  id!: number;

  @Column("text")
  title!: string;

  @Column("text")
  description!: string;

  @Column("text")
  currency!: string;

  @Column({ nullable: true, type: "json" })
  logo!: Express.Multer.File;
}
