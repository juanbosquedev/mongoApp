const Characters = require("../data/");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
    const characterId = req.params.id;
    const character = await Characters.get(characterId);
    response(res, 200, character);
}

