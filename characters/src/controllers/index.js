const { catchedAsync} = require("../utils/index");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  getCharacterById: catchedAsync(require("./getCharactersById")),
  createCharacter: catchedAsync(require("./createCharacter")),
  deleteCharacter: catchedAsync(require("./deleteCharacter")),
  updateCharacter: catchedAsync(require("./updateCharacter"))
};
