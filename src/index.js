const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');
require('./database');
//settings
app.set('port', process.env.PORT || 4000);

//middlewares

//el morgan  sirve para ver las peticiones que nos hace el cliente
app.use(morgan('dev'));

//el bodyparser y express.json nos sirve para recibir y traducir lo que nos envia el frontend, ya que desde el frontend se va a mandar los datos en formato json
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());

//cors sirve para permitir las peticiones del cliente
app.use(cors({ origin: '*' }));

app.use('/user', require('./routes/userRoute'));
app.use('/employee', require('./routes/employeeRoute'));

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
