import express from "express";
import {
  getAllPokemonSpecies,
  getPokemonSpeciesById,
  getPokemonSpeciesByPokedexId,
  createPokemonSpecies,
  updatePokemonSpecies,
  deletePokemonSpecies,
} from "../controller/pokemonSpeciesController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pokemonSpecies = await getAllPokemonSpecies();
    res.json(pokemonSpecies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({ error: "ID parameter is required" });
  }

  try {
    const species = await getPokemonSpeciesById(req.params.id);
    res.json(species);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/pokedex/:id", async (req, res) => {
  try {
    const species = await getPokemonSpeciesByPokedexId(req.params.id);
    res.json(species);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newSpecies = await createPokemonSpecies(req.body);
    res.status(201).json(newSpecies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedSpecies = await updatePokemonSpecies(req.params.id, req.body);
    res.json(updatedSpecies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedSpecies = await deletePokemonSpecies(req.params.id);
    res.json(deletedSpecies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
