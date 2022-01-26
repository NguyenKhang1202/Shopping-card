const Course = require('../model/Course.js');
const {
    mongoosesToObject
} = require('../../util/mongoose.js');
const jwt = require('jsonwebtoken');

class HomeController {
    index(req, res, next) {
        Course.find({})
            .then(courses =>
                res.render('home', {
                    courses: mongoosesToObject(courses),
                }))
            .catch(err => next(err));
    }
}

module.exports = new HomeController;
