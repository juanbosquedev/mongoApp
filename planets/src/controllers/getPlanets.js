
const planets = require("../data");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
  const Planets = await planets.list();
  response(res, 200, Planets);
};


