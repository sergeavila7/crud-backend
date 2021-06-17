const BossCtrl = {};

const Boss = require('../models/bossModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

BossCtrl.addBoss = async (req, res) => {
  const { name, email, password } = req.body;
  const NewBoss = new Boss({
    name,
    email,
    password,
  });
  const emailBoss = await Boss.findOne({ email: email });
  if (emailBoss) {
    res.json({
      message: 'El usuario ya existe',
    });
  } else {
    NewBoss.password = await bcrypt.hash(password, 10);
    const token = jwt.sign({ _id: NewBoss._id }, 'secret');
    await NewBoss.save();
    res.json({
      message: 'Bienvenido',
      id: NewBoss._id,
      name: NewBoss.name,
      token,
    });
  }
};

BossCtrl.login = async (req, res) => {
  const { email, password } = req.body;
  const boss = await Boss.findOne({ email: email });
  if (!boss) {
    return res.json({
      message: 'Correo y/o contraseña incorrecta',
    });
  }
  const match = await bcrypt.compare(password, boss.password);
  if (match) {
    const token = jwt.sign({ _id: boss._id }, 'secret');
    res.json({
      message: 'Bienvenido',
      id: boss._id,
      name: boss.name,
      token,
    });
  } else {
    res.json({
      message: 'Datos incorrectos',
    });
  }
};

module.exports = BossCtrl;
