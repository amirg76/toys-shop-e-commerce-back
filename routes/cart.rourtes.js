import { Router } from "express";
import {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getCartByUserId,
  getAllCarts,
} from "../controllers/cart.controllers.js";
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken.js";
const cartRouter = Router();
// cartRouter.post("/", verifyToken, createCart);
cartRouter.post("/", createCart);
// cartRouter.put("/:id", verifyToken, updateCart);
cartRouter.put("/:id", updateCart);
cartRouter.delete("/:id", verifyToken, deleteCart);
// cartRouter.get("/find/:userId", verifyTokenAndAuth, getCart);
cartRouter.get("/find/:userId", getCartByUserId);
cartRouter.get("/", verifyTokenAndAdmin, getAllCarts);
export { cartRouter };
