import { Router } from "express";
import { productController } from "../controllers";
import { auth } from "../middlewares";

const router = Router();

router.use(auth("admin"));
router.get("/", productController.allProducts);

export { router as productRouter };
