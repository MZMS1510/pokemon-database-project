import Trainer from "../models/trainerModel.js";

const getAllTrainers = async () => {
  try {
    return await Trainer.findAll();
  } catch (error) {
    throw new Error(`Error fetching trainers: ${error.message}`);
  }
};

const getTrainerById = async (id) => {
  try {
    const trainer = await Trainer.findByPk(id);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    return trainer;
  } catch (error) {
    throw new Error(`Error fetching trainer by ID: ${error.message}`);
  }
};

const createTrainer = async (trainerData) => {
  try {
    const newTrainer = await Trainer.create(trainerData);
    return newTrainer;
  } catch (error) {
    throw new Error(`Error creating trainer: ${error.message}`);
  }
};

const updateTrainer = async (id, trainerData) => {
  try {
    const trainer = await Trainer.findByPk(id);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    await trainer.update(trainerData);
    return trainer;
  } catch (error) {
    throw new Error(`Error updating trainer: ${error.message}`);
  }
};

const deleteTrainer = async (id) => {
  try {
    const trainer = await Trainer.findByPk(id);
    if (!trainer) {
      throw new Error("Trainer not found");
    }
    await trainer.destroy();
    return trainer;
  } catch (error) {
    throw new Error(`Error deleting trainer: ${error.message}`);
  }
};

export {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
};
