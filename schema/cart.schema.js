import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    total: { type: Number },
    quantity: { type: Number, default: 0 },
    products: [
      // {
      //   productId: { type: String },
      //   quantity: {
      //     type: Number,
      //     default: 1,
      //   },
      //   estimated_shipping: { type: Number },
      // },
      {
        img: { type: String, required: true },
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        warning: { type: String, required: true },
        price: { type: Number, required: true },
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
        productQuantity: { type: Number },
        total_price: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

export { cartSchema };
