const Planet = require("../data/");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
    const planetId = req.params.id;
    const planet= await Planet.get(planetId);
    response(res, 200, planet);
}

