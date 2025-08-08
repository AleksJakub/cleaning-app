const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  email: String,
  billingRate: Number,
  preferences: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Customer", customerSchema);
