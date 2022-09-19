import express from "express";
import { getChartItens, deleteChartItem } from "../controllers/chartController.js";

const router = express.Router();
router.get("/chart", getChartItens);
router.delete(`/deleteItem/:id`, deleteChartItem);

export default router;