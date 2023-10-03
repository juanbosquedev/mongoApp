
const films = require("../data");
const {response} = require("../utils/index");
module.exports = async (req, res) => {
  //antes de ejecutarse verificar tener toda la info necesaria para evitar error
  const FilmId = req.params.id;
  const film = await films.get(FilmId);
  response(res, 200, film);
};




