import express from "express";
import cors from "cors";
import { initializeDatabase } from "./config/init.js";
import indexRouter from "./routes/indexRouter.js";

export const app = express();

// Inicializar banco de dados e associações
initializeDatabase();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running. Go to /api to access the endpoints.");
});

app.use("/api", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000");
});
