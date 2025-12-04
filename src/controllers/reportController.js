import Product from "../models/Product.js";
import Stock from "../models/Stock.js";

export const summaryReport = async (req, res, next) => {
  try {
    const productCount = await Product.countDocuments();
    const lowStock = await Product.find({ stock: { $lt: 5 } }).select(
      "name stock"
    );

    const totalStockIn = await Stock.aggregate([
      { $match: { type: "in" } },
      { $group: { _id: null, qty: { $sum: "$quantity" } } }
    ]);

    const totalStockOut = await Stock.aggregate([
      { $match: { type: "out" } },
      { $group: { _id: null, qty: { $sum: "$quantity" } } }
    ]);

    res.json({
      productCount,
      totalStockIn: totalStockIn[0]?.qty || 0,
      totalStockOut: totalStockOut[0]?.qty || 0,
      lowStock
    });
  } catch (err) {
    next(err);
  }
};

export const monthlyReport = async (req, res, next) => {
  try {
    const months = await Stock.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          totalIn: {
            $sum: {
              $cond: [{ $eq: ["$type", "in"] }, "$quantity", 0]
            }
          },
          totalOut: {
            $sum: {
              $cond: [{ $eq: ["$type", "out"] }, "$quantity", 0]
            }
          }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    res.json({ months });
  } catch (err) {
    next(err);
  }
};
