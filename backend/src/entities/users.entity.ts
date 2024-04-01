import { Column, Entity } from "typeorm";

@Entity({ name: "users" })
export default class User {
  @Column({ primary: true, generated: "uuid" })
  id!: string;

  @Column({ length: "50" })
  name!: string;

  @Column({ length: "100" })
  email!: string;

  @Column({ length: "250" })
  password!: string;
}
