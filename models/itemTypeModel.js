import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const ItemType = sequelize.define(
  "item_type",
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
    effect: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "item_category",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "item_type",
    timestamps: false,
  }
);

export default ItemType;
