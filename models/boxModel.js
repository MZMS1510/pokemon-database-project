import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const Box = sequelize.define(
  "box",
  {
    trainerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    pokemonId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    tableName: "box",
    timestamps: false,
  }
);

export default Box;
