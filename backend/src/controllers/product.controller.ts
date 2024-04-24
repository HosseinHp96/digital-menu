import { Request, Response, NextFunction } from "express";
import { productServices } from "../services";
import { tryCatchHandler } from "../utils";
import fs from "fs";

export const allProducts = tryCatchHandler(
  async (req: Request, res: Response) => {
    const products = await productServices.allProducts();
    res.json(products);
  }
);

export const getProductByID = tryCatchHandler(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const product = await productServices.getProductByID(id);
    res.json(product);
  }
);

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.image = req.file?.path;

    const product = await productServices.addProduct(req.body);
    res.json(product);
  } catch (err) {
    if (req.body.image) fs.unlinkSync(req.body.image);
    next(err);
  }
};
