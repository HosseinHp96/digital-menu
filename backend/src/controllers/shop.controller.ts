import { Request, Response, NextFunction } from "express";
import { tryCatchHandler } from "../utils";
import { shopServices } from "../services";
import fs from "fs";

export const getShop = tryCatchHandler(async (req: Request, res: Response) => {
  const shop = await shopServices.getShop();
  res.json(shop);
});

export const updateShop = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.logo = req.file;

    const shop = await shopServices.updateShop(req.body);
    res.json(shop);
  } catch (err) {
    const logo = req.file as Express.Multer.File;
    if (logo) fs.unlinkSync(logo.path);

    next(err);
  }
};
