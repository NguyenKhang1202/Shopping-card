const express  = require('express');
const router = express.Router();
const homeController = require('../app/controller/HomeController.js');
const varLocals = require('../middleware/var.locals');

router.get('/', varLocals.home, homeController.index);

module.exports = router;
