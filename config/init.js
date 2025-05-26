import { testConnection } from "./database.js";
import defineAssociations from "../models/associations.js";

// Função para inicializar o banco com associações
const initializeDatabase = async () => {
  try {
    await testConnection();
    // Definir associações após importar todos os models
    defineAssociations();
    console.log("Database associations defined successfully.");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

export { initializeDatabase };
