import ItemType from "../models/itemTypeModel.js";
import ItemCategory from "../models/itemCategoryModel.js";

const getAllItemTypes = async () => {
  try {
    return await ItemType.findAll({
      include: [
        {
          model: ItemCategory,
          as: "itemCategory",
          attributes: ["id", "name", "description"],
        },
      ],
    });
  } catch (error) {
    throw new Error(`Error fetching item types: ${error.message}`);
  }
};

const getItemTypeById = async (id) => {
  try {
    const itemType = await ItemType.findByPk(id, {
      include: [
        {
          model: ItemCategory,
          as: "itemCategory",
          attributes: ["id", "name", "description"],
        },
      ],
    });
    if (!itemType) {
      throw new Error("Item type not found");
    }
    return itemType;
  } catch (error) {
    throw new Error(`Error fetching item type by ID: ${error.message}`);
  }
};

const createItemType = async (itemTypeData) => {
  try {
    const newItemType = await ItemType.create(itemTypeData);
    return newItemType;
  } catch (error) {
    throw new Error(`Error creating item type: ${error.message}`);
  }
};

const updateItemType = async (id, itemTypeData) => {
  try {
    const itemType = await ItemType.findByPk(id);
    if (!itemType) {
      throw new Error("Item type not found");
    }
    await itemType.update(itemTypeData);
    return itemType;
  } catch (error) {
    throw new Error(`Error updating item type: ${error.message}`);
  }
};

const deleteItemType = async (id) => {
  try {
    const itemType = await ItemType.findByPk(id);
    if (!itemType) {
      throw new Error("Item type not found");
    }
    await itemType.destroy();
    return { message: "Item type deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting item type: ${error.message}`);
  }
};

export {
  getAllItemTypes,
  getItemTypeById,
  createItemType,
  updateItemType,
  deleteItemType,
};
