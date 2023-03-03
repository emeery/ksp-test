const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const employeeSchema = mongoose.Schema({
  picture: { type: String },
  name: { type: String, required: true },
  job: { type: String, required: true }, 
  salary: { type: Number, required: true},
  status: { type: Boolean, required: true},
  date: {type: Date, required: true}
},{ timestamps: true});

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee
