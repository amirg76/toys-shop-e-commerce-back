import { Router } from "express";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrdersForUser,
  getAllOrders,
  getAllOrdersIncome,
} from "../controllers/order.controllers.js";
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken.js";

const orderRouter = Router();

orderRouter.post("/", verifyToken, createOrder);
orderRouter.put("/:id", verifyTokenAndAdmin, updateOrder);
orderRouter.delete("/:id", verifyTokenAndAdmin, deleteOrder);
orderRouter.get("/find/:id", verifyTokenAndAuth, getOrdersForUser);
orderRouter.get("/", verifyTokenAndAdmin, getAllOrders);
orderRouter.get("/income", verifyTokenAndAdmin, getAllOrdersIncome);

export { orderRouter };
