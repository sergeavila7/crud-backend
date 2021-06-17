const EmployeeCtrl = {};

const Employee = require('../models/EmployeeModel');

EmployeeCtrl.add = async (req, res) => {
  const { name, lastname, identification, role, tcontract, boss } = req.body;
  const NewEmployee = new Employee({
    name,
    lastname,
    identification,
    role,
    tcontract,
    boss,
  });
  const response = await NewEmployee.save();
  res.json({
    message: 'Empleado creado',
    response,
  });
};
EmployeeCtrl.list = async (req, res) => {
  const response = await Employee.find();
  res.json(response);
};

EmployeeCtrl.show = async (req, res) => {
  const id = req.params.id;
  const response = await Employee.findById({ _id: id });
  res.json(response);
};

EmployeeCtrl.showByTheBoss = async (req, res) => {
  const id = req.params.id;
  const response = await Employee.find({ boss: id });
  res.json(response);
};

EmployeeCtrl.delete = async (req, res) => {
  const id = req.params.id;
  await Employee.findByIdAndDelete({ _id: id });
  res.json({
    message: 'Empleado eliminado',
  });
};

EmployeeCtrl.update = async (req, res) => {
  const id = req.params.id;
  await Employee.findByIdAndUpdate({ _id: id }, req.body);
  res.json({
    message: 'Empleado actualizado',
  });
};

EmployeeCtrl.searchEmployee = async (req, res) => {
  const {name,id} = req.params;
  const response = await Employee.find({
    name: { $regex: '.*' + name + '.*' }, boss:id,
  });
  res.json(response);
};
module.exports = EmployeeCtrl;
