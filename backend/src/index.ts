import express from "express";
import { initAppDS } from "./app-data-source";
import { productRouter } from "./routes";

// establish database connection
initAppDS();

const app: express.Application = express();

// json
app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-HEADERS", "Content-Type");
  next();
});

// routes
app.use("/api/products", productRouter);

// port
const port = process.env.PORT || "3000";

// start server
app.listen(port, () => console.log(`Sever is running on port ${port}`));
