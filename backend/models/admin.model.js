const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  contactInfo: {
    phone: { type: String },
    email: { type: String },
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
