import ProductDao from "../dao/product.dao";
import fs from "fs";
import { Product } from "../entities";
import { AppError } from "../utils";

export const allProducts = async () => {
  return await ProductDao.allProducts();
};

export const getProductByID = async (id: number) => {
  return await ProductDao.getProduct({ id });
};

export const addProduct = async (product: Product) => {
  const status = await ProductDao.getProduct({ title: product.title });

  if (status)
    throw new AppError({
      message: "This product is currently available",
      statusCode: 400,
    });

  return await ProductDao.addProduct(product);
};

export const updateProduct = async (data: Product, id: number) => {
  const product = await ProductDao.getProduct({ id });

  if (!product)
    throw new AppError({
      message: "There is no product with this ID",
      statusCode: 400,
    });

  const result = await ProductDao.updateProduct(data, id);

  if (product.images.length)
    // delete old images after product update
    product.images.forEach((item) => fs.unlinkSync(item.path));

  return result;
};

export const removeProduct = async (id: number) => {
  const product = await ProductDao.getProduct({ id });

  if (!product)
    throw new AppError({
      message: "There is no product with this ID",
      statusCode: 400,
    });

  const result = await ProductDao.removeProduct(id);

  if (product?.images.length)
    // remove images after removing the product
    product.images.forEach((item) => fs.unlinkSync(item.path));

  return 'Done';
};
