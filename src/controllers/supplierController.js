import Supplier from "../models/Supplier.js";
import { buildQuery } from "../utils/queryFeatures.js";

export const createSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    next(err);
  }
};

export const getSuppliers = async (req, res, next) => {
  try {
    const { query, page, limit, filter } = buildQuery(Supplier, req);
    const [items, total] = await Promise.all([
      query,
      Supplier.countDocuments(filter)
    ]);
    res.json({
      data: items,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    next(err);
  }
};
