const mongoose = require("mongoose");
const name = "Testimonials";

const schema = new mongoose.Schema({
  name: { type: String },
  title: { type: String },
  description: { type: String },
  image: { type: String },
});

module.exports = mongoose.model(name, schema);
