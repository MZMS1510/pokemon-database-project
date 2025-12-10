import { testConnection, sequelize } from "./database.js";
import defineAssociations from "../models/associations.js";

// Função para inicializar o banco com associações
const initializeDatabase = async () => {
  try {
    await testConnection();
    // Definir associações após importar todos os models
    defineAssociations();
    console.log("Database associations defined successfully.");

    if (sequelize.getDialect() === "sqlite") {
      await sequelize.sync();
      console.log("Database synced successfully (SQLite).");
    }
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

export { initializeDatabase };
