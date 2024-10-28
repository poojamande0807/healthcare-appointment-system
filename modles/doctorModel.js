const mongoose = require("mongoose");

const doctoreSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  availability: Boolean,
});
module.exports = mongoose.model("Doctor", doctoreSchema);
