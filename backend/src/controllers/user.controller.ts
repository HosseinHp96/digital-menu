import { Request, Response } from "express";
import { tryCatchHandler } from "../utils";
import { userSercives } from "../services";

export const login = tryCatchHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  await userSercives.login(username, password);

  res.send("login");
});
