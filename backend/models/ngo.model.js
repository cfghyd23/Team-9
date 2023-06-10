const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mission: { type: String },
  contactInfo: {
    phone: { type: String },
    email: { type: String },
  },
  location: {
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: Number },
  },
  website: { type: String },
});

const NGO = mongoose.model("NGO", ngoSchema);

module.exports = NGO;
