import { Router } from "express";
import { productController } from "../controllers";
import { auth, uploadImages } from "../middlewares";

const router = Router();

router.use(auth("admin"));
router.get("/", productController.allProducts);
router.get("/:id", productController.getProductByID);
router.post("/add", uploadImages.single("image"), productController.addProduct);

export { router as productRouter };
