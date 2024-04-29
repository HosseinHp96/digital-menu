import express from "express";
import { initAppDS } from "./app-data-source";
import { categoryRouter, productRouter, userRouter } from "./routes";
import { errorHandler, cors } from "./middlewares";
import { AppError } from "./utils";

// establish database connection
initAppDS();

// express initialization
const app: express.Application = express();

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors);

// routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);

app.use(() => {
  throw new AppError({ message: "Not Found", statusCode: 404 });
});

// error handling
app.use(errorHandler);

// port
const port = process.env.PORT || "3000";

// start server
app.listen(port, () => console.log(`Sever is running on port ${port}`));
