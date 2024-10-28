to run follow the steps:

1. npm i
2. node server.js
   test apis

MONGODB_URI: "mongodb://127.0.0.1:27017/heathcare-system",

get Dcotors ==> GET METHOD==> http://localhost:5000/api/doctors
get Patients ==> GET METHOD==> http://localhost:5000/api/patients

get Appointments ==> GET METHOD ==> http://localhost:5000/api/appointments

TO Book Appointments ==> POST METHOD ==> http://localhost:5000/api/appointments
payload ==>
{
"patientName": "John Doe",
"doctorName": "Dr. Smith",
"appointmentTime": "2024-10-12 10:00",
"reason": "Routine Checkup"
}
