import ProductDao from "../dao/product.dao";

export const allProducts = async () => {
  return await ProductDao.allProducts();
};

export const getProductByID = async (id: number) => {
  return await ProductDao.getProductByID(id);
};
