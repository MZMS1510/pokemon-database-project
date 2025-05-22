import express from "express";
import {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} from "../controller/teamController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teams = await getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const team = await getTeamById(req.params.id);
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTeam = await createTeam(req.body);
    res.status(201).json(newTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTeam = await updateTeam(req.params.id, req.body);
    res.json(updatedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTeam = await deleteTeam(req.params.id);
    res.json(deletedTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
