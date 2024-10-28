const express = require("express");

const doctorsRoute = require("./routes/doctorRoutes");
const patientsRoute = require("./routes/patientRoutes");
const appointmentsRoute = require("./routes/appoitmentRoutes");
const app = express();
app.use(express.json());

// app.use(logger);
app.use("/api/doctors", doctorsRoute);
app.use("/api/patients", patientsRoute);
app.use("/api/appointments", appointmentsRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
