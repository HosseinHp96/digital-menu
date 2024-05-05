import fs from "fs";
import ShopDao from "../dao/shop.dao";
import Shop from "../entities/shop.entity";

export const getShop = async () => {
  return await ShopDao.getshop();
};

export const updateShop = async (data: Shop) => {
  const shop = await ShopDao.getshop();
  const result = await ShopDao.updateShop({ ...data, id: 1 });

  // delete old logo after shop update
  fs.unlinkSync(shop?.logo.path as string);

  return result;
};
