import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Pokemon = sequelize.define(
  "pokemon",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    species_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon_species",
        key: "id",
      },
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 100,
      },
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    sp_atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    sp_def: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    shiny: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "pokemon",
    timestamps: false,
  }
);

Pokemon.associate = (models) => {
  Pokemon.belongsTo(models.PokemonSpecies, {
    foreignKey: "species_id",
    as: "species",
  });

  // Pokemon can be in a team
  Pokemon.belongsToMany(models.Trainer, {
    through: "team",
    foreignKey: "pokemon_id",
    as: "trainersTeam",
  });

  // Pokemon can be stored in a box
  Pokemon.belongsToMany(models.Trainer, {
    through: "box",
    foreignKey: "pokemon_id",
    as: "trainersBox",
  });
};

export default Pokemon;
