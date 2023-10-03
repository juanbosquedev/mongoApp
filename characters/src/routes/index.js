const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();
router.delete("/:id", controllers.deleteCharacter)
router.post("/", controllers.createCharacter);
router.put("/:id", middlewares.characterValidation, controllers.updateCharacter)
router.get("/:id", controllers.getCharacterById); 
router.get("/", controllers.getCharacters);


module.exports = router;
