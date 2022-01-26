const  express = require('express');
const router = express.Router();
const coursesController = require('../app/controller/CoursesController.js');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.post('/handle-delete-course',coursesController.handleDeleteCourse)
router.patch('/:id/restored', coursesController.restore);
router.use('/:id/edit',coursesController.edit);
router.put('/:id',coursesController.update);
router.delete('/:id',coursesController.delete);
router.delete('/:id/delete-force',coursesController.deleteForce);
router.use('/:slug', coursesController.show);
router.use('/', coursesController.index);

module.exports = router;
