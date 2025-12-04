import cloudinary from "../config/cloudinary.js";

export const uploadFile = async (req, res, next) => {
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ url: req.file.path });
  } catch (err) {
    next(err);
  }
};
