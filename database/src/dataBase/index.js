const { mongoose } = require("mongoose");
const { MONGO_URI } = require("../config/env");
const con = mongoose.createConnection(MONGO_URI);


module.exports={
    Character:con.model("Character", require("./schemas/characterSchema")),
    Film: con.model("Film", require("./schemas/filmSchema")),
    Planet: con.model("Planet", require("./schemas/planetSchema")),
}