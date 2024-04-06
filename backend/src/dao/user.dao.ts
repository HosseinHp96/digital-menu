import { AppDataSource } from "../app-data-source";
import User from "../entities/users.entity";

export default class UserDao {
  static userRepo = AppDataSource.getRepository(User);

  static getUser = async (username: string) => {
    const user = await UserDao.userRepo.findOneBy({
      username,
    });
    return user;
  };
}
