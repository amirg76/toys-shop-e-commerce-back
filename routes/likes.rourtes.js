import { Router } from "express";
import {
  createLike,
  deleteLike,
  getLikesForUser,
} from "../controllers/likes.controllers.js";
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken.js";

const likesRouter = Router();

likesRouter.post("/", verifyToken, createLike);
likesRouter.delete("/:id", verifyToken, deleteLike);
likesRouter.get("/find/:id", verifyTokenAndAuth, getLikesForUser);

export { likesRouter };
