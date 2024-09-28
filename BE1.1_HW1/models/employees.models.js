const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  employeeName: String,
  employeePosition: String,
  idNum: Number,
  Dob: String,
  email: String,
  contactNum: Number,
  address: String,
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
