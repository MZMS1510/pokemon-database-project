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
  },
  {
    tableName: "pokemon_species",
    timestamps: false,
  }
);

// Define associations
PokemonSpecies.associate = (models) => {
  // PokemonSpecies has a primary type (required)
  PokemonSpecies.belongsTo(models.PokemonType, {
    foreignKey: "type1_id",
    as: "primaryType",
  });

  // PokemonSpecies has a secondary type (optional)
  PokemonSpecies.belongsTo(models.PokemonType, {
    foreignKey: "type2_id",
    as: "secondaryType",
  });

  // PokemonSpecies has many Pokemon instances
  PokemonSpecies.hasMany(models.Pokemon, {
    foreignKey: "species_id",
    as: "pokemon",
  });
};

export default PokemonSpecies;
