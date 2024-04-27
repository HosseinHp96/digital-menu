import { Request, Response, NextFunction } from "express";
import { productServices } from "../services";
import { AppError, tryCatchHandler } from "../utils";
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
    req.body.images = req.files;

    const product = await productServices.addProduct(req.body);
    res.json(product);
  } catch (err) {
    const images = req.files as Express.Multer.File[];
    if (images.length) images.forEach((item) => fs.unlinkSync(item.path));

    next(err);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    req.body.images = req.files;

    const product = await productServices.updateProduct(req.body, id);
    res.json(product);
  } catch (err) {
    if (req.body.image) fs.unlinkSync(req.body.image);

    next(err);
  }
};

export const removeProduct = tryCatchHandler(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const result = await productServices.removeProduct(id);
    if (!result.affected)
      throw new AppError({ message: "There is no product with this ID" });
    else res.send("Done");
  }
);
