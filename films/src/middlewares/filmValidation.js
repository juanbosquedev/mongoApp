const { ClientError } = require("../utils/errors/index");

module.exports = (req, res, next) => {
  const { name, title } = req.body;
  if (name||title) return next();
  else new ClientError("Error en el film", 401);
};
