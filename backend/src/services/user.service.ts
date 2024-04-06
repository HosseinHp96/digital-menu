import UserDao from "../dao/user.dao";
import { AppError } from "../utils";
import bcrypt from "bcrypt";

export const login = async (username: string, password: string) => {
  const user = await UserDao.getUser(username);

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new AppError({ message: "username or password is invalid" });

  return;
};
