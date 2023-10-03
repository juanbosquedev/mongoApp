const { catchedAsync } = require("../utils/index");
module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  createFilms: catchedAsync(require("./createFilms")),
  getFilmById: catchedAsync(require("./getFilmById")),
  deleteFilm: catchedAsync(require("./deleteFilm")),
  updateFilm: catchedAsync(require("./updateFilm")),
};
