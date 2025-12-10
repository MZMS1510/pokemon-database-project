import { sequelize } from "../config/database.js";
import Types from "../models/typesModel.js";
import PokemonSpecies from "../models/pokemonSpeciesModel.js";
import Pokemon from "../models/pokemonModel.js";

const seed = async () => {
  try {
    // Ensure we are in sqlite mode or explicit confirmation?
    // For now, just run.

    await sequelize.sync({ force: true }); // Reset DB
    console.log("Database synced.");

    // Create Types
    const types = [
      "Normal",
      "Fire",
      "Water",
      "Grass",
      "Electric",
      "Ice",
      "Fighting",
      "Poison",
      "Ground",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Ghost",
      "Dragon",
      "Steel",
      "Dark",
      "Fairy",
    ];
    const typeInstances = {};

    for (const typeName of types) {
      typeInstances[typeName] = await Types.create({ name: typeName });
    }
    console.log("Types seeded.");

    // Create Species (Bulbasaur)
    const bulbasaur = await PokemonSpecies.create({
      pokedex_id: 1,
      name: "Bulbasaur",
      type1_id: typeInstances["Grass"].id,
      type2_id: typeInstances["Poison"].id,
      base_hp: 45,
      base_atk: 49,
      base_def: 49,
      base_sp_atk: 65,
      base_sp_def: 65,
      base_speed: 45,
    });
    console.log("Bulbasaur species seeded.");

    // Create Species (Charmander)
    const charmander = await PokemonSpecies.create({
      pokedex_id: 4,
      name: "Charmander",
      type1_id: typeInstances["Fire"].id,
      type2_id: null,
      base_hp: 39,
      base_atk: 52,
      base_def: 43,
      base_sp_atk: 60,
      base_sp_def: 50,
      base_speed: 65,
    });
    console.log("Charmander species seeded.");

    // Create Species (Squirtle)
    const squirtle = await PokemonSpecies.create({
      pokedex_id: 7,
      name: "Squirtle",
      type1_id: typeInstances["Water"].id,
      type2_id: null,
      base_hp: 44,
      base_atk: 48,
      base_def: 65,
      base_sp_atk: 50,
      base_sp_def: 64,
      base_speed: 43,
    });
    console.log("Squirtle species seeded.");

    // Create Species (Pikachu)
    const pikachu = await PokemonSpecies.create({
      pokedex_id: 25,
      name: "Pikachu",
      type1_id: typeInstances["Electric"].id,
      type2_id: null,
      base_hp: 35,
      base_atk: 55,
      base_def: 40,
      base_sp_atk: 50,
      base_sp_def: 50,
      base_speed: 90,
    });
    console.log("Pikachu species seeded.");

    // Create Pokemon
    await Pokemon.create({
      species_id: bulbasaur.id,
      level: 5,
      nickname: "Bulby",
      hp: 45,
      atk: 49,
      def: 49,
      sp_atk: 65,
      sp_def: 65,
      speed: 45,
      exp: 0,
      shiny: false,
    });
    console.log("Bulby seeded.");

    await Pokemon.create({
      species_id: charmander.id,
      level: 5,
      nickname: "Char",
      hp: 39,
      atk: 52,
      def: 43,
      sp_atk: 60,
      sp_def: 50,
      speed: 65,
      exp: 0,
      shiny: false,
    });
    console.log("Char seeded.");

    await Pokemon.create({
      species_id: squirtle.id,
      level: 5,
      nickname: "Squirt",
      hp: 44,
      atk: 48,
      def: 65,
      sp_atk: 50,
      sp_def: 64,
      speed: 43,
      exp: 0,
      shiny: false,
    });
    console.log("Squirt seeded.");

    await Pokemon.create({
      species_id: pikachu.id,
      level: 10,
      nickname: "Pika",
      hp: 35,
      atk: 55,
      def: 40,
      sp_atk: 50,
      sp_def: 50,
      speed: 90,
      exp: 100,
      shiny: true,
    });
    console.log("Pika seeded.");

    console.log("Seeding complete.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seed();
