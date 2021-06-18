const UserCtrl = {};

const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

UserCtrl.addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });
  const emailUser = await User.findOne({ email: email });
  if (emailUser) {
    res.json({
      message: 'El usuario ya existe',
    });
  } else {
    newUser.password = await bcrypt.hash(password, 10);
    const token = jwt.sign({ _id: newUser._id }, 'secret');
    await newUser.save();
    res.json({
      message: 'Bienvenido',
      id: newUser._id,
      name: newUser.name,
      token,
    });
  }
};

UserCtrl.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.json({
      message: 'Correo y/o contraseña incorrecta',
    });
  }
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const token = jwt.sign({ _id: user._id }, 'secret');
    res.json({
      message: 'Bienvenido',
      id: user._id,
      name: user.name,
      token,
    });
  } else {
    res.json({
      message: 'Datos incorrectos',
    });
  }
};
UserCtrl.list = async (req, res) => {
  const response = await User.find({}, { contrasena: 0 });
  res.json(response);
};

module.exports = UserCtrl;
