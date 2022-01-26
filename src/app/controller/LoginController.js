const { mongooseToObject, mongoosesToObject} = require('../../util/mongoose.js');
const md5 = require('md5');
const Users = require('../model/User.js');
var jwt = require('jsonwebtoken');


class LoginController {
    login(req,res) {
        res.render('user/login');
    }

    async checkLogin(req,res,next){  
        let userForm = JSON.parse(JSON.stringify(req.body));
        userForm.password = md5(userForm.password);
        console.log(req.body);
        await Users.findOne({"username":`${userForm.username}`, "password":`${userForm.password}`})
        .then(data => {
            if(data) {
                //console.log(userForm.isRemember);
                if(userForm.isRemember == 'true'){
                    let secret_key = process.env.TOKEN_SECRET;
                    var token = jwt.sign({  
                        _id : data._id,
                    }, secret_key, {
                        expiresIn : 6000,
                    });
    
                    res.cookie('token', token,{
                        signed : true,
                    });
                    console.log('token : ' + token);
                }
                return res.redirect('/home');
            }else {
                return res.render('user/login', { 
                    values : req.body,
                    message : 'Tên đăng nhập hoặc mật khẩu không đúng',
                })
            }
        })
        .catch(err => {
            console.log('Xảy ra lỗi khi đăng nhập');
            next(err);
        })
    }

    logout(req,res,next){
        res.clearCookie('token');
        return res.render('user/login', {
            message_logout : 'Đăng xuất thành công!',
        });
    }
}

module.exports = new LoginController;
