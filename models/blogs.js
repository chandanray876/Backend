const mongoose = require("mongoose");
const name = "Blogs";

const schema = new mongoose.Schema({
  image: { type: String },
  date: { type: String },
  totalComments: { type: String },
  title: { type: String },
  description: { type: String },
  status: {type: Boolean},
  created_at: {type: String}
});

module.exports = mongoose.model(name, schema);
