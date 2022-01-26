
class VarLocals {
    login(req, res, next) {
        res.locals.title = 'Login',
        res.locals.layout = 'login',
        next();

    }

    register(req, res, next){
        res.locals.title = 'Register',
        res.locals.layout = 'login',
        next();
    }

    home(req, res, next) {
        res.locals.layout = 'main',
        res.locals.title = 'Home',
        res.locals.css = ['app.css','home_style.css'],
        next();
    }

    


}

module.exports = new VarLocals;
