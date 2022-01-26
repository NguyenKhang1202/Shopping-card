const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({ 
    username : {type: 'string', required : true,},
    // password : {type: 'string', required : true,},
    loginAt: { type: Date, default: Date.now},
    logoutAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Login',loginSchema); // export collection
