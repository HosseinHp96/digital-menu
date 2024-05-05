import { Request, Response, NextFunction } from "express";
import { AppError, tryCatchHandler } from "../utils";
import { shopValidationSchema } from "../ValidationSchemes";

export const shopUserValidator = tryCatchHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body)
      throw new AppError({ message: "Missing request body!", statusCode: 400 });

    await shopValidationSchema.validateAsync(req.body);

    next();
  }
);
