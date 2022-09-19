import express from "express";
import { getProducts, postProduct } from "../controllers/productsController.js";

const router = express.Router();
router.get("/products", getProducts);
router.post("/products", postProduct);

export default router;
