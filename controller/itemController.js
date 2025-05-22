import Item from "../models/itemModel.js";

const getAllItems = async () => {
  try {
    return await Item.findAll();
  } catch (error) {
    throw new Error(`Error fetching items: ${error.message}`);
  }
};

const getItemById = async (id) => {
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  } catch (error) {
    throw new Error(`Error fetching item by ID: ${error.message}`);
  }
};

const createItem = async (itemData) => {
  try {
    const newItem = await Item.create(itemData);
    return newItem;
  } catch (error) {
    throw new Error(`Error creating item: ${error.message}`);
  }
};

const updateItem = async (id, itemData) => {
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      throw new Error("Item not found");
    }
    await item.update(itemData);
    return item;
  } catch (error) {
    throw new Error(`Error updating item: ${error.message}`);
  }
};

const deleteItem = async (id) => {
  try {
    const item = await Item.findByPk(id);
    if (!item) {
      throw new Error("Item not found");
    }
    await item.destroy();
    return item;
  } catch (error) {
    throw new Error(`Error deleting item: ${error.message}`);
  }
};

export { getAllItems, getItemById, createItem, updateItem, deleteItem };
