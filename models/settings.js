const mongoose = require("mongoose");
const name = "Settings";

const schema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String },
  config_value: { type: String }
});

module.exports = mongoose.model(name, schema);