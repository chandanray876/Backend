const mongoose = require("mongoose");
const name = "NewsLetter";

const schema = new mongoose.Schema({
    email: { type: String },
    name: { type: String }
});

module.exports = mongoose.model(name, schema);
