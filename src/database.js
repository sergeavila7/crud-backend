const mongoose = require('mongoose');

URI = 'mongodb://localhost/crud';
URI =
  // 'mongodb+srv://serge_avila7:Zerokoficd95@cluster0.ilqyp.mongodb.net/crud?retryWrites=true&w=majority';
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
