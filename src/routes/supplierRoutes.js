import express from "express";
import {
  createSupplier,
  getSuppliers
} from "../controllers/supplierController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router
  .route("/")
  .post(protect, authorize("admin", "manager"), createSupplier)
  .get(protect, getSuppliers);

export default router;
