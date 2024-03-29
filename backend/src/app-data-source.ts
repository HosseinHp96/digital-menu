import "reflect-metadata";
import { DataSource } from "typeorm";

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE,
  DB_SYNCHRONIZE,
  DB_LOGGING,
  DB_ENTITIES,
} = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [DB_ENTITIES || ""],
  logging: DB_LOGGING === "true",
  synchronize: DB_SYNCHRONIZE === "true",
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
