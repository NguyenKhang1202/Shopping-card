var jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.signedCookies.token;
    let secret_key = process.env.TOKEN_SECRET;
    if(token != null) {
        try{
            const result = jwt.verify(token, secret_key);
            if(result != null) {
                // console.log(result);
                next();
            }
        } catch(err){
            console.log('Token không hợp lệ');
            res.render('user/login', {
                 layout:'login',
                 css:['app.css'],
                 title:'Login',
                });
        }
        
    } else {
        console.log('Không tồn tại token');
        res.render('user/login', { layout:'login'});
    }
}

module.exports = authenticate;
