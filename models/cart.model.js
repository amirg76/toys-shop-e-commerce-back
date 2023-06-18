import mongoose from "mongoose";
import { cartSchema } from "../schema/cart.schema.js";

const Cart = mongoose.model("cart", cartSchema);

export { Cart };
