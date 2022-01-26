const express = require('express');
const router = express.Router();
const loginController = require('../app/controller/LoginController.js');
const handleError = require('../app/controller/handleError.js');
const varLocals = require('../middleware/var.locals');

router.get('/', varLocals.login, loginController.login);
router.post('/',varLocals.login, loginController.checkLogin);
router.get('/logout',varLocals.login,loginController.logout);
router.use('*',(req,res,next) => {
    const err = new Error('The route can not found');
    err.status = 500;
    next(err);
},handleError.handleError);

module.exports = router;
