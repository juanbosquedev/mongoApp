const { ClientError}  = require("../utils/errors");

module.exports = (req, res, next) => {
  const {  name} = req.body;


  if (  name) return next();
  else new ClientError("Error en el nombre o falta crear id", 400);
};
