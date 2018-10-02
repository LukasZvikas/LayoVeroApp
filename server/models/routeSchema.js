const mongoose = require("mongoose");
const { Schema } = mongoose;

const routeSchema = new Schema({
  city: String,
  name: String,
  hours: Number,
  stars: Number,
  path: String
});

const routes = mongoose.model("routes", routeSchema);

module.exports = routes;
