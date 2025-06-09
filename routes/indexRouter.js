import { Router } from "express";
import boxRoutes from "./boxRoutes.js";
import itemCategoryRoutes from "./itemCategoryRoutes.js";
import itemRoutes from "./itemRoutes.js";
import itemTypeRoutes from "./itemTypeRoutes.js";
import pokemonRoutes from "./pokemonRoutes.js";
import pokemonSpeciesRoutes from "./pokemonSpeciesRoutes.js";
import teamRoutes from "./teamRoutes.js";
import trainerRoutes from "./trainerRoutes.js";
import typesRoutes from "./typesRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  console.log("Hello World from routes/index.js");
  res.send("Hello World from routes/index.js");
});

// Attach routes
router.use("/boxes", boxRoutes);
router.use("/item-categories", itemCategoryRoutes);
router.use("/items", itemRoutes);
router.use("/item-types", itemTypeRoutes);
router.use("/pokemon", pokemonRoutes);
router.use("/pokemon-species", pokemonSpeciesRoutes);
router.use("/teams", teamRoutes);
router.use("/trainers", trainerRoutes);
router.use("/types", typesRoutes);

export default router;
