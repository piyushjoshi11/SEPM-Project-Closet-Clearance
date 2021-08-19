import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    timesWorn: { type: String, required: true },
    canAlter: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
