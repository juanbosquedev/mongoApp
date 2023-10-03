
const Films = require("../data");
const { response } = require("../utils/index");

module.exports = async (req, res) => {
  const films = await Films.list();
  response(res, 200, films);
}

