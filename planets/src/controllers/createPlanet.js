const planet = require("../data");
const {response} = require("../utils/index");
module.exports = async (req, res) => {
  const body = req.body
  //antes de ejecutarse verificar tener toda la info necesaria para evitar error
  const newPlanet = await planet.create(body);
  response(res, 200, newPlanet);
};
