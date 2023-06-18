import { Router } from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getUser,
  getStats,
  updateUserAccount,
} from "../controllers/user.controllers.js";
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken.js";
const userRouter = Router();

userRouter.delete("/:id", verifyTokenAndAuth, deleteUser);
userRouter.get("/stats", verifyTokenAndAdmin, getStats);
userRouter.get("/:id", verifyTokenAndAdmin, getAllUser);
// userRouter.get("/find/:id", verifyTokenAndAdmin, getUser);
userRouter.put("/account/:id", verifyToken, updateUserAccount);
// userRouter.put("/:id", verifyTokenAndAuth, updateUser);
userRouter.get("/findOne/:id", verifyToken, getUser);

export { userRouter };
