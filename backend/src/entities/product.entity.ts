import { Entity, Column } from "typeorm";

type productCols = {
  id: number;
  title: string;
  price: number;
  image: string;
  postion: string;
  description: string;
  status: string;
};

@Entity("products")
export default class Product {
  @Column("number", { primary: true, generated: true })
  id;

  @Column("string")
  title;

  @Column("number")
  price;

  @Column("image")
  image;

  @Column("string")
  postion;

  @Column("string")
  description;

  @Column("string")
  status;

  constructor({
    id,
    title,
    price,
    image,
    postion,
    description,
    status,
  }: productCols) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.postion = postion;
    this.description = description;
    this.status = status;
  }
}
