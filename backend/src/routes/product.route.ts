import { Router } from "express";
import { allProducts } from "../controllers";

const router = Router();

router.get("/", allProducts);

export { router as productRouter };
