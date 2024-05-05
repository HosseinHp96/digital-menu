import { Router } from "express";
import { shopController } from "../controllers";
import { shopUserValidator, auth, uploadImages } from "../middlewares";

const router = Router();

router.use(auth("admin")); // admins only have access to these routes

router.get("/", shopController.getShop);

router.put(
  "/",
  uploadImages.single("logo"),
  shopUserValidator,
  shopController.updateShop
);

export { router as shopRouter };
