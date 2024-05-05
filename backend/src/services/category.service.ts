import { FindOptionsWhere } from "typeorm";
import CategoryDao from "../dao/category.dao";
import { Category } from "../entities";
import { AppError } from "../utils";

export const allCategories = async () => {
  return await CategoryDao.allCategories();
};

export const getCategoryByID = async (id: number) => {
  return await CategoryDao.getCategory({ id });
};

export const checkCategoryAvailability = async (
  where: FindOptionsWhere<Category>
) => {
  const category = await CategoryDao.getCategory(where);

  if (!category)
    throw new AppError({
      message: "There is no category with this ID",
      statusCode: 400,
    });
};

export const addCategory = async (category: Category) => {
  const status = await CategoryDao.getCategory({ title: category.title });

  if (status)
    throw new AppError({
      message: "This category is currently available",
      statusCode: 400,
    });

  return await CategoryDao.addCategory(category);
};

export const updateCategory = async (data: Category, id: number) => {
  await checkCategoryAvailability({ id });

  const result = await CategoryDao.updateCategory({ ...data, id });
  return result;
};

export const removeCategory = async (id: number) => {
  const category = await CategoryDao.getCategory({ id });

  if (!category)
    throw new AppError({
      message: "There is no category with this ID",
      statusCode: 400,
    });

  await CategoryDao.removeCategory(id);
  return "Done";
};
