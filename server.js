import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import { notFound, errorHandler } from "./src/middleware/errorHandler.js";

// 👇 auth wired directly (NO authRoutes import)
import { register, login, profile } from "./src/controllers/authController.js";
import { protect } from "./src/middleware/auth.js";

import productRoutes from "./src/routes/productRoutes.js";
import supplierRoutes from "./src/routes/supplierRoutes.js";
import stockRoutes from "./src/routes/stockRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import reportRoutes from "./src/routes/reportRoutes.js";

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Inventory API is running");
});

// 🔐 AUTH ROUTES (no authRoutes, no app.use here)
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);
app.get("/api/auth/profile", protect, profile);

// other grouped routes
app.use("/api/products", productRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/reports", reportRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
