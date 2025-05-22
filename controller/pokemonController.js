import Pokemon from "../models/pokemonModel.js";

const getAllPokemons = async () => {
  try {
    return await Pokemon.findAll();
  } catch (error) {
    throw new Error(`Error fetching Pokémon: ${error.message}`);
  }
};

const getPokemonById = async (id) => {
  const pokemon = await Pokemon.findByPk(id);
  if (!pokemon) {
    throw new Error("Pokemon not found");
  }
  return pokemon;
};

const createPokemon = async (pokemonData) => {
  const newPokemon = await Pokemon.create(pokemonData);
  return newPokemon;
};

const updatePokemon = async (id, pokemonData) => {
  const pokemon = await Pokemon.findByPk(id);
  if (!pokemon) {
    throw new Error("Pokemon not found");
  }
  await pokemon.update(pokemonData);
  return pokemon;
};

const deletePokemon = async (id) => {
  const pokemon = await Pokemon.findByPk(id);
  if (!pokemon) {
    throw new Error("Pokemon not found");
  }
  await pokemon.destroy();
  return pokemon;
};

export {
  createPokemon,
  getAllPokemons,
  getPokemonById,
  updatePokemon,
  deletePokemon,
};
