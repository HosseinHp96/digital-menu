import { Router } from "express";
import { productController } from "../controllers";
import { productValidator, auth, uploadImages } from "../middlewares";

const router = Router();

router.use(auth("admin")); // admins only have access to these routes

router.get("/", productController.allProducts);

router.get("/:id", productController.getProductByID);

router.delete("/:id", productController.removeProduct);

router.post(
  "/add",
  uploadImages.array("images", 5),
  productValidator,
  productController.addProduct
);

router.put(
  "/:id",
  uploadImages.array("images", 5),
  productValidator,
  productController.updateProduct
);

export { router as productRouter };
