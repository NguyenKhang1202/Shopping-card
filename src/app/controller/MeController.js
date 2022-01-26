const Courses = require('../model/Course.js');
const { mongoosesToObject } = require('../../util/mongoose.js');

class MeController { 
    storedCourses(req,res,next){
        res.locals.title = 'Edit course';
        res.locals.css = ['app.css','home_style.css'];
        var courseQuery = Courses.find({});
        
        
        if(res.locals._sort.sort){
            courseQuery.sort({[res.locals._sort.column] : res.locals._sort.type});
        }

        Promise.all([courseQuery,Courses.countDeleted()])
            .then(([course,countDelete]) => 
                res.render('me/stored-courses',{
                course : mongoosesToObject(course),
                countDelete,
            }))
            .catch(next);

    }

    trashCourses(req,res,next){
        res.locals.title = 'Recycle bin';
        res.locals.css = ['app.css','home_style.css'];
        Promise.all([Courses.findDeleted({}),Courses.count()])
            .then(([course,countCourse]) => {
                res.render('me/trash-courses',{
                    course : mongoosesToObject(course),
                    countCourse,
                })
            })
            .catch(next);
            
    }
}

module.exports = new MeController();
