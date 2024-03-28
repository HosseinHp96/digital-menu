import { Request, Response } from "express";
import { allProductsService } from "../services";

export const allProducts = async (req: Request, res: Response) => {
  try {
    const products = await allProductsService();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
};
