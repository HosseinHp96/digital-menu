import { Router } from "express";
import { userController } from "../controllers";
import { loginUserValidator } from "../middlewares";

const router = Router();

router.post("/login", loginUserValidator, userController.login);

export { router as userRouter };
