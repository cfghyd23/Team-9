const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bloodType: { type: String, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  address: { type: String, required: true },
  donationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  availability: [{ type: String }],
  healthInfo: { type: String },
  consentInfo: { type: String },
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
