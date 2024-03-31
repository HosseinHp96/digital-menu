import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    const { statusCode, errors } = err;

    return res.status(statusCode).send({ errors });
  }

  // Unhandled errors
  res
    .status(500)
    .send({ errors: [{ message: err.message || "Something went wrong" }] });
};
