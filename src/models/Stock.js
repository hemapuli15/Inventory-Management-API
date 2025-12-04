import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
    type: { type: String, enum: ["in", "out"], required: true },
    quantity: { type: Number, required: true },
    note: String
  },
  { timestamps: true }
);

export default mongoose.model("Stock", stockSchema);
