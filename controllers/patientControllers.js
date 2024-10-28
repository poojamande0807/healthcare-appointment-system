const Patient = require("./../modles/patientModel");
const Appointment = require("./../modles/appointmentModel");

exports.getAllPatients = async (req, res) => {
  const { ageMin, ageMax } = req.query;
  const filters = {};

  if (ageMin && ageMax) {
    filters.age = { $gte: ageMin, $lte: ageMax };
  }

  const patients = await Patient.find(filters);
  res.json(patients);
};

exports.getPatientAppointments = async (req, res) => {
  const { id } = req.params;
  const appointments = await Appointment.find({ patientName: id }).sort({
    appointmentTime: -1,
  });
  res.json(appointments);
};
