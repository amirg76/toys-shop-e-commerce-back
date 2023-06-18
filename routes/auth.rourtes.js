import { Router } from "express";
import { register, login } from "../controllers/auth.controllers.js";
const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export { authRouter };
