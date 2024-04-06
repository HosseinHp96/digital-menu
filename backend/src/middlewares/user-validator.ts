import { Request, Response, NextFunction } from "express";
import { AppError, tryCatchHandler } from "../utils";
import { loginUserValidationSchema } from "../validators";

export const loginUserValidator = tryCatchHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body)
      throw new AppError({ message: "Missing request body!", statusCode: 400 });

    await loginUserValidationSchema.validateAsync(req.body);

    next();
  }
);
