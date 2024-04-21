import { Router } from "express";
import { productController } from "../controllers";
import { auth } from "../middlewares";

const router = Router();

router.use(auth("admin"));
router.get("/", productController.allProducts);
router.get("/:id", productController.getProductByID);

export { router as productRouter };
