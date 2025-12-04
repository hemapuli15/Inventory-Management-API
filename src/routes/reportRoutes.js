import express from "express";
import {
  summaryReport,
  monthlyReport
} from "../controllers/reportController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// matches assignment: /api/reports/summary, /api/reports/monthly
router.get("/summary", protect, authorize("admin", "manager"), summaryReport);
router.get("/monthly", protect, authorize("admin", "manager"), monthlyReport);

// also from project spec: /api/reports/inventory -> implemented in stockRoutes as /api/stock/inventory

export default router;
