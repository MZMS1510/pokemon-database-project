import express from "express";
import {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType,
} from "../controller/typesController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const types = await getAllTypes();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const type = await getTypeById(req.params.id);
    res.json(type);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newType = await createType(req.body);
    res.status(201).json(newType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedType = await updateType(req.params.id, req.body);
    res.json(updatedType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedType = await deleteType(req.params.id);
    res.json(deletedType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
