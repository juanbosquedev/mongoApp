const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
router.post("/", controllers.createFilms);
router.put("/:id", middlewares.filmValidation, controllers.updateFilm)
router.delete("/:id", controllers.deleteFilm)
router.get("/:id", controllers.getFilmById); 
router.get("/", controllers.getFilms);

module.exports = router;




