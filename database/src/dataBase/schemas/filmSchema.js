const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Character" }], //referencia al planeta del que viene
  planets: [{ type: String, ref: "Planet" }], //array de id de planetas
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (_id) {
  return await this.findOne({ _id })
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.getId = async function (_id) {
  return await this.findById(_id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};
//methodos para crear datos
filmSchema.statics.creater = async function (film) {
  return await this.create(film);
};
//methodos para eliminar datos

filmSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
//methodos para actualizar datos

filmSchema.statics.updater = async function (_id, newData) {
  return await this.findByIdAndUpdate(_id, newData, { new: true });
};

module.exports = filmSchema;
