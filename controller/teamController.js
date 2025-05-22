import Team from "../models/teamModel.js";

const getAllTeams = async () => {
  try {
    return await Team.findAll();
  } catch (error) {
    throw new Error(`Error fetching teams: ${error.message}`);
  }
};

const getTeamById = async (id) => {
  try {
    const team = await Team.findByPk(id);
    if (!team) {
      throw new Error("Team not found");
    }
    return team;
  } catch (error) {
    throw new Error(`Error fetching team by ID: ${error.message}`);
  }
};

const createTeam = async (teamData) => {
  try {
    const newTeam = await Team.create(teamData);
    return newTeam;
  } catch (error) {
    throw new Error(`Error creating team: ${error.message}`);
  }
};

const updateTeam = async (id, teamData) => {
  try {
    const team = await Team.findByPk(id);
    if (!team) {
      throw new Error("Team not found");
    }
    await team.update(teamData);
    return team;
  } catch (error) {
    throw new Error(`Error updating team: ${error.message}`);
  }
};

const deleteTeam = async (id) => {
  try {
    const team = await Team.findByPk(id);
    if (!team) {
      throw new Error("Team not found");
    }
    await team.destroy();
    return { message: "Team deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting team: ${error.message}`);
  }
};

export { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam };
