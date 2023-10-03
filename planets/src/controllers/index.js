const { catchedAsync } = require("../utils/index");
module.exports = {
  getPlanets: catchedAsync(require("./getPlanets")),
  createPlanet: catchedAsync(require("./createPlanet")),
  getPlanetById: catchedAsync(require("./getPlentById")),
  updatePlanet: catchedAsync(require("./updatePlanet")),
  deletePlanet: catchedAsync(require("./deletePlanet")),
};
