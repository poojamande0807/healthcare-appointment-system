const express = require("express");

const router = express.Router();
const {
  getPatientAppointments,
  getAllPatients,
} = require("./../controllers/patientControllers");

router.get("/", getAllPatients);
router.get("/:id/appointments", getPatientAppointments);
module.exports = router;
