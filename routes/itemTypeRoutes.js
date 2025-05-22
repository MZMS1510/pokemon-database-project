import express from "express";
import {
  getAllItemTypes,
  getItemTypeById,
  createItemType,
  updateItemType,
  deleteItemType,
} from "../controller/itemTypeController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const itemTypes = await getAllItemTypes();
    res.json(itemTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const itemType = await getItemTypeById(req.params.id);
    res.json(itemType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItemType = await createItemType(req.body);
    res.status(201).json(newItemType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedItemType = await updateItemType(req.params.id, req.body);
    res.json(updatedItemType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedItemType = await deleteItemType(req.params.id);
    res.json(deletedItemType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
