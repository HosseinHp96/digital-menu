import { Request, Response, NextFunction } from "express";
import { AppError, tryCatchHandler } from "../utils";
import { categoryValidationSchema } from "../ValidationSchemes";

export const categoryValidator = tryCatchHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body)
      throw new AppError({ message: "Missing request body!", statusCode: 400 });

    await categoryValidationSchema.validateAsync(req.body);

    next();
  }
);
