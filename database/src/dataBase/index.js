const { mongoose } = require("mongoose");
const { MONGO_URI } = require("../config/env");
const con = mongoose.createConnection("mongodb+srv://starwar:3844010Pep@cluster0.byqlo13.mongodb.net/star_wars");


module.exports={
    Character:con.model("Character", require("./schemas/characterSchema")),
    Film: con.model("Film", require("./schemas/filmSchema")),
    Planet: con.model("Planet", require("./schemas/planetSchema")),
}