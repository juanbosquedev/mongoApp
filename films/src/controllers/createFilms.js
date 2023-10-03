const films = require("../data");
const {response} = require("../utils/index");
module.exports = async (req, res) => {
  //antes de ejecutarse verificar tener toda la info necesaria para evitar error
  const film = req.body;
 
  const newFilm = await films.createFilm(film);

  response(res, 200, newFilm);
};
