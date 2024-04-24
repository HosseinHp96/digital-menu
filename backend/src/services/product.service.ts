import ProductDao from "../dao/product.dao";
import { Product } from "../entities";

export const allProducts = async () => {
  return await ProductDao.allProducts();
};

export const getProductByID = async (id: number) => {
  return await ProductDao.getProductByID(id);
};

export const addProduct = async (product: Product) => {
  return await ProductDao.addProduct(product);
};
