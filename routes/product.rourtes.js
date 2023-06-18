import { Router } from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  createAllProducts,
  deleteAllProducts,
  querySearchProducts,
} from "../controllers/product.controllers.js";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
const productRouter = Router();
productRouter.post("/", verifyTokenAndAdmin, createProduct);
productRouter.put("/:id", verifyTokenAndAdmin, updateProduct);
productRouter.delete("/delete-all-products", deleteAllProducts);
productRouter.delete("/:id", verifyTokenAndAdmin, deleteProduct);
productRouter.get("/find/:id", getProduct);
productRouter.get("/", getAllProduct);
productRouter.get("/search/query", querySearchProducts);
productRouter.get("/create-all-products", createAllProducts);

export { productRouter };
