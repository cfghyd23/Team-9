const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor', required: true },
  bloodBank: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank', required: true },
  donationDate: { type: Date, default: Date.now },
  quantity: { type: Number },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'utilized'] },
  notes: { type: String },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
