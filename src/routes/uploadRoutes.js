import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// store files temporarily in /uploads
const upload = multer({ dest: "uploads/" });

// POST /api/upload
router.post("/", protect, upload.any(), async (req, res) => {
  try {
    // no files at all
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // take first uploaded file (whatever its field name is)
    const file = req.files[0];

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "inventory-files"
    });

    // delete local temp file
    fs.unlinkSync(file.path);

    return res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Upload failed" });
  }
});

export default router;
