import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Trainer = sequelize.define(
  "trainer",
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
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    badges: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "trainer",
    timestamps: false,
  }
);

export default Trainer;
