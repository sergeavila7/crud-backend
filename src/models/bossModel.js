const mongoose = require('mongoose');
const { Schema } = mongoose;

const BossSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('boss', BossSchema);
