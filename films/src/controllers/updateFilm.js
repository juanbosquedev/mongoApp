const Films = require("../data");
const { response } = require("../utils/index");

module.exports = async (req, res) => {

    const id= req.params.id;
    const {title}= req.body;
    const updateFilm= await Films.updateFilm(id, {title});
    response(res, 200, updateFilm);
}



