const mongoose = require('mongoose');
require('dotenv').config();

// URI = 'mongodb://localhost/crud';
URI = process.env.DB_URL;
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('Database connected', db.connection.name))
  .catch((error) => console.log(error));

module.exports = mongoose;
