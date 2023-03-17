const mongoose = require('mongoose');

// URI = 'mongodb://localhost/crud';
URI = proccess.env.DB_URL;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log('Database connected', db.connection.name))
  .catch((error) => console.log(error));

module.exports = mongoose;
