const characters = require("../data");
const { response } = require("../utils/index");
module.exports = async (req, res) => {
  //antes de ejecutarse verificar tener toda la info necesaria para evitar error
  const body = req.body;
  const newCharacter = await characters.createCharacter(body);
  response(res, 200, newCharacter);
};
