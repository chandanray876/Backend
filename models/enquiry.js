const mongoose = require("mongoose");
const name = "Enquiry";

const schema = new mongoose.Schema({
    email: { type: String },
    name: { type: String },
    subject: { type: String },
    phone: { type: String },
    enquiry: { type: String },
});

module.exports = mongoose.model(name, schema);
