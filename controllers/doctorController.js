const Doctor = require("../modles/doctorModel");

exports.getAllDoctors = async (req, res) => {
  const { specialization, availability } = req.query;
  const filters = {};

  if (specialization) filters.specialization = specialization;
  if (availability) filters.availability = availability === "true";

  const doctors = await Doctor.find(filters);
  res.json(doctors);
};
