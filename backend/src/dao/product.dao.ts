import { AppDataSource } from "../app-data-source";
import { Product } from "../entities";
export default class ProductDao {
  static productRepo = AppDataSource.getRepository(Product);

  static allProducts = async () => {
    const products = await ProductDao.productRepo.find();
    return products;
  };

  static getProduct = async (data: any) => {
    const product = await ProductDao.productRepo.findOneBy(data);
    return product;
  };

  static addProduct = async (product: Product) => {
    const result = await ProductDao.productRepo.save(product);
    return result;
  };
}
