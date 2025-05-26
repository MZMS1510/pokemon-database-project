import Trainer from "./trainerModel.js";
import Team from "./teamModel.js";
import Box from "./boxModel.js";
import Pokemon from "./pokemonModel.js";
import PokemonSpecies from "./pokemonSpeciesModel.js";
import PokemonTypes from "./typesModel.js";
import Item from "./itemModel.js";
import ItemType from "./itemTypeModel.js";
import ItemCategory from "./itemCategoryModel.js";

// Definir todas as associações
const defineAssociations = () => {
  // Trainer associations
  Trainer.hasOne(Team, { foreignKey: "trainerId", as: "team" });
  Trainer.hasMany(Box, { foreignKey: "trainerId", as: "boxedPokemon" });
  Trainer.hasMany(Item, { foreignKey: "ownerId", as: "items" });

  // Team associations
  Team.belongsTo(Trainer, { foreignKey: "trainerId", as: "teamOwner" });
  Team.belongsTo(Pokemon, { foreignKey: "pokemon1Id", as: "pokemon1" });
  Team.belongsTo(Pokemon, { foreignKey: "pokemon2Id", as: "pokemon2" });
  Team.belongsTo(Pokemon, { foreignKey: "pokemon3Id", as: "pokemon3" });
  Team.belongsTo(Pokemon, { foreignKey: "pokemon4Id", as: "pokemon4" });
  Team.belongsTo(Pokemon, { foreignKey: "pokemon5Id", as: "pokemon5" });
  Team.belongsTo(Pokemon, { foreignKey: "pokemon6Id", as: "pokemon6" });

  // Box associations
  Box.belongsTo(Trainer, { foreignKey: "trainerId", as: "boxOwner" });
  Box.belongsTo(Pokemon, { foreignKey: "pokemonId", as: "pokemon" });

  // Pokemon associations
  Pokemon.belongsTo(PokemonSpecies, {
    foreignKey: "species_id",
    as: "pokemonSpecies",
  });
  Pokemon.hasMany(Box, { foreignKey: "pokemonId", as: "boxEntries" });

  // PokemonSpecies associations
  PokemonSpecies.hasMany(Pokemon, {
    foreignKey: "species_id",
    as: "pokemonInstances",
  });
  PokemonSpecies.belongsTo(PokemonTypes, {
    foreignKey: "type1_id",
    as: "primaryType",
  });
  PokemonSpecies.belongsTo(PokemonTypes, {
    foreignKey: "type2_id",
    as: "secondaryType",
  });
  PokemonSpecies.belongsTo(PokemonSpecies, {
    foreignKey: "next_stage_id",
    as: "evolution",
  });

  // PokemonTypes associations
  PokemonTypes.hasMany(PokemonSpecies, {
    foreignKey: "type1_id",
    as: "primarySpecies",
  });
  PokemonTypes.hasMany(PokemonSpecies, {
    foreignKey: "type2_id",
    as: "secondarySpecies",
  });
  // Item associations
  Item.belongsTo(Trainer, { foreignKey: "ownerId", as: "owner" });
  Item.belongsTo(ItemType, { foreignKey: "typeId", as: "itemType" });
  // ItemType associations
  ItemType.hasMany(Item, { foreignKey: "typeId", as: "items" });
  ItemType.belongsTo(ItemCategory, {
    foreignKey: "category",
    as: "itemCategory",
  });
  // ItemCategory associations
  ItemCategory.hasMany(ItemType, { foreignKey: "category", as: "itemTypes" });
};

export default defineAssociations;
