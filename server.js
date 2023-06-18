import { app } from "./app.js";
import "./db/mongoose.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) console.error("Error: ", error);
  console.log("SERVER IS UP AND RUNNING ON PORT ", PORT);
});
