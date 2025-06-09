import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const PokemonSpecies = sequelize.define(
  "pokemon_species",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    pokedex_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type1_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon_types",
        key: "id",
      },
    },
    type2_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "pokemon_types",
        key: "id",
      },
    },
    base_hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    base_atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    base_def: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    base_sp_atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    base_sp_def: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    base_speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    next_stage_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "pokemon_species",
        key: "id",
      },
    },
  },
  {
    tableName: "pokemon_species",
    timestamps: false,
  }
);

export default PokemonSpecies;
