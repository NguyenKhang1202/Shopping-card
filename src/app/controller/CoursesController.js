const Courses = require('../model/Course.js');
const { mongooseToObject } = require('../../util/mongoose.js');


class CourseController { 
    index(req,res){ 
        res.render('home',{title:'List Course', css : ['app.css','home.css'],});
    }

    create(req,res,next){ 
        res.render('courses/create',
            {title:'Create Course', css : ['app.css','course_style.css'],});
    }

    store(req,res,next){ 
        const formData = req.body;
        console.log(formData);  
        const course = new Courses(formData);
        course.save()
            .then(() => res.redirect('/home'))
            .catch((err) => {
                next(err);
            });
    }

    restore(req,res,next){ 
        console.log('Id restore : ' + req.params.id);
        Courses.restore({_id : req.params.id})
            .then(() => res.redirect('back')) 
            .catch(err => next(err));
    }

    edit(req,res,next){   
        Courses.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course : mongooseToObject(course),
                title : 'Edit Course',
                css : ['app.css','course_style.css'],
            }))
            .catch(next);
    }

    show(req,res,next){
        Courses.findOne({slug : req.params.slug})
        .then(course =>{

            res.render('courses/show', {
                course : mongooseToObject(course),
                title: 'List Course',
                css :['app.css'],
            })})
            
        .catch(err => next(err)); 
    }

    update(req,res,next){ 
        Courses.updateOne({_id : req.params.id,}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => next(err));
    }

    delete(req,res,next){ 
        console.log('id delete : ' + req.params.id);
        Courses.delete({_id : req.params.id,})
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => next(err));
    }

    deleteForce(req,res,next){ 
        console.log('id delete : ' + req.params.id);
        Courses.deleteOne({_id : req.params.id,})
            .then(() => res.redirect('back'))
            .catch(err => next(err));
    }

    handleDeleteCourse(req, res, next){
        let coursesID = req.body.course;
        Courses.delete({_id : {$in: coursesID}})
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => next(err));
    }

}

module.exports = new CourseController;
