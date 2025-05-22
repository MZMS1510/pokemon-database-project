import express from "express";
import {
  getAllItemCategories,
  getItemCategoryById,
  createItemCategory,
  updateItemCategory,
  deleteItemCategory,
} from "../controller/itemCategoryController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const itemCategories = await getAllItemCategories();
    res.json(itemCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const itemCategory = await getItemCategoryById(req.params.id);
    res.json(itemCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newItemCategory = await createItemCategory(req.body);
    res.status(201).json(newItemCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedItemCategory = await updateItemCategory(
      req.params.id,
      req.body
    );
    res.json(updatedItemCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedItemCategory = await deleteItemCategory(req.params.id);
    res.json(deletedItemCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
