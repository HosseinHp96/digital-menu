import { AppDataSource } from "../app-data-source";
import Product from "../entities/products.entity";
export default class ProductDao {
  static productRepo = AppDataSource.getRepository(Product);

  static allProducts = async () => {
    const products = await ProductDao.productRepo.find();
    return products;
  };
}
