const { ClientError } = require("../utils/errors/index");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  else new ClientError("Error en el nombre", 401);
};
