import express from "express";
import { testConnection } from "./config/database.js";
import indexRouter from "./routes/indexRouter.js";

export const app = express();

testConnection();

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
