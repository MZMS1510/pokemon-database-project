import Box from "../models/boxModel.js";

const getAllBoxes = async () => {
  try {
    return await Box.findAll();
  } catch (error) {
    throw new Error(`Error fetching boxes: ${error.message}`);
  }
};

const getBoxById = async (trainerId, pokemonId) => {
  try {
    const box = await Box.findOne({
      where: { trainerId, pokemonId },
    });
    if (!box) {
      throw new Error("Box entry not found");
    }
    return box;
  } catch (error) {
    throw new Error(`Error fetching box entry: ${error.message}`);
  }
};

const createBoxEntry = async (boxData) => {
  try {
    const newBoxEntry = await Box.create(boxData);
    return newBoxEntry;
  } catch (error) {
    throw new Error(`Error creating box entry: ${error.message}`);
  }
};

const updateBoxEntry = async (trainerId, pokemonId, boxData) => {
  try {
    const box = await Box.findOne({
      where: { trainerId, pokemonId },
    });
    if (!box) {
      throw new Error("Box entry not found");
    }
    await box.update(boxData);
    return box;
  } catch (error) {
    throw new Error(`Error updating box entry: ${error.message}`);
  }
};

const deleteBoxEntry = async (trainerId, pokemonId) => {
  try {
    const box = await Box.findOne({
      where: { trainerId, pokemonId },
    });
    if (!box) {
      throw new Error("Box entry not found");
    }
    await box.destroy();
    return box;
  } catch (error) {
    throw new Error(`Error deleting box entry: ${error.message}`);
  }
};

export {
  getAllBoxes,
  getBoxById,
  createBoxEntry,
  updateBoxEntry,
  deleteBoxEntry,
};
