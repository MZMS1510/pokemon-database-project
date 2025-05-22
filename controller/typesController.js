import Types from "../models/typesModel.js";

const getAllTypes = async () => {
  try {
    return await Types.findAll();
  } catch (error) {
    throw new Error(`Error fetching types: ${error.message}`);
  }
};

const getTypeById = async (id) => {
  try {
    const type = await Types.findByPk(id);
    if (!type) {
      throw new Error("Type not found");
    }
    return type;
  } catch (error) {
    throw new Error(`Error fetching type by ID: ${error.message}`);
  }
};

const createType = async (typeData) => {
  try {
    const newType = await Types.create(typeData);
    return newType;
  } catch (error) {
    throw new Error(`Error creating type: ${error.message}`);
  }
};

const updateType = async (id, typeData) => {
  try {
    const type = await Types.findByPk(id);
    if (!type) {
      throw new Error("Type not found");
    }
    await type.update(typeData);
    return type;
  } catch (error) {
    throw new Error(`Error updating type: ${error.message}`);
  }
};

const deleteType = async (id) => {
  try {
    const type = await Types.findByPk(id);
    if (!type) {
      throw new Error("Type not found");
    }
    await type.destroy();
    return type;
  } catch (error) {
    throw new Error(`Error deleting type: ${error.message}`);
  }
};

export { getAllTypes, getTypeById, createType, updateType, deleteType };
