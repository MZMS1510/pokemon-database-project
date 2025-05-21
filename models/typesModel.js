import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Types = sequelize.define(
  "pokemon_types",
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
  },
  {
    tableName: "pokemon_types",
    timestamps: false,
  }
);

export default Types;
