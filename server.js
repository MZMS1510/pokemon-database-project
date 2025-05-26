import express from "express";
import { initializeDatabase } from "./config/init.js";
import indexRouter from "./routes/indexRouter.js";

export const app = express();

// Inicializar banco de dados e associações
initializeDatabase();

app.use(express.json());

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
