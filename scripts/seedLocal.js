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
    const types = ['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Steel', 'Dark', 'Fairy'];
    const typeInstances = {};
    
    for (const typeName of types) {
      typeInstances[typeName] = await Types.create({ name: typeName });
    }
    console.log("Types seeded.");

    // Create Species (Bulbasaur)
    const bulbasaur = await PokemonSpecies.create({
      pokedex_id: 1,
      name: 'Bulbasaur',
      type1_id: typeInstances['Grass'].id,
      type2_id: typeInstances['Poison'].id,
      base_hp: 45,
      base_atk: 49,
      base_def: 49,
      base_sp_atk: 65,
      base_sp_def: 65,
      base_speed: 45
    });
    console.log("Bulbasaur species seeded.");

    // Create Pokemon
    await Pokemon.create({
      species_id: bulbasaur.id,
      level: 5,
      nickname: 'Bulby',
      hp: 45,
      atk: 49,
      def: 49,
      sp_atk: 65,
      sp_def: 65,
      speed: 45,
      exp: 0,
      shiny: false
    });
    console.log("Bulby seeded.");

    console.log("Seeding complete.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seed();
