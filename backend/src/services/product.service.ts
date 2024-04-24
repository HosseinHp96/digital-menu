import ProductDao from "../dao/product.dao";
import { Product } from "../entities";
import { AppError } from "../utils";

export const allProducts = async () => {
  return await ProductDao.allProducts();
};

export const getProductByID = async (id: number) => {
  return await ProductDao.getProduct({ id });
};

export const addProduct = async (product: Product) => {
  const check = await ProductDao.getProduct({ title: product.title });

  if (check)
    throw new AppError({
      message: "This product is currently available",
      statusCode: 400,
    });

  return await ProductDao.addProduct(product);
};
