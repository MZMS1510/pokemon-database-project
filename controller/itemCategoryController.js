import ItemCategory from "../models/itemCategoryModel.js";

const getAllItemCategories = async () => {
  try {
    return await ItemCategory.findAll();
  } catch (error) {
    throw new Error(`Error fetching item categories: ${error.message}`);
  }
};

const getItemCategoryById = async (id) => {
  try {
    const itemCategory = await ItemCategory.findByPk(id);
    if (!itemCategory) {
      throw new Error("Item category not found");
    }
    return itemCategory;
  } catch (error) {
    throw new Error(`Error fetching item category by ID: ${error.message}`);
  }
};

const createItemCategory = async (itemCategoryData) => {
  try {
    const newItemCategory = await ItemCategory.create(itemCategoryData);
    return newItemCategory;
  } catch (error) {
    throw new Error(`Error creating item category: ${error.message}`);
  }
};

const updateItemCategory = async (id, itemCategoryData) => {
  try {
    const itemCategory = await ItemCategory.findByPk(id);
    if (!itemCategory) {
      throw new Error("Item category not found");
    }
    await itemCategory.update(itemCategoryData);
    return itemCategory;
  } catch (error) {
    throw new Error(`Error updating item category: ${error.message}`);
  }
};

const deleteItemCategory = async (id) => {
  try {
    const itemCategory = await ItemCategory.findByPk(id);
    if (!itemCategory) {
      throw new Error("Item category not found");
    }
    await itemCategory.destroy();
    return { message: "Item category deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting item category: ${error.message}`);
  }
};

export {
  getAllItemCategories,
  getItemCategoryById,
  createItemCategory,
  updateItemCategory,
  deleteItemCategory,
};
