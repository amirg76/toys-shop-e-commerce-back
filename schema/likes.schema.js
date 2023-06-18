import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String },
  price: { type: Number, required: true },
  shortTitle: { type: String, required: true },
  img: { type: String, required: true },
});

export { likesSchema };
