const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true },
  bloodType: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true },

  donationHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  ],
  availability: { type: Boolean },
  healthInfo: { type: String },
  consentInfo: { type: String },
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
