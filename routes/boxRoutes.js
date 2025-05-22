import express from "express";
import {
  getAllBoxes,
  getBoxById,
  createBoxEntry,
  updateBoxEntry,
  deleteBoxEntry,
} from "../controller/boxController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const boxes = await getAllBoxes();
    res.json(boxes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:trainerId/:pokemonId", async (req, res) => {
  try {
    const box = await getBoxById(req.params.trainerId, req.params.pokemonId);
    res.json(box);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBoxEntry = await createBoxEntry(req.body);
    res.status(201).json(newBoxEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:trainerId/:pokemonId", async (req, res) => {
  try {
    const updatedBoxEntry = await updateBoxEntry(
      req.params.trainerId,
      req.params.pokemonId,
      req.body
    );
    res.json(updatedBoxEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:trainerId/:pokemonId", async (req, res) => {
  try {
    const deletedBoxEntry = await deleteBoxEntry(
      req.params.trainerId,
      req.params.pokemonId
    );
    res.json(deletedBoxEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
