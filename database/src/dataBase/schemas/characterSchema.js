const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" }, //referencia al planeta del que viene
  films: [{ type: String, ref: "Film" }], //array de id de peliculas
});
// methodos para obtener datos//////
characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (_id) {
  return await this.findOne({ _id })
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.getId = async function (_id) {
  return await this.findById(_id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};
//methodos para crear datos
characterSchema.statics.creater = async function (character) {
  return await this.create(character);
};
//methodos para eliminar datos

characterSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
//methodos para actualizar datos

characterSchema.statics.updater = async function (_id, newData) {
  return await this.findByIdAndUpdate(_id, newData, { new: true });
};

module.exports = characterSchema;
