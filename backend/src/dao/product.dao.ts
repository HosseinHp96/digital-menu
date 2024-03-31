import { AppDataSource } from "../app-data-source";
import Product from "../entities/products.entity";

export const allProductsDao = async () => {
  const productRepo = AppDataSource.getRepository(Product);
  return await productRepo.find();
};
