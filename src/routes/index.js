const homeRouter = require('./home.js');
const courseRouter = require('./course.js');
const meRouter = require('./me.js');
const loginRouter = require('./login.js');
const registerRouter = require('./register.js');
const authenticate = require('../middleware/authenticate.js');

function route(app) { 
    app.use('/me',authenticate,meRouter);
    app.use('/courses',authenticate,courseRouter);
    app.use('/home',authenticate,homeRouter);
    app.use('/login',loginRouter);
    app.use('/register', registerRouter);
    app.use('/',loginRouter);
}

module.exports = route;
