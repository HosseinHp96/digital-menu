import { Request, Response, NextFunction } from "express";
import { AppError, tryCatchHandler } from "../utils";
import { addProductValidationSchema } from "../ValidationSchemes";

export const addProductValidator = tryCatchHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body)
      throw new AppError({ message: "Missing request body!", statusCode: 400 });

    await addProductValidationSchema.validateAsync(req.body);

    next();
  }
);
