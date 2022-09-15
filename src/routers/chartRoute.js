import express from "express";
import { getChartItens } from "../controllers/chartController.js";

const router = express.Router();
router.get("/chart", getChartItens);

export default router;