import Trainer from "../models/trainerModel.js";
import Team from "../models/teamModel.js";
import Box from "../models/boxModel.js";
import Pokemon from "../models/pokemonModel.js";
import PokemonSpecies from "../models/pokemonSpeciesModel.js";
import PokemonTypes from "../models/typesModel.js";
import Item from "../models/itemModel.js";
import ItemType from "../models/itemTypeModel.js";
import ItemCategory from "../models/itemCategoryModel.js";

const getAllTrainers = async () => {
  try {
    return await Trainer.findAll();
  } catch (error) {
    throw new Error(`Error fetching trainers: ${error.message}`);
  }
};

const getTrainerById = async (id) => {
  try {
    const trainer = await Trainer.findByPk(id, {
      include: [
        {
          model: Team,
          as: "team",
          include: [
            {
              model: Pokemon,
              as: "pokemon1",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
            {
              model: Pokemon,
              as: "pokemon2",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
            {
              model: Pokemon,
              as: "pokemon3",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
            {
              model: Pokemon,
              as: "pokemon4",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
            {
              model: Pokemon,
              as: "pokemon5",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
            {
              model: Pokemon,
              as: "pokemon6",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
          ],
        },
        {
          model: Box,
          as: "boxedPokemon",
          include: [
            {
              model: Pokemon,
              as: "pokemon",
              include: [
                {
                  model: PokemonSpecies,
                  as: "pokemonSpecies",
                  include: [
                    { model: PokemonTypes, as: "primaryType" },
                    { model: PokemonTypes, as: "secondaryType" },
                  ],
                },
              ],
            },
          ],
        },
        {
          model: Item,
          as: "items",
          include: [
            {
              model: ItemType,
              as: "itemType",
              include: [
                {
                  model: ItemCategory,
                  as: "itemCategory",
                },
              ],
            },
          ],
        },
      ],
    });
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
