const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  lastname: String,
  identification: String,
  role: String,
  tcontract: String,
  boss: String,
});

module.exports = mongoose.model('employee', EmployeeSchema);
