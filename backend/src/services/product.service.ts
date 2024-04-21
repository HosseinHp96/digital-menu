import ProductDao from "../dao/product.dao";

export const allProducts = async () => {
  return await ProductDao.allProducts();
};
