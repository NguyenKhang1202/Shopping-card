const express = require('express');
const router = express.Router();
const userController = require('../app/controller/UserController.js');
const varLocals = require('../middleware/var.locals');

router.get('/',varLocals.register, userController.getRegister);
router.post('/',varLocals.register, userController.storeUser);

module.exports = router;
