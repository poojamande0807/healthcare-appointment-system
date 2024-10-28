const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  appointmentTime: Date,
  reason: String,
});
module.exports = mongoose.model("Appointment", appointmentSchema);
