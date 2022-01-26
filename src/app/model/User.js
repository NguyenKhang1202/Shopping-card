const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    username : {type: 'string', required : true,},
    password : {type: 'string', required : true,},
    phone: { type: String, required : true,},
    email : { type: String, required : true,},
    roles: {type: String, default: 'customer'},
    status: { type: String, default: 'No Active'},
});


module.exports = mongoose.model('User', userSchema);
