const planet = require("../data");
const { response } = require("../utils/index");
module.exports = async (req, res) => {
  //antes de ejecutarse verificar tener toda la info necesaria para evitar error hhh
  const id = req.params.id;

  const body = req.body;
  const updateCharacter = await planet.update(id,  body );
  response(res, 200, updateCharacter);
};
