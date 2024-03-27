import express from "express";
import { initAppDS } from "./app-data-source";

// establish database connection
initAppDS();

const app = express();

//json
app.use(express.json());

//cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-HEADERS", "Content-Type");
  next();
});

export default app;
