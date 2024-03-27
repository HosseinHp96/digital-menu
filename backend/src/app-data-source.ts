import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 3306,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: ["entities/*.ts"],
  logging: true,
  synchronize: true,
  entitySkipConstructor: true,
});

export const initAppDS = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });
};
