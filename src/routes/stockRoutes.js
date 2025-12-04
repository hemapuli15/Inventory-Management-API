import express from "express";
import {
  stockIn,
  stockOut,
  getInventoryReport
} from "../controllers/stockController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.post("/in", protect, authorize("admin", "manager"), stockIn);
router.post("/out", protect, authorize("admin", "manager", "staff"), stockOut);

// assignment route: GET /api/reports/inventory
router.get("/inventory", protect, getInventoryReport);

export default router;
