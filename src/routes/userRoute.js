const { Router } = require('express');
const router = Router();

const UserCtrl = require('../controllers/userControllers');

router.post('/add', UserCtrl.addUser);
router.post('/login', UserCtrl.login);
router.get('/list', UserCtrl.list);

module.exports = router;
