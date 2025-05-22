import express from "express";
import {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} from "../controller/trainerController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const trainers = await getAllTrainers();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const trainer = await getTrainerById(req.params.id);
    res.json(trainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTrainer = await createTrainer(req.body);
    res.status(201).json(newTrainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTrainer = await updateTrainer(req.params.id, req.body);
    res.json(updatedTrainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTrainer = await deleteTrainer(req.params.id);
    res.json(deletedTrainer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
