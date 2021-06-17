const { Router } = require('express');
const router = Router();

const EmployeeCtrl = require('../controllers/employeeControllers');
const Auth = require('../utils/Auth');

router.post('/add', Auth.verifyToken, EmployeeCtrl.add);
router.get('/list', Auth.verifyToken, EmployeeCtrl.list);
router.get('/show/:id', Auth.verifyToken, EmployeeCtrl.show);
router.get('/byTheBoss/:id', Auth.verifyToken, EmployeeCtrl.showByTheBoss);
router.delete('/delete/:id', Auth.verifyToken, EmployeeCtrl.delete);
router.put('/update/:id', Auth.verifyToken, EmployeeCtrl.update);
router.get('/search/:name/:id', Auth.verifyToken, EmployeeCtrl.searchEmployee);

module.exports = router;
