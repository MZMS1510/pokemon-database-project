import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const Item = sequelize.define(
  "item",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    ownerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "owner_id",
    },
    typeId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "type_id",
    },
  },
  {
    tableName: "item",
    timestamps: false,
  }
);

export default Item;
