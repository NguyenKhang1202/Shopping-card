const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const courseSchema = new mongoose.Schema({ 
    name : {type: 'string', required : true,},
    description : {type: 'string', required : true,},
    image : {type: 'string',},
    slug : {type : 'string', slug : 'name' , unique : true,},
    videoId : String,
})

mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all',
 });

module.exports = mongoose.model('Course', courseSchema);
