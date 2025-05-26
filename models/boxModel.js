import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Box = sequelize.define(
  "box",
  {
    trainerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: "trainer_id",
    },
    pokemonId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      field: "pokemon_id",
    },
  },
  {
    tableName: "box",
    timestamps: false,
  }
);

export default Box;
