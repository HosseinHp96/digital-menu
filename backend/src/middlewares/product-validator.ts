import { Request, Response, NextFunction } from "express";
import { AppError, tryCatchHandler } from "../utils";
import { productValidationSchema } from "../ValidationSchemes";

export const productValidator = tryCatchHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body)
      throw new AppError({ message: "Missing request body!", statusCode: 400 });

    await productValidationSchema.validateAsync(req.body);

    next();
  }
);
