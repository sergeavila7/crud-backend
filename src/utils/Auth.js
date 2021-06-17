const Auth = {};
const jwt = require('jsonwebtoken');
Auth.verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({
      message: 'No estas autorizado',
    });
  }
  const token = req.headers.authorization;
  if (token === 'null') {
    return res.json({ message: 'No estas autorizado' });
  }
  jwt.verify(token, 'secret', (err, result) => {
    if (err)
      return res.json({
        message: 'No estas autorizado',
      });
    next();
  });
};
module.exports = Auth;
