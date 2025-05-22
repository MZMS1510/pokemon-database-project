import express from "express";
import {
  getAllPokemons,
  getPokemonById,
  createPokemon,
  updatePokemon,
  deletePokemon,
} from "../controller/pokemonController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pokemons = await getAllPokemons();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pokemon = await getPokemonById(req.params.id);
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPokemon = await createPokemon(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedPokemon = await updatePokemon(req.params.id, req.body);
    res.json(updatedPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedPokemon = await deletePokemon(req.params.id);
    res.json(deletedPokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
