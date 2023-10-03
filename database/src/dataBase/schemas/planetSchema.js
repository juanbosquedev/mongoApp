const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  res_idents: [{ type: String }],
  films: [{ type: String, ref: "Film" }],
});
planetSchema.statics.list = async function () {
  return await this.find()
  .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (_id) {
  return await this.findOne({ _id }).populate("films", ["_id", "title"]);
};

planetSchema.statics.getId = async function (_id) {
  return await this.findById(_id).populate("films", ["_id", "title"]);
};
//methodos para crear datos
planetSchema.statics.creater = async function (planet) {
  return await this.create(planet);
};
//methodos para eliminar datos

planetSchema.statics.delete = async function (_id) {
  return await this.findByIdAndDelete(_id);
};
//methodos para actualizar datos

planetSchema.statics.updater = async function (_id, newData) {
  return await this.findByIdAndUpdate(_id, newData, { new: true });
};
module.exports = planetSchema;
