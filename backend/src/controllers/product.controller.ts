import { Request, Response } from "express";
import { allProductsService } from "../services";
import { tryCatchHandler } from "../utils";

export const allProducts = tryCatchHandler(
  async (req: Request, res: Response) => {
    const products = await allProductsService();
    res.json(products);
  }
);
