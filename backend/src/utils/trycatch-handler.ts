import { Request, Response, NextFunction } from "express";

export const tryCatchHandler = (controller: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
