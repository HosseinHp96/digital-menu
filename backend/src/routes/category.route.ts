import { Router } from "express";
import { categoryController } from "../controllers";
import { auth } from "../middlewares";

const router = Router();

router.use(auth("admin")); // admins only have access to these routes

router.get("/", categoryController.allCategories);

router.get("/:id", categoryController.getCategoryByID);

router.delete("/:id", categoryController.removeCategory);

router.post("/add", categoryController.addCategory);

router.put("/:id", categoryController.updateCategory);

export { router as categoryRouter };
