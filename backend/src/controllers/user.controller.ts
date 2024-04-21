import { Request, Response } from "express";
import { tryCatchHandler } from "../utils";
import { userServices } from "../services";

export const login = tryCatchHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const token = await userServices.login(username, password);

  res.send({ token });
});
