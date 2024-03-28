import { allProductsDao } from "../dao";

export const allProductsService = async () => {
  try {
    return await allProductsDao();
  } catch (e) {
    if (typeof e === "string") {
      throw new Error(e.toLocaleUpperCase());
    } else if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
