import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("Hello World from routes/index.js");
  res.send("Hello World from routes/index.js");
});

export default router;
