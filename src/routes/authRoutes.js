import express from "express";
import { register, login, profile } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// POST /api/auth/register
router.post("/register", register);

// POST /api/auth/login
router.post("/login", login);

// GET /api/auth/profile
router.get("/profile", protect, profile);

export default router;
