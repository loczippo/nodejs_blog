const express = require('express');
const router = express.Router();

const coursesControllers = require('../app/controllers/CoursesController');
router.post('/store', coursesControllers.store);
router.get('/create', coursesControllers.create);
router.get('/:id/edit', coursesControllers.edit);
router.put('/:id', coursesControllers.update);
router.delete('/:id', coursesControllers.delete);
router.get('/:slug', coursesControllers.show);

module.exports = router;
