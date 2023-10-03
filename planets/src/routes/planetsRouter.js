
const Planets = require("../data/");
const { response } = require("../utils/index");


module.exports = async (req, res) => {
  const characters = await Planets.list();
  response(res, 200, characters);
}




