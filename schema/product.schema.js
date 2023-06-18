import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    shortTitle: { type: String, required: true },
    desc: { type: String, required: true },
    warning: { type: String, required: true },
    price: { type: Number, required: true },
    pieces: { type: Number, required: true },
    age: { type: String, required: true },
    about: { type: Array },
    categories: { type: Array },
    inStock: { type: Boolean, default: true },

    info: {
      dimensions: { type: String },
      weight: { type: String },
      rec_age: { type: String },
      reviews: { type: String },
      release: { type: String },
      manufac: { type: String },
    },
    reviews: {
      name: { type: String },
      stars: { type: Number },
      title: { type: String },
      content: { type: String },
    },
  },
  { timestamps: true }
);

export { productSchema };
