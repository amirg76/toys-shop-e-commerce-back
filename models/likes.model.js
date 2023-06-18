import mongoose from "mongoose";
import { likesSchema } from "../schema/likes.schema.js";

const Like = mongoose.model("likes", likesSchema);

export { Like };
