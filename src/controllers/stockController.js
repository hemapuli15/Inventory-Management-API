import Stock from "../models/Stock.js";
import Product from "../models/Product.js";

export const stockIn = async (req, res, next) => {
  try {
    const { productId, supplierId, quantity, note } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const tx = await Stock.create({
      product: productId,
      supplier: supplierId,
      type: "in",
      quantity,
      note
    });

    product.stock += quantity;
    await product.save();

    res.status(201).json(tx);
  } catch (err) {
    next(err);
  }
};

export const stockOut = async (req, res, next) => {
  try {
    const { productId, quantity, note } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    const tx = await Stock.create({
      product: productId,
      type: "out",
      quantity,
      note
    });

    product.stock -= quantity;
    await product.save();

    res.status(201).json(tx);
  } catch (err) {
    next(err);
  }
};

export const getInventoryReport = async (req, res, next) => {
  try {
    const products = await Product.find().select("name sku stock price");
    const totalValue = products.reduce(
      (sum, p) => sum + p.stock * (p.price || 0),
      0
    );
    res.json({ totalProducts: products.length, totalValue, products });
  } catch (err) {
    next(err);
  }
};
