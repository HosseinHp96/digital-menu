import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../app-data-source";
import { Product } from "../entities";
export default class ProductDao {
  static productRepo = AppDataSource.getRepository(Product);

  static allProducts = async () => {
    const products = await ProductDao.productRepo.find({
      relations: {
        category: true,
      },
    });
    return products;
  };

  static getProduct = async (where: FindOptionsWhere<Product>) => {
    const product = await ProductDao.productRepo.findOne({
      where,
      relations: {
        category: true,
      },
    });
    return product;
  };

  static addProduct = async (product: Product) => {
    const result = await ProductDao.productRepo.save(product);
    return result;
  };

  static removeProduct = async (id: number) => {
    const result = await ProductDao.productRepo.delete(id);
    return result;
  };

  static updateProduct = async (data: Product) => {
    const result = await ProductDao.productRepo.save(data);
    return result;
  };
}
