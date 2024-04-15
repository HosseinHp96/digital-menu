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
  return res
    .status(err.hasOwnProperty("_original") ? 400 : 500) //this is for joi errors
    .send({ errors: [{ message: err.message || "Internal server error" }] });
};
