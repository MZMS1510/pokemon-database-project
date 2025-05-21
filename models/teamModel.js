import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import Trainer from "./trainerModel.js";

const Team = sequelize.define(
  "team",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    trainerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "trainer",
        key: "id",
      },
    },
    pokemon1Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon2Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon3Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon4Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon5Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon6Id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "pokemon",
        key: "id",
      },
    },
  },
  {
    tableName: "team",
    timestamps: false,
  }
);

Team.belongsTo(Trainer);

export default Team;
