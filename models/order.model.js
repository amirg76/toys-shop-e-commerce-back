import mongoose from "mongoose";
import { orderSchema } from "../schema/order.schema.js";

const Order = mongoose.model("orders", orderSchema);

export { Order };
