import { AppDataSource } from "../app-data-source";
import Product from "../entities/products.entity";

export const allProductsDao = async () => {
  const productRepo = AppDataSource.getRepository(Product);
  const products = await productRepo.find();
  return products;
};