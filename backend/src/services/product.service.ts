import { allProductsDao } from "../dao";

export const allProductsService = async () => {
  return await allProductsDao();
};
