const { Router } = require('express');
const router = Router();

const BossCtrl = require('../controllers/bossControllers');

router.post('/add', BossCtrl.addBoss);
router.post('/login', BossCtrl.login);

module.exports = router;
