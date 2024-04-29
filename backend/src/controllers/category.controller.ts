import { Request, Response, NextFunction } from "express";
import { categoryServices } from "../services";
import { tryCatchHandler } from "../utils";

export const allCategories = tryCatchHandler(
  async (req: Request, res: Response) => {
    const categories = await categoryServices.allCategories();
    res.json(categories);
  }
);

export const getCategoryByID = tryCatchHandler(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const categories = await categoryServices.getCategoryByID(id);
    res.json(categories);
  }
);

export const addCategory = tryCatchHandler(
  async (req: Request, res: Response) => {
    const category = await categoryServices.addCategory(req.body);
    res.json(category);
  }
);

export const updateCategory = tryCatchHandler(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const category = await categoryServices.updateCategory(req.body, id);
    res.json(category);
  }
);

export const removeCategory = tryCatchHandler(
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const result = await categoryServices.removeCategory(id);
    res.send(result);
  }
);
