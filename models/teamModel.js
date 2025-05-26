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
      field: "trainer_id",
      references: {
        model: "trainer",
        key: "id",
      },
    },
    pokemon1Id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pokemon1_id",
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon2Id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pokemon2_id",
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon3Id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pokemon3_id",
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon4Id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pokemon4_id",
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon5Id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pokemon5_id",
      references: {
        model: "pokemon",
        key: "id",
      },
    },
    pokemon6Id: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "pokemon6_id",
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
