const User = require('../model/User.js');
const md5 = require('md5');
const {mongooseToObject} = require('../../util/mongoose.js');

class UserController {
    getRegister(req, res, next) {
        res.render('user/register');
    }
    storeUser(req, res, next) {
        res.locals.message_register = 'Username is existed!';
        let userForm = JSON.parse(JSON.stringify(req.body));
        User.findOne({username : userForm.username})
        .then(data => {
            if(data != null) {
                res.render('user/register');
            }
            else {
                res.locals.message_register = 'Register successful!';
                const user = new User(userForm);
                user.save(err => {
                if (err) {
                    res.send(err);
                } else res.render('user/register');
                });
            } 
        })
        .catch(err => {
            res.send(err);
        })
    }

}

module.exports = new UserController;