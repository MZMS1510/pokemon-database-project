import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const ItemCategory = sequelize.define(
  "item_category",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "item_category",
    timestamps: false,
  }
);

export default ItemCategory;
