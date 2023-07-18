const mongoose = require("mongoose");
const name = "CmsPages";

const schema = new mongoose.Schema({
  name: { type: String },
  slug: { type: String },
  description: { type: String }
});

module.exports = mongoose.model(name, schema);