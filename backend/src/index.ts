import express from "express";
import { initAppDS } from "./app-data-source";
import { productRouter } from "./routes";
import { errorHandler, cors } from "./middlewares";

// establish database connection
initAppDS();

// express initialization
const app: express.Application = express();

// middlewares
app.use(express.json());

app.use(cors);

// routes
app.use("/api/products", productRouter);

// error handling
app.use(errorHandler);

// port
const port = process.env.PORT || "3000";

// start server
app.listen(port, () => console.log(`Sever is running on port ${port}`));
