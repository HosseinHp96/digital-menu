import { AppDataSource } from "../app-data-source";
import Shop from "../entities/shop.entity";

export default class ShopDao {
  static shopRepo = AppDataSource.getRepository(Shop);

  static getshop = async () => {
    const shop = await ShopDao.shopRepo.findOne({ where: { id: 1 } });
    return shop;
  };

  static updateShop = async (data: Shop) => {
    const result = await ShopDao.shopRepo.save(data);
    return result;
  };
}
