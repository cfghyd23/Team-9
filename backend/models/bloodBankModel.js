const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: Number, required: true },
  },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  storageCapacity: { type: Number },
  inventoryStatus: {
    bloodType: { type: Array, required: true },
    quantity: { type: Array, required: true },
  },
});

const BloodBank = mongoose.model("BloodBank", bloodBankSchema);

module.exports = BloodBank;
