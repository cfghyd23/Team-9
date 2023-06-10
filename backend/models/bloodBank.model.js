const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  bloodTypes: [{ type: String, required: true }],
  storageCapacity: { type: Number },
  servicesOffered: [{ type: String }],
  inventoryStatus: {
    bloodType: { type: String, required: true },
    quantity: { type: Number },
  },
});

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

module.exports = BloodBank;
