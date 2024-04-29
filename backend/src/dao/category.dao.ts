import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../app-data-source";
import { Category } from "../entities";

export default class CategoryDao {
  static categoryRepo = AppDataSource.getRepository(Category);

  static allCategories = async () => {
    const categories = await CategoryDao.categoryRepo.find({
      relations: { products: true },
    });
    return categories;
  };

  static getCategory = async (where: FindOptionsWhere<Category>) => {
    const category = await CategoryDao.categoryRepo.findOne({
      where,
      relations: { products: true },
    });
    return category;
  };

  static addCategory = async (category: Category) => {
    const result = await CategoryDao.categoryRepo.save(category);
    return result;
  };

  static removeCategory = async (id: number) => {
    const result = await CategoryDao.categoryRepo.delete(id);
    return result;
  };

  static updateCategory = async (data: Category) => {
    const result = await CategoryDao.categoryRepo.save(data);
    return result;
  };
}
