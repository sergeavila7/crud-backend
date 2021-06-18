const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database');
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());

app.use(cors({ origen: '*' }));
app.use('/user', require('./routes/userRoute'));
app.use('/employee', require('./routes/employeeRoute'));

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
