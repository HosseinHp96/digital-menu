import { Request, Response } from "express";
import { productServices } from "../services";
import { tryCatchHandler } from "../utils";

export const allProducts = tryCatchHandler(
  async (req: Request, res: Response) => {
    const products = await productServices.allProducts();
    res.json(products);
  }
);
