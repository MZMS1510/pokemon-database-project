import PokemonSpecies from "../models/pokemonSpeciesModel.js";

const getAllPokemonSpecies = async () => {
  try {
    return await PokemonSpecies.findAll({
      include: [
        { association: "primaryType" },
        { association: "secondaryType" },
      ],
    });
  } catch (error) {
    throw new Error(`Error fetching Pokémon species: ${error.message}`);
  }
};

const getPokemonSpeciesById = async (id) => {
  try {
    const pokemonSpecies = await PokemonSpecies.findByPk(id);
    if (!pokemonSpecies) {
      throw new Error("Pokémon species not found");
    }
    return pokemonSpecies;
  } catch (error) {
    throw new Error(`Error fetching Pokémon species by ID: ${error.message}`);
  }
};

const getPokemonSpeciesByPokedexId = async (id) => {
  try {
    const pokemonSpecies = await PokemonSpecies.findOne({
      where: { pokedex_id: id },
      include: [
        { association: "primaryType" },
        { association: "secondaryType" },
      ],
    });
    if (!pokemonSpecies) {
      throw new Error("Pokémon species not found");
    }
    return pokemonSpecies;
  } catch (error) {
    throw new Error(
      `Error fetching Pokémon species by Pokedex ID: ${error.message}`
    );
  }
};

const createPokemonSpecies = async (pokemonSpeciesData) => {
  try {
    const newPokemonSpecies = await PokemonSpecies.create(pokemonSpeciesData);
    return newPokemonSpecies;
  } catch (error) {
    throw new Error(`Error creating Pokémon species: ${error.message}`);
  }
};

const updatePokemonSpecies = async (id, pokemonSpeciesData) => {
  try {
    const pokemonSpecies = await PokemonSpecies.findByPk(id);
    if (!pokemonSpecies) {
      throw new Error("Pokémon species not found");
    }
    await pokemonSpecies.update(pokemonSpeciesData);
    return pokemonSpecies;
  } catch (error) {
    throw new Error(`Error updating Pokémon species: ${error.message}`);
  }
};

const deletePokemonSpecies = async (id) => {
  try {
    const pokemonSpecies = await PokemonSpecies.findByPk(id);
    if (!pokemonSpecies) {
      throw new Error("Pokémon species not found");
    }
    await pokemonSpecies.destroy();
    return { message: "Pokémon species deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting Pokémon species: ${error.message}`);
  }
};

export {
  getAllPokemonSpecies,
  getPokemonSpeciesById,
  getPokemonSpeciesByPokedexId,
  createPokemonSpecies,
  updatePokemonSpecies,
  deletePokemonSpecies,
};
