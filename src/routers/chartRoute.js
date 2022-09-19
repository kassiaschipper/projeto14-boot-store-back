import express from "express";
import { getChartItens, deleteChartItem, updateChart } from "../controllers/chartController.js";

const router = express.Router();
router.get(`/chart`, getChartItens);
router.delete(`/deleteItem/:id`, deleteChartItem);
router.put(`/updateChart`, updateChart)


export default router;