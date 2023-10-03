const planet = require("../data/");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
    const planetId = req.params.id;
    const Planet = await planet.delete(planetId);
    response(res, 200, Planet);
}

