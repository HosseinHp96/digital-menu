import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils";
import Jwt from "jsonwebtoken";
import { customJwtPayload } from "../types/jwt";

export const auth = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if (!token)
      throw new AppError({ message: "Access denied", statusCode: 401 });

    try {
      console.log("injjaa");

      console.log(
        Jwt.verify(token, process.env.AUTH_SECRET_KEY!) as customJwtPayload
      );

      const decoded = Jwt.verify(
        token,
        process.env.AUTH_SECRET_KEY!
      ) as customJwtPayload;

      req.user = decoded;

      if (decoded.role !== role)
        throw new AppError({
          message:
            "You do not have the authorization and permissions to access this resource.",
          statusCode: 403,
        });

      next();
    } catch (error) {
      return new AppError({ message: "Invalid token", statusCode: 401 });
    }
  };
};
