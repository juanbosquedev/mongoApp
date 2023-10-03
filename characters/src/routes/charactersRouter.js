const { Router } = require("express");
const Character = require("../data/");
const { response } = require("../utils/index");

const characterRouter = Router();

characterRouter.get("/", (req, res) => {
  const characters = Character.list();
  response(res, 200, characters);
});


module.exports = characterRouter;

