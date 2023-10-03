const Characters = require("../data/");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
    const characterId = req.params.id;
    const character = await Characters.delete(characterId);
    response(res, 200, character);
}

