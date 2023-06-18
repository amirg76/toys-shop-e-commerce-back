import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: Number, required: true },
  },
  { timestamps: true }
);

export { userSchema };
