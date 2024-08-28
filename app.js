import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.rourtes.js";
import { productRouter } from "./routes/product.rourtes.js";
import { cartRouter } from "./routes/cart.rourtes.js";
import { orderRouter } from "./routes/order.rourtes.js";
import { likesRouter } from "./routes/likes.rourtes.js";
import { stripeRouter } from "./routes/stripe.rourtes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.send("API is running..");
});
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
app.use("/likes", likesRouter);
app.use("/payment", stripeRouter);
app.use("/test", (req, res) => {
  res.send("test");
});
export { app };
