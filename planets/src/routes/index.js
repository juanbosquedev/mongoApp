const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
router.post("/", controllers.createPlanet);
router.put("/:id", controllers.updatePlanet);
router.delete("/:id", controllers.deletePlanet);
router.get("/:id", controllers.getPlanetById);
router.get("/", controllers.getPlanets);

module.exports = router;

